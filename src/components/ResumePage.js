import resume from '../assets/tayananth_resume.jpg';

export default function ResumePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-secondary text-white px-5 py-10">
      <h1 className="text-4xl font-bold mb-6 border-b-4 border-primary pb-2">My Resume</h1>

      <img
        src={resume}
        alt="Resume"
        className="w-full max-w-3xl rounded shadow-lg mb-6"
      />

      <a
        href={resume}
        download="Tayananth_Resume.jpg"
        className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition"
      >
        Download Resume
      </a>
    </section>
  );
}
