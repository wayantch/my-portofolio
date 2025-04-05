import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaEnvelope,
  FaQuoteRight,
} from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useFetchTestimonial from "../hooks/useFetchTestimonial";

const Homepage = () => {
  // Hooks
//   const { testimonials, loading, error } = useFetchTestimonial();

  const SKILLS = [
    { name: "HTML", icon: <FaHtml5 className="text-xl text-orange-600" /> },
    { name: "CSS", icon: <FaCss3 className="text-xl text-blue-600" /> },
    {
      name: "JavaScript",
      icon: <FaJs className="text-xl text-yellow-500" />,
    },
    { name: "React", icon: <FaReact className="text-xl text-cyan-500" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-xl text-blue-400" />,
    },
    { name: "PHP", icon: <FaPhp className="text-xl text-indigo-400" /> },
    {
      name: "Laravel",
      icon: <FaLaravel className="text-xl text-red-500" />,
    },
    { name: "MySQL", icon: <SiMysql className="text-xl text-blue-700" /> },
  ];

  const testimonials = [
    {
      name: "Samuel",
      role: "Pengajar Bahasa Inggris di ILP Cikarang",
      image:
        "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
      quote:
        "Terima kasih banyak untuk bantuannya dalam membuat website ILP Cikarang! Hasilnya sangat profesional, responsif, dan sesuai dengan harapan kami. Proses komunikasinya juga cepat dan mudah dipahami.",
    },
    {
      name: "Bu Rina",
      role: "Owner Ayumi Nihongo Gakkou",
      image:
        "https://img.freepik.com/free-photo/portrait-young-asian-businesswoman-standing-smiling-crossed-arms_7861-3387.jpg",
      quote:
        "Saya sangat puas dengan hasil website Ayumi. Desainnya sesuai keinginan, responsif, dan mudah digunakan oleh calon siswa. Komunikasinya juga cepat dan jelas sepanjang proses pengerjaan.",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative space-y-12">
      {/* Header */}
      <motion.div
        className="flex flex-wrap justify-between items-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}>
        <div>
          <p className="text-lg">Haloo,</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Saya Wayan Deva Adhisthanaya
          </h1>
        </div>
        <div className="lg:text-end text-gray-400">
          <p>Berasal dari Bekasi, Indonesia</p>
          <p> Remote</p>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        className="p-4 outline outline-gray-600 rounded-lg bg-gray-800/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}>
        <p className="text-gray-300">
          Saya lagi kuliah di jurusan <strong>Teknologi Informasi</strong> di{" "}
          <strong>
            <a
              href="https://takumi.ac.id"
              target="_blank"
              className="underline">
              Politeknik Takumi
            </a>
          </strong>
          . Saya fokus di <strong>Frontend Development</strong> karena saya suka
          bikin tampilan web yang menarik dan mudah dipakai. Sekarang saya lagi
          ngulik <strong>React.js, Tailwind CSS, dan Flutter</strong> buat bikin
          aplikasi yang cepat, responsif, dan pastinya nyaman buat pengguna.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}>
        <h1 className="text-xl font-semibold flex items-center gap-2 text-white">
          <IoCodeSlash className="text-xl" /> Keahlian Saya
        </h1>
        <div className="mt-3 flex flex-wrap gap-4">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 px-6 py-2 outline-2 outline-gray-600 rounded-lg bg-gray-800/40 text-gray-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}>
              {skill.icon} {skill.name}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="outline outline-gray-400 bg-gray-600 p-4 rounded-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}>
        <h1 className="text-xl font-semibold">Yuk, Kerja Bareng!</h1>
        <p className="text-gray-300">
          Lagi cari developer yang antusias buat bantuin proyek kamu? Coba intip
          dulu beberapa{" "}
          <Link to="/projects" className="text-blue-400">
            proyek{" "}
          </Link>
          yang pernah saya kerjain. Kalau cocok, saya open banget buat
          kolaborasi bareng!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-3 bg-gradient-to-r cursor-pointer from-gray-900 to-gray-950 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          onClick={() =>
            (window.location.href = "/contact")
          }>
          <FaEnvelope /> Yuk, Ngobrol!
        </motion.button>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold flex items-center gap-2 text-white">
            <FaQuoteRight className="text-xl" /> Testimoni
          </h1>
          <a href="#" className="text-sm text-gray-400">
            Lihat Semua
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className=" p-4 bg-gradient-to-bl from-gray-950 to-gray-900 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              variants={fadeIn}>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Homepage;
