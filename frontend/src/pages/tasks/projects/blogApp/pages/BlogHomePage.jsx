import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlogHomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          Welcome to <span className="text-indigo-600">BlogApp</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto mb-8"
        >
          A simple and clean place to write your thoughts, share your ideas,
          and read meaningful blog posts.
        </motion.p>

        <div className="flex justify-center gap-4">
          <Link
            to="/posts"
            className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
          >
            Read Posts
          </Link>
          <Link
            to="/create"
            className="px-6 py-3 rounded-xl border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition"
          >
            Write a Post
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ✍️ Write Easily
            </h3>
            <p className="text-gray-600">
              Create blog posts with a simple editor. Focus on your content,
              not complexity.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              📖 Read Anywhere
            </h3>
            <p className="text-gray-600">
              Browse posts in a clean and distraction-free layout, anytime.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🚀 Grow Ideas
            </h3>
            <p className="text-gray-600">
              Share knowledge, stories, and ideas that matter to people.
            </p>
          </div>
        </div>
      </section>

   
    </div>
  );
}
