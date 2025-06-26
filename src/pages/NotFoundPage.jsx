import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  // Animate the gradient rotation
  useEffect(() => {
    let angle = 45;
    let raf;
    const animate = () => {
      angle = (angle + 0.1) % 360;
      if (cardRef.current) {
        cardRef.current.style.background = `linear-gradient(${angle}deg, rgb(127,86,217) 0%, #a78bfa 100%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4">
      <div
        ref={cardRef}
        className="relative rounded-3xl w-full max-w-xl mx-auto flex flex-col items-center justify-center py-16 px-6 shadow-lg transition-all duration-1000"
      >
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
            className="bg-white text-[rgb(127,86,217)] font-semibold rounded-lg px-8 py-3 shadow-md hover:bg-gray-100 transition-colors duration-200 text-base"
          >
            Go To Home
          </button>
        </div>
        {/* Decorative shape (optional) */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      </div>

      {/* Add more vertical spacing before newsletter */}
      <div className="h-24 sm:h-32" />

      {/* Newsletter Section */}
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
              className="w-full sm:w-auto px-8 py-3 rounded-md border border-white text-white font-semibold bg-primary-600 hover:bg-primary-700 transition-colors duration-200 text-base shadow-sm"
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
