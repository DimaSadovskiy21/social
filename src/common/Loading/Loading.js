import loading from '../../assets/images/loading.svg';
import s from './Loading.module.css';

let Loading = (props) => {
    return <img className={s.loading} src={loading}/>
}

export default Loading;