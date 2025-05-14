import { motion } from "framer-motion";

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Flexibility at Work",
    description: "Do your best work at a time and place that fits us and your work-life balance.",
    color: "text-blue-600 bg-blue-100",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Take Ownership",
    description: "Take responsibility to solve customer challenges by acting as your own boss.",
    color: "text-purple-600 bg-purple-100",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Unlimited Growth",
    description: "With no inner circle… absolutely everyone has the same opportunity to thrive.",
    color: "text-green-600 bg-green-100",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    ),
    title: "Make Yourself Heard",
    description: "We encourage diverse perspectives - making it count in achieving our collective goals.",
    color: "text-orange-600 bg-orange-100",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5-2 4-2 4 2 4 2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Team Spirit",
    description: "Come together, work as one – this is at the heart of how we work, achieve results and collaborate.",
    color: "text-red-600 bg-red-100",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M7 10h10M7 14h10" />
      </svg>
    ),
    title: "Inclusivity at Work",
    description: "We believe that everyone is entitled to equal opportunities to learn, lead, and grow in all directions.",
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 4a1 1 0 0 1 1-1h3.18a1 1 0 0 1 .7.29l2.83 2.83a1 1 0 0 0 .7.29H20a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
      </svg>
    ),
    title: "Transparent Environment",
    description: "Build confidence in a culture of trust and open communication - with each other and our clients.",
    color: "text-indigo-600 bg-indigo-100",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
      </svg>
    ),
    title: "Fuel Your Passion",
    description: "We encourage you to strive, push the limits and achieve your dreams by being best you can be.",
    color: "text-pink-600 bg-pink-100",
  },
];

// The rest of the component remains the same


const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
  },
};

const Benefits = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-600 mb-3">
          Workplace Culture
        </span>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Life at <span className="text-blue-600">MetaLogic</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We foster an environment where talent thrives and innovation happens
          every day.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            whileHover="hover"
            variants={cardVariants}
            viewport={{ once: true, margin: "-50px" }}
            className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 ${benefit.color.replace(
              "text",
              "hover:text"
            )}`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${benefit.color}`}
            >
              <div className="w-6 h-6">{benefit.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600">{benefit.description}</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
                Learn more →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a
          href="#open-positions"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
        >
          Explore Career Opportunities
        </a>
      </motion.div>
    </section>
  );
};

export default Benefits;
