import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../public/images/f61.png';

const About = () => {
    return (
        <div>
            <div className="container py-3 my-3">
                <div className="row">
                    <div className="col-md-6 h-screen ">
                        <h1 className="text-primary fw-bold mb-3 p-2">About Us</h1>
                        <p className="lead mb-4 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae earum rem doloremque, nihil delectus ullam error consectetur? Dicta, non exercitationem in consectetur totam dolorum at voluptate laudantium aliquam, officiis perspiciatis molestias reiciendis consequuntur ullam perferendis velit blanditiis distinctio assumenda a maxime reprehenderit atque. Nam eius rerum distinctio, a illo earum, optio molestias nostrum
                              officia cum ad maxime ati minima?
                        </p>
                        <NavLink to="/contact" className=" bg-blue-800 px-8 py-2 rounded-xl shadow-3xl outline-none text-white no-underline hover:bg-blue-500 hover:outline-2">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={img} alt="About Us" className='h-80 w-full'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About