import React from 'react';

interface IProps {
  name: string;
  age: number;
}

function App(props: IProps) {
  const { name, age } = props;
  return <div>{`姓名: ${name}，年龄：${age}`}</div>;
}

export default App;
