import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const posts = [
  {
    image: require("../assets/images/Image Placeholder (2).png"),
    category: "Travel",
    date: "13 March 2023",
    title: "8 Rules Of Travelling In Sea You Need To Know",
    desc: "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (3).png"),
    category: "Development",
    date: "11 March 2023",
    title: "How to build strong portfolio and get a Job in UI/UX",
    desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (4).png"),
    category: "Sports",
    date: "10 March 2023",
    title: "How to Be a Professional Footballer in 2023",
    desc: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    link: "/single-blog",
  },
];

const popularPosts = [
  {
    image: require("../assets/images/Image Placeholder (5).png"),
    category: "Travel",
    date: "13 March 2023",
    title: "Train Or Bus Journey? Which one suits?",
    desc: "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (6).png"),
    category: "Development",
    date: "11 March 2023",
    title: "Best Website to research for your next project",
    desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (7).png"),
    category: "Sports",
    date: "10 March 2023",
    title: "How to Be a Dancer in 2023 with proper skills?",
    desc: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (8).png"),
    category: "Travel",
    date: "13 March 2023",
    title: "Who is the best singer on chart? Know him?",
    desc: "chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (9).png"),
    category: "Development",
    date: "11 March 2023",
    title: "How to start export import business from home?",
    desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (10).png"),
    category: "Sports",
    date: "10 March 2023",
    title: "Make some drinks with chocolates chocolates and milk",
    desc: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    link: "/single-blog",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  // Newsletter local state
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
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-primary-600 dark:bg-[rgb(17_24_39)] relative overflow-hidden">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-white text-left order-1 lg:order-1">
            <div className="mb-3 xl:mb-4">
              <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-primary-100 dark:text-gray-200">
                Featured Post
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              <span className="block">How AI will</span>
              <span className="block">Change the Future</span>
            </h1>

            <p className="text-sm sm:text-base xl:text-xl text-primary-100 dark:text-gray-200 mb-6 xl:mb-10 leading-relaxed">
              The future of AI will see home robots having enhanced
              intelligence, increased capabilities, and becoming more personal
              and possibly cute. For example, home robots will overcome
              navigation, direction
            </p>

            <button
              type="button"
              onClick={() => navigate("/single-blog")}
              className="inline-block bg-white text-primary-600 dark:text-gray-900 font-semibold rounded-lg px-6 sm:px-8 py-3 shadow-sm hover:bg-primary-50 dark:hover:bg-gray-100 transition-colors duration-200 text-base sm:text-lg w-full lg:w-auto text-center mb-8 xl:mb-0"
            >
              Read more
            </button>
          </div>

          {/* Right: Image Content */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2">
            <div className="w-full max-w-md lg:max-w-lg">
              {/* Hero Image */}
              <img
                src={require("../assets/images/Hero Image.png")}
                alt="AI Hero"
                className="aspect-square w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Section (VR & AI) */}
      <section className="relative flex justify-center items-center bg-gray-50 dark:bg-gray-900 py-16 px-2 md:h-screen mb-8 md:mb-16">
        {/* Desktop/Tablet: Overlapping Card Layout */}
        <div className="max-w-6xl w-full mx-auto hidden md:block">
          <div className="relative w-full">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden w-full h-[220px] xs:h-[260px] sm:h-[320px] md:h-[440px] lg:h-[460px] bg-gray-200 dark:bg-gray-700">
              <img
                src={require("../assets/images/Image Placeholder (1).png")}
                alt="VR Blog"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Overlapping Card */}
            <div className="absolute right-0 bottom-0 translate-y-1/2 md:w-[80%] lg:w-[65%] xl:w-[75%] bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-semibold mb-2">
                <span className="text-black dark:text-white font-bold">
                  DEVELOPMENT
                </span>
                <span className="text-gray-400 dark:text-gray-500 font-normal">
                  16 March 2023
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
                How to make a Game look more attractive with New VR & AI
                Technology
              </h2>
              <p className="text-xs sm:text-base md:text-lg mb-2 text-gray-600 dark:text-gray-300">
                Google has been investing in AI for many years and bringing its
                benefits to individuals, businesses and communities. Whether
                it's publishing state-of-the-art research, building helpful
                products or developing tools and resources that enable others,
                we're committed to making AI accessible to everyone.
              </p>
              <button
                type="button"
                onClick={() => navigate("/single-blog")}
                className="mt-2 w-max px-6 py-2 rounded-lg bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400 font-semibold shadow-sm hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors duration-200 border border-primary-100 dark:border-primary-800"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        {/* Mobile: Stacked Card Layout */}
        <div className="max-w-xl-[570px] w-full mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-[1.3rem] sm:p-8 flex flex-col gap-4 border border-gray-200 dark:border-gray-700 md:hidden">
          {/* Image with border */}
          <div className="rounded-2xl overflow-hidden border-2 border-primary-200 dark:border-primary-800">
            <img
              src={require("../assets/images/Image Placeholder (1).png")}
              alt="VR Blog"
              className="object-cover w-full h-48 sm:h-64"
            />
          </div>
          {/* Card Content */}
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold mb-1">
              <span className="text-black dark:text-white font-bold">
                DEVELOPMENT
              </span>
              <span className="text-gray-400 dark:text-gray-500 font-normal">
                16 March 2023
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-1">
              How to make a Game look more attractive with New VR & AI
              Technology
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-2">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it's
              publishing state-of-the-art research, building helpful products or
              developing tools and resources that enable others, we're committed
              to making AI accessible to everyone.
            </p>
            <button
              type="button"
              onClick={() => navigate("/single-blog")}
              className="mt-2 w-max px-6 py-2 rounded-lg bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-semibold shadow-sm hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-200 border border-primary-200 dark:border-gray-600"
            >
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Our Recent Post Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 mb-0">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Our Recent Post
            </h2>
            <button
              type="button"
              onClick={() => navigate("/single-blog")}
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 shadow-sm text-sm sm:text-base w-full sm:w-auto"
            >
              View All
            </button>
          </div>

          {/* 50/50 Grid Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="order-1 lg:order-1">
              <div className="rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={require("../assets/images/Image Placeholder (1).png")}
                  alt="VR Blog"
                  className="object-cover w-full h-[240px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-2 flex flex-col justify-center">
              {/* Category and Date */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                  DEVELOPMENT
                </span>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-normal">
                  16 March 2023
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-4 lg:mb-6">
                How to make a Game look more attractive with New VR & AI
                Technology
              </h3>
              <p className="text-sm sm:text-base lg:text-lg-[1.187rem] mb-6 lg:mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
                Google has been investing in AI for many years and bringing its
                benefits to individuals, businesses and communities. Whether
                it's publishing state-of-the-art research, building helpful
                products or developing tools and resources that enable others,
                we're committed to making AI accessible to everyone.
              </p>

              {/* CTA Button */}
              <div>
                <button
                  type="button"
                  onClick={() => navigate("/single-blog")}
                  className="inline-flex items-center px-6 py-2.5 rounded-lg bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400 font-semibold shadow-sm hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors duration-200 border border-primary-200 dark:border-primary-800 text-sm sm:text-base"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 mb-0">
        <div className="max-w-7xl mx-auto w-full">
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
        </div>
      </section>

      {/* Popular Post Section */}
      <section
        className="px-4 sm:px-6 md:px-8 lg:px-12 mb-0"
        style={{ paddingTop: "1.5rem", paddingBottom: "4rem" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Popular Post
            </h2>
            <button
              type="button"
              onClick={() => navigate("/single-blog")}
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 shadow-sm text-sm sm:text-base w-full sm:w-auto"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {popularPosts.map((post, idx) => (
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
    </>
  );
};

export default LandingPage;
