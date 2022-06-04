/********
 *****1.12.00 ----1.20.00********
➝ Поиск. Фильтрация.
➝ useMemo. Мемоизация. Кеширование
 *********/

// BEFORE DECOMPOSITION

import React, { useMemo, useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: '33Description 33'},
    {id: 2, title: 'EcmaScript', body: '11Description 11'},
    {id: 3, title: 'Typescript', body: '22Description 22'},
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => { 
    console.log(1)
    if(selectedSort) {
      return [...posts].sort( (a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [posts, selectedSort])

  const sortedAndSearchPosts = useMemo(() =>{
    return sortedPosts.filter( post => post.title.toLowerCase().includes(searchQuery))
  },[searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">

      <PostForm create={createPost} />

      <hr style={{ margin: '15px 0' }} />

      <div>
        <MyInput
          placeholder='Serach...'
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
        />

        <MySelect
          defaultValue={'Сортировка по'}
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' }
          ]}
          value={selectedSort}
          onChange={sortPosts}
        />
      </div>

      {sortedAndSearchPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Список постов JS'} />
        : <h1 style={{ textAlign: 'center' }}>Posts not finded</h1>
      }


    </div>
  );
}

export default App;
