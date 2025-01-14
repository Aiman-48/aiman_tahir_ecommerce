import React from 'react';

const MeetOurTeam2 = () => {
  const teamMembers = [
    { id: 1, name: 'Username', profession: 'Profession', image: '/team1.png' },
    { id: 2, name: 'Username', profession: 'Profession', image: '/team2.png' },
    { id: 3, name: 'Username', profession: 'Profession', image: '/team3.png' },
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

      {/* Add Spacing Between Team Grid and Next Section */}
      <div className="mt-16 text-center">
        <h1
          className="text-gray-800 font-bold"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '50px',
          }}
        >
          BIG COMPANIES ARE HERE
        </h1>
        <p className="text-gray-400 mt-2">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Add Spacing Before the Row */}
      <div className="flex justify-center mt-12">
        <img
          src="./Row.png"
          alt="Company Names"
          className="w-full h-28 object-cover"
        />
      </div>
    </section>
  );
};

export default MeetOurTeam2;
