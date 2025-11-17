import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { scrollToSection, createThrottledScrollListener } from "../utils/scroll";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const cleanup = createThrottledScrollListener(() => {
      setScrolled(window.scrollY > 50);
    }, 100);

    return cleanup;
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("hero")}
          >
            Portfolio
          </motion.div>

          <div className="flex gap-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-gray-900 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 rounded px-2 py-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
