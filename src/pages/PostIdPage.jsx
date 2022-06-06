import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIDPage = () => {

    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchById, isLoading, isError] = useFetching(async (id) => {
        const response = await PostService.getPostByID(id)
        setPost(response.data)
    })

    const [fetchCom, isComLoading, isComError] = useFetching(async id => {
        const response = await PostService.getComments(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchById(params.id)
        fetchCom(params.id)
    }, [])

    return (
        <div>
            {isLoading
                ? <Loader />
                : <div>
                    <h1>Переход на пост с ID = {post.id}</h1>
                    <h3>{post.id}. {post.title}</h3>
                    <p>{post.title}</p>
                </div>
            }
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(com =>
                        <div key={com.id} style={{marginTop: 25}}>
                            <h5>{com.email}</h5>
                            <span>{com.body}</span>
                        </div>
                    )}
                </div>
            }

        </div>

    )
}

export default PostIDPage;