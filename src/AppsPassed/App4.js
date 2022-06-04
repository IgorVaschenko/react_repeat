/********
 *****53.35-----1.12.00********
➝ хук useRef. Доступ к DOM элементу. Неуправляемый компонент
➝ React Devtools. Инструменты разработчика React
➝ Обмен данными между компонентами. От родителя к ребенку. От ребенка к родителю.
➝ Отрисовка по условию
➝ Сортировка. Выпадающий список
 *********/


import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect0';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description 33'},
    {id: 2, title: 'Javascript 1', body: 'Description 11'},
    {id: 3, title: 'Javascript 2', body: 'Description 22'},
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    console.log(sort)

    setPosts([...posts].sort( (a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      
      <PostForm create={createPost}/>

      <hr style={{margin: '15px 0'}}/>

      <MySelect
        defaultValue={'Сортировка по'}
        options={[
          { value: 'title', name: 'По названию'},
          { value: 'body', name: 'По описанию'}
        ]}
        value={selectedSort}
        onChange={sortPosts}
      />

      {posts.length !== 0
      ? <PostList remove={removePost} posts={posts} title={'Список постов JS'} />
      : <h1 style={{textAlign: 'center'}}>Posts not finded</h1>
      }


    </div>
  );
}

export default App;
