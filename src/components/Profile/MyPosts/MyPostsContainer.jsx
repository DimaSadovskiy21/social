import { connect } from 'react-redux';
import { addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}


let MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts)

export default MyPostsContainer;