import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="navbar-container">
                    <a href="#" class="navbar-logo">CMS Project</a>
                    <div class="navbar-toggle" id="mobile-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <ul class="navbar-menu">
                        <li class="navbar-item"><a href="#" class="navbar-links">Home</a></li>
                        <li class="navbar-item"><a href="#" class="navbar-links">About</a></li>
                        <li class="navbar-item"><a href="#" class="navbar-links">Services</a></li>
                        <li class="navbar-item"><a href="#" class="navbar-links">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div class="card-container">
                <div class="card">
                    <img src="https://via.placeholder.com/150" alt="Card Image" class="card-img" />
                    <div class="card-content">
                        <h3 class="card-title">Card Title 1</h3>
                        <p class="card-description">This is a description for the first card. It provides some details about the content of the card.</p>
                        <a href="#" class="card-button">Read More</a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://via.placeholder.com/150" alt="Card Image" class="card-img" />
                    <div class="card-content">
                        <h3 class="card-title">Card Title 2</h3>
                        <p class="card-description">This is a description for the second card. It provides some details about the content of the card.</p>
                        <a href="#" class="card-button">Read More</a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://via.placeholder.com/150" alt="Card Image" class="card-img" />
                    <div class="card-content">
                        <h3 class="card-title">Card Title 3</h3>
                        <p class="card-description">This is a description for the third card. It provides some details about the content of the card.</p>
                        <a href="#" class="card-button">Read More</a>
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img src="https://via.placeholder.com/150" alt="Card Image" class="card-img" />
                    <div class="card-content">
                        <h3 class="card-title">Card Title 4</h3>
                        <p class="card-description">This is a description for the fourth card. It provides some details about the content of the card.</p>
                        <a href="#" class="card-button">Read More</a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://via.placeholder.com/150" alt="Card Image" class="card-img" />
                    <div class="card-content">
                        <h3 class="card-title">Card Title 5</h3>
                        <p class="card-description">This is a description for the fifth card. It provides some details about the content of the card.</p>
                        <a href="#" class="card-button">Read More</a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://via.placeholder.com/150" alt="Card Image" class="card-img" />
                    <div class="card-content">
                        <h3 class="card-title">Card Title 6</h3>
                        <p class="card-description">This is a description for the sixth card. It provides some details about the content of the card.</p>
                        <a href="#" class="card-button">Read More</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
