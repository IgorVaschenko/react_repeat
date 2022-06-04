import React, { useMemo, useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: '33Description 33'},
    {id: 2, title: 'EcmaScript', body: '11Description 11'},
    {id: 3, title: 'Typescript', body: '22Description 22'},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => { 
    if(filter.sort) {
      return [...posts].sort( (a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [posts, filter.sort])

  const sortedAndSearchPosts = useMemo(() =>{
    return sortedPosts.filter( post => post.title.toLowerCase().includes(filter.query))
  },[filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">

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