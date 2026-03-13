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
              className="px-8 py-3 bg-[#0b1e3a] hover:bg-[#0b1e3a] text-white font-semibold rounded-lg transition"
            >
              Register Now
            </a>
          </div>

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
                <h3 className="text-white font-bold text-lg">
                  Session Announcement
                </h3>

                <p className="text-gray-400 text-sm">
                  Speaker details will be announced soon
                </p>
              </div>
            </div>

            {/* SESSION 4 */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                10:45 AM – 11:00 AM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold text-lg">
                  Tea Break
                </h3>

                <p className="text-gray-400 text-sm">
                  Refreshments & Networking
                </p>
              </div>
            </div>

            {/* SESSION 5 */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                11:00 AM – 01:00 PM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold text-lg">
                  Career Counselling Session
                </h3>

                <ul className="space-y-2 text-gray-300 text-sm">

                  <li>
                    Dr. Jubilee Purkayastha
                    <div className="text-gray-400 text-xs">
                      Scientist & Joint Director, INMAS DRDO
                    </div>
                  </li>

                  <li>
                    Dr. Pravakar Mohanty
                    <div className="text-gray-400 text-xs">
                      Scientist ‘E’, Department of Science & Technology
                    </div>
                  </li>

                  <li>
                    Mr. Surya Prakash Mahapatra
                    <div className="text-gray-400 text-xs">
                      Global Head Talent Transformation, Wipro Ltd.
                    </div>
                  </li>

                  <li>
                    Mr. Kalinga Keshari Rath
                    <div className="text-gray-400 text-xs">
                      MD, EVOS Buildcon Pvt. Ltd.
                    </div>
                  </li>

                  <li>
                    Dr. Sutanu Chakraborty
                    <div className="text-gray-400 text-xs">
                      Professor, IIT Madras
                    </div>
                  </li>

                  <li>
                    Dr. Lingaraj Sahoo
                    <div className="text-gray-400 text-xs">
                      Professor, IIT Guwahati
                    </div>
                  </li>

                  <li>
                    <strong>Interactive Q & A Session</strong>
                  </li>

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

                <p className="text-gray-400 text-sm">
                  Take a break and enjoy lunch
                </p>
              </div>
            </div>

            {/* RHYTHM SESSION */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                01:45 PM – 02:00 PM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold text-lg">
                  Rhythm & Resonance
                </h3>

                <p className="text-gray-400 text-sm">
                  Musical reflection by Bedashree Sahoo
                </p>
              </div>
            </div>

            {/* PLENARY SESSION */}
            <div className="flex gap-6">

              <div className="text-white font-semibold w-32">
                02:00 PM – 04:00 PM
              </div>

              <div className="bg-[#132a4d] p-6 rounded-lg border-r-4 border-white flex-1">

                <h3 className="text-white font-bold text-lg mb-6">
                  Domain-Specific Plenary Sessions
                </h3>

                <div className="grid md:grid-cols-2 gap-8">

                  {/* P1 */}
                  <div className="bg-[#0b1e3a] p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Civil, Staff & Defence Services
                    </h3>

                    <p className="text-gray-400 italic mb-4">
                      From Aspirant to Officer
                    </p>

                    <div className="bg-[#1f2937] p-4 rounded-lg mb-4 border-l-4 border-orange-500">
                      <p className="text-orange-400 text-xs font-bold">MODERATOR</p>
                      <p className="text-white font-semibold">
                        Dr. Jubilee Purkayastha
                      </p>
                    </div>

                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>Lt. Raj Kumar Thakur</li>
                      <li>Mr. Shantanu Singh</li>
                      <li>Mr. Pradyumna Mohapatra</li>
                      <li>Dr. Pravakar Mohanty</li>
                      <li>Mr. Purusottam Mishra</li>
                    </ul>
                  </div>

                  {/* P2 */}
                  <div className="bg-[#111827] p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Higher Education & Research
                    </h3>

                    <div className="bg-[#1f2937] p-4 rounded-lg mb-4 border-l-4 border-orange-500">
                      <p className="text-orange-400 text-xs font-bold">MODERATOR</p>
                      <p className="text-white font-semibold">
                        Dr. Sutanu Chakraborty
                      </p>
                    </div>

                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>Dr. Lingaraj Sahoo</li>
                      <li>Dr. Batakrushna Tripathy</li>
                      <li>Mr. Sanchari Kundu</li>
                      <li>Dr. Sudhanshu Sekhar Sahoo</li>
                      <li>Mr. Abheek Ghosh</li>
                    </ul>
                  </div>

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
