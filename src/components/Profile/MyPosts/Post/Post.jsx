import s from './Post.module.css';

const Post = (props) => {
   
    return (
        <div className={s.item}>
            <img src="https://a3.animevost.org/uploads/fotos/foto_400157.jpg" />
            {props.message}
            <div>
                <span><b>like</b> {props.like}</span>
            </div>
        </div>
    )
}

export default Post;