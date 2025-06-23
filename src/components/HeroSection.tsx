import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        
        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
        
        <div className="p-4 relative z-10 w-full text-center">
            
            <h1 className="mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">Master Full‑Stack Web Development</h1>
                <p className="mt-4 font-normal text-base md:text-lg mb-11 text-neutral-300 max-w-lg mx-auto text-center space-y-3">
                  <span> Dive into our comprehensive full‑stack web development course and transform your coding journey today.</span>
                  <span> join us to build robust, real‑world applications and unlock your true potential.</span>
                </p>


             <div className="mt-6">
                <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem" 
                    className="bg-black text-white border-slate-800"
                    >
                        Explore courses
                    </Button>
                </Link>
             </div>
        </div>
    </div>
  )
} 

export default HeroSection