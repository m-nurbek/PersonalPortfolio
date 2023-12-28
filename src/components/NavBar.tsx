import GithubSVG from "../assets/svg/Github";
import LinkedinSVG from "../assets/svg/Linkedin";
import EmailSVG from "../assets/svg/Email";

function NavBar() {
    return (
        <>
            <nav>
                <div className='logo'><p>Nurbek Malikov</p></div>
                <div id="basic-navbar-nav" className="links">
                    <li className='social'><a href="https://github.com/m-nurbek" target="_blank" rel="noopener noreferrer"><GithubSVG /></a></li>
                    <li className='social'><a href="https://www.linkedin.com/in/nurbek-malikov-0415b71bb/" target="_blank" rel="noopener noreferrer"><LinkedinSVG /></a></li>
                    <li className='social'><a href="#" target="_blank" rel="noopener noreferrer"><EmailSVG /></a></li>
                </div>
            </nav>
        </>
    );
}

export default NavBar;