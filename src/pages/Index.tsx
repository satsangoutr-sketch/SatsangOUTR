import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import templeImg from "@/assets/WhatsApp Image 2026-03-12 at 23.40.58.jpeg";
import outrGroup from "@/assets/outr-group.png";
import statueClose from "@/assets/statue-close.jpeg";

import Layout from "@/components/Layout";
import RegistrationDialog from "@/components/RegistrationDialog";
import UpcomingEventCard from "@/components/UpcomingEventCard";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Index = () => {
  const images = [templeImg, outrGroup];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <RegistrationDialog />

      {/* Fade Image Gallery */}
      <section className="relative h-[450px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="gallery"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </section>

      {/* Hero Section */}
      <section className="relative bg-[#243447] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, hsl(200 70% 55% / 0.15), transparent 60%), radial-gradient(circle at 70% 30%, hsl(200 60% 45% / 0.1), transparent 50%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible">
            <motion.h1 custom={0} variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold text-gradient-saffron mb-6">
              Satsang – <span className="text-gradient-saffron">The Man Making Industries</span>
            </motion.h1>

            <motion.p custom={1} variants={fadeUp} className="text-lg md:text-xl text-gradient-saffron leading-relaxed mb-10">
              A socio-cultural and philanthropic institution dedicated to character building, spiritual awakening, and collective upliftment.
            </motion.p>

            <motion.div custom={2} variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link to="/about" className="px-8 py-3 rounded-lg bg-saffron-gradient text-white font-medium shadow-saffron hover:opacity-90 transition-opacity">
                Learn More
              </Link>
              <a
                href="https://www.satsang.org.in/home"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg bg-white text-gradient-saffron font-medium hover:opacity-90 transition-opacity"
              >
                Visit Official Website
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Last Photo */}
      <section className="bg-[#243447]">
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <img
              src={statueClose}
              alt="Sree Sree Thakur Anukulchandra"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <UpcomingEventCard />

      {/* Our Philosophy */}
      <section className="py-20 bg-[#243447]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-saffron">
              OUR <span className="text-gradient-saffron">PHILOSOPHY</span>
            </h2>
            <h3 className="font-heading text-2xl text-center text-gradient-saffron mb-8">Being and Becoming</h3>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-gradient-saffron text-lg leading-relaxed text-center">
                The ideology of Satsang is a comprehensive, life-centric philosophy focusing on the balanced development of the individual mentally and spiritually, physically.
              </p>
              <blockquote className="border-l-4 border-orange-400 pl-6 py-2">
                <p className="font-heading text-xl italic text-gradient-saffron">
                  "To uphold one's life and growth with that of others is Dharma."
                </p>
                <cite className="text-gradient-saffron text-sm mt-2 block">— Sree Sree Thakur Anukulchandra, Satyanusaran</cite>
              </blockquote>
              <p className="text-gradient-saffron text-lg leading-relaxed text-center">
                Centered around the Living Ideal, we practice Yajan (Self-adjustment), Yaajan (Nurturing others), and Ishtabhriti (Daily love-offering) to transform negative passions into constructive energy for universal well-being.
              </p>
              <p className="text-gradient-saffron text-lg leading-relaxed text-center font-medium">
                Satsang Vihar New Delhi is an integral branch, completely attached and dedicated to the spiritual lineage and administrative guidance of Satsang Ashram, Deoghar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-[#243447]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-gradient-saffron">
              Our <span className="text-gradient-saffron">Mission</span>
            </h2>
            <p className="text-gradient-saffron text-lg leading-relaxed">
              "Do never die, nor cause death; but resist death to death." This website introduces you to the man who roared out this extreme optimism against a backdrop of extreme violence and sadness devouring the world. He is SREE SREE THAKUR ANUKULCHANDRA, Fulfiller the Best of the age, whose clarion call to resist death, of all sorts, physical and spiritual, has rejuvenated innumerable dwindling souls and awakened umpteenth slumbering minds.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
