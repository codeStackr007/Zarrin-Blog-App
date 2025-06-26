import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  // Local state for About page newsletter form
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
    <main className="bg-white w-full min-h-screen">
      {/* Hero/About Section */}
      <section className="w-full pt-16 pb-20 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full mx-auto text-center px-4 sm:px-6 lg:px-8 mb-16">
          <span
            className="block font-semibold uppercase tracking-widest mb-6 text-xs sm:text-sm"
            style={{ color: "rgb(167 139 250)" }}
          >
            ABOUT US
          </span>
          <h1 className="text-[2rem] xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Creative Blog Writting and
            <br className="block" />
            publishing site
          </h1>
          <p className="text-gray-500 text-base xs:text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-center">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
        </div>
        <div className="w-full flex justify-center mb-16 px-4 sm:px-6 lg:px-8">
          <img
            src={require("../assets/images/About us.png")}
            alt="Team working together"
            className="rounded-2xl object-cover w-full max-w-5xl h-64 sm:h-80 md:h-96 lg:h-[32rem] shadow-lg"
          />
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-gray-50 flex flex-col items-center">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <span className="block text-xs sm:text-sm font-semibold text-gray-400 tracking-widest mb-6 uppercase text-left">
            HOW WE WORK
          </span>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 sm:mb-16 gap-6 lg:gap-8">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight text-left">
                I will show you how our team works
              </h2>
            </div>
            <div className="flex-1 lg:max-w-md">
              <p className="text-gray-500 text-sm sm:text-base lg:text-lg text-left leading-relaxed">
                Bring to the table win-win market strategies
                <br className="block sm:hidden" />
                to ensure perfect articles.
              </p>
            </div>
          </div>

          {/* Three Cards Section */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 w-full justify-center">
            {/* Card 1 - Purple/Violet */}
            <div
              className="w-full lg:w-[600px] rounded-xl p-4 sm:p-6 pb-3 lg:pb-6 text-white min-h-[120px] sm:min-h-[140px] flex flex-col"
              style={{
                backgroundColor: "rgb(127 86 217 / var(--tw-bg-opacity, 1))",
              }}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 opacity-90">
                01
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Brainstorming
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
              </p>
              <button
                type="button"
                onClick={() => navigate("/single-blog")}
                className="text-white font-bold underline underline-offset-4 decoration-2 rounded-md px-4 py-2 transition-all duration-200 border-none bg-transparent cursor-pointer text-sm sm:text-base text-left self-start hover:bg-white/10"
                style={{ borderRadius: "0.5rem" }}
              >
                Learn More
              </button>
            </div>

            {/* Card 2 - Light Gray (now same as Card 3) */}
            <div className="w-full lg:w-[600px] bg-white rounded-xl p-4 sm:p-6 pb-3 lg:pb-6 min-h-[120px] sm:min-h-[140px] flex flex-col border border-gray-200">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-300">
                02
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold mb-4"
                style={{ color: "rgb(127 86 217 / var(--tw-bg-opacity, 1))" }}
              >
                Analysing
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line solely on the bottom line.
              </p>
            </div>

            {/* Card 3 - Light Gray */}
            <div className="w-full lg:w-[600px] bg-white rounded-xl p-4 sm:p-6 pb-3 lg:pb-6 min-h-[120px] sm:min-h-[140px] flex flex-col border border-gray-200">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-300">
                03
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold mb-4"
                style={{ color: "rgb(127 86 217 / var(--tw-bg-opacity, 1))" }}
              >
                News Publishing
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative bg-primary-600 w-full flex flex-col items-center justify-center py-16 px-4 overflow-hidden mt-16">
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

export default AboutPage;
