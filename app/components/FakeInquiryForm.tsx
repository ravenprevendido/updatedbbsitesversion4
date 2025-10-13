"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User2Icon, MailIcon, Loader2, CheckCircle } from "lucide-react";

function FakeInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2000);
    }, 2500);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex flex-col gap-3 mt-10">
      {/* Loading overlay */}
      <AnimatePresence>
        {isSubmitting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 rounded-md flex flex-col items-center justify-center z-10"
          >
            <Loader2 className="w-10 h-10 text-pink animate-spin" />
            <p className="mt-2 text-sm text-gray-300">Sending inquiry...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success overlay */}
     <AnimatePresence>
        {isSuccess && (
            <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 rounded-md flex flex-col items-center justify-center z-20 overflow-hidden"
            >
            {/* Airplane Animation */}
            <motion.img
                src="/inquiry.gif"
                alt="Inquiry sent airplane"
                initial={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                animate={{
                y: -350, 
                x: 150, 
                opacity: 0,
                scale: 1.3, 
                }}
                transition={{
                duration: 2,
                ease: "easeInOut",
                }}
                className="w-24 h-24 mb-3"
            />
            {/* Text fades out after plane flies */}
            <motion.p
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -30 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="text-white font-medium"
            >
                Inquiry Sent!
            </motion.p>
            </motion.div>
        )}
        </AnimatePresence>

      {/* Name */}
      <div className="relative">
        <User2Icon className="text-pink absolute left-3 top-2.5" size={18} />
        <input
          type="text"
          placeholder="Your Name"
          className="bg-black/50 border border-pink/40 rounded-md pl-10 pr-3 py-2 w-full text-sm text-gray-200 focus:ring-1 focus:ring-pink outline-none"
          disabled={isSubmitting}
        />
      </div>

      {/* Email */}
      <div className="relative">
        <MailIcon className="text-pink absolute left-3 top-2.5" size={18} />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-black/50 border border-pink/40 rounded-md pl-10 pr-3 py-2 w-full text-sm text-gray-200 focus:ring-1 focus:ring-pink outline-none"
          disabled={isSubmitting}
        />
      </div>

      {/* Message */}
      <textarea
        placeholder="Tell us what you like to know or customize..."
        rows={4}
        className="bg-black/50 border border-pink/40 rounded-md px-3 py-2 text-sm text-gray-200 focus:ring-1 focus:ring-pink outline-none resize-none"
        disabled={isSubmitting}
      />

      {/* Submit */}
      <motion.button
        whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
        type="submit"
        disabled={isSubmitting}
        className={`bg-pink/70 hover:bg-pink transition-all text-white py-2 rounded-md font-medium ${
          isSubmitting && "cursor-not-allowed opacity-70"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Send Inquiry"}
      </motion.button>

      <p className="text-xs text-gray-400 text-center mt-3">
        We'll get back to you within hours via email.
      </p>
    </form>
  );
}
export default FakeInquiryForm;


