import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <h4>Hacker News</h4>
            <nav>
                <Link to="/latest">Latest</Link>
                {'|'}
                <Link to="/starred">Starred</Link>
            </nav>
        </footer>

    )
}

export default Footer;