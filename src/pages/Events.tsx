```jsx
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
              className="px-8 py-3 bg-gradient-saffron text-white font-semibold rounded-lg"
            >
              Register Now
            </a>
          </div>

          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Event Schedule
          </h2>

          <div className="space-y-6">

            {/* SESSION */}
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

          </div>

          <h2 className="text-3xl font-bold text-white mt-20 mb-10">
            Domain-Specific Plenary Sessions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* P1 */}
            <div className="bg-[#0b1e3a] p-8 rounded-2xl shadow-lg">

              <div className="flex items-center gap-3 mb-3">
                <span className="bg-gradient-saffron text-white text-xs font-bold px-3 py-1 rounded">
                  P1
                </span>

                <h3 className="text-xl font-bold text-white">
                  Civil, Staff & Defence Services
                </h3>
              </div>

              <div className="bg-[#1f2937] p-4 rounded-lg mb-6 border-l-4 border-gradient-saffron">
                <p className="text-gradient-saffron text-xs font-bold">
                  MODERATOR
                </p>

                <p className="text-white font-semibold">
                  Dr. Jubilee Purkayastha
                </p>

                <p className="text-gray-400 text-sm">
                  Scientist & Joint Director, INMAS DRDO
                </p>
              </div>

              <ul className="space-y-3 text-gray-300">

                <li>
                  Lt. Raj Kumar Thakur
                  <div className="text-gray-500 text-sm">
                    Officer, Combined Defence Services (CDS)
                  </div>
                </li>

                <li>
                  Mr. Shantanu Singh
                  <div className="text-gray-500 text-sm">
                    IFS Officer, UPSC Civil Services
                  </div>
                </li>

                <li>
                  Mr. Pradyumna Mohapatra
                  <div className="text-gray-500 text-sm">
                    IES, General Manager, BSNL
                  </div>
                </li>

                <li>
                  Dr. Pravakar Mohanty
                  <div className="text-gray-500 text-sm">
                    Scientist ‘E’, Dept. of Science & Technology
                  </div>
                </li>

                <li>
                  Mr. Purusottam Mishra
                  <div className="text-gray-500 text-sm">
                    OAS, Assistant Collector
                  </div>
                </li>

              </ul>

            </div>

            {/* P2 */}
            <div className="bg-[#0b1e3a] p-8 rounded-2xl shadow-lg">

              <div className="flex items-center gap-3 mb-3">
                <span className="bg-gradient-saffron text-white text-xs font-bold px-3 py-1 rounded">
                  P2
                </span>

                <h3 className="text-xl font-bold text-white">
                  Higher Education, Academia & Research
                </h3>
              </div>

              <div className="bg-[#1f2937] p-4 rounded-lg mb-6 border-l-4 border-gradient-saffron">
                <p className="text-gradient-saffron text-xs font-bold">
                  MODERATOR
                </p>

                <p className="text-white font-semibold">
                  Dr. Sutanu Chakraborty
                </p>

                <p className="text-gray-400 text-sm">
                  Professor, Dept. of Computer Science, IIT Madras
                </p>
              </div>

              <ul className="space-y-3 text-gray-300">

                <li>
                  Dr. Lingaraj Sahoo
                  <div className="text-gray-500 text-sm">
                    Professor, IIT Guwahati
                  </div>
                </li>

                <li>
                  Dr. Batakrushna Tripathy
                  <div className="text-gray-500 text-sm">
                    Assistant Professor, SOA
                  </div>
                </li>

                <li>
                  Mr. Sanchari Kundu
                  <div className="text-gray-500 text-sm">
                    PhD Scholar, Virginia Tech
                  </div>
                </li>

                <li>
                  Dr. Sudhanshu Sekhar Sahoo
                  <div className="text-gray-500 text-sm">
                    Associate Professor, OUTR
                  </div>
                </li>

                <li>
                  Mr. Abheek Ghosh
                  <div className="text-gray-500 text-sm">
                    PhD Scholar, Oxford University
                  </div>
                </li>

                <li>
                  Mr. Rishikeshan Pradha
                  <div className="text-gray-500 text-sm">
                    PhD Scholar, NISER
                  </div>
                </li>

              </ul>

            </div>

            {/* P3 */}
            <div className="bg-[#0b1e3a] p-8 rounded-2xl shadow-lg">

              <div className="flex items-center gap-3 mb-3">
                <span className="bg-gradient-saffron text-white text-xs font-bold px-3 py-1 rounded">
                  P3
                </span>

                <h3 className="text-xl font-bold text-white">
                  Management, Corporate & Engineering Industries
                </h3>
              </div>

              <div className="bg-[#1f2937] p-4 rounded-lg mb-6 border-l-4 border-gradient-saffron">
                <p className="text-gradient-saffron text-xs font-bold">
                  MODERATOR
                </p>

                <p className="text-white font-semibold">
                  Mr. Surya Prakash Mahapatra
                </p>

                <p className="text-gray-400 text-sm">
                  Global Head Talent Transformation, Wipro Ltd.
                </p>
              </div>

              <ul className="space-y-3 text-gray-300">

                <li>
                  Mr. Kalinga Keshari Rath
                  <div className="text-gray-500 text-sm">
                    MD, EVOS Buildcon Pvt. Ltd.
                  </div>
                </li>

                <li>
                  Mr. Siddharth Das
                  <div className="text-gray-500 text-sm">
                    AI Engineer, Ford USA
                  </div>
                </li>

                <li>
                  Mr. Biswojit Gouda
                  <div className="text-gray-500 text-sm">
                    Senior Salesforce Consultant
                  </div>
                </li>

                <li>
                  Mr. Prakruti Ranjan Sahoo
                  <div className="text-gray-500 text-sm">
                    IIM Raipur
                  </div>
                </li>

                <li>
                  Mr. Shirendu Banik
                  <div className="text-gray-500 text-sm">
                    IIM Amritsar
                  </div>
                </li>

              </ul>

            </div>

            {/* P4 */}
            <div className="bg-[#0b1e3a] p-8 rounded-2xl shadow-lg">

              <div className="flex items-center gap-3 mb-3">
                <span className="bg-gradient-saffron text-white text-xs font-bold px-3 py-1 rounded">
                  P4
                </span>

                <h3 className="text-xl font-bold text-white">
                  Agricultural & Technology
                </h3>
              </div>

              <div className="bg-[#1f2937] p-4 rounded-lg mb-6 border-l-4 border-gradient-saffron">
                <p className="text-gradient-saffron text-xs font-bold">
                  MODERATOR
                </p>

                <p className="text-white font-semibold">
                  Dr. Hrushikesh Senapati
                </p>

                <p className="text-gray-400 text-sm">
                  Former Dean, Agriculture
                </p>
              </div>

              <ul className="space-y-3 text-gray-300">

                <li>
                  Dr. Trinath Maharana
                  <div className="text-gray-500 text-sm">
                    Former Professor & Head, OUAT
                  </div>
                </li>

                <li>
                  Dr. Pramod Kumar Rout
                  <div className="text-gray-500 text-sm">
                    Former Principal Scientist, ICAR
                  </div>
                </li>

                <li>
                  Dr. Kalikinkar Bandyopadhyay
                  <div className="text-gray-500 text-sm">
                    Principal Scientist, ICAR-IIWM
                  </div>
                </li>

                <li>
                  Dr. Priya Ranjan Sahoo
                  <div className="text-gray-500 text-sm">
                    Aquaculture Specialist
                  </div>
                </li>

                <li>
                  Mr. Hari Prasanna Sahoo
                  <div className="text-gray-500 text-sm">
                    PhD Scholar, BHU
                  </div>
                </li>

              </ul>

            </div>

          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Events;
```
