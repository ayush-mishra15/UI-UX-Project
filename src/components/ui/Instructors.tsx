'use client'
import { AnimatedTooltip } from "./animated-tooltip";
import { WavyBackground } from "./wavy-background"

const instructor  = [
  {
    id: 1,
    name: "Aman Verma",
    designation: "Frontend Developer & React Mentor",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    designation: "Full Stack Engineer (MERN)",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Priya Singh",
    designation: "Backend Developer & API Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    designation: "UI/UX Designer & HTML/CSS Coach",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Karan Malhotra",
    designation: "DevOps & Deployment Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
  }
]




function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
              Meet Our Instructors
            </h2>

            <p className="text-base md:text-lg text-white text-center mb-4">
              Learn from top developers and industry experts in our courses.
            </p>

            <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={instructor}/>
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors