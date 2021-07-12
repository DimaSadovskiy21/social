import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormControls/FormControls';
import { maxLengthCreator, required } from '../../../helpers/validate/validate';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElement = props.posts.map((p) => {
        return <Post key={p.id} id={p.id} message={p.message} like={p.like} />
    })


    let onAddPost = (values) => {
        props.addPost(values.addPostText)
    }

    return (
        <div>
            <h3>My Posts</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            {postsElement}
        </div>
    )
}

let maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"addPostText"} placeholder={"add post"} component={Textarea} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: 'post'
  })(AddPostForm)
  

export default MyPosts;