"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-8 rounded-xl text-center">
        <h2 className="text-xl font-bold mb-4">
          Chào mừng bạn đến với trang của chúng tôi!
        </h2>
        <p className="mb-6">
          Đây là quảng cáo hoặc thông điệp bạn muốn hiển thị.
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handleClose}
        >
          Đóng
        </button>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
