/********
 *****31.30----41.50********
➝ Стили. CSS. Классы
➝ Props. Аргументы компонента. 
➝ Работы со списками. Преобразование массива объектов в массив React элементов
 *********/


import React, { useState } from 'react';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css';
// import { useState } from 'react';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description 1'},
    {id: 2, title: 'Javascript 1', body: 'Description 2'},
    {id: 3, title: 'Javascript 2', body: 'Description 3'},
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python', body: 'Description 1'},
    {id: 2, title: 'Python 1', body: 'Description 2'},
    {id: 3, title: 'Python 2', body: 'Description 3'},
  ])

  
  return (
    <div className="App">
      <PostList posts={posts} title={'Список постов JS'}/>
      <PostList posts={posts2} title={'Список постов Python'}/>
    </div>
  );
}

export default App;
