import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-semibold text-white">Kontak</h1>
        <p className="text-gray-300">
          Yuk ngobrol, siapa tau bisa ngopi bareng 😄
        </p>
      </motion.div>

      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}>
            <img
              src="assets/images/customer-support-illustration.png"
              alt="Customer Support"
            />
          </motion.div>

          <motion.div
            className="m-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            <h1 className="text-3xl font-semibold text-white">
              Kirim Pesan Aja!
            </h1>
            <p className="text-gray-300">
              Ada pertanyaan atau pengen kerja bareng? Jangan ragu, langsung aja
              isi form-nya ya! ✨
            </p>
            <form className="mt-4">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  placeholder="Nama Kamu"
                  className="w-full p-2 mb-4 rounded-md bg-gray-700 text-white"
                />
                <input
                  type="email"
                  placeholder="Email Kamu"
                  className="w-full p-2 mb-4 rounded-md bg-gray-700 text-white"
                />
              </div>
              <textarea
                rows="4"
                cols="50"
                placeholder="Tulis pesanmu di sini..."
                className="w-full p-2 mb-4 rounded-md bg-gray-700 text-white"></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gray-900 to-gray-950 text-white px-4 py-2 rounded-lg">
                Kirim Pesan 🚀
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
