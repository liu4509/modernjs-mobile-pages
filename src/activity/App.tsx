import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import { Helmet } from '@modern-js/runtime/head';
import './App.css';

const App = () => (
  <div>
    <Helmet>
      <title>Activity</title>
    </Helmet>
    {/* Utility Class */}
    <div className="text-center">Hollo,Activity</div>
  </div>
);

export default App;
