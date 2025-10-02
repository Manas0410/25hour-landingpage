import logo from "./assets/logo.png";
import { useState } from "react";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setSubmitted(true);
      await fetch("https://my-emailservice.vercel.app/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tomail: email,
          bcc: "manasshrivastava0410@gmail.com,sanskratiagrawal306@gmail.com",
          subject: "THANK YOU FOR CONNECTING WITH 25 hours Team",
          message:
            "Thanks buddy 😉 ! Once we are live we will first notify you ",
          information: `<message<No custom message>>`,
        }),
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.log(err);
    } finally {
      setEmail("");
      setSubmitted(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center flex-col justify-center p-6 overflow-y-auto">
      <div className="flex items-center mb-2 g-4">
        <img src={logo} alt="app" className="w-8 lg:w-12" />
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          25 Hours <sup className="text-blue-300 text-sm">AI-powered</sup>
        </h1>
      </div>
      <p className="text-lg text-gray-700 mb-5 max-w-xl">
        Manage tasks effortlessly with AI, so you have time for yourself.
      </p>
      {/* Email input and button */}
      <form className="flex max-w-md" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="user@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow rounded-l-lg border border-gray-400 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="bg-blue-300 text-white rounded-r-lg px-4 font-semibold hover:bg-blue-200 transition-colors cursor-pointer"
          disabled={submitted}
        >
          {submitted ? "Submitting..." : "Join waiting list"}
        </button>
      </form>
      {success && (
        <div className="text-green-600 font-semibold mt-2">
          Thank you! You have been added to the waiting list.
        </div>
      )}
      <div className="max-w-4xl mx-auto rounded-3xl p-4 md:p-8 flex flex-col md:flex-row items-center md:space-x-12">
        {/* Left Content */}
        <div className="flex-1 w-full">
          <ul className="list-disc list-inside text-gray-600 mb-10 space-y-2 font-semibold">
            <li>
              Seamlessly track your daily tasks and build powerful habits with
              ease.
            </li>
            <li>
              Feeling down? Chat with your AI buddy anytime for a boost of
              motivation.
            </li>
            <li>
              Stuck on a tough task? Let AI craft the perfect plan tailored just
              for you.
            </li>
            <li>
              Want to see your productivity soar? Get detailed insights with a
              sleek dashboard.
            </li>
          </ul>

          <p className="text-xs text-gray-400 mt-6">
            © 2025 25 Hours. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
