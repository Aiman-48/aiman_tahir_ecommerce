import React from 'react';

const MeetOurTeam = () => {
  const teamMembers = [
    { id: 1, name: 'Username', profession: 'Profession', image: '/team4.png'},
    { id: 2, name: 'Username', profession: 'Profession', image: '/team5.png'},
    { id: 3, name: 'Username', profession: 'Profession', image: '/team6.png'},
    { id: 4, name: 'Username', profession: 'Profession', image: '/team3.png' },
    { id: 5, name: 'Username', profession: 'Profession', image: '/team7.jpg'},
    { id: 6, name: 'Username', profession: 'Profession', image: '/team1.png' },
    { id: 7, name: 'Username', profession: 'Profession', image: 'team2.png' },
    { id: 8, name: 'Username', profession: 'Profession', image: '/team8.png'},
    { id: 9, name: 'Username', profession: 'Profession', image: '/team9.png'}
  ];

  return (
    <section className="bg-white py-16 px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Meet Our Team</h1>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="text-center">
            {/* Profile Image */}
            <img
              src={member.image}
              alt={`${member.name}`}
              className="rounded-lg w-full h-60 object-cover mb-4"
            />
            {/* Name and Profession */}
            <h2 className="text-lg font-bold text-gray-800">{member.name}</h2>
            <p className="text-gray-600 mb-4">{member.profession}</p>
            {/* Social Media Links */}
            <div className="flex justify-center space-x-4 text-blue-500">
              <a href="#" className="hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 2h-3a6 6 0 00-6 6v3H6v4h3v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 19h.01M12 19h.01M16 19h.01M12 14h.01M12 9h.01M12 4h.01M3 9h.01M3 4h.01M3 14h.01M21 14h.01M21 9h.01M21 4h.01M8 4h.01"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0V8zM12 12v2M12 8v2"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}

        
      </div>

      
      {/* Call-to-Action Section */}
      <div className="text-center pt-20">
        <h2 className="text-6xl font-bold text-gray-800 mb-4">Start your 14 days free trial</h2>
        <p className="text-gray-600 mb-6">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white font-medium mb-10">
          Try it free now
        </button>
        {/* Social Icons */}
<div className="flex justify-center gap-6">
  <a href="#" className="text-blue-500">
    {/* Facebook Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 2h-3a6 6 0 00-6 6v3H6v4h3v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"
      />
    </svg>
  </a>
  <a href="#" className="text-blue-500">
    {/* Twitter Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22 4.01c-.8.35-1.66.59-2.58.7a4.54 4.54 0 002-2.5c-.88.5-1.86.88-2.91 1.08a4.48 4.48 0 00-7.61 4.09c-3.72-.18-7.01-1.97-9.2-4.68a4.47 4.47 0 001.39 5.96c-.74-.02-1.44-.22-2.06-.55v.05a4.48 4.48 0 003.58 4.42c-.69.18-1.42.22-2.12.08.63 1.94 2.46 3.36 4.65 3.4a9.01 9.01 0 01-5.59 1.94c.71.46 1.56.73 2.48.73 2.97 0 5.42-2.49 5.42-5.53 0-.08 0-.16-.01-.24a3.85 3.85 0 001.04-2.91z"
      />
    </svg>
  </a>
  <a href="#" className="text-blue-500">
    {/* LinkedIn Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.98 3a2 2 0 10-2 2 2 2 0 002-2zm1 6h-3v12h3V9zm9 0h-3v12h3V9zm0-6a2 2 0 10-2 2 2 2 0 002-2z"
      />
    </svg>
  </a>
</div>

      </div>
    </section>
  );
};

export default MeetOurTeam;
