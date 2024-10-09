import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <h4>Hacker News</h4>
            <nav>
                <Link to="/latest">latest</Link>
                {'|'}
                <Link to="/starred">starred</Link>
            </nav>
        </footer>

    )
}

export default Footer;