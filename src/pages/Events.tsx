
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

<div className="bg-[#0b1e3a] p-8 rounded-2xl shadow-lg">
  
 
  
</div>

            <div className="space-y-6">

              
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
    <p className="text-gray-400 text-sm">
      TBA
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
                    -------------------------------
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
                        Scientist & Joint Director, INMAS DRDO, Ministry of Defence, Govt. of India
                      </div>
                    </li>

                    <li>
                      Dr. Pravakar Mohanty
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
                      Mr. Kalinga Keshari Rath 
                      <div className="text-gray-400 text-xs">
                        MD, EVOS Buildcon Pvt. Ltd.
                      </div>
                    </li>

                    <li>
                      Dr. Sutanu Chakraborty
                      <div className="text-gray-400 text-xs">
                        Professor, Dept. of Computer Science & Engineering, IIT Madras
                      </div>
                    </li>

                    <li>
                      Dr. Lingaraj Sahoo
                      <div className="text-gray-400 text-xs">
                        Professor, Dept. of Bioscience and Bioengineering, IIT Guwahati & Adj. Prof., Jifu University, JAPAN
                      </div>
                    </li>

                    <li>
                      <strong>Interactive Q & A Session</strong> - Discussion with all speakers
                    </li> 

                  </ul>
                </div>
              </div>
              
            
              <div className="flex gap-6">
                <div className="text-white font-semibold w-32">
                  01:00 PM – 01:45 PM
                </div>

                <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                  <h3 className="text-white font-bold text-lg">
                    Lunch Break
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Take a break and enjoy a delicious lunch with great company.
                  </p>
                  </div>
              </div>

                <div className="flex gap-6">
  <div className="text-white font-semibold w-32">
    01:45 PM – 2:00 PM
  </div>

  <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
    <h3 className="text-white font-bold text-lg">
      Rhythm & Resonance
    </h3>

    <p className="text-gray-400 text-sm">
      Celebrating Harmony in Life, Purpose and Career Path: A Musical Reflection by Bedashree Sahoo
    </p>
  </div>
</div>
                  
                    <div className="flex gap-6">
  <div className="text-white font-semibold w-32">
    02:00 PM – 4:00 PM
  </div>

  <div>

    <h3 className="text-white font-bold text-lg">
      Plenary Sessions
    </h3>



   <h2 className="text-3xl font-bold text-white mb-10">
  Domain-Specific Plenary Sessions
</h2>

<div className="grid md:grid-cols-2 gap-8">

  {/* CARD 1 */}
  <div className="bg-[#0b1e3a] p-8 rounded-2xl shadow-lg">

    <div className="flex items-center gap-3 mb-3">
      <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded">
        P1
      </span>
      <h3 className="text-xl font-bold text-white">
        Civil, Staff & Defence Services
      </h3>
    </div>

    <p className="text-gray-400 italic mb-6">
      "From Aspirant to Officer: Strategy, Resilience & Ethical Leadership in Public Service"
    </p>

    {/* Moderator Box */}
    <div className="bg-[#1f2937] p-4 rounded-lg mb-6 border-l-4 border-White">
      <p className="text-orange-400 text-xs font-bold">MODERATOR</p>
      <p className="text-white font-semibold">
        Dr. Jubilee Purkayastha
      </p>
      <p className="text-gray-400 text-sm">
Scientist F & Joint Director, INMAS DRDO ,Ministry Of Defence , Govt. OF India      </p>
    </div>

    {/* Speakers */}
    <ul className="space-y-3 text-gray-300">

      <li>
        <span className="text-orange-400 mr-2">•</span>
        Lt. Raj Kumar Thakur
        <div className="text-gray-500 text-sm">
          Officer, Combined Defence Services (CDS), Ministry of Defence, Government of India
        </div>
      </li>

      <li>
        <span className="text-orange-400 mr-2">•</span>
        2.	Mr. Shantanu Singh 
        <div className="text-gray-500 text-sm">
          IFS Officer,  UPSC Civil Services , Govt Of India
        </div>
      </li>

      <li>
        <span className="text-orange-400 mr-2">•</span>
       3.	Mr.Pradyumna Mohapatra  
        <div className="text-gray-500 text-sm">
          IES, General Manager, ITS, BSNL, Balasore, Govt. Of India
        </div>
      </li>
      <li>
        <span className="text-orange-400 mr-2">•</span>
       4.	Dr. Pravakar Mohanty 
        <div className="text-gray-500 text-sm">
          Scientist ‘E’ & Joint Director (R&D), Department of Science & Technology, Government of India
        </div>
      </li>
      <li>
        <span className="text-orange-400 mr-2">•</span>
       5.	Mr.Purusottam Mishra   
        <div className="text-gray-500 text-sm">
OAS) Assistant Collector, Govt.Of Odisha        </div>
      </li>

    </ul>

  </div>


  {/* CARD 2 */}

  <div className="bg-[#111827] p-8 rounded-2xl shadow-lg">

    <div className="flex items-center gap-3 mb-3">
      <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded">
        P2
      </span>
      <h3 className="text-xl font-bold text-white">
        Higher Education, Academia & Research
      </h3>
    </div>

    <p className="text-gray-400 italic mb-6">
      "Knowledge with Character: Research, Reflection & Responsibility"
    </p>

    {/* Moderator */}
    <div className="bg-[#1f2937] p-4 rounded-lg mb-6 border-l-4 border-orange-500">
      <p className="text-orange-400 text-xs font-bold">MODERATOR</p>
      <p className="text-white font-semibold">
        Dr. Sutanu Chakraborty
      </p>
      <p className="text-gray-400 text-sm">
        Professor, Dept. of Computer Science, IIT Madras
      </p>
    </div>

    <ul className="space-y-3 text-gray-300">

      <li>
        <span className="text-orange-400 mr-2">•</span>
       Dr.Lingaraj Sahoo 
        <div className="text-gray-500 text-sm">
         Professor, Dept. of Bioscience and Bioengineering, IIT Guwahati & Adj.Prof. Jifu University, JAPAN 
        </div>
      </li>

      <li>
        <span className="text-orange-400 mr-2">•</span>
        2.	Dr. Batakrushna Tripathy 
        <div className="text-gray-500 text-sm">
          Assistant Prof. SOA
        </div>
      </li>

      <li>
        <span className="text-orange-400 mr-2">•</span>
        3.	Mr.Sanchari Kundu 
        <div className="text-gray-500 text-sm">
         PhD.Scholar, Virginia Tech USA
        </div>
      </li>
      <li>
        <span className="text-orange-400 mr-2">•</span>
       4.	Dr.Sudhanshu Sekhar Sahoo   
        <div className="text-gray-500 text-sm">
          Associate Prof. OUTR
        </div>
      </li>
      <li>
        <span className="text-orange-400 mr-2">•</span>
      5.	Mr.Abheek Ghosh 
        <div className="text-gray-500 text-sm">
          PhD. Scholar, Oxford university
        </div>
      </li>
      <li>
        <span className="text-orange-400 mr-2">•</span>
      	6.	Mr. Rishikeshan Pradha
        <div className="text-gray-500 text-sm">
         PhD. Scholar, NISER BBSR
        </div>
      </li> 
      </ul>
</div>
       <div className="bg-[#111827] p-8 rounded-2xl shadow-lg">
{/* CARD 3 */}
    <div className="flex items-center gap-3 mb-3">
      <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded">
        P3
      </span>
      <h3 className="text-xl font-bold text-white">
        Management, Corporate and Business with Engineering Industries
      </h3>
    </div>

    <p className="text-gray-400 italic mb-6">
      "Corporate Leadership with Conscience: Strategy, Sustainability & Long-Term Excellence"
    </p>

    {/* Moderator */}
    <div className="bg-[#1f2937] p-4 rounded-lg mb-6 border-l-4 border-orange-500">
      <p className="text-orange-400 text-xs font-bold">MODERATOR</p>
      <p className="text-white font-semibold">
        Mr. Surya Prakash Mahapatr
      </p>
      <p className="text-gray-400 text-sm">
       Global Head –Talent Transformation, Wipro Ltd
      </p>
    </div>

    <ul className="space-y-3 text-gray-300">

      <li>
        <span className="text-orange-400 mr-2">•</span>
      1.	Mr.Kalinga Keshari Rath 
        <div className="text-gray-500 text-sm">
