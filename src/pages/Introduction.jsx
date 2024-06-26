import React from 'react';
import profileImage from '../components/images/profileimage.jpg';
import carpoolImage from '../components/images/carpoolimage.jpg';
import shoeImage from '../components/images/shoeimage.jpg';
import carstoreImage from '../components/images/carstore.png';

const Introduction = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md mt-20">
            <div className="flex flex-col md:flex-row items-center mb-10">
                <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                    <img src={profileImage} alt="Profile" className="rounded-full w-32 md:w-48" />
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                    <p className="text-xl md:text-3xl text-gray-700">
                        My name is Seong Su (Sean), and I am currently pursuing a degree in Computer Science at York University.
                        Previously, I studied Accounting & Financial Management at Western University. I transitioned to Computer Science
                        at York University after discovering my passion for programming and the dynamic challenges it presents.
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-6 text-center">Top Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md min-h-[400px] flex flex-col">
                        <img src={carstoreImage} alt="Project 1" className="rounded-lg mb-4 w-full h-48 object-cover" />
                        <h3 className="text-xl font-semibold mb-2">VehicleExpo E-commerce</h3>
                        <p className="text-gray-600">A full-stack car merchandise web application.
                            Has all functioning e-commerce components including login, review writing, checkout...etc.
                        </p>
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
