import { connect } from 'react-redux';
import { addPost, updatePost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}


let MyPostsContainer = connect(mapStateToProps, { addPost, updatePost})(MyPosts)

export default MyPostsContainer;