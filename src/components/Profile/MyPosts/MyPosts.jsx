import React from 'react';
import './MyPosts.css';
import Post from './Post/Post.jsx';




const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    return (

        <div className="postsBlock">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ onAddPost}>Add post</button>
                </div>
            </div>
            <div className="posts">
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;
