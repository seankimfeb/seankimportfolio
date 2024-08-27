import React from 'react';
import profileImage from '../components/images/CK0A3325.JPG';
import carpoolImage from '../components/images/carpoolimage.jpg';
import shoeImage from '../components/images/shoeimage.jpg';
import carstoreImage from '../components/images/carstore.png';
import githubimage from '../components/images/githublogo.png';
import ldimage from  '../components/images/LinkedIn_logo_initials.png';
const Introduction = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md mt-10">
            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                    <img src={profileImage} alt="Profile" className="rounded-full w-32 md:w-48" />
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                    <p className="text-3xl md:text-5xl text-gray-700">Seong Su Kim</p>
                    <p className="text-base md:text-xl text-gray-600 mt-2">A passionate Computer Science Student</p>
                    <p className="text-lg md:text-2xl text-gray-600 mt-2">Proficient in Java, JavaScript, and Python | Specializing in Full-Stack Development</p>
                    
                    {/* GitHub Profile Link */}
                    <div className="flex items-center justify-center md:justify-start mt-4">
                        <a href="https://github.com/seankimfeb" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-500 mr-4">
                            <img src={githubimage} alt="GitHub" className="h-6 w-6 mr-2" />
                            <span className="text-lg">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/seong-su-kim-642895229/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-500">
                            <img src={ldimage} alt="GitHub" className="h-6 w-6 mr-2" />
                            <span className="text-lg">LinkedIn</span>
                        </a>
                    </div>
                    <div className="mt-4 text-gray-700">
        <span className="text-lg">Email: </span>
        <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">seankimfeb@gmail.com</a>
    </div>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-6 text-center">Top Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md min-h-[400px] flex flex-col">
                        <img src={carstoreImage} alt="Project 1" className="rounded-lg mb-4 w-full h-48 object-cover" />
                        <h3 className="text-xl font-semibold mb-2">VehicleExpo E-commerce</h3>
                        <p className="text-gray-600">A full-stack car merchandise web application. Has all functioning e-commerce components including login, review writing, checkout...etc.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md min-h-[400px] flex flex-col">
                        <img src={carpoolImage} alt="Project 2" className="rounded-lg mb-4 w-full h-48 object-cover" />
                        <h3 className="text-xl font-semibold mb-2">Carpool Application</h3>
                        <p className="text-gray-600">A mobile app that allows users to carpool and calculates how much cost of travel each person owes to the driver.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md min-h-[400px] flex flex-col">
                        <img src={shoeImage} alt="Project 3" className="rounded-lg mb-4 w-full h-48 object-cover" />
                        <h3 className="text-xl font-semibold mb-2">Footwear shopping simulator</h3>
                        <p className="text-gray-600">A front-end project that simulates the online footwear shopping, was developed to perform the study comparing task completion speed of labeled vs unlabeled UI components</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
