/********
 *****41.50-----53.35********
➝ Форма создания поста. Управляемые и неуправляемые компоненты
➝ Создание UI библиотеки. Первые компоненты. CSS модули. Пропс children
➝ Предотвращаем обновление страницы при submit формы
➝ хук useRef. Доступ к DOM элементу. Неуправляемый компонент
 *********/



import React, { useRef, useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MyInputRef from './components/UI/input/MyInputRef';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description 1'},
    {id: 2, title: 'Javascript 1', body: 'Description 2'},
    {id: 3, title: 'Javascript 2', body: 'Description 3'},
  ])

  const [title, setTitle] = useState('')
  const bodyInputRef = useRef()

  const addNewPost = (event) => {
    event.preventDefault()
    console.log(title)
    console.log(bodyInputRef.current.value)
  }
  
  return (
    <div className="App">

      <MyInput
        value={title}
        onChange={event => setTitle(event.target.value)}
        type='text'
        placeholder='POST NAME'
      />
      <MyInputRef
        ref={bodyInputRef}
        type='text'
        placeholder='POST DESCRIPTION'
      />
      <MyButton onClick={addNewPost}>
        Create post
      </MyButton>

      <PostList posts={posts} title={'Список постов JS'} />
    </div>
  );
}

export default App;
