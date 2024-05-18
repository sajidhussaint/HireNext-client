import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About the Creator</h1>
          <p className='text-justify leading-7'>
          HireNext is a state-of-the-art web application that transforms the job search experience, utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js) to offer a seamless and efficient platform. It features secure user registration and login, advanced job search with multiple filters, comprehensive job details, and an easy application process where users can submit resumes directly through the app. Additionally, users can save job listings for future reference and manage their profile, saved jobs, and applications through a personalized dashboard. Designed to cater to all job seekers, HireNext ensures a smooth and successful job hunting journey.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>
    </div>
  );
};

export default About;
