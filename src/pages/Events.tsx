
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Events = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-black min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* TITLE */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-orange-400">
              Career Counselling Seminar
            </h1>

            <p className="text-gray-400 mt-2">
              SATSANG OUTR × SATSANG VIHAR BHUBANESWAR
            </p>
          </motion.div>

          {/* REGISTER BUTTON */}
          <div className="text-center mb-12">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfHAY_jPzZibZcqvQRCHFgbsoCZAi-n0Ub69L4HrjqUpLQuVQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
            >
              Register Now
            </a>
          </div>

          {/* EVENT SCHEDULE */}
          <motion.div
            className="bg-[#0b1e3a] rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-2xl font-bold text-white mb-10">
              Event Schedule
            </h2>

            <div className="space-y-6">

              {/* SESSION 1 */}
              <div className="flex gap-6 items-start border-r-4 border-orange-500 pr-6">
                <div className="text-orange-400 font-semibold min-w-[120px]">
                  09:00 – 10:00
                </div>

                <div className="bg-[#132a4d] p-5 rounded-xl w-full">
                  <h3 className="font-bold text-white text-lg">
                    Registration & Orientation
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Welcome of students and seminar overview
                  </p>
                </div>
              </div>

              {/* SESSION 2 */}
              <div className="flex gap-6 items-start border-r-4 border-orange-500 pr-6">
                <div className="text-orange-400 font-semibold min-w-[120px]">
                  10:00 – 10:15
                </div>

                <div className="bg-[#132a4d] p-5 rounded-xl w-full">
                  <h3 className="font-bold text-white text-lg">
                    Inaugural Session
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Diya Prajwalan & Theme Song
                  </p>
                </div>
              </div>

              {/* SESSION 3 */}
              <div className="flex gap-6 items-start border-r-4 border-orange-500 pr-6">
                <div className="text-orange-400 font-semibold min-w-[120px]">
                  10:15 – 10:45
                </div>

                <div className="bg-[#132a4d] p-5 rounded-xl w-full">
                  <h3 className="font-bold text-white text-lg mb-4">
                    Speaker Addresses
                  </h3>

                  <ul className="space-y-3 text-gray-300 text-sm">

                    <li>
                      <span className="font-semibold text-white">
                        Welcome Address:
                      </span>{" "}
                      Dr. Banabhari Mishra
                      <div className="text-gray-400 text-xs">
                        Advisor of Organising Committee (Senior Consultant CVTS, SUMUM, BBSR)
                      </div>
                    </li>

                    <li>
                      <span className="font-semibold text-white">
                        Theme Address:
                      </span>{" "}
                      Dr. Batakrushna Tripathy
                      <div className="text-gray-400 text-xs">
                        Asst. Professor, SOA University
                      </div>
                    </li>

                    <li>
                      <span className="font-semibold text-white">
                        Guest Speaker:
                      </span>{" "}
                      Mr. Surya Prakash Mahapatra
                      <div className="text-gray-400 text-xs">
                        Chairman, SOA
                      </div>
                    </li>

                    <li>
                      <span className="font-semibold text-white">
                        Guest of Honour:
                      </span>{" "}
                      Bibhuti Bhusan Biswal
                      <div className="text-gray-400 text-xs">
                        Vice Chancellor, OUTR
                      </div>
                    </li>

                    <li>
                      <span className="font-semibold text-white">
                        Vote of Thanks:
                      </span>{" "}
                      Dr. Jubilee Purkayastha
                      <div className="text-gray-400 text-xs">
                        Scientist & Joint Director, INMAS DRDO
                      </div>
                    </li>

                  </ul>
                </div>
              </div>

              {/* SESSION 4 */}
              <div className="flex gap-6 items-start border-r-4 border-orange-500 pr-6">
                <div className="text-orange-400 font-semibold min-w-[120px]">
                  10:45 – 11:00
                </div>

                <div className="bg-[#132a4d] p-5 rounded-xl w-full">
                  <h3 className="font-bold text-white text-lg">
                    Tea Break
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Networking & Refreshments
                  </p>
                </div>
              </div>

              {/* SESSION 5 */}
              <div className="flex gap-6 items-start border-r-4 border-orange-500 pr-6">
                <div className="text-orange-400 font-semibold min-w-[120px]">
                  11:15 – 01:00
                </div>

                <div className="bg-[#132a4d] p-5 rounded-xl w-full">
                  <h3 className="font-bold text-white text-lg">
                    Career Counselling Session
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Expert guidance with interactive Q&A
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default Even```tsx
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Events = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-black min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* TITLE */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-orange-400">
              Career Counselling Seminar
            </h1>

            <p className="text-gray-400 mt-2">
              SATSANG OUTR × SATSANG VIHAR BHUBANESWAR
            </p>
          </motion.div>

          {/* REGISTER BUTTON */}
          <div className="text-center mb-12">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfHAY_jPzZibZcqvQRCHFgbsoCZAi-n0Ub69L4HrjqUpLQuVQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
            >
              Register Now
            </a>
          </div>

          {/* EVENT SCHEDULE */}
          <motion.div
            className="bg-[#0b1e3a] rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-2xl font-bold text-white mb-10">
              Event Schedule
            </h2>

            <div className="space-y-6">

              {/* SESSION 1 */}
              <div className="flex gap-6 items-start border-r-4 border-orange-500 pr-6">
                <div className="text-orange-400 font-semibold min-w-[120px]">
                  09:00 – 10:00
                </div>

                <div className="bg-[#132a4d] p-5 rounded-xl w-full">
                  <h3 className="font-bold text-white text-lg">
                    Registration & Orientation
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Welcome of students and seminar overview
                  </p>
                </div>
              </div>

              {/* SESSION 2 */}
              <div className="flex gap-6 items-start border-r-4 border-orange-500 pr-6">
                <div className="text-orange-400 font-semibold min-w-[120px]">
                  10:00 – 10:15
                </div>

                <div className="bg-[#132a4d] p-5 rounded-xl w-full">
                  <h3 className="font-bold text-white text-lg">
                    Inaugural Session
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Diya Prajwalan & Theme Song
                  </p>
                </div>
              </div>

              {/* SESSION 3 */}
              <div className="flex gap-6 items-start border-r-4 border-orange-500 pr-6">
                <div className="text-orange-400 font-semibold min-w-[120px]">
                  10:15 – 10:45
                </div>

                <div className="bg-[#132a4d] p-5 rounded-xl w-full">
                  <h3 className="font-bold text-white text-lg mb-4">
                    Speaker Addresses
                  </h3>

                  <ul className="space-y-3 text-gray-300 text-sm">

                    <li>
                      <span className="font-semibold text-white">
                        Welcome Address:
                      </span>{" "}
                      Dr. Banabhari Mishra
                      <div className="text-gray-400 text-xs">
                        Advisor of Organising Committee (Senior Consultant CVTS, SUMUM, BBSR)
                      </div>
                    </li>

                    <li>
                      <span className="font-semibold text-white">
                        Theme Address:
                      </span>{" "}
                      Dr. Batakrushna Tripathy
                      <div className="text-gray-400 text-xs">
                        Asst. Professor, SOA University
                      </div>
                    </li>

                    <li>
                      <span className="font-semibold text-white">
                        Guest Speaker:
                      </span>{" "}
                      Mr. Surya Prakash Mahapatra
                      <div className="text-gray-400 text-xs">
                        Chairman, SOA
                      </div>
                    </li>

                    <li>
                      <span className="font-semibold text-white">
                        Guest of Honour:
                      </span>{" "}
                      Bibhuti Bhusan Biswal
                      <div className="text-gray-400 text-xs">
                        Vice Chancellor, OUTR
                      </div>
                    </li>

                    <li>
                      <span className="font-semibold text-white">
                        Vote of Thanks:
                      </span>{" "}
                      Dr. Jubilee Purkayastha
                      <div className="text-gray-400 text-xs">
                        Scientist & Joint Director, INMAS DRDO
                      </div>
                    </li>

                  </ul>
                </div>
              </div>

              {/* SESSION 4 */}
              <div className="flex gap-6 items-start border-r-4 border-orange-500 pr-6">
                <div className="text-orange-400 font-semibold min-w-[120px]">
                  10:45 – 11:00
                </div>

                <div className="bg-[#132a4d] p-5 rounded-xl w-full">
                  <h3 className="font-bold text-white text-lg">
                    Tea Break
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Networking & Refreshments
                  </p>
                </div>
              </div>

              {/* SESSION 5 */}
              <div className="flex gap-6 items-start border-r-4 border-orange-500 pr-6">
                <div className="text-orange-400 font-semibold min-w-[120px]">
                  11:15 – 01:00
                </div>

                <div className="bg-[#132a4d] p-5 rounded-xl w-full">
                  <h3 className="font-bold text-white text-lg">
                    Career Counselling Session
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Expert guidance with interactive Q&A
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default Events;


