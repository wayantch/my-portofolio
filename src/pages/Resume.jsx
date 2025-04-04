import React, { useState } from "react";
import { motion } from "framer-motion";

const Resume = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto p-6 px-4 md:px-6 bg-gray-900 text-white rounded-lg shadow-lg mt-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            Wayan Deva Adhisthanaya
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Pengembang Antarmuka (Frontend Developer)
          </p>
        </motion.div>

        {/* Informasi Kontak */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row md:justify-between gap-2 text-sm md:text-base mb-6 text-left">
          <p>
            <strong>Telepon:</strong> +62 877 8118 9068
          </p>
          <p>
            <strong>Email:</strong> wayaandeva123@gmail.com
          </p>
          <p>
            <strong>Alamat:</strong> Perum. Griya Hegar Asri B9 No. 16
          </p>
        </motion.div>

        {/* Ringkasan Profil */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-1">
            Ringkasan Profil
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Seorang pengembang antarmuka yang memiliki semangat tinggi dalam
            membangun antarmuka pengguna yang responsif dan interaktif, serta
            memiliki pengalaman dalam mengimplementasikan desain ke dalam kode
            menggunakan teknologi modern.
          </p>
        </motion.div>

        {/* Pendidikan */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-1">Pendidikan</h2>
          <div className="text-sm md:text-base">
            <p>
              <strong>SMK Binamitra</strong> | 2020 – 2023
            </p>
            <p className="text-gray-300">Teknik Komputer dan Jaringan</p>
            <p className="mt-2">
              <strong>Politeknik Takumi</strong> | 2023 – Sekarang
            </p>
            <p className="text-gray-300">D3, Teknologi Informasi</p>
          </div>
        </motion.div>

        {/* Pengalaman Kerja */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-1">
            Pengalaman Kerja
          </h2>
          <div className="text-sm md:text-base mb-4">
            <p>
              <strong>Frontend Developer</strong> | September 2024 – Sekarang
            </p>
            <p className="text-gray-300">Politeknik Takumi – Indonesia</p>
            <ul className="list-disc ml-6 text-gray-300 mt-1">
              <li>Mengembangkan antarmuka web yang responsif.</li>
              <li>
                Mengimplementasikan desain ke dalam kode menggunakan HTML, CSS,
                Tailwind, dan React.
              </li>
              <li>Melakukan integrasi API dengan sistem.</li>
            </ul>
          </div>

          <div className="text-sm md:text-base">
            <p>
              <strong>Manajer Akun</strong> | September 2024 – Sekarang
            </p>
            <p className="text-gray-300">Politeknik Takumi – Indonesia</p>
            <ul className="list-disc ml-6 text-gray-300 mt-1">
              <li>Menjadi penghubung antara PT Minori dan tim internal.</li>
              <li>Melakukan koordinasi proyek serta penyusunan laporan.</li>
            </ul>
          </div>
        </motion.div>

        {/* Keahlian */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}>
          <h2 className="text-lg md:text-xl font-semibold mb-1">Keahlian</h2>
          <ul className="list-disc ml-6 text-gray-300 text-sm md:text-base">
            <li>
              <strong>Frontend:</strong> HTML, CSS, Tailwind CSS
            </li>
            <li>
              <strong>Basis Data:</strong> MySQL, PhpMyAdmin
            </li>
            <li>
              <strong>Kontrol Versi:</strong> Git, GitHub
            </li>
            <li>
              <strong>Alat Pendukung:</strong> Figma, Postman
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;
