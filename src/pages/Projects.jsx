import React from 'react';
import githubimage from '../components/images/githublogo.png';

const Projects = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md mt-10">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Projects</h2>
            <div className="grid grid-cols-1 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-700">School Project: VehicleExpo E-commerce</h3>
                        <p className="text-gray-600">A full-stack car merchandise web application. Has all functioning e-commerce components including login, review writing, checkout...etc.</p>
                    </div>
                    <div className="ml-4">
                        <p className="text-gray-600">MongoDB, Express.js, React, Node.js</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="flex-1">
                <div className="flex items-center">
                <h3 className="text-2xl font-semibold mb-2 text-gray-700">School Project: Footwear Shopping Simulator</h3>
                <a href="https://github.com/KyongRok/Lima-Project4443" target="_blank" rel="noopener noreferrer" className="ml-2">
                    <img src={githubimage} alt="GitHub" className="h-6 w-6" />
            </a>
        </div>
        <p className="text-gray-600">An Android mobile app that simulates the online footwear shopping, was developed to perform the study comparing task completion speed of labeled vs unlabeled UI components.</p>
    </div>
    <div className="ml-4">
        <p className="text-gray-600">Android Studio, Java, SQLite</p>
    </div>
</div>
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="flex-1">
                        <div className="flex items-center">
                            <h3 className="text-2xl font-semibold mb-2 text-gray-700">Movie Search App</h3>
                            <a href="https://github.com/seankimfeb/moviesearch" target="_blank" rel="noopener noreferrer" className="ml-2">
                                <img src={githubimage} alt="GitHub" className="h-6 w-6" />
                            </a>
                        </div>
                        <p className="text-gray-600">Web application that makes use of OMDb API to allow users to search movie titles and acquire movie info such as poster, release year, cast, and more.</p>
                    </div>
                    <div className="ml-4">
                        <p className="text-gray-600">Java, Spring Boot</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-700">Hackathon: Carpool Application</h3>
                        <p className="text-gray-600">A mobile app that allows users to carpool and calculates how much cost of travel each person owes to the driver.</p>
                    </div>
                    <div className="ml-4">
                        <p className="text-gray-600">MS Power Apps</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex">
    <div className="flex-1">
        <div className="flex items-center">
            <h3 className="text-2xl font-semibold mb-2 text-gray-700">Data Format Converter</h3>
            <a href="https://github.com/seankimfeb/moviesearch" target="_blank" rel="noopener noreferrer" className="ml-2">
                <img src={githubimage} alt="GitHub" className="h-6 w-6" />
            </a>
        </div>
        <p className="text-gray-600">A Python app that allows users to convert data files to other formats, such as XML to JSON or vice versa.</p>
    </div>
    <div className="ml-4">
        <p className="text-gray-600">Python (Tkinter, Pandas)</p>
    </div>
</div>

            </div>
        </div>
    );
};

export default Projects;
