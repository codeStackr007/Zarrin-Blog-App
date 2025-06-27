import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center py-12 px-4">
      <div className="relative rounded-3xl w-full max-w-xl mx-auto flex flex-col items-center justify-center py-16 px-6 bg-gradient-to-br from-primary-600 to-primary-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl dark:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <div className="text-white text-[5rem] sm:text-[6rem] font-extrabold leading-none mb-2">
            404
          </div>
          <div className="text-white text-lg sm:text-xl font-bold mb-2">
            Sorry!
          </div>
          <div className="text-white text-base sm:text-lg font-normal mb-8 text-center max-w-xs">
            The link is broken, try to refresh or go to home
          </div>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-primary-600 dark:bg-gray-100 dark:text-gray-900 font-semibold rounded-lg px-8 py-3 shadow-md hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors duration-200 text-base focus:outline-none"
          >
            Go To Home
          </button>
        </div>
        {/* background shapes */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        {/* extra shapes for dark mode */}
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-400/20 rounded-full blur-xl dark:block hidden" />
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-primary-300/15 rounded-full blur-lg dark:block hidden" />
      </div>

      {/* spacing */}
      <div className="h-24 sm:h-32" />

      {/* newsletter */}
      <section className="relative bg-primary-600 w-full flex flex-col items-center justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden mt-0">
        <div className="relative z-10 flex flex-col items-center w-full max-w-xl mx-auto">
          <h2
            className="text-white font-bold text-center mb-6 sm:mb-8"
            style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", lineHeight: 1.2 }}
          >
            Get our stories delivered
            <br />
            to your inbox weekly.
          </h2>
          <form className="flex flex-col sm:flex-row items-center w-full gap-4 mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full sm:w-auto flex-1 px-6 py-3 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-primary-200 placeholder:text-gray-900 bg-white text-primary-700 font-medium shadow-sm"
            />
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-3 rounded-md border border-white text-white font-semibold bg-primary-600 hover:bg-primary-700 transition-colors duration-200 text-base shadow-sm focus:outline-none"
              onClick={() => navigate("/contact")}
            >
              Get started
            </button>
          </form>
          <p className="text-primary-100 text-center text-xs sm:text-sm max-w-lg">
            Get a response tomorrow if you submit by 9pm today. If we received
            after 9pm will get a reponse the following day.
          </p>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
