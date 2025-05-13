import { motion } from "framer-motion";
const values = [
  {
    icon: "📚",
    color: "bg-indigo-100 text-indigo-600",
    title: "Continuous Learning",
    description:
      "We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set.",
  },
  {
    icon: "🤝",
    color: "bg-pink-100 text-pink-600",
    title: "Team Work",
    description:
      "We believe that the best solutions come from diverse perspectives and collaborative efforts.",
  },
  {
    icon: "💡",
    color: "bg-yellow-100 text-yellow-600",
    title: "Innovation",
    description:
      "We consistently strive for excellence in our work, the impact we make, and the relationships we build.",
  },
  {
    icon: "🎓",
    color: "bg-purple-100 text-purple-600",
    title: "Mentorship",
    description:
      "We embrace change, learn from challenges, and grow through mentorship and support.",
  },
  {
    icon: "🎯",
    color: "bg-red-100 text-red-600",
    title: "Tangible Impact",
    description:
      "We are committed to delivering outcomes that create measurable, positive change.",
  },

  {
    icon: "🦎",
    color: "bg-green-100 text-green-600",
    title: "Adaptability",
    description:
      "We thrive in change and cultivate resilience to grow in a fast-paced world.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

const MetaLogicValues = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-red-500 uppercase tracking-wider">
          Our Values
        </p>
        <h2 className="text-4xl font-bold text-indigo-900 mt-2">
          We Believe In
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-600 text-base font-light">
          We believe in creating an environment where individuals can thrive and
          make a meaningful impact.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {values.map((value, i) => (
          <motion.article
            key={i}
            variants={cardVariants}
            whileHover="hover"
            className="bg-white rounded-2xl p-6 shadow-md transition-all duration-300 group"
          >
            <div
              className={`w-12 h-12 mb-4 flex items-center justify-center rounded-lg ${value.color} text-2xl`}
            >
              <span aria-hidden="true">{value.icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-indigo-900 group-hover:text-indigo-700 transition-colors">
              {value.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">{value.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default MetaLogicValues;
