import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="#" className="navbar-logo">CMS Project</a>
                    <div className="navbar-toggle" id="mobile-menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className="navbar-menu">
                        <li className="navbar-item"><a href="#" className="navbar-links">Home</a></li>
                        <li className="navbar-item"><a href="#" className="navbar-links">About</a></li>
                        <li className="navbar-item"><a href="#" className="navbar-links">Services</a></li>
                        <li className="navbar-item"><a href="#" className="navbar-links">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="card-container">
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Card Image" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Card Title 1</h3>
                        <p className="card-description">This is a description for the first card. It provides some details about the content of the card.</p>
                        <a href="#" className="card-button">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Card Image" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Card Title 2</h3>
                        <p className="card-description">This is a description for the second card. It provides some details about the content of the card.</p>
                        <a href="#" className="card-button">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Card Image" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Card Title 3</h3>
                        <p className="card-description">This is a description for the third card. It provides some details about the content of the card.</p>
                        <a href="#" className="card-button">Read More</a>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Card Image" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Card Title 4</h3>
                        <p className="card-description">This is a description for the fourth card. It provides some details about the content of the card.</p>
                        <a href="#" className="card-button">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Card Image" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Card Title 5</h3>
                        <p className="card-description">This is a description for the fifth card. It provides some details about the content of the card.</p>
                        <a href="#" className="card-button">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Card Image" className="card-img" />
                    <div className="card-content">
                        <h3 className="card-title">Card Title 6</h3>
                        <p className="card-description">This is a description for the sixth card. It provides some details about the content of the card.</p>
                        <a href="#" className="card-button">Read More</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
