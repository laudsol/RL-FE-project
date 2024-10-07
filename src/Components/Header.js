import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { SET_DARK_MODE } from '../Store/reducers/reducers';
import sun from '../Assets/sun.svg';
import moon from '../Assets/moon.svg';

const Header = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(state => state.reducers.isDarkMode);
    const styleIcon = isDarkMode ? sun : moon;

    const changeDarkMode = () => {
        dispatch({
            type: SET_DARK_MODE
        })
    }

    return (
        <header>
            <nav>
                <Link to="/latest">Latest</Link>
                <Link to="/starred">Starred</Link>
            </nav>
            <div onClick={() => changeDarkMode()}>
                <img src={styleIcon}>
                </img>
            </div>
        </header>
    )
}

export default Header;