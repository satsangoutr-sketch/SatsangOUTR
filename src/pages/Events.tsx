import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Instagram, Calendar, Clock, Video, Sparkles } from "lucide-react";
import confidenceSession from "@/assets/confidence-session.png";
import pcodSession from "@/assets/pcod-session.jpeg";

const Events = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-cream min-h-[60vh]">
        <div className="container mx-auto px-4">

          
          <motion.div
            className="max-w-6.5xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8">
              <span className="text-gradient-saffron">Upcoming Event Schedule</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-2">
              🎓 Comprehensive Career Counselling Seminar
            </h3>
            <p className="text-center text-muted-foreground mb-8">SATSANG OUTR × SATSANG VIHAR BHUBANESWAR</p>
            <div className="text-center mt-8">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfHAY_jPzZibZcqvQRCHFgbsoCZAi-n0Ub69L4HrjqUpLQuVQ/viewform?usp=header"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-saffron-gradient text-primary-foreground font-semibold text-lg shadow-saffron hover:opacity-90 transition-opacity"
  >
    📋 Register Now
  </a>
</div>

         
            
            <div className="rounded-2xl border border-primary/20 bg-card shadow-lg overflow-hidden">
  <div className="overflow-x-auto">

    <table className="w-full text-left text-sm border-collapse">

      <thead>
        <tr className="bg-primary text-primary-foreground">
          <th className="px-4 py-3 font-semibold border-r border-primary-foreground/30">
            Time
          </th>

          <th className="px-4 py-3 font-semibold border-r border-primary-foreground/30">
            Session / Activity
          </th>

          <th className="px-4 py-3 font-semibold">
            Details & Speakers
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-border">

     
        <tr className="hover:bg-muted/40">
          <td className="px-4 py-3 font-medium border-r border-border whitespace-nowrap">
            09:00 – 10:00
          </td>

          <td className="px-4 py-3 font-medium border-r border-border">
            Registration & Orientation
          </td>

          <td className="px-4 py-3 text-muted-foreground">
            Welcome of students and seminar overview.
          </td>
        </tr>



        <tr className="hover:bg-muted/40">
          <td className="px-4 py-3 font-medium border-r border-border whitespace-nowrap">
            10:00 – 10:15
          </td>

          <td className="px-4 py-3 font-medium border-r border-border">
            Inaugural Session
          </td>

          <td className="px-4 py-3">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Diya Prajwalan</strong></li>
              <li>Theme song dedicated to young students</li>
            </ul>
          </td>
        </tr>


        
        <tr className="hover:bg-muted/40">
          <td className="px-4 py-3 font-medium border-r border-border whitespace-nowrap">
            10:15 – 11:00
          </td>

          <td className="px-4 py-3 font-medium border-r border-border">
            Address by Speakers
          </td>

          <td className="px-4 py-3">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Welcome Address:</strong> Dr. Banabhari Mishra</li>
              <li><strong>Theme Address:</strong> Dr. Batakrushna Tripathy</li>
              <li><strong>Mr. Surya Prakash Mahapatra</strong> – WIPRO</li>
              <li><strong>Dr. Sutanu Chakraborty</strong> – IIT Madras</li>
              <li><strong>Dr. Jubilee Purkayastha</strong> – INMAS DRDO</li>
              <li><strong>Dr. Lingraj Sahoo</strong> – IIT Guwahati</li>
              <li><strong>Mr. Kalinga Keshari Rath</strong> – EVOS Buildcon</li>
              <li><strong>Dr. Pravakar Mohanty</strong> – DST Govt of India</li>
            </ul>
          </td>
        </tr>


      
        <tr className="bg-muted/20">
          <td className="px-4 py-3 font-medium border-r border-border whitespace-nowrap">
            11:00 – 11:15
          </td>

          <td className="px-4 py-3 font-medium border-r border-border">
            TEA BREAK
          </td>

          <td className="px-4 py-3 text-muted-foreground">
            Networking & Refreshments
          </td>
        </tr>


       
        <tr className="hover:bg-muted/40">
          <td className="px-4 py-3 font-medium border-r border-border whitespace-nowrap">
            11:15 – 1:00
          </td>

          <td className="px-4 py-3 font-medium border-r border-border">
            Career Counselling Sessions
          </td>

          <td className="px-4 py-3">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Dr. Sutanu Chakraborty</strong> – IIT Madras</li>
              <li><strong>Dr. Jubilee Purkayastha</strong> – INMAS DRDO</li>
              <li><strong>Mr. Surya Prakash Mahapatra</strong> – Wipro</li>
              <li><strong>Dr. Lingraj Sahoo</strong> – IIT Guwahati</li>
            </ul>

            <p className="mt-2 font-medium">
              Interactive Q & A Session
            </p>
          </td>
        </tr>


       
        <tr className="bg-muted/20">
          <td className="px-4 py-3 font-medium border-r border-border whitespace-nowrap">
            1:00 – 2:00
          </td>

          <td className="px-4 py-3 font-medium border-r border-border">
            LUNCH BREAK
          </td>

          <td className="px-4 py-3 text-muted-foreground">
            —
          </td>
        </tr>


       
        <tr className="hover:bg-muted/40">
          <td className="px-4 py-3 font-medium border-r border-border whitespace-nowrap">
            2:00 – 2:20
          </td>

          <td className="px-4 py-3 font-medium border-r border-border">
            Rhythm & Resonance
          </td>

          <td className="px-4 py-3">
            Celebrating Harmony in Life, Purpose and Career Path
          </td>
        </tr>


     
        <tr className="hover:bg-muted/40">
          <td className="px-4 py-3 font-medium border-r border-border whitespace-nowrap">
            2:20 – 3:50
          </td>

          <td className="px-4 py-3 font-medium border-r border-border">
            Domain-Specific Plenary Sessions
          </td>

          <td className="px-4 py-3">
            Concurrent sessions across domains
          </td>
        </tr>


        
        <tr className="hover:bg-muted/40">
          <td className="px-4 py-3 font-medium border-r border-border whitespace-nowrap">
            3:50 – 4:00
          </td>

          <td className="px-4 py-3 font-medium border-r border-border">
            Valedictory Session
          </td>

          <td className="px-4 py-3">
            Certificate Distribution & Vote of Thanks
          </td>
        </tr>

      </tbody>

    </table>

  </div>
