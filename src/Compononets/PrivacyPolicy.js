import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="contact-container">
      <h1>Privacy Policy</h1>

      <p>
        Zylo is a demo e-commerce platform developed for educational purposes. It does not engage in any real commerce or data collection beyond necessary services.
      </p>

      <h2>Information We Collect</h2>
      <p>
        Zylo uses Google OAuth for authentication. We only access your public Google profile information (such as name, email, and profile picture) when you log in, and this data is not stored permanently or shared with third parties.
      </p>

      <h2>Use of Data</h2>
      <p>
        Any user data retrieved during login is used only to personalize your experience during the session. No data is stored in a backend database.
      </p>

      <h2>Cookies</h2>
      <p>
        Zylo may use session-based cookies to manage state across the application (like cart items), but no personal data is stored in cookies.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We use Google Sign-In for user authentication. Please refer to Google's privacy policy to understand how your data is managed by them.
      </p>

      <h2>Data Security</h2>
      <p>
        Since Zylo does not store any user data beyond the current session, there is minimal risk regarding data breaches. However, all communication is handled securely via HTTPS (if deployed online).
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        As this is a learning project, this privacy policy may be updated as new features are added or modified.
      </p>


    </div>
  );
};

export default PrivacyPolicy;
