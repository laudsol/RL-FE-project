import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Link to="/latest">Latest</Link>
            <br></br>
            <Link to="/starred">Starred</Link>
        </>
    )
}

export default Header;