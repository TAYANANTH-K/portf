import C from '../assets/c.png';
import java from '../assets/java.png';
import lc from '../assets/lcbadge.png';
import llc from '../assets/lcbadge2.png';

export default function Certifications() {
  return (
    <section className="bg-white py-20 px-5" id="certifications">
      <h2 className="text-4xl font-bold text-center mb-10">Certifications</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* NPTEL Certificates */}
        <div className="border rounded shadow p-6">
          <h3 className="text-2xl font-semibold mb-4 text-center">NPTEL Certifications</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <img src={C} alt="C Programming Certificate" className="w-full md:w-1/2 rounded" />
            <img src={java} alt="Java Certificate" className="w-full md:w-1/2 rounded" />
          </div>
        </div>

        {/* LeetCode Badges */}
        <div className="border rounded shadow p-6">
          <h3 className="text-2xl font-semibold mb-4 text-center">LeetCode Badges</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <img src={lc} alt="LeetCode Badge 1" className="w-24 h-24 object-contain" />
            <img src={llc} alt="LeetCode Badge 2" className="w-24 h-24 object-contain" />
          </div>
        </div>
      </div>

      {/* View More Link */}
      <div className="mt-10 text-center">
        <a
          href="#"
          className="text-blue-600 hover:underline text-lg font-medium"
        >
          View More Certifications
        </a>
      </div>
    </section>
  );
}
