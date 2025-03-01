import React, { useState } from "react";

const ContactRight = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ******** Email Validation *********
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  const phoneValidation = () => {
    return /^\d{10}$/.test(phoneNumber);  // Only 10-digit numbers allowed
  };
  

  const handleSend = async (e) => {
    e.preventDefault();
  
    // Clear previous messages before validation
    setErrMsg("");
    setSuccessMsg("");
  
    if (username === "") {
      setErrMsg("Username is required!");
      return;
    }
    if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
      return;
    }
    if (email === "") {
      setErrMsg("Email is mandatory!");
      return;
    }
    if (!emailValidation(email)) {
      setErrMsg("Provide a valid Email!");
      return;
    }
    if (!phoneValidation(phoneNumber)) {
      setErrMsg("Provide a valid 10-digit phone number!");
      return;
    }
    
    if (subject === "") {
      setErrMsg("Please provide a Subject!");
      return;
    }
    if (message === "") {
      setErrMsg("Message is required!");
      return;
    }
  
    try {
      setSuccessMsg("Please wait..."); // Show 'Please wait...' before success message
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          phoneNumber,
          email,
          subject,
          message,
        }),
      });
  
      const data = await response.json();
     
      if (response.ok) {
        setSuccessMsg(`Thank you dear ${username}, Your Messages has been sent Successfully!`);
        setErrMsg(""); // Clear any previous error messages
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
         // Clear the success message after 2 minutes
        setTimeout(() => {
          setSuccessMsg("");
        }, 120000);
      } else {
        setErrMsg(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrMsg("Failed to send message. Please try directly using my Email Id.");
      setSuccessMsg(""); // ✅ Clear 'Please wait...' when error occurs
    }
  };
  

  return (
    <form className="w-full flex flex-col gap-6 py-5">
      {/* {errMsg && (
        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center
        text-orange-500 text-base tracking-wide animate-bounce">
          {errMsg}
        </p>
      )}
      {successMsg && (
        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center
        text-green-500 text-base tracking-wide animate-bounce">
          {successMsg}
        </p>
      )} */}
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <p className="uppercase text-sm text-gray-400 tracking-wide">Your Name</p>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className={`${
              errMsg === "Username is required!" && "outline-designColor"
            } contactInput`}
            type="text"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <p className="uppercase text-sm text-gray-400 tracking-wide">Phone Number</p>
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            className={`${
              errMsg === "Phone number is required!" && "outline-designColor"
            } contactInput`}
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="uppercase text-sm text-gray-400 tracking-wide">Email</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={`${
            errMsg === "Email is mandatory!" && "outline-designColor"
          } contactInput`}
          type="email"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="uppercase text-sm text-gray-400 tracking-wide">Subject</p>
        <input
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          className={`${
            errMsg === "Please provide a Subject!" && "outline-designColor"
          } contactInput`}
          type="text"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="uppercase text-sm text-gray-400 tracking-wide">Message</p>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className={`${
            errMsg === "Message is required!" && "outline-designColor"
          } contactTextArea`}
          cols="30"
          rows="8"
        ></textarea>
      </div>
      <div className="w-full">
        <button
          onClick={handleSend}
          className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400
          tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor
          border-transparent"
        >
          Send Message
        </button>
      </div>
      {errMsg && (
        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center
        text-orange-500 text-base tracking-wide animate-bounce">
          {errMsg}
        </p>
      )}
      {successMsg && (
        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center
        text-green-500 text-base tracking-wide animate-bounce">
          {successMsg}
        </p>
      )}
    </form>
  );
};

export default ContactRight;
