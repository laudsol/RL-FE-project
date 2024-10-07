import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div>Hacker News</div>
            <Link to="/latest">Latest</Link>
            <br></br>
            <Link to="/starred">Starred</Link>
        </>

    )
}

export default Footer;