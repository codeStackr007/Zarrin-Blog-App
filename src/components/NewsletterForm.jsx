import React from "react";
import { useNewsletter } from "./NewsletterContext";

const Toaster = ({ show, message, type = "success", onClose }) => (
  <div
    className={`fixed z-50 transition-all duration-500
      ${
        show
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95 pointer-events-none"
      }
      bottom-8 right-8 sm:left-1/2 sm:right-auto sm:bottom-8 sm:translate-x-[-50%] sm:w-[90vw] sm:max-w-xs
    `}
    style={{
      left: window.innerWidth <= 640 ? "50%" : "auto",
      right: window.innerWidth > 640 ? "2rem" : "auto",
      transform:
        window.innerWidth <= 640
          ? "translateX(-50%)"
          : show
          ? "scale(1)"
          : "scale(0.95)",
      maxWidth: "22rem",
      width: "100%",
      transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
    }}
    onAnimationEnd={show ? undefined : onClose}
  >
    <div
      className={`px-6 py-3 rounded-xl shadow-2xl font-semibold text-base flex items-center gap-2 animate-slide-in-out
      ${
        type === "danger" ? "bg-red-500 text-white" : "bg-green-500 text-white"
      }`}
      style={{ justifyContent: "center" }}
    >
      {type === "danger" ? (
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
      {message}
    </div>
  </div>
);

const NewsletterForm = () => {
  const {
    newsletter,
    setNewsletter,
    newsletterError,
    newsletterSuccess,
    newsletterDanger,
    handleNewsletterSubmit,
  } = useNewsletter();

  return (
    <>
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
      <Toaster
        show={newsletterSuccess}
        message="Subscribed successfully!"
        onClose={() => {}}
      />
      <Toaster
        show={newsletterDanger}
        message={newsletterError}
        type="danger"
        onClose={() => {}}
      />
    </>
  );
};

export default NewsletterForm;
