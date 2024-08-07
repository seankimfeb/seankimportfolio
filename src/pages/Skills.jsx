import React from 'react';

const Skills = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md mt-10">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Languages</h3>
                    <ul className="list-disc list-inside text-lg text-gray-600">
                        <li className="text-blue-500">Java</li>
                        <li className="text-blue-500">JavaScript</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>SQL</li>
                        <li>XQuery</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Frameworks</h3>
                    <ul className="list-disc list-inside text-lg text-gray-600">
                        <li className="text-blue-500">Spring Boot</li>
                        <li className="text-blue-500">React</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Developer Tools</h3>
                    <ul className="list-disc list-inside text-lg text-gray-600">
                        <li>Git</li>
                        <li>Docker</li>
                        <li>MS Power Apps</li>
                        <li>Postman</li>
                        <li>SonarQube</li>
                        <li>Visual Studio Code</li>
                        <li>Android Studio</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Other</h3>
                    <ul className="list-disc list-inside text-lg text-gray-600">
                        <li>MongoDB</li>
                        <li>SQLite</li>
                        <li>MySQL</li>
                        <li>DBeaver</li>
                        <li>MS Office</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
