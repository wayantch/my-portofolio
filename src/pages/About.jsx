import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBasketballBall, FaMusic, FaSpotify, FaTv } from "react-icons/fa";

const About = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  function getDuration(startDateStr, isPresent) {
    const startDate = new Date(startDateStr);
    const now = new Date();

    const startMonth = startDate.getMonth();
    const startYear = startDate.getFullYear();

    const nowMonth = now.getMonth();
    const nowYear = now.getFullYear();

    const totalMonths = (nowYear - startYear) * 12 + (nowMonth - startMonth);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const startLabel = startDate.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    const endLabel = isPresent
      ? "Sekarang"
      : now.toLocaleString("default", {
          month: "short",
          year: "numeric",
        });

    let durationStr = "";
    if (years > 0) durationStr += `${years} tahun${years > 1 ? "" : ""} `;
    if (months > 0) durationStr += `${months} bulan${months > 1 ? "" : ""}`;

    return `${startLabel} - ${endLabel} · ${durationStr.trim()}`;
  }

  const experiences = [
    {
      id: 1,
      company: "Politeknik Takumi",
      role: "Frontend Developer",
      startDate: "2024-09-01",
      isPresent: true,
      description:
        "Saya bertanggung jawab bikin tampilan website yang responsif dan user-friendly. Biasanya saya pakai HTML, CSS, Tailwind CSS, dan React.js buat ngejalanin desain UI/UX ke bentuk kode yang fungsional. Saya juga kerja bareng tim backend buat integrasi API biar performa aplikasinya tetap optimal.",
      skills: "CSS, Web Design, Tailwind, React.js, dan lainnya (+10 skill)",
      logo: "assets/images/takumi.jpg",
    },
    {
      id: 2,
      company: "Politeknik Takumi",
      role: "Account Manager",
      startDate: "2024-09-01",
      isPresent: true,
      description:
        "Saya jadi penghubung antara PT Minori dan tim internal (dosen-dosen), bantu komunikasi dan koordinasi proyek biar lancar. Selain itu, saya juga bikin laporan dan bantu urusan administratif buat kerja sama antara kampus dan perusahaan.",
      skills: "SEO, Web Design, dan lainnya (+1 skill)",
      logo: "assets/images/takumi.jpg",
    },
  ];

  const EDUCATION = [
    {
      id: 1,
      img: "assets/images/10290.png",
      institution: "SMK BINAMITRA",
      degree: "Teknik Komputer dan Jaringan (TKJ)",
      duration: "2020 - 2023",
      description:
        "Di sini saya belajar banyak tentang jaringan komputer, hardware, dan dasar-dasar pemrograman yang jadi pondasi awal karier saya di dunia IT.",
    },
    {
      id: 2,
      img: "assets/images/takumi.jpg",
      institution: "POLITEKNIK TAKUMI",
      degree: "Information Technology",
      duration: "2023 - Sekarang",
      description:
        "Di kampus ini, saya semakin mendalami bidang front-end development dan terus mengasah kemampuan saya di berbagai teknologi modern seperti HTML, CSS, Tailwind, React, dan lainnya.",
    },
  ];

  const HOBBIES = [
    {
      id: 1,
      icon: <FaBasketballBall className="text-2xl text-gray-300" />,
      name: "Basket",
      description:
        "Main basket tuh jadi cara saya buat tetap aktif dan belajar kerja sama tim juga. Seru banget kalau udah masuk lapangan!",
    },
    {
      id: 2,
      icon: <FaMusic className="text-2xl text-gray-300" />,
      icon2: (
        <FaSpotify
          className="text-2xl text-gray-300 cursor-pointer"
          onClick={() =>
            window.open(
              "https://open.spotify.com/playlist/3gcTNM9MXLhoo3Q9Vucfyf?si=c3599c9019b94253",
              "_blank"
            )
          }
        />
      ),
      name: "Musik",
      description:
        "Musik udah kayak pelarian saya sih. Suka banget dengerin lagu atau main alat musik. Kalau mau tau selera musik saya, bisa klik icon Spotify nya ya 😄",
    },
    {
      id: 3,
      icon: <FaTv className="text-2xl text-gray-300" />,
      name: "Nonton Anime & Film",
      description:
        "Nonton anime atau film tuh healing versi saya. Bisa dapet hiburan, sekaligus sudut pandang baru dari cerita-cerita yang keren.",
    },
  ];

  return (
    <div>
      <motion.h1
        className="text-3xl font-semibold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        Tentang Saya
      </motion.h1>

      <motion.p
        className="text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}>
        Halooo👋 Nama saya Wayan Deva Adhisthanaya. Saya adalah seorang Frontend
        Developer asal Indonesia yang tertarik banget dengan dunia web
        development. Saya suka bikin tampilan web yang menarik dan responsif.
        Saya juga suka belajar teknologi baru dan terus meningkatkan
        keterampilan saya. Saat ini, saya lagi fokus di
        <strong> React.js</strong> dan <strong>Tailwind CSS</strong>, dan saya
        percaya bahwa desain yang baik itu penting banget untuk pengalaman
        pengguna yang lebih baik. Saya senang berkolaborasi dengan tim dan
        berbagi pengetahuan. Selain itu, saya juga suka nulis blog tentang
        pengalaman saya di dunia web development. Di waktu luang, saya suka main
        basket, dengerin musik, dan nonton anime. Saya percaya bahwa
        keseimbangan antara kerja dan hobi itu penting untuk menjaga kreativitas
        dan semangat. Terima kasih sudah mengunjungi halaman tentang saya. Jika
        ada pertanyaan atau mau ngobrol, jangan ragu buat hubungi saya. Saya
        senang bisa berbagi pengetahuan dan pengalaman dengan orang lain. Mari
        kita belajar dan tumbuh bersama di dunia teknologi ini!
      </motion.p>

      <motion.hr
        className="my-6 border-gray-700"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}>
        {[
          "Saya suka eksplorasi hal-hal baru di dunia pemrograman, terutama yang berhubungan dengan tampilan dan pengalaman pengguna.",
          "Saat ini saya sedang fokus memperdalam React.js karena menurut saya framework ini powerful banget untuk bikin website yang interaktif dan responsif.",
          "Buat saya, jadi developer bukan cuma soal ngoding, tapi juga soal bagaimana menciptakan pengalaman digital yang nyaman, menarik, dan mudah digunakan.",
        ].map((text, index) => (
          <motion.p
            key={index}
            className="text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}>
            {text}
          </motion.p>
        ))}
      </motion.div>

      {/* Education Section */}
      <div className="mt-10">
        <h1 className="text-2xl font-semibold text-white">Pendidikan</h1>
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="mt-4 bg-gray-700 flex flex-wrap gap-4 items-center p-4 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}>
            <img
              src={edu.img}
              className="w-32 h-32 rounded-full object-cover"
              alt={edu.institution}
            />
            <div className="flex flex-col justify-center md:ml-4">
              <h3 className="text-xl font-semibold text-white">
                {edu.institution}
              </h3>
              <p className="text-gray-400">{edu.duration}</p>
              <p className="text-gray-300">{edu.degree}</p>
              <p className="text-gray-300 max-w-5xl">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Pengalaman</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="border p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}>
              <div className="flex items-center space-x-4">
                <img src={exp.logo} alt={exp.company} className="w-12 h-12" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {exp.company}
                  </h3>
                  <p className="text-gray-300">{exp.role}</p>
                  <p className="text-gray-300 text-sm">
                    {getDuration(exp.startDate, exp.isPresent)}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-gray-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
        {/* Hobby Section */}
        <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10">Hobi</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {HOBBIES.map((hobby, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-1 p-6 rounded-lg bg-gray-800/40 text-gray-300 outline-2 outline-gray-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="flex justify-between items-center gap-3 text-lg font-semibold">
                <div className="flex gap-2">
                  {hobby.icon} {hobby.name}
                </div>{" "}
                 {hobby.icon2}
              </div>
              <p className="text-sm text-gray-400 mt-1 pl-8">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
