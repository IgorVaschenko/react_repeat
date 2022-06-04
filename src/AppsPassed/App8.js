/********
 *****1.50.00----1.54.00********
➝ Кастомный хук useFetching(). Обработка ошибок
 *********/


import React, { useEffect, useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';

function App() {

  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching ( async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  useEffect( () => {
    fetchPosts()
  },[])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">

      <MyButton style={{marginTop:'15px'}} onClick={() => setModal(true)}>Create POST</MyButton>

      <MyModal
        modal={modal}
        setModal={setModal}
      >
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />

      <PostFilter filter={filter} setFilter={setFilter}/>

      {postError &&
      <h1 style={{textAlign: 'center'}}>Произошла ошибка: "{postError}"</h1>}

      {isPostsLoading 
      ? <div style={{display: 'flex', justifyContent: 'center', margiTop: 50}}><Loader /></div>
      : <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Список постов JS'} />
      }

    </div>
  );
}

export default App;
