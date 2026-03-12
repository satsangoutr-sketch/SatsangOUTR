
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Events = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-[#243447] min-h-screen">
        <div className="max-w-5xl mx-auto px-4">

          {/* TITLE */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-7xl font-bold text-white">
              Career Counselling Seminar
            </h1>

            <p className="text-gray-400 mt-2">
              SATSANG VIHAR BHUBANESWAR
            </p>
          </motion.div>

          {/* REGISTER BUTTON */}
          <div className="text-center mb-16">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfHAY_jPzZibZcqvQRCHFgbsoCZAi-n0Ub69L4HrjqUpLQuVQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#0b1e3a] text-white font-semibold rounded-lg transition"
            >
              Register Now
            </a>
          </div>

          {/* EVENT SCHEDULE */}
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Event Schedule
          </h2>

          <div className="space-y-6">

            {/* SESSION 1 */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                09:00 AM – 10:00 AM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold text-lg">
                  Registration & Orientation
                </h3>

                <p className="text-gray-400 text-sm">
                  Welcome of students and seminar overview
                </p>
              </div>
            </div>

            {/* SESSION 2 */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                10:00 AM – 10:15 AM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold text-lg">
                  Inaugural Session
                </h3>

                <p className="text-gray-400 text-sm">
                  Diya Prajwalan & Theme Song
                </p>
              </div>
            </div>

            {/* SESSION 3 */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                10:15 AM – 10:45 AM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <p className="text-gray-400 text-sm">TBA</p>
              </div>
            </div>

            {/* TEA BREAK */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                10:45 AM – 11:00 AM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold text-lg">
                  Tea Break
                </h3>
              </div>
            </div>

            {/* CAREER SESSION */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                11:00 AM – 01:00 PM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold text-lg">
                  Career Counselling Session
                </h3>

                <ul className="space-y-2 text-gray-300 text-sm mt-3">
                  <li>Dr. Jubilee Purkayastha</li>
                  <li>Dr. Pravakar Mohanty</li>
                  <li>Mr. Surya Prakash Mahapatra</li>
                  <li>Mr. Kalinga Keshari Rath</li>
                  <li>Dr. Sutanu Chakraborty</li>
                  <li>Dr. Lingaraj Sahoo</li>
                  <li><strong>Interactive Q&A Session</strong></li>
                </ul>
              </div>
            </div>

            {/* LUNCH */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                01:00 PM – 01:45 PM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold text-lg">
                  Lunch Break
                </h3>
              </div>
            </div>

            {/* MUSIC */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                01:45 PM – 02:00 PM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold text-lg">
                  Rhythm & Resonance
                </h3>

                <p className="text-gray-400 text-sm">
                  Musical Reflection by Bedashree Sahoo
                </p>
              </div>
            </div>

            {/* PLENARY SESSIONS */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                02:00 PM – 04:00 PM
              </div>

              <div className="flex-1">

                <h3 className="text-white font-bold text-lg mb-4">
                  Plenary Sessions
                </h3>

                <h2 className="text-3xl font-bold text-white mb-10">
                  Domain-Specific Plenary Sessions
                </h2>

                {/* GRID */}
                <div className="grid md:grid-cols-2 gap-8">

                  {/* CARD */}
                  {["P1","P2","P3","P4"].map((p)=>(
                    <div key={p} className="bg-[#0b1e3a] p-8 rounded-2xl shadow-lg">

                      <div className="flex items-center gap-3 mb-3">
                        <span className="gradient-saffron text-white text-xs font-bold px-3 py-1 rounded">
                          {p}
                        </span>

                        <h3 className="text-xl font-bold text-white">
                          Domain Title
                        </h3>
                      </div>

                      <p className="text-gray-400 italic mb-6">
                        Session description
                      </p>

                      <div className="bg-[#1f2937] p-4 rounded-lg mb-6 border-l-4 gradient-saffron">
                        <p className="gradient-saffron font-bold text-xs">
                          MODERATOR
                        </p>

                        <p className="text-white font-semibold">
                          Speaker Name
                        </p>
                      </div>

                      <ul className="space-y-3 text-gray-300">
                        <li>
                          <span className="gradient-saffron mr-2">•</span>
                          Speaker Name
                        </li>
                        <li>
                          <span className="gradient-saffron mr-2">•</span>
                          Speaker Name
                        </li>
                      </ul>

                    </div>
                  ))}

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;

