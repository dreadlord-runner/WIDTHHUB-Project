import React from "react";
import { ArrowRight } from "lucide-react";
import { RxSlider } from "react-icons/rx";
import blogImage12 from "../../images/blog-image-12.jpg";
import blogImage13 from "../../images/blog-image-13.jpg";
import blogImage11 from "../../images/blog-image-11.jpg";

const BlogGrid = () => {
  const blogPosts = [
    {
      id: 1,
      image: blogImage12,
      imageAlt: "Fist Bump",
      category: "Human Resources",
      date: "August 12, 2026",
      title: "How to attract top talent in a competitive market",
      excerpt:
        "Discover the proven strategies and modern perks that actually make candidates want to choose your company over the competition.",
    },
    {
      id: 2,
      image: blogImage13,
      imageAlt: "Board",
      category: "Company Culture",
      date: "August 08, 2026",
      title: "Building a remote culture that employees love",
      excerpt:
        "Remote work is here to stay. Learn how to foster genuine connections and maintain high morale when your team is distributed globally.",
    },
    {
      id: 3,
      image: blogImage11,
      imageAlt: "Packing",
      category: "Career Growth",
      date: "July 29, 2026",
      title: "The importance of continuous learning at work",
      excerpt:
        "Why upskilling your current workforce is significantly more cost-effective than hiring new employees, and how to start a training program.",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        {/* -----------header--------- */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-300 text-blue-600 px-4 pb-0.5 rounded-lg text-sm font-semibold mb-6 bg-blue-100 backdrop-blur-md">
            <RxSlider size={16} className="stroke-1 mt-0.5" />
            <span>Dive Deep Into Topics That Matter</span>
            <RxSlider size={16} className="stroke-1 mt-0.5" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Explore, Learn, And Grow With Every Post
          </h2>
        </div>

        {/* ---------BLOG------------ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
            >
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
              />

              {/* ----Content-------- */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4 text-xs font-bold uppercase tracking-wider">
                  <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="flex items-center space-x-2 text-primary font-bold group-hover:text-blue-600 transition-colors cursor-pointer">
                  <span>Read more</span>
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
