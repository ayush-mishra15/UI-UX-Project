'use client'
import { cn } from "@/utils/cn";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const webDevTestimonials = [
  {
    quote: "The structured learning path and real-world projects helped me land my first frontend developer internship. I finally understand how to build responsive, clean UIs and collaborate in a team. This course changed my career.",
    name: "Aarav Mehta",
    title: "Frontend Intern at DevCo",
  },
  {
    quote: "The bootcamp environment kept me motivated. The blend of lectures, coding tasks, and peer reviews gave me confidence in backend development. I now deploy APIs like a pro.",
    name: "Lucas Fernandez",
    title: "Backend Developer Trainee",
  },
  {
    quote: "Unlike YouTube tutorials, this program gave me a roadmap and mentorship. Learning React and integrating Firebase was easier than I thought, thanks to the excellent instruction.",
    name: "Nisha Kapoor",
    title: "React Developer",
  },
  {
    quote: "This academy taught me full‑stack skills - from HTML to Node.js - with clarity. I went from beginner to building my own full apps. Best investment I made in my education.",
    name: "Ethan Brooks",
    title: "Full‑Stack Developer",
  },
  {
    quote: "The instructors focus not just on code but real development workflows. Git, debugging, and deployment are now second nature. I even contribute to open-source now!",
    name: "Zara Ali",
    title: "Junior Web Engineer",
  },
  {
    quote: "This course gave me the clarity and structure to transition into tech. I now freelance confidently and have a solid portfolio to show clients.",
    name: "Haruto Tanaka",
    title: "Freelance Web Developer",
  }
];



function WebTestimonialCards() {
  return (
    <div  className={cn(
          "absolute inset-0",
          // "[background-size:20px_20px]",
          // "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          // "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
           "h-[40rem] w-full bg-black bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden"
        ) }>
       
        <h2 className="text-3xl font-bold text-white text-center p-9 mb-8 z-10">From Learners to Developers: Their Journey 🛣️</h2>
        
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            
            <div className="w-full max-w-6xl">
                 <InfiniteMovingCards
                    items={webDevTestimonials}
                    direction="right"
                    speed="slow"
                 />
            </div>
        </div>
    </div>
  )
}

export default WebTestimonialCards