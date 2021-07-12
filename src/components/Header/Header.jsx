import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header>
            <img src="https://w7.pngwing.com/pngs/720/947/png-transparent-logo-dvd-region-code-encapsulated-postscript-world-wide-web-blue-cdr-text.png" />
            <div className={s.loginBlock}>
            { props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
                : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;