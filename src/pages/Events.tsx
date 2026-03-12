import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Events = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-cream min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* TITLE */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-gradient-saffron">
              Career Counselling Seminar
            </h1>
            <p className="text-muted-foreground mt-2">
              SATSANG OUTR × SATSANG VIHAR BHUBANESWAR
            </p>
          </motion.div>

          {/* REGISTER BUTTON */}
          <div className="text-center mb-10">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfHAY_jPzZibZcqvQRCHFgbsoCZAi-n0Ub69L4HrjqUpLQuVQ/viewform?usp=header"
              target="_blank"
              className="px-8 py-3 rounded-xl bg-saffron-gradient text-white font-semibold shadow-saffron hover:opacity-90"
            >
              📋 Register Now
            </a>
          </div>

          

          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-primary/20 mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-primary">
                Event Schedule
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">

                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Time</th>
                    <th className="px-6 py-3 text-left">Session</th>
                    <th className="px-6 py-3 text-left">Details</th>
                  </tr>
                </thead>

                <tbody className="divide-y">

                  <tr className="hover:bg-muted/40">
                    <td className="px-6 py-4 font-medium">
                      09:00 – 10:00
                    </td>
                    <td className="px-6 py-4">
                      Registration & Orientation
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      Welcome of students and seminar overview
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/40">
                    <td className="px-6 py-4 font-medium">
                      10:00 – 10:15
                    </td>
                    <td className="px-6 py-4">
                      Inaugural Session
                    </td>
                    <td className="px-6 py-4">
                      Diya Prajwalan & Theme Song
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/40">
                    <td className="px-6 py-4 font-medium">
                      10:15 – 10:45
                    </td>
                    <td className="px-6 py-4">
                      Speaker Addresses
                    </td>
                   <td className="px-4 py-3">
  <ul className="list-disc list-inside space-y-1">
    <li>
      <strong>Welcome Address:</strong> Dr. Banabhari Mishra
     <span className="block text-muted-foreground text-sm">
        - Advisor of organising committee (Senior Consultant CVTS, SUMUM, BBSR)
      </span>
    </li>

    <li><strong>Theme Address:</strong> Dr. Batakrushna Tripathy
    <span className="block text-muted-foreground text-sm">
        - Asst. Professor,SOA University
      </span></li>
    <li><strong> Guest Speaker Mr. Surya Prakash Mahapatra</strong> <span className="block text-muted-foreground text-sm">
        - Chairman,SOA 
      </span></li>
    <li><strong>Guest of Honour: Bibhuti Bhusan Biswal <span className="block text-muted-foreground text-sm">
       Vice Chancellor,OUTR
      </span>
    <li><strong>VOTE OF THANKS Dr. Jubilee Purkayastha</strong> <span className="block text-muted-foreground text-sm">
        - Scientist  & Joint Director, INMAS DRDO ,Ministry of Defence, Govt. of India
      </span></li>
   
  </ul>
</td>
                    </td>
                  </tr>

                  <tr className="bg-muted/20">
                    <td className="px-6 py-4 font-medium">
                      10:45 Am - 11:00 Am
                    </td>
                    <td className="px-6 py-4">
                      Tea Break
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      Networking & Refreshments
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/40">
                    <td className="px-6 py-4 font-medium">
                      11:15 – 1:00
                    </td>
                    <td className="px-6 py-4">
                      Career Counselling
                    </td>
                    <td className="px-6 py-4">
                      Expert guidance with interactive Q&A
                    </td>
                  </tr>

                  <tr className="bg-muted/20">
                    <td className="px-6 py-4 font-medium">
                      1:00 – 2:00
                    </td>
                    <td className="px-6 py-4">
                      Lunch Break
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      —
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/40">
                    <td className="px-6 py-4 font-medium">
                      2:00 – 2:20
                    </td>
                    <td className="px-6 py-4">
                      Rhythm & Resonance
                    </td>
                    <td className="px-6 py-4">
                      Harmony in Life, Purpose and Career
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/40">
                    <td className="px-6 py-4 font-medium">
                      2:20 – 3:50
                    </td>
                    <td className="px-6 py-4">
                      Plenary Sessions
                    </td>
                    <td className="px-6 py-4">
                      Domain specific expert talks
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/40">
                    <td className="px-6 py-4 font-medium">
                      3:50 – 4:00
                    </td>
                    <td className="px-6 py-4">
                      Valedictory
                    </td>
                    <td className="px-6 py-4">
                      Certificates & Vote of Thanks
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </motion.div>

          {/* ===================== PLENARY SESSION ===================== */}

          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-primary/20 mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-primary">
                Plenary Session Speakers
              </h2>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-4 text-sm">

              <div>Dr. Sutanu Chakraborty – IIT Madras</div>
              <div>Dr. Jubilee Purkayastha – INMAS DRDO</div>
              <div>Mr. Surya Prakash Mahapatra – WIPRO</div>
              <div>Dr. Lingraj Sahoo – IIT Guwahati</div>

            </div>
          </motion.div>

          {/* ===================== COUNSELLING ===================== */}

          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-primary/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-primary">
                Career Counselling Panel
              </h2>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-4 text-sm">

              <div>Dr. Batakrushna Tripathy</div>
              <div>Dr. Banabhari Mishra</div>
              <div>Mr. Kalinga Keshari Rath</div>
              <div>Dr. Pravakar Mohanty – DST Govt of India</div>

            </div>

          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default Events;
