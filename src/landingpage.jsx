import logo from "./assets/logo.png";
import { useState } from "react";
import img1 from "./assets/predictions.png";
import img2 from "./assets/chat-app.png";
import img3 from "./assets/predictions.png";
import img4 from "./assets/analysis.png";
import FeatureCard from "./FeatureCard";

const features = [
  {
    img: img1,
    alt: "Track tasks",
    title: "Task & Habit Tracking",
    description: "Track your daily tasks and build powerful habits.",
  },
  {
    img: img2,
    alt: "AI chat",
    title: "Motivation Chat",
    description: "Feeling low? Chat with your AI buddy for instant motivation.",
  },
  {
    img: img3,
    alt: "Task planning",
    title: "Smart Task Planning",
    description: "Let AI craft the perfect plan for any tough task.",
  },
  {
    img: img4,
    alt: "Productivity dashboard",
    title: "Productivity Insights",
    description: "Get sleek dashboards to visualize your productivity.",
  },
];

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
            "\nThank you for connecting with the 25 Hours Team.\n\nWe're excited to have you in our community. Once we are live, you'll be the first to know.\n\nBest regards,\n25 Hours Team",
          information: "",
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
      <div className="flex items-center mb-2 g-4 flex-col">
        <img src={logo} alt="app" className="w-16 lg:w-12" />
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          25 Hours <sup className="text-blue-300 text-sm">AI-powered</sup>
        </h1>
      </div>
      <p className="text-lg text-gray-700 mb-5 max-w-xl text-center font-semibold">
        Make everyday feel like it has 25 hours. Track tasks, build habits, and
        stay motivated - all with the help of AI
      </p>
      {/* Email input and button */}
      <form className="flex max-w-md" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="user@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow h-8 rounded-l-lg border border-gray-400 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-300  h-8 text-white rounded-r-lg px-4 font-semibold hover:bg-blue-200 transition-colors cursor-pointer"
          disabled={submitted}
        >
          {submitted ? "Submitting..." : "Join Now"}
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
          <div className="flex flex-wrap justify-center gap-6 my-10">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-6">
            © 2025 25 Hours. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
