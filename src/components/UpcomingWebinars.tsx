'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const featuredWebinars = [
  {
    title: "Frontend Foundations: HTML, CSS & Beyond",
    description: "Master the building blocks of the web with modern layout techniques and responsive design.",
    slug: "frontend-foundations-html-css",
    isFeatured: true
  },
  {
    title: "React in Action: Building Dynamic UIs",
    description: "Get hands-on with React fundamentals, hooks, and component-driven development.",
    slug: "react-in-action-webinar",
    isFeatured: true
  },
  {
    title: "Backend Basics: APIs with Node.js & Express",
    description: "Learn how to structure backend projects, handle routes, and connect to databases.",
    slug: "backend-with-nodejs",
    isFeatured: true
  },
  {
    title: "Database Deep Dive: MongoDB Essentials",
    description: "Understand how NoSQL works, and build scalable schemas with MongoDB.",
    slug: "mongodb-essentials-webinar",
    isFeatured: true
  },
  {
    title: "Git & GitHub Mastery",
    description: "Level up your version control skills and collaborate like a pro using GitHub.",
    slug: "git-github-webinar",
    isFeatured: true
  },
  {
    title: "From Deployment to DevOps",
    description: "Deploy full-stack apps using Vercel, Netlify, or Render — plus CI/CD basics.",
    slug: "deployment-and-devops",
    isFeatured: true
  }
];



function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white hover: sm:text-4xl ">Enhance Your Web Dev Skills</p>
            </div>
            <div className="mt-10">
                <HoverEffect
                items={featuredWebinars.map(webinar => (
                  {
                    title: webinar.title,
                    description: webinar.description,
                    link: "/" 
                  }
                ))}
                />
            </div>
            <div className="mt-10 text-center flex justify-center">
                <Link href={'/'}>
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black text-white flex shadow-lg items-center space-x-2">

                    <span>View All Webinars</span>
                </HoverBorderGradient>   
                
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars