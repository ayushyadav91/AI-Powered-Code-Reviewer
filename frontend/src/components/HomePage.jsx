import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import  CodeBox from "./CodeBox";

const HomePage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white font-mono">
        {/* Navbar */}
        <nav className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-400">AI Code Reviewer</h1>
          <div className="space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
            >
              Sign Up
            </Link>
          </div>
        </nav>
  
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center h-[80vh]">
          <h1 className="text-5xl font-bold text-green-400 mb-4">
            Welcome to AI Code Reviewer
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Revolutionize your coding experience with AI-powered code reviews.
          </p>
          <Link
            to="/CodeBox"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semibold"
          >
            Start Code Review
          </Link>
        </div>
      </div>
    );
  };
  const Login = () => <div>Login Page</div>;
const SignUp = () => <div>Sign Up Page</div>;

export default HomePage;