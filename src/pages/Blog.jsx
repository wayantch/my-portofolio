import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

// Animasi buat efek masuk tiap card
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {/* Blog Post 1 */}
        <motion.div
          className="bg-gray-700 p-4 rounded-lg"
          variants={cardVariants}>
          <h2 className="text-xl font-semibold text-white">Blog Post 1</h2>
          <p className="text-gray-300">
            Cerita singkat tentang blog post pertama saya. Stay tuned, ya!
          </p>
        </motion.div>

        {/* Blog Post 2 */}
        <motion.div
          className="bg-gray-700 p-4 rounded-lg"
          variants={cardVariants}>
          <h2 className="text-xl font-semibold text-white">Blog Post 2</h2>
          <p className="text-gray-300">
            Ngebahas hal menarik lain seputar dunia koding. Simak terus, ya!
          </p>
        </motion.div>

        {/* Blog Post 3 */}
        <motion.div
          className="bg-gray-700 p-4 rounded-lg"
          variants={cardVariants}>
          <h2 className="text-xl font-semibold text-white">Blog Post 3</h2>
          <p className="text-gray-300">
            Postingan santai tapi penuh ilmu. Coba deh baca, siapa tahu
            bermanfaat 😉
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
