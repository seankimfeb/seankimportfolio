import React from 'react';

const Skills = () => {
    return (
        <div className="mt-20 p-8 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Languages</h3>
                    <ul className="list-disc list-inside text-lg text-gray-600">
                        <li>Java</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Frameworks</h3>
                    <ul className="list-disc list-inside text-lg text-gray-600">
                        <li>Spring Boot</li>
                        <li>Node.js</li>
                        <li>React</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
