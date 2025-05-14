import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
<NavBar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-gray-100 p-6 rounded-lg text-center shadow-lg">
        <p className="text-lg text-gray-800">
          Interested in a career with us?{' '}
          <Link to="/careers" className="text-blue-600 font-semibold hover:text-blue-800">
            Check out our Career Page!
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Home;
