/********
 *****0.00 --- 31.30********
➝ Введение
➝ Теория
➝ Начало разработки. Создание проекта
➝ Что такое JSX?
➝ Компонент App. Работа с состоянием. UseState
➝ Управляемый инпут
➝ Первый функциональный компонент
➝ Первый классовый компонент
➝ Что такое хуки? useState, useEffect 
 *********/


import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';

function App() {

  const [value, setValue] = useState('Text in input')
 
  return (
    <div className="App">
      <Counter/>
      <hr/>
      <ClassCounter />
      <hr/>
      <h1>{value}</h1>
      <input type='text' value={value} onChange={(event => setValue(event.target.value))}/>
    </div>
  );
}

export default App;