MD, EVOS buildcon Pvt. Ltd        </div>
      </li>

      <li>
        <span className="text-orange-400 mr-2">•</span>
        2.	Mr.Siddharth Das 
        <div className="text-gray-500 text-sm">
          AI Engineer at FORD, USA
        </div>
      </li>

      <li>
        <span className="text-orange-400 mr-2">•</span>
        3.	Mr.Biswojit Gouda 
        <div className="text-gray-500 text-sm">
         Seniour Salesforce Consultant ,Minneapolis
        </div>
      </li>
      <li>
        <span className="text-orange-400 mr-2">•</span>
     4.	Mr.Prakruti Ranjan Sahoo 
        <div className="text-gray-500 text-sm">
          IIM Raipur
        </div>
      </li>
      <li>
        <span className="text-orange-400 mr-2">•</span>
     	5.	Mr.Shirendu Banik 
        <div className="text-gray-500 text-sm">
          IIM Amritsar
        </div>
      </li>
      <li>
        <span className="text-orange-400 mr-2">•</span>
    6.	Mrs.Mahasweta Behera, 
        <div className="text-gray-500 text-sm">
         Manager,Customer Success
        </div>
      </li>
      <li>
        <span className="text-orange-400 mr-2">•</span>
    7.	Er. Prasanta Kumar Panda
        <div className="text-gray-500 text-sm">
        Principal Data Scientist , TCS, BBSR
        </div>
      </li>
      <li>
        <span className="text-orange-400 mr-2">•</span>
   8.	Ms.Pratikshya Pattnaik  
        <div className="text-gray-500 text-sm">
         Human Capital at Dellolite USI
        </div>
      </li>
      <li>
        <span className="text-orange-400 mr-2">•</span>
  9.	Titash Nandi 
        <div className="text-gray-500 text-sm">
         IIM Ahmedabad, Operation Design Lead at Curefit /Ex Consultant DELOITTE
        </div>
      </li>
      <li>
      10.	Kaibalya Kumar Sahoo 
        <div className="text-gray-500 text-sm">
        Assistant Manager at Odisha Hydro Power Corporation
        </div>
      </li>
      </ul>
</div>
  {/* CARD 4 */}
<div className="bg-[#111827] p-8 rounded-2xl shadow-lg">



<div className="flex items-center gap-3 mb-3">
      <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded">
        P4
      </span>
      <h3 className="text-xl font-bold text-white">
Agricultural and technology      </h3>
    </div>

    <p className="text-gray-400 italic mb-6">
     "Where Flower meets fire"
    </p>

    {/* Moderator */}
    <div className="bg-[#1f2937] p-4 rounded-lg mb-6 border-l-4 border-orange-500">
      <p className="text-orange-400 text-xs font-bold">MODERATOR</p>
      <p className="text-white font-semibold">
        Dr. Hrushikesh Senapati 
      </p>
      <p className="text-gray-400 text-sm">
      Former Dean, Agriculture
      </p>
    </div>

    <ul className="space-y-3 text-gray-300">

      <li>
        <span className="text-orange-400 mr-2">•</span>
      1. Dr.Trinath Mahararana, 
        <div className="text-gray-500 text-sm">
Former Professor & Head, Odisha University of Agriculture and Technology (OUAT), Bhubaneswar        </div>
      </li>

      <li>
        <span className="text-orange-400 mr-2">•</span>
        2. Dr.Pramod Kumar Rout
        <div className="text-gray-500 text-sm">
         Former Principal Scientist (Animal Science), Indian Council of Agricultural Research (ICAR), New Delhi
        </div>
      </li>

      <li>
        <span className="text-orange-400 mr-2">•</span>
        3.	Dr.Kalikinkar Bandyopadhyay
        <div className="text-gray-500 text-sm">
         Principal Scientist, ICAR -Indian Institute of Water Management (IIWM), Bhubaneswar
        </div>
      </li>
      <li>
        <span className="text-orange-400 mr-2">•</span>
     4. Dr.Priya Ranjan Sahoo, 
        <div className="text-gray-500 text-sm">
         Aquaculture Specialist, Living Stone International University, South Africa
        </div>
      </li>
      <li>
        <span className="text-orange-400 mr-2">•</span>
     	5.	Mr.Hari Prasanna Sahoo 
        <div className="text-gray-500 text-sm">
         PhD.Scholar Agriculture BHU
        </div>
      </li>
      
      
      

    </ul>

  </div>

</div>

    

  </div>
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

