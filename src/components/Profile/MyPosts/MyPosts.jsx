import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';





const MyPosts = (props) => {

    let postsElement = props.posts.map((p) => {
        return <Post key={p.id} id={p.id} message={p.message} like={p.like} />
    })

    let onAddPost = () => {
        props.addPost();
    }

    let onUpdatePost = (e) => {
        let post = e.target.value
        props.updatePost(post);
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onUpdatePost} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>

            </div>
            {postsElement}
        </div>
    )
}

export default MyPosts;