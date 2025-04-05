import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      <motion.h1
        className="text-3xl font-semibold text-white mb-4"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}>
        Blog
      </motion.h1>

      <motion.p
        className="text-gray-300 mb-6"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}>
        Hai hai! Selamat datang di blog saya. Di sini saya bakal share cerita,
        tutorial, dan segala hal seru seputar dunia web development dan
        teknologi. Yuk, cekidot! 🚀
      </motion.p>

      {/* Kosong dulu */}
      <motion.div
        className="flex flex-col items-center justify-center text-center bg-gray-800 p-8 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}>
        <img
          src="assets/images/no-data.svg"
          alt="Belum ada artikel"
          className="w-64 mb-4"
        />
        <h2 className="text-white text-2xl font-semibold">
          Belum ada artikel 😢
        </h2>
        <p className="text-gray-400 mt-2">
          Tapi tenang aja, artikel-artikel keren lagi on the way... Stay tuned
          ya! ✨
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
