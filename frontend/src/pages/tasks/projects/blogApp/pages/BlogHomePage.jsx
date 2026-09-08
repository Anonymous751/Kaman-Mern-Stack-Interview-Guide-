
import React from "react";
import { useNavigate } from "react-router-dom";

const BlogHomePage = () => {
  const navigate = useNavigate();

  const featuredPosts = [
    {
      id: 1,
      category: "Technology",
      title: "The Future of Modern Web Development",
      description:
        "Explore how modern technologies are changing the way we build fast and scalable web applications.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      date: "Sep 08, 2026",
      readTime: "6 min read",
    },

    {
      id: 2,
      category: "Engineering",
      title: "From Code to Production",
      description:
        "Understanding the journey from writing your first line of code to deploying a production application.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      date: "Sep 06, 2026",
      readTime: "8 min read",
    },

    {
      id: 3,
      category: "Development",
      title: "Building Better Software Systems",
      description:
        "A practical look at architecture, APIs, databases and the principles behind reliable software.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
      date: "Sep 04, 2026",
      readTime: "5 min read",
    },
  ];

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

              <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
                Explore Articles
              </button>

              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition">
                Browse Categories
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURED ARTICLES ================= */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="mb-8">

          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
            Featured
          </p>

          <h2 className="text-3xl font-bold mt-2">
            Featured Articles
          </h2>

        </div>


        {/* ================= BLOG CARDS ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {featuredPosts.map((post) => (

            <article
              key={post.id}
              className="group border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition duration-300"
            >

              {/* IMAGE */}

              <div className="h-52 overflow-hidden bg-gray-100">

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

              </div>


              {/* CONTENT */}

              <div className="p-6">

                <div className="flex items-center justify-between mb-3">

                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {post.category}
                  </span>

                  <span className="text-xs text-gray-400">
                    {post.readTime}
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
                    {post.date}
                  </span>

                  <button className="text-sm font-semibold text-blue-600">
                    Read Article →
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= LATEST ARTICLES ================= */}

      <section className="bg-gray-50 border-y border-gray-200">

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

            {[1, 2, 3].map((item) => (

              <article
                key={item}
                className="py-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >

                <div>

                  <p className="text-xs text-blue-600 font-semibold uppercase mb-2">
                    Development
                  </p>

                  <h3 className="text-xl font-semibold hover:text-blue-600 transition cursor-pointer">
                    How modern developers build scalable applications
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    September 2026 • 7 min read
                  </p>

                </div>


                <button className="text-sm font-semibold text-blue-600 whitespace-nowrap">
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