</div>

            
<div className="text-center mt-8">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfHAY_jPzZibZcqvQRCHFgbsoCZAi-n0Ub69L4HrjqUpLQuVQ/viewform?usp=header"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-saffron-gradient text-primary-foreground font-semibold text-lg shadow-saffron hover:opacity-90 transition-opacity"
  >
    📋 Register Now
  </a>
</div>

          </motion.div>

          
          <motion.h2
            className="font-heading text-2xl md:text-3xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-gradient-saffron">Past Events</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg border border-primary/20 bg-card relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold shadow-lg">
                  Event Ended
                </span>
              </div>

              <div className="relative group">
                <img
                  src={pcodSession}
                  alt="PCOS/PCOD Awareness Session"
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="text-lg font-bold text-background drop-shadow-lg">
                    🎯 PCOS/PCOD Awareness Session
                  </h3>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs">
                    <Calendar size={14} /> 26th Feb 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs">
                    <Clock size={14} /> 7:00 PM
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs">
                    <Video size={14} /> Online
                  </span>
                </div>

                <p className="text-xs text-center font-medium text-muted-foreground">
                  SATSANG OUTR | In collaboration with RIPS, Berhampur
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  An informative session on PCOS/PCOD awareness guided by health experts, promoting early care and open conversations about women's health.
                </p>

                <div className="rounded-lg bg-saffron-light p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-saffron-gradient flex items-center justify-center text-primary-foreground text-lg shrink-0 shadow-saffron">
                    🩺
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">Dr. Aarati Nayak</p>
                    <p className="text-muted-foreground text-xs">Sr. Consultant OBGYN, BBSR</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">Follow us:</p>
                  <a
                    href="https://www.instagram.com/satsang_outr?igsh=MXV1b3VpNGw0Y3ZqbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-background font-medium text-xs hover:opacity-90 transition-opacity"
                  >
                    <Instagram size={14} /> @satsang_outr
                  </a>
                </div>
              </div>
            </motion.div>

           
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg border border-primary/20 bg-card relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold shadow-lg">
                  Event Ended
                </span>
              </div>

              <div className="relative group">
                <img
                  src={confidenceSession}
                  alt="Confidence Building Session"
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="text-lg font-bold text-background drop-shadow-lg">
                    🎯 Confidence Building Session
                  </h3>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs">
                    <Calendar size={14} /> 22nd Feb 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs">
                    <Clock size={14} /> 7:00 PM
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs">
                    <Video size={14} /> Online
                  </span>
                </div>

                <p className="text-sm text-center font-medium text-foreground">
                  ✨ Unlock your inner confidence. Speak boldly. Shine brightly. ✨
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  An inspiring session with practical strategies to boost confidence, improve communication, and present your best self!
                </p>

                <div className="rounded-lg bg-saffron-light p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-saffron-gradient flex items-center justify-center text-primary-foreground text-lg shrink-0 shadow-saffron">
                    🎤
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">Bikram Keshari Mohanty</p>
                    <p className="text-muted-foreground text-xs">Ollywood Actor & Motivational Speaker</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">Follow us:</p>
                  <a
                    href="https://www.instagram.com/satsang_outr?igsh=MXV1b3VpNGw0Y3ZqbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-background font-medium text-xs hover:opacity-90 transition-opacity"
                  >
                    <Instagram size={14} /> @satsang_outr
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

         
          <motion.p
            className="text-center mt-14 text-3xl md:text-5xl font-bold text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            ✨ Stay tuned for more Upcoming Sessions ✨
          </motion.p>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
