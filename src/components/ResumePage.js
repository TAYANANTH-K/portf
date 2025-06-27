import React, { useState } from 'react';
import resume from '../assets/tayananth_resume.jpg'; // make sure this path is correct

export default function ResumePage() {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(prev => !prev);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-5 py-10">
      <h1 className="text-4xl font-bold mb-6 border-b-4 border-blue-400 pb-2">My Resume</h1>

      <button
        onClick={toggleResume}
        className="text-lg mb-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition"
      >
        {showResume ? '⬆ Hide Resume' : '⬇ Show Resume'}
      </button>

      {showResume && (
        <div className="flex flex-col items-center">
          <img
            src={resume}
            alt="Resume"
            className="w-full max-w-3xl rounded shadow-lg mb-6"
          />

          <a
            href={resume}
            download="Tayananth_Resume.jpg"
            className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
          >
            Download Resume
          </a>
        </div>
      )}
    </section>
  );
}
