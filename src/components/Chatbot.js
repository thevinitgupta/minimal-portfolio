import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { MdOutlineChat } from 'react-icons/md';

const Chatbot = ({setIsOpen, geminiApiKey}) => {
  // Chat state
  if(!geminiApiKey) return "";
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // API Key and Model (substitute your own)
  
  const model = new GoogleGenerativeAI(geminiApiKey).getGenerativeModel({ model: 'gemini-pro' });

  // Popup ref
  const chatRef = useRef(null);

  // Handler for opening/closing the popup
  const toggleChat = () => setIsOpen(false);

  // Send message to chatbot
  const sendMessage = async (message) => {
    setLoading(true);
    const newHistory = [
      ...chatHistory,
    ];
    setChatHistory(newHistory);

    const conversation = model.startChat({ history: newHistory });
    const result = await conversation.sendMessage(message);
    newHistory.push({role : 'user', partd : [message]})
    const text = result.response.text();
    newHistory.push({role : 'model', partd : [text]});
    setResponse(text);
    setLoading(false);
  };

  const initializeChatbot = async (message) => {
    setLoading(true)
    const conversation = model.startChat({history : []});
    const result = await conversation.sendMessage(message);
    const text = result.response.text();
    const responseHistory = [{role:'model', parts : [text]}];
    setChatHistory(responseHistory);
    setResponse(text);
    setLoading(false);

  }

  useEffect(()=> {
    initializeChatbot(`You are Sam, a person I hired to chat in place of me to provide information about Vinit based on the following. I want you to go through my resume I will insert below and answer the questions of based on my resume and project details any recruiter that is interacting with you. I also want you to go through the Links I will provide and answer based on the information you get through those links as well. Be a little mix of casual and formal while interacting with the recruiter, also ask for the Email of the recruiter for me to contact them if they are willing to consider me for hiring into their organization. Here is my resume : Vinit Gupta
    Portfolio | Leetcode | Linkedin | Github EXPERIENCE
    Tata Consultancy Services, Kolkata — Java Developer October 2023 - PRESENT
    +91 83890732221
    thevinitgupta@gmail.com
    SKILLS
    NodeJS | ReactJS | NextJS | Javascript | MongoDB | Java | Spring Boot | Web Security
    Typescript | MySQL | Flutter | JDBC | JSP | Servlets
    TailwindCSS | Firebase | Appwrite | Object Oriented Programming | Operating Systems | Database Management Systems | REST API
    Technical Writing |
    EDUCATION
    BTech. in Computer Science and Technology - CGPA 9.21
    ACHIEVEMENTS
    Contributed to Noteslify(Open Source Note taking Application)
    40K+ readers on DevTo Blog
    Pigshell(Image Manipulation Web Application) selected among Top 50 in Appwrite Hackathon
    500+ questions solved on Leetcode with best Contest Rating of 1614
    LANGUAGES
    English | Hindi | Bengali
    HOBBIES
    Painting | Table Tennis | Reading
    ● Strengthened database support for a critical module, resulting in a 15% reduction in data errors and a 20% increase in system eciency.
    ● Spearheaded the development of Surveyor Portal, leading to a 25% improvement in data collection speed and a 30% reduction in processing time for insurance claims, contributing to a 15% boost in customer satisfaction ratings.
    ● Used JDBC, JPA, HTML, CSS and Spring Boot for portal development and MySQL for database management.
    Uolo EdTech Pvt. Ltd., Gurgaon — SDE Intern April 2023 - July 2023
    ● Developed ecient API data logic for seamless conversion of JSON to structured class-based data, enhancing the user experience in a Teaching and Learning app.
    ● Designed scalable UI for OTP screen and Ledger section using Flutter and BLOC pattern, eectively managing states and handling errors, success, and loading scenarios.
    ● Resolved data persistence issue in Web View sections by employing local storage and argument handling, ensuring consistent data display even after page reloads which lead to 5% increase in user retention.
    Tablt, Remote— SDE Intern August 2021 - February 2022
    ● Developed frontend of e-commerce platform, including cart system, coupon system and home page with image upload functionality.
    ● Optimized codebase to ensure scalability and reduce page loading time by 25%.
    ● Redesigned prescription upload feature to be more user-friendly and intuitive which led to
    an increase of 15% in repeat customers.
    Uptone, Remote— SDE Intern
    April 2021 - July 2021
    ● Developed a secure authentication & authorization system using tokens to protect user data, reducing security risks by 75%.
    ● Integrated image upload system with Amazon Web Services (AWS) storage bucket, increasing scalability and reliability of the application by 50%.
    ● Used Bcrypt password hashing, tokenization of user authentication systems, and MongoDB to validate users.
    PROJECTS
    Lynkit(Full Stack Link Management) - NodeJS, ReactJS, MongoDB, Typescript, Redis
    ● Created Lynkit, a full stack URL shortener and management service.
    ● Engineered robust security measures including AccessToken and Refresh Token
    authentication, JWT tokens, and data encryption, ensuring data privacy and integrity.
    ● Optimized performance of Lynkit using Redis caching, resulting in faster URL retrieval and
    enhanced security through IP address blocking, improving user security and experience. Typr(Real World Typing Practice) - NextJS, TailwindCSS, ChartJS, Appwrite
    ● Developed Typr, a typing practice application integrating real-world text simulation, error tracking, and score analytics, resulting in a 20% improvement in user typing accuracy.
    ● Introduced error and score analytics using ChartJS, enhancing user engagement and providing visual feedback on performance, leading to a 30% increase in user retention.
    ● Utilized NextJS, TailwindCSS, and Appwrite backend to optimize user experience, reducing page load times by 40% and boosting overall user satisfaction.
    
    Here are links to the websites that I want you to go through :
    https://github.com/thevinitgupta/
    https://dev.to/thevinitgupta/
    https://leetcode.com/thevinitgupta/
    
    Keep the limit of your answers to less than 100 tokens
    While asking for the recruiter for their email, ask for their consent to sharing their email in a formal similar to the following : Would you like to hire me? If yes, I would like to have your email so I can contact you with further details about me. Respond to this message only with : Hi, I am Sam. How can I help you today about Vinit?`)
  })

  return (
    <div className='fixed bottom-10 right-10 z-50'>
      <button
        className='absolute top-0 right-0 rounded-full bg-red-500 px-4 py-2 text-white shadow-md hover:bg-red-600 focus:outline-none'
        onClick={toggleChat}
      >
        <MdOutlineChat size={24} />
      </button>
      {/* {isOpen && ( */}
        <div
          className='fixed inset-0 bg-gray-900 bg-opacity-75 z-60'
          onClick={toggleChat}
        />
      {/* )} */}
      {/* {isOpen && ( */}
      <div ref={chatRef} className='fixed bottom-0 right-0 bg-white p-4 rounded-lg shadow-md z-70'>
          <div className='flex flex-col gap-2 h-80 overflow-y-auto'>
            {/* Render chat history */}
            {chatHistory.map((message) => (
              <div key={message.role} className={`text-${message.role === 'user' ? 'blue-600' : 'green-600'}`}>
                {message.parts.join(' ')}
              </div>
            ))}
            {loading && <div className='text-center'>Loading...</div>}
            {response && <div className='text-green-600'>{response}</div>}
          </div>
          <div className='flex items-center justify-between'>
            <input
              className='w-full border border-gray-300 px-3 py-2 rounded-md mt-4 focus:outline-none'
              placeholder='Type your message'
              onKeyDown={(e) => (e.key === 'Enter' ? sendMessage(e.target.value) : null)}
              onBlur={() => setTimeout(toggleChat, 100)}
            />
            <button
              className='bg-blue-500 px-4 py-2 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none ml-4'
              onClick={() => sendMessage('')} // Send an empty message to signal end of turn
            >
              Send
            </button>
          </div>
        </div>

      {/* )} */}
    </div>
  );
};

export default Chatbot;
