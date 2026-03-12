import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Events = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-[#243447] min-h-screen">
        <div className="max-w-5xl mx-auto px-4">

          {/* TITLE */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-7xl font-bold text-White-400">
              Career Counselling Seminar
            </h1>

            <p className="text-gray-400 mt-2">
               SATSANG VIHAR BHUBANESWAR
            </p>
          </motion.div>

          {/* REGISTER BUTTON */}
          <div className="text-center mb-12">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfHAY_jPzZibZcqvQRCHFgbsoCZAi-n0Ub69L4HrjqUpLQuVQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#0b1e3a] hover:bg-[#0b1e3a] text-white font-semibold rounded-lg transition"
            >
              Register Now
            </a>
          </div>

          {/* SCHEDULE SECTION */}
          <div className="bg-[#0b1e3a] p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold text-white mb-10">
              Event Schedule
            </h2>

            <div className="space-y-6">

              {/* SESSION 1 */}
              <div className="flex gap-6">
                <div className="text-[#243447]font-semibold w-32">
                  09:00 – 10:00
                </div>

                <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-[#0b1e3a] flex-1">
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
                <div className="text-[#243447] font-semibold w-32">
                  10:00 – 10:15
                </div>

                <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-orange-500 flex-1">
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
                <div className="text-[#243447] font-semibold w-32">
                  10:15 – 10:45
                </div>

                <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-orange-500 flex-1">

                  <h3 className="text-white font-bold text-lg mb-3">
                    Speaker Addresses
                  </h3>

                  <ul className="space-y-2 text-gray-300 text-sm">

                    <li>
                      <span className="font-semibold text-white">
                        Welcome Address:
                      </span>{" "}
                      Dr. Banabihari Mishra
                      <div className="text-gray-400 text-xs">
                       Senior Consultant CVTS, SUMUM, BBSR (Advisor of Organising Committee)
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
                        Scientist & Joint Director, INMAS DRDO ,Ministry of Defence, Govt. of India
                      </div>
                    </li>

                  </ul>
                </div>
              </div>

              {/* SESSION 4 */}
              <div className="flex gap-6">
                <div className="text-[#243447] font-semibold w-32">
                  10:45 AM – 11:00 AM
                </div>

                <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-orange-500 flex-1">
                  <h3 className="text-white font-bold text-lg">
                    Tea Break
                  </h3>

                  <p className="text-gray-400 text-sm">
                   -------------------------------
                  </p>
                </div>
              </div>

              {/* SESSION 5 */}
              <div className="flex gap-6">
                <div className="text-[#243447] font-semibold w-32">
                  11:00 AM – 01:00 AM
                </div> 
                                <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-[#243447] flex-1">
                  <h3 className="text-white font-bold text-lg">
                    Career Counselling Session
                  </h3>
                                   <ul className="space-y-2 text-gray-300 text-sm">

                    <li>
                    Dr. Jubilee Purkayastha 
                      <div className="text-gray-400 text-xs">
                        Scientist  & Joint Director, INMAS DRDO ,Ministry of Defence, Govt. of India
                      </div>
                    </li>

                    <li>
                      
                       •	Dr. Pravakar Mohanty
                      <div className="text-gray-400 text-xs">
                      Scientist ‘E’ & Joint Director (R&D), Department of Science & Technology, Government of India
                      </div>
                    </li>

                    <li>
                      
                      Mr. Surya Prakash Mahapatra
                      <div className="text-gray-400 text-xs">
                       Global Head Talent Transformation, Wipro Ltd.
                      </div>
                    </li>

                    <li>
                      
                      •	Mr. Kalinga Keshari Rath 
                      <div className="text-gray-400 text-xs">
                        MD, EVOS buildcon Pvt. Ltd.
                      </div>
                    </li>

                    <li>
                      
                      •	Dr. Sutanu Chakraborty

                      <div className="text-gray-400 text-xs">
                        Professor, Department of Computer Science & Engineering, Indian Institute of Technology (IIT) Madras

                      </div>
                    </li>
                                      <li>
                      
                      •	Dr. Lingaraj Sahoo

                      <div className="text-gray-400 text-xs">
Professor, Dept .of Bioscience and Bioengineering, IIT Guwahati, & Adj.Prof. Jifu University, JAPAN
                      </div>
                    </li>
                                     <li><strong>Interactive Q & A Session </strong> Disucssion with all Speakers
                
                    </li> 

                  </ul>
                </div>
              </div>
                                  
                <div className="flex gap-6">
  <div className="text-White-400 font-semibold w-32">
    01:00 PM – 01:45 PM
  </div>

  <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-orange-500 flex-1">
    <h3 className="text-white font-bold text-lg">
      Lunch Break
    </h3>

    <p className="text-gray-400 text-sm">
      Take a break and enjoy a delicious lunch with great company.
    </p>
  </div>
</div>

                
                  <p className="text-gray-400 text-sm">
                    Expert guidance with interactive Q&A Sessions
                  </p>
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

