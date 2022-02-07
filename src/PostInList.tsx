import { Post } from './Post';






export function PostInList(props: { post: Post, onDelete: () => void}){


    return(

        <div className ="post">  
        <h1>{props.post.title}</h1>
        <h2>{props.post.thought}</h2>
        <button onClick={props.onDelete}>Delete</button>

        </div>
    )
}