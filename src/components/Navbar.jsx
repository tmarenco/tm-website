const segments = ['Home', 'About', 'Experience', 'Skills', 'Contact'];
import { Link } from 'react-scroll';


export const Navbar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top px-2">
                <a className="navbar-brand" href="#">
                    <img src="/blackLogo.png" alt="Logo" width="50" height="40" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title title" id="offcanvasNavbarLabel">Tomás Marenco</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {
                                segments.map(( segment ) => (
                                    <li className="nav-item ms-3 align-self-auto align-self-md-center" key={ segment } >
                                        <Link  className="nav-link fw-bold" aria-current="vh-100" data-bs-dismiss="offcanvas" to={segment.toLowerCase()} activeClass="active" spy={true} smooth={true} offset={-50} duration={100}>{ segment.toUpperCase() }</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <hr />
                        <div className="text-center">
                            <button className="btn-send" data-bs-dismiss="offcanvas">RESUME</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
