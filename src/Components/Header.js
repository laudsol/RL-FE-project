import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { SET_DARK_MODE, SET_VIEW_MODE } from '../Store/reducers/reducers';
import sun from '../Assets/sun.svg';
import moon from '../Assets/moon.svg';
import yCombLogo from '../Assets/y_comb_logo.svg';
import { viewModes } from '../Store/reducers/reducers';
import { useEffect } from 'react';

const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const isDarkMode = useSelector(state => state.reducers.isDarkMode);
    const viewMode = useSelector(state => state.reducers.viewMode);
    const styleIcon = isDarkMode ? sun : moon;
    
    const changeDarkMode = () => {
        dispatch({
            type: SET_DARK_MODE
        })
    }
    
    useEffect(() => {
        if (location.pathname === "/latest") {
            dispatch({
                type: SET_VIEW_MODE,
                payload: viewModes.LATEST
            });
        } else if (location.pathname === "/starred") {
            dispatch({
                type: SET_VIEW_MODE,
                payload: viewModes.STARRED
            });
        }
        
    }, [location.pathname, dispatch])

    const checkActiveLink = (type) => {
        return type === viewMode ? 'active-link' : ''
    }

    return (
        <header>
            <img src={yCombLogo} alt='y_comb_logo'></img>
            <h2>Hacker News</h2>
            <nav>
                <Link to="/latest" className={checkActiveLink(viewModes.LATEST)}>latest</Link>
                {'|'}
                <Link to="/starred" className={checkActiveLink(viewModes.STARRED)}>starred</Link>
            </nav>
            <div className="style-icon" onClick={() => changeDarkMode()}>
                <img src={styleIcon} alt="style_icon"></img>
            </div>
        </header>
    )
}

export default Header;