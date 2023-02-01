import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import styled from '@modern-js/runtime/styled';
import { Helmet } from '@modern-js/runtime/head';

import './App.css';
// css in Js
const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 0.5rem 0;
  color: goldenrod;
`;
const App = () => (
  <div>
    <Helmet>
      <title>Mobile-pages</title>
    </Helmet>
    {/* css in Js 通过标签名 */}
    <Title>Hello,Mobile-pages</Title>
  </div>
);

export default App;
