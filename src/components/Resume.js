import { useState } from 'react';
import resumeImage from '../assets/tayananth_resume.jpg'; // Local image import

export default function Resume() {
  const [showImage, setShowImage] = useState(false);

  return (
    <section
      id="resume"
      className="flex flex-col items-center bg-secondary px-5 py-10 text-white"
    >
      <h1 className="text-4xl border-b-4 border-primary mb-5 font-bold">Resume</h1>

      {!showImage ? (
        <button
          className="bg-primary text-black font-semibold px-6 py-3 rounded hover:bg-white transition duration-300"
          onClick={() => setShowImage(true)}
        >
          View Resume
        </button>
      ) : (
        <div className="flex flex-col items-center">
          {/* Resume Image */}
          <img
            className="w-full max-w-[600px] rounded shadow-lg mb-5"
            src={resumeImage}
            alt="Resume"
          />

          {/* Download Button */}
          <a
            href={resumeImage}
            download="tayananth_resume.jpg"
            className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-primary hover:text-white transition duration-300"
          >
            Download Resume
          </a>
        </div>
      )}
    </section>
  );
}
