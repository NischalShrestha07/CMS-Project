import React, { useEffect } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar'
import axios from 'axios'
const Home = () => {
    const fetchBlogs = async () => {
        const responce = await axios.get('http://localhost:2000/blogs')
        console.log(responce);
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <div>
            {/* use of components Navbar */}
            <Navbar />


        </div>

    )
}

export default Home
