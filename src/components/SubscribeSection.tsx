import React, { useState } from "react";

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter a valid email.");
    } else {
      setError("");
      console.log("Subscribed with email:", email);
    }
  };

  return (
    <div className="bg-gray-100 py-16 text-center text-gray-800">
      <h4 className="text-3xl font-semibold mb-6 text-gray-900">Stay Informed with Our Newsletters</h4>
      <p className="text-lg mb-8 text-gray-600 mx-auto md:w-[65%]">
        Join our community to receive the latest updates, insights, and offers delivered straight to your inbox.
      </p>
      <form
        className="flex flex-col gap-6 sm:flex-row sm:justify-center sm:items-center sm:w-[60%] mx-auto p-6 rounded-lg shadow-xl bg-white"
        onSubmit={handleSubmit}
      >
        <div className="flex-1 relative">
          <input
            type="email"
            className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && (
            <p className="absolute left-0 bottom-[-20px] text-sm text-red-500">{error}</p>
          )}
        </div>
        <button
          type="submit"
          className="h-12 flex items-center justify-center px-8 text-white rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 group-hover:opacity-100 group-hover:scale-110 duration-300 transform active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail mr-3"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeSection;
