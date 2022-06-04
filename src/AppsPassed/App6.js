/********
 *****1.20.00------1.42.00********
➝ useMemo. Мемоизация. Кеширование
➝ Модальное окно. Переиспользуемый UI компонент
➝ Анимации. React transition group
➝ Декомпозиция. Кастомные хуки
➝ Работа с сервером. Axios
➝ Жизненный цикл компонента. useEffect
 *********/

import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">

      <button onClick={fetchPosts}>GET POSTS</button>

      <MyButton style={{marginTop:'15px'}} onClick={() => setModal(true)}  >Create POST</MyButton>

      <MyModal
        modal={modal}
        setModal={setModal}
      >
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />

      <PostFilter filter={filter} setFilter={setFilter}/>

      <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Список постов JS'} />

    </div>
  );
}

export default App;
