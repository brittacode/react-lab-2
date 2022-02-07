import {useState} from "react"
import { Post } from "./Post"
import { PostInList } from "./PostInList"
import { SocialPosts } from "./SocialPosts"

export function PostForm(props: {onSubmit: (post: Post) => void, onClose: () => void}){

const [title,setTitle] = useState('')
const [thought, setThought] = useState('')


    return(

           <div>
                <div className="socialPosts">
                        <label htmlFor="title">Title</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)}type="test" name="title"></input>

                        <label htmlFor="thought">Thought</label>
                        <textarea value={thought} onChange={(e) => setThought(e.target.value)}name="thought"></textarea>

                </div>     

                
                <button onClick={() => props.onSubmit({title, thought})}>Post</button>

                                      
                    
                      
                        


           </div> 


    )
}