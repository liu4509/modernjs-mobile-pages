import { useEffect, useState } from 'react';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import { Helmet } from '@modern-js/runtime/head';
import './App.css';
import products from '@api/products';
import styled from '@modern-js/runtime/styled';

const ItemWrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin: 0.5rem 0;
  color: green;
`;
// 不确定有没有的值可以 通过 id?: 类型 的方式来规避
interface ItemType {
  id?: number;
  name?: string;
  price?: number;
}
const App = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    const load = async () => {
      const _data = await products();
      setData(_data);
    };
    load();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Activity</title>
      </Helmet>
      {/* Utility Class */}
      <div className="text-center">Hollo,Activity</div>
      <div>
        {data.map((item: ItemType) => {
          const { id = 0, name, price } = item;
          return (
            <ItemWrapper key={id}>
              <span>{name} </span>
              <span>${price}</span>
            </ItemWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default App;
