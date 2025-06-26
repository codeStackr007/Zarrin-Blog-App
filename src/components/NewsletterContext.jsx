import React, { createContext, useContext, useState, useCallback } from "react";

const NewsletterContext = createContext();

export const useNewsletter = () => useContext(NewsletterContext);

export const NewsletterProvider = ({ children }) => {
  const [newsletter, setNewsletter] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterDanger, setNewsletterDanger] = useState(false);

  const validateEmail = (email) => /.+@.+\..+/.test(email);

  const handleNewsletterSubmit = useCallback(
    (e) => {
      if (e) e.preventDefault();
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
    },
    [newsletter]
  );

  return (
    <NewsletterContext.Provider
      value={{
        newsletter,
        setNewsletter,
        newsletterError,
        newsletterSuccess,
        newsletterDanger,
        handleNewsletterSubmit,
      }}
    >
      {children}
    </NewsletterContext.Provider>
  );
};
