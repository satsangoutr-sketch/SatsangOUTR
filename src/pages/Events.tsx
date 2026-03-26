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
              className="px-8 py-6 bg-[#0b1e3a] text-white font-semibold rounded-lg"
            >
              Register Now
            </a>
          </div>

          <h2 className="text-5xl font-bold text-white mb-10 text-center">
            Event Schedule
          </h2>

          <div className="space-y-6">

            {/* REGISTRATION */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                09:00 – 10:00 AM
              </div>
              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold">
                  Registration & Orientation
                </h3>
                <p className="text-gray-400 text-sm">
                  Welcome, networking & refreshments
                </p>
              </div>
            </div>

            {/* INAUGURAL */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                10:00 – 11:00 AM
              </div>
              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold">
                  Inaugural Session
                </h3>
                <p className="text-gray-400 text-sm">
                  Diya Prajwalan & Theme Song
                </p>
              </div>
            </div>

            {/* CAREER SESSION */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                11:00 AM – 01:00 PM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold">
                  Career Counselling Sessions
                </h3>

                <ul className="space-y-4 text-gray-300 text-sm mt-3">

                  <li>
                    <span className="font-semibold text-white">
                      11:00 – 11:25 → Mr. Surya Prakash Mahapatra
                    </span>
                    <div className="text-gray-400 text-xs">
                      “From career confusion to career clarity”
                    </div>
                  </li>

                  <li>
                    <span className="font-semibold text-white">
                      11:25 – 11:50 → Dr. Sutanu Chakraborty
                    </span>
                    <div className="text-gray-400 text-xs">
                      “Your ‘Y’earning within: making the ‘Y’ (WHY) matter”
                    </div>
                  </li>

                  <li>
                    <span className="font-semibold text-white">
                      11:50 – 12:15 → Mr. Kalinga Keshari Rath
                    </span>
                    <div className="text-gray-400 text-xs">
                      Entrepreneurship in youth generation
                    </div>
                  </li>

                  <li>
                    <span className="font-semibold text-white">
                      12:15 – 12:40 → Dr. Jubilee Purkayastha
                    </span>
                    <div className="text-gray-400 text-xs">
                      The philosophy of right livelihood: Career guidance for conscious youth
                    </div>
                  </li>

                  <li>
                    <span className="font-semibold text-white">
                      12:40 – 01:00 → Dr. Pravakar Mohanty
                    </span>
                    <div className="text-gray-400 text-xs">
                      “STEM” – when our curiosity drives career success
                    </div>
                  </li>

                  <li className="font-semibold text-white">
                    Interactive Q & A Session
                  </li>

                </ul>
              </div>
            </div>

            {/* LUNCH */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                01:00 – 01:30 PM
              </div>
              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold">Lunch Break</h3>
              </div>
            </div>

            {/* RHYTHM */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                01:30 – 02:00 PM
              </div>
              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold">
                  Rhythm & Resonance
                </h3>
                <p className="text-gray-400 text-sm">
                  Kamalakhya Parida, Bedashree Aparna Sahoo & Dipta S. Mohanty
                </p>
              </div>
            </div>

            {/* PLENARY */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                02:00 – 05:00 PM
              </div>

              <div className="bg-[#132a4d] p-6 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold mb-6">
                  Domain-Specific Plenary Sessions
                </h3>

                <div className="grid md:grid-cols-2 gap-6">

                  <div className="bg-[#111827] p-6 rounded-xl">
                    <h4 className="text-white font-bold">02:00 – 02:40 PM</h4>
                    <p className="text-gray-300">Civil & Defence Services</p>
                  </div>

                  <div className="bg-[#111827] p-6 rounded-xl">
                    <h4 className="text-white font-bold">02:45 – 03:25 PM</h4>
                    <p className="text-gray-300">Higher Education & Research</p>
                  </div>

                  <div className="bg-[#111827] p-6 rounded-xl">
                    <h4 className="text-white font-bold">03:30 – 04:10 PM</h4>
                    <p className="text-gray-300">Management & Corporate</p>
                  </div>

                  <div className="bg-[#111827] p-6 rounded-xl">
                    <h4 className="text-white font-bold">04:15 – 04:55 PM</h4>
                    <p className="text-gray-300">Agriculture & Technology</p>
                  </div>

                </div>
              </div>
            </div>

            {/* PARALLEL */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                02:00 – 05:00 PM
              </div>
              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold">
                  One-to-One Career Counselling (Parallel Session)
                </h3>
              </div>
            </div>

            {/* VALEDICTORY */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                05:00 – 05:15 PM
              </div>
              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold">
                  Valedictory Session
                </h3>
                <p className="text-gray-400 text-sm">
                  Vote of Thanks by Dr. Sanat Kumar Sahoo
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
  
