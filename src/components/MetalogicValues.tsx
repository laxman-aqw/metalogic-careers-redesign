import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

type Value = {
  icon: string;
  color: string;
  textColor: string;
  title: string;
  description: string;
};

const values: Value[] = [
  {
    icon: "📚",
    color: "from-indigo-100 to-indigo-50",
    textColor: "text-indigo-600",
    title: "Continuous Learning",
    description:
      "We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set.",
  },
  {
    icon: "🤝",
    color: "from-pink-100 to-pink-50",
    textColor: "text-pink-600",
    title: "Team Work",
    description:
      "We believe that the best solutions come from diverse perspectives and collaborative efforts.",
  },
  {
    icon: "💡",
    color: "from-yellow-100 to-yellow-50",
    textColor: "text-yellow-600",
    title: "Innovation",
    description:
      "We consistently strive for excellence in our work, the impact we make, and the relationships we build.",
  },
  {
    icon: "🎓",
    color: "from-purple-100 to-purple-50",
    textColor: "text-purple-600",
    title: "Mentorship",
    description:
      "We embrace change, learn from challenges, and grow through mentorship and support.",
  },
  {
    icon: "🎯",
    color: "from-red-100 to-red-50",
    textColor: "text-red-600",
    title: "Tangible Impact",
    description:
      "We are committed to delivering outcomes that create measurable, positive change.",
  },
  {
    icon: "🦎",
    color: "from-green-100 to-green-50",
    textColor: "text-green-600",
    title: "Adaptability",
    description:
      "We thrive in change and cultivate resilience to grow in a fast-paced world.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -8,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.3 },
  },
};

const iconVariants = {
  hover: {
    rotate: [0, 10, -5, 0],
    scale: [1, 1.1, 1.05, 1],
    transition: { duration: 0.6 },
  },
};

const MetaLogicValues = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.metalogic.com.np/images/bg-pattern.png')] bg-repeat"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-indigo-200 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-pink-200 blur-3xl"
      />

      <div ref={ref} className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm font-semibold text-red-500 uppercase tracking-wider inline-block"
          >
            Our Values
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl font-bold text-indigo-900 mt-2"
          >
            We Believe In
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 max-w-xl mx-auto text-gray-600 text-base font-light"
          >
            We believe in creating an environment where individuals can thrive
            and make a meaningful impact.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : ""}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {values.map((value, i) => (
            <motion.article
              key={i}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              ></div>

              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className={`w-14 h-14 mb-6 flex items-center justify-center rounded-2xl ${value.textColor} text-3xl bg-white shadow-sm group-hover:shadow-md transition-all`}
              >
                {value.icon}
              </motion.div>

              <h3
                className={`text-xl font-semibold ${value.textColor} mb-3 transition-colors`}
              >
                {value.title}
              </h3>

              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                {value.description}
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className={`absolute bottom-0 left-0 h-1 ${value.textColor} bg-current`}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MetaLogicValues;
