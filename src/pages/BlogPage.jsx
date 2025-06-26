import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const posts = [
  {
    image: require("../assets/images/Image Placeholder (5).png"),
    category: "Travel",
    date: "13 March 2023",
    title: "8 Rules Of Travelling In Sea You Need To Know",
    desc: "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (6).png"),
    category: "Development",
    date: "11 March 2023",
    title: "How to build strong portfolio and get a Job in UI/UX",
    desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (7).png"),
    category: "Sports",
    date: "10 March 2023",
    title: "How to Be a Professional Footballer in 2023",
    desc: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (8).png"),
    category: "Travel",
    date: "13 March 2023",
    title: "Train Or Bus Journey? Which one suits?",
    desc: "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (9).png"),
    category: "Development",
    date: "11 March 2023",
    title: "Best Website to research for your next project",
    desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (10).png"),
    category: "Sports",
    date: "10 March 2023",
    title: "How to Be a Dancer in 2023 with proper skills?",
    desc: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (2).png"),
    category: "Travel",
    date: "13 March 2023",
    title: "Who is the best singer on chart? Know him?",
    desc: "chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (3).png"),
    category: "Development",
    date: "11 March 2023",
    title: "How to start export import business from home?",
    desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (4).png"),
    category: "Sports",
    date: "10 March 2023",
    title: "Make some drinks with chocolates chocolates and milk",
    desc: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    link: "/single-blog",
  },
];

const BlogPage = () => {
  const navigate = useNavigate();
  // Local state for Blog page newsletter form
  const [newsletter, setNewsletter] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterDanger, setNewsletterDanger] = useState(false);
  const validateEmail = (email) => /.+@.+\..+/.test(email);
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletter) {
      setNewsletterError("Email is required");
      setNewsletterDanger(true);
      setTimeout(() => setNewsletterDanger(false), 3000);
    } else if (!validateEmail(newsletter)) {
      setNewsletterError("Invalid email");
      setNewsletterDanger(true);
      setTimeout(() => setNewsletterDanger(false), 3000);
    } else {
      setNewsletterError("");
      setNewsletterSuccess(true);
      setNewsletter("");
      setTimeout(() => setNewsletterSuccess(false), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 w-full">
      <section className="max-w-7xl mx-auto w-full py-12 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-[5rem]">
          <span className="block text-primary-400 font-semibold uppercase tracking-widest mb-4 text-xs sm:text-sm">
            Our Blogs
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Find our all blogs from here
          </h1>
          <p className="text-gray-500 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg mb-6">
            our blogs are written from very research research and well known
            writers writers so that we can provide you the best blogs and
            articles articles for you to read them all along
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {posts.map((post, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 sm:h-72 md:h-64 lg:h-72 object-cover rounded-2xl"
                />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                  {post.date}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
                {post.desc}
              </p>
              <button
                type="button"
                onClick={() => navigate(post.link)}
                className="text-primary-600 dark:text-primary-400 font-semibold underline underline-offset-2 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 text-base text-left w-max"
              >
                Read More...
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="relative bg-primary-600 w-full flex flex-col items-center justify-center py-16 px-4 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center w-full max-w-xl mx-auto">
          <h2
            className="text-white font-bold text-center mb-8"
            style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", lineHeight: 1.2 }}
          >
            Get our stories delivered
            <br />
            to your inbox weekly.
          </h2>
          <form
            className="flex flex-col sm:flex-row items-center w-full gap-4 mb-4"
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              placeholder="Your Email"
              value={newsletter}
              onChange={(e) => setNewsletter(e.target.value)}
              className="w-full sm:w-auto flex-1 px-6 py-3 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-primary-200 placeholder:text-gray-900 bg-white text-primary-700 font-medium shadow-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-md border border-white text-white font-semibold bg-primary-600 hover:bg-primary-700 transition-colors duration-200 text-base shadow-sm"
            >
              Get started
            </button>
          </form>
          {/* Toaster notification */}
          {(newsletterSuccess || newsletterDanger) && (
            <div
              className={`fixed z-50 transition-all duration-500 ${
                newsletterSuccess || newsletterDanger
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95 pointer-events-none"
              } bottom-8 right-8 sm:left-1/2 sm:right-auto sm:bottom-8 sm:translate-x-[-50%] sm:w-[90vw] sm:max-w-xs`}
              style={{
                left: window.innerWidth <= 640 ? "50%" : "auto",
                right: window.innerWidth > 640 ? "2rem" : "auto",
                transform:
                  window.innerWidth <= 640
                    ? "translateX(-50%)"
                    : newsletterSuccess || newsletterDanger
                    ? "scale(1)"
                    : "scale(0.95)",
                maxWidth: "22rem",
                width: "100%",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <div
                className={`px-6 py-3 rounded-xl shadow-2xl font-semibold text-base flex items-center gap-2 animate-slide-in-out ${
                  newsletterDanger
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
                style={{ justifyContent: "center" }}
              >
                {newsletterDanger ? (
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
                {newsletterDanger
                  ? newsletterError
                  : "Subscribed successfully!"}
              </div>
            </div>
          )}
          <p className="text-primary-100 text-center text-xs sm:text-sm max-w-lg">
            Get a response tomorrow if you submit by 9pm today. If we received
            after 9pm will get a reponse the following day.
          </p>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
