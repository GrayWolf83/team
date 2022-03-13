import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const Navbar = () => {
    const { currentUser } = useAuth()
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                <NavLink className="navbar-brand mb-0" to={'/'}>
                    Team
                </NavLink>

                <ul className="navbar-nav justify-content-end pe-3 ms-auto">
                    <li className="nav-item">
                        {currentUser ? (
                            <Link to="/logout" className="text-white-link">
                                Выйти
                            </Link>
                        ) : (
                            <NavLink
                                className="text-white-link"
                                aria-current="page"
                                exact
                                to="/auth/login">
                                Войти
                            </NavLink>
                        )}
                    </li>
                </ul>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-end text-primary"
                    tabIndex={-1}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title"
                            id="offcanvasNavbarLabel">
                            Меню
                        </h5>
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    exact
                                    to="/">
                                    Главная
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/favorites">
                                    Избранное
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
