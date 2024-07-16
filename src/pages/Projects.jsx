import React from 'react';

const Projects = () => {
    return (
        <div className="mt-20 p-8 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">My Projects</h2>
            <div className="grid grid-cols-1 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-700">VehicleExpo E-commerce
                        </h3>
                        <p className="text-gray-600">A full-stack car merchandise web application. Has all functioning e-commerce components including login, review writing, checkout...etc.</p>
                    </div>
                    <div className="ml-4">
                        <p className="text-gray-600">MongoDB,Express.js,React,Node.js</p>
                        {/* You can add images or additional content here */}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-700">Footwear Shopping Simulator</h3>
                        <p className="text-gray-600">A front-end project that simulates the online footwear shopping, was developed to perform the study comparing task completion speed of labeled vs unlabeled UI components</p>
                    </div>
                    <div className="ml-4">
                        <p className="text-gray-600">Android Studio, Java, SQLite</p>
                        {/* You can add images or additional content here */}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-700">Movie Search App</h3>
                        <p className="text-gray-600">Web application that makes use of OMDb API to allow users to search movie titles and acquire movie info such as poster, release year, cast, and more</p>
                    </div>
                    <div className="ml-4">
                        <p className="text-gray-600"> Java, Spring Boot</p>
                        {/* You can add images or additional content here */}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-700">Carpool Application</h3>
                        <p className="text-gray-600">A mobile app that allows users to carpool and calculates how much cost of travel each person owes to the driver.</p>
                    </div>
                    <div className="ml-4">
                        <p className="text-gray-600">MS Power Apps</p>
                        {/* You can add images or additional content here */}
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-700">Course Enrollment Simulator</h3>
                        <p className="text-gray-600">Script which simulates course enrollment using command prompt. Has a feature to search courses, enroll, de-enroll, and sort students by their ages</p>
                    </div>
                    <div className="ml-4">
                        <p className="text-gray-600">C</p>
                        {/* You can add images or additional content here */}
                    </div>
                </div>
                {/* Add more divs for additional projects */}

            </div>
        </div>
    );
};

export default Projects;
