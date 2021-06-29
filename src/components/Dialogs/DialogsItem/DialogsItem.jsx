import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogsItem = (props) => {

    return (
        <div className={s.item}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;