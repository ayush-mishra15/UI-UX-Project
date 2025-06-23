"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const webDevContent = [
  {
    title: "Welcome to Our Web Development Academy",
    description:
      "Our academy is a creative hub for aspiring developers of all levels. Founded with a vision to democratize coding education, we merge fundamental principles with the latest technologies. Featuring expert instructors, hands-on projects, and a supportive community, we equip you to build real‑world web applications and accelerate your tech career."
  },
  {
    title: "Our Vision & Mission",
    description:
      "We envision a world where anyone can turn ideas into interactive, responsive web experiences. Our mission is to make web development accessible, engaging, and impactful. We guide you from basic markup to full‑stack architecture, empowering you to create digital solutions that matter."
  },
  {
    title: "Curriculum & Courses",
    description:
      "From HTML & CSS fundamentals to advanced frameworks like React and Next.js, our curriculum covers frontend and backend development. Learn database design, API integration, and deployment best practices. Flexible learning modes—online, in‑person, and hybrid—ensure you can study at your pace."
  },
  {
    title: "Meet Our Instructors",
    description:
      "Our instructors are seasoned developers and industry professionals with extensive real‑world experience. They bring practical insights, mentoring, and code reviews to every session. Through live workshops and one‑on‑one guidance, you'll gain the skills and confidence to tackle complex projects."
  },
  {
    title: "Beyond the Code",
    description:
      "Student life extends beyond tutorials—participate in hackathons, open‑source contributions, and community meetups. Showcase your work in demo days, collaborate on group projects, and build a portfolio that stands out. Join us to connect, innovate, and stay ahead in the tech landscape."
  }
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={webDevContent} />
    </div>
  );
}

export default WhyChooseUs;
