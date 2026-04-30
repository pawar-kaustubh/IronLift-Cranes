import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold"
      >
        Crane Services Website
      </motion.h1>
    </section>
  );
}

export default Hero;
