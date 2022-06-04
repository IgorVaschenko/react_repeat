import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {

    const [post, setPost] = useState({ title: '', body: '', })

    const addNewPost = (event) => {
        event.preventDefault()//cancel submit on server

        const newPost = {
            ...post,
            id: Date.now(),
        }

        create(newPost)

        setPost({
            title: '',
            body: '',
        })
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={event => setPost({ ...post, title: event.target.value })}
                type='text'
                placeholder='POST NAME'
            />
            <MyInput
                value={post.body}
                onChange={event => setPost({ ...post, body: event.target.value })}
                type='text'
                placeholder='POST DESCRIPTION'
            />
            <MyButton onClick={addNewPost}>
                Create post
            </MyButton>
        </form>
    );
}

export default PostForm;