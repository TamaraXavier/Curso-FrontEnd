import { useEffect, useState } from 'react';
import axios from 'axios'
import Comment2 from '../components/Comment2';
import styles from '../styles/Comments.module.css'

const Comments = () =>{
    const [comments, setComments] = useState([])

    useEffect(() =>{
        const getComments = async () => {
            const { data: comments } = await axios.get('https://jsonplaceholder.typicode.com/comments')
            console.log('comments list: ', comments)
            setComments(comments)
        }
        getComments();
    }, [])

    if(comments.length === 0){
        return <h1>Comentários</h1>
    }

    return(
        <div className = {styles.container}>
        <h1>Comentários</h1>
        {comments.map((comment2) => {
            return <Comment2 key={comment2.id} email = {comment2.email} name = {comment2.name} body = {comment2.body} />
        })}
        </div>
    )
}

export default Comments;