import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/latest">Latest</Link>
                <Link to="/starred">Starred</Link>
            </nav>
        </header>
    )
}

export default Header;