import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { useContext } from 'react';


export const Navbar = () => {

    const navigate = useNavigate();
    const {user, logout} = useContext(AuthContext)

    const onLogout = () => {

        logout();

        navigate('/login',{
            replace: true
        })
    }

    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                        to="/search"
                    >
                        <i className="bi bi-search"></i>
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span aria-label='username' className='nav-item nav-link text-info'>{ user?.name }</span>
                    <button onClick={onLogout} className='nav-item nav-link info btn'>Logout</button>
                </ul>
            </div>
        </nav>
        </>
    )
}