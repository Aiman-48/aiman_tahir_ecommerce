import React from "react";

const Pricing2 = () => {
  return (
    <section className="bg-white py-16 px-8">
      {/* Heading Section */}
      <div className="text-center mb-12 py-[45px]">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Pricing FAQs</h1>
        <p className="text-gray-600 text-lg">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-12">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 rounded-lg shadow-sm hover:shadow-md max-w-[1056px] max-h-[537px] w-full h-auto"
          >
            <div className="text-blue-500 mt-1">
              {/* Arrow Icon */}
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold text-lg">
                The quick fox jumps over the lazy dog
              </h3>
              <p className="text-gray-600 text-sm">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Support Section */}
      <div className="text-center mb-16">
        <p className="text-gray-600">
          Haven’t got your answer? <span className="text-blue-500">Contact our support</span>
        </p>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center">
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

export default Pricing2;
