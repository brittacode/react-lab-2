import { useState } from "react"
import {Post} from './Post'
import { PostInList } from "./PostInList";
import { PostForm } from "./PostForm";
import Modal from 'react-modal';
import { transform } from "typescript";


export function SocialPosts(){

    const [modalIsOpen, setIsOpen] = useState(false);

    const [posts, setPosts]= useState<Post[]>([
        {

            title: 'Welcome',
            thought: 'Welcome to Joselines Cabaret'
    },
    {
        title:'Hello',
        thought:'Good Evening'
    

    }]);

    const customStyles = {
        content: {
            top:'50%',
            left:'50%',
            right:'auto',
            bottom:'-50%',
            transform:'translate(-50%, -5-%)'
        }

    }

        function onDelete(index: number){
            const newList = posts.slice(0);

            newList.splice(index,1);
            setPosts(newList);

        }

        function openModal() {
            setIsOpen(true);
          }

          function afterOpenModal() {
            // references are now sync'd and can be accessed.
            //subtitle.style.color = '#f00';
          }
        
          function closeModal() {
            setIsOpen(false);
          }

    return(
        <div>
           <button onClick={openModal}>New Thought</button>
            
        <div>

            {posts.map((post,i) => <PostInList key={i} post={post} onDelete={() => onDelete(i)}></PostInList>)}

        </div>

        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
            <PostForm onSubmit={(post) => setPosts([...posts,post])} onClose={() => console.log('close')}></PostForm>
       
       </Modal>

       
        </div>

)

}



















