
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BlogHomePage = () => {
  const navigate = useNavigate();

  // ================== STATE ==================
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================== FETCH BLOGS ==================
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/blogs`
        );

        console.log("✅ Blogs fetched:", response.data);

        // Supports both:
        // response.data = [...]
        // response.data = { blogs: [...] }
        const blogData = Array.isArray(response.data)
          ? response.data
          : response.data.blogs || [];

        setBlogs(blogData);
      } catch (error) {
        console.error(
          "❌ Failed to fetch blogs:",
          error.response?.data || error.message
        );

        if (error.response) {
          if (error.response.status === 404) {
            setError("Blog service could not be found.");
          } else if (error.response.status >= 500) {
            setError("Server error. Please try again later.");
          } else {
            setError(
              error.response.data?.message ||
                "Unable to load blogs. Please try again."
            );
          }
        } else if (error.request) {
          setError(
            "Unable to connect to the server. Please check your backend."
          );
        } else {
          setError("Something went wrong while loading blogs.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // ================== FORMAT DATE ==================
  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  // ================== READ TIME ==================
  const getReadTime = (content) => {
    if (!content) return "1 min read";

    const words = content.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));

    return `${minutes} min read`;
  };

  // ================== FEATURED BLOGS ==================
  const featuredPosts = blogs.slice(0, 3);

  // ================== LATEST BLOGS ==================
  const latestPosts = blogs.slice(0, 5);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ================= TOP RIGHT CREATE BUTTON ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex justify-end">
        <button
          onClick={() => navigate("/create-blog")}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
        >
          + Create Blog
        </button>
      </div>

      {/* ================= HERO ================= */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wider">
              Welcome to Blogspace
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Ideas worth reading.
              <br />
              Knowledge worth sharing.
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-2xl">
              Discover articles about technology, software development,
              engineering and the ideas shaping the digital world.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button
                onClick={() =>
                  document
                    .getElementById("articles")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
              >
                Explore Articles
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("categories")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition"
              >
                Browse Categories
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* ================= FEATURED ARTICLES ================= */}
      <section
        id="articles"
        className="max-w-7xl mx-auto px-6 py-16"
      >

        <div className="mb-8">

          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
            Featured
          </p>

          <h2 className="text-3xl font-bold mt-2">
            Featured Articles
          </h2>

        </div>

        {/* ================= LOADING ================= */}
        {loading && (
          <div className="py-12 text-center text-gray-500">
            Loading blogs...
          </div>
        )}

        {/* ================= ERROR ================= */}
        {!loading && error && (
          <div className="border border-red-200 bg-red-50 text-red-600 rounded-lg p-5">
            {error}
          </div>
        )}

        {/* ================= NO BLOGS ================= */}
        {!loading && !error && blogs.length === 0 && (
          <div className="py-12 text-center border border-gray-200 rounded-lg">

            <h3 className="text-xl font-semibold text-gray-700">
              No blogs available
            </h3>

            <p className="text-gray-500 mt-2">
              Create your first blog to see it here.
            </p>

            <button
              onClick={() => navigate("/create-blog")}
              className="mt-5 px-5 py-2.5 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
            >
              Create Your First Blog
            </button>

          </div>
        )}

        {/* ================= BLOG CARDS ================= */}
        {!loading && !error && featuredPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

            {featuredPosts.map((post) => {

              // ================= DEBUG BLOG DATA =================
              console.log("BLOG:", post);

              console.log(
                "FEATURED IMAGE:",
                post.featuredImage
              );

              console.log(
                "IMAGE FILE ID:",
                post.featuredImage?.fileId
              );

              console.log(
                "IMAGE URL:",
                `${import.meta.env.VITE_API_URL}/blogs/image/${post.featuredImage?.fileId}`
              );

              return (
                <article
                  key={post._id || post.id}
                  className="group border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition duration-300"
                >

                  {/* ================= IMAGE ================= */}
                  <div className="h-52 overflow-hidden bg-gray-100">

                    <img
                      src={`${import.meta.env.VITE_API_URL}/blogs/image/${post.featuredImage?.fileId}`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="p-6">

                    <div className="flex items-center justify-between mb-3">

                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                        {post.category}
                      </span>

                      <span className="text-xs text-gray-400">
                        {getReadTime(post.content)}
                      </span>

                    </div>

                    <h3 className="text-xl font-bold leading-snug group-hover:text-blue-600 transition">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                      {post.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">

                      <span className="text-xs text-gray-400">
                        {formatDate(post.createdAt || post.date)}
                      </span>

                      <button
                        onClick={() =>
                          navigate(`/blogs/${post.slug}`)
                        }
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                      >
                        Read Article →
                      </button>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>
        )}

      </section>

      {/* ================= LATEST ARTICLES ================= */}
      <section
        id="categories"
        className="bg-gray-50 border-y border-gray-200"
      >

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="mb-8">

            <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
              Latest
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Latest Articles
            </h2>

          </div>

          <div className="max-w-4xl">

            {!loading &&
              !error &&
              latestPosts.map((post) => (

                <article
                  key={post._id || post.id}
                  className="py-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >

                  <div>

                    <p className="text-xs text-blue-600 font-semibold uppercase mb-2">
                      {post.category}
                    </p>

                    <h3
                      onClick={() =>
                        navigate(`/blogs/${post.slug}`)
                      }
                      className="text-xl font-semibold hover:text-blue-600 transition cursor-pointer"
                    >
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                      {formatDate(post.createdAt || post.date)}
                      {" • "}
                      {getReadTime(post.content)}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      navigate(`/blogs/${post.slug}`)
                    }
                    className="text-sm font-semibold text-blue-600 whitespace-nowrap hover:text-blue-700"
                  >
                    Read →
                  </button>

                </article>

              ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default BlogHomePage;
