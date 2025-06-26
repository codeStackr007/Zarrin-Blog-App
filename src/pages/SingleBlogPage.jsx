import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const popularPosts = [
  {
    image: require("../assets/images/Image Placeholder (8).png"),
    category: "Travel",
    date: "13 March 2023",
    title: "Who is the best singer on chart?",
    desc: "Chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and...",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (9).png"),
    category: "Development",
    date: "11 March 2023",
    title: "How to start export import business from home?",
    desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide...",
    link: "/single-blog",
  },
  {
    image: require("../assets/images/Image Placeholder (10).png"),
    category: "Sports",
    date: "10 March 2023",
    title: "Make some drinks with chocolates chocolates and milk",
    desc: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment...",
    link: "/single-blog",
  },
];

const SingleBlogPage = () => {
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
    <main className="flex-1 w-full bg-white">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto w-full px-4 pt-8 pb-2 text-xs text-gray-500 font-medium">
        <span
          className="text-primary-600 cursor-pointer"
          onClick={() => navigate("/blog")}
        >
          Blog
        </span>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Development</span>
      </div>
      {/* Blog Title */}
      <div className="max-w-4xl mx-auto w-full px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-2 leading-tight">
          How to make a Game look more attractive with New VR & AI Technology
        </h1>
      </div>
      {/* Featured Image */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-8">
        <img
          src={require("../assets/images/Image Placeholder (1).png")}
          alt="VR Blog"
          className="w-full rounded-2xl object-cover h-[320px] sm:h-[400px] md:h-[440px] lg:h-[420px] mb-6"
        />
      </div>
      {/* Blog Content */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-8 text-gray-700 text-base leading-relaxed">
        <p className="mb-6">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it's
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, we're committed to
          making AI accessible to everyone.
        </p>
        <p className="mb-6">
          We're now at a pivotal moment in our AI journey. Breakthroughs in
          generative AI are fundamentally changing how people interact with
          technology — and at Google, we've been responsibly developing large
          language models so we can safely bring them to our products. Today,
          we're excited to share our early progress. Developers and businesses
          can now try new APIs and products that make it easy, safe and scalable
          to start building with Google's best AI models through Google Cloud
          and a new prototyping environment called MakerSuite. And in Google
          Workspace, we're introducing new features that help people harness the
          power of generative AI to create, connect and collaborate.
        </p>
        {/* Quote */}
        <blockquote className="border-l-4 border-primary-600 pl-4 mb-2">
          <span className="block text-lg italic font-normal text-primary-700">
            "People worry that computers will get too smart and take over the
            world, but the real problem is that they're too stupid and they've
            already taken over the world."
          </span>
        </blockquote>
        <div className="pl-6 mb-6">
          <span className="block text-xs font-bold text-gray-500 italic">
            — Pedro Domingos
          </span>
        </div>

        <p className="mb-6">
          More than 3 billion people already benefit from AI-powered features in
          Google Workspace, whether it's using Smart Compose in Gmail or
          auto-generated summaries in Google Docs. Now, we're excited to take
          the next step and bring a limited set of trusted testers a new set of
          features that makes the process of writing even easier. In Gmail and
          Google Docs, you can simply type in a topic you'd like to write about,
          and a draft will be instantly generated for you. So if you're a
          manager onboarding a new employee, Workspace saves you the time and
          effort involved in writing that first welcome email. From there, you
          can elaborate upon or abbreviate the message or adjust the tone to be
          more playful or professional — all in just a few clicks. We'll be
          rolling out these new experiences to testers in the coming weeks.
        </p>
      </div>
      {/* Secondary Image */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-8">
        <img
          src={require("../assets/images/Single-Blog-page-Image-2.png")}
          alt="VR Steering"
          className="w-full rounded-2xl object-cover h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] mb-2"
        />
      </div>
      <div className="max-w-4xl mx-auto w-full px-4 mb-12 text-gray-700 text-base leading-relaxed">
        <p>
          We're so excited by the potential of generative AI, and the
          opportunities it will unlock — from helping people express themselves
          creatively, to helping developers build brand new types of
          applications, to transforming how businesses and governments engage
          their customers and constituents. Stay tuned for more to come in the
          weeks and months ahead.
        </p>
      </div>
      {/* Popular Post Section */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 mb-20 mt-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-12 gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
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
                <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500 font-normal">
                  {post.date}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {post.desc}
              </p>
              <button
                type="button"
                onClick={() => navigate(post.link)}
                className="text-primary-600 font-semibold underline underline-offset-2 hover:text-primary-700 transition-colors duration-200 text-base text-left w-max"
              >
                Read More...
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="relative bg-primary-600 w-full flex flex-col items-center justify-center py-16 px-4 overflow-hidden mt-16">
        <div className="relative z-10 flex flex-col items-center w-full max-w-xl mx-auto">
          <h2
            className="text-white font-bold text-center mb-8"
            style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", lineHeight: 1.2 }}
          >
            Get our stories delivered From us to your inbox weekly.
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

export default SingleBlogPage;
