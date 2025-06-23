'use Client'
import Link from "next/link"
import courseData from "../data/development_course.json"
import { BackgroundGradient } from "./ui/background-gradient"
import { HoverBorderGradient } from "./ui/hover-border-gradient";

interface Course{  // here we made khud ka data type
    id: number,
    title: string,
    instructor: string,
    duration: string,
    level: string,
    price: number,
    format:string,
    language: string,
    isFeatured: boolean,
    description: string,
    slug: string,
    image: string,
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter((course:Course)=>course.isFeatured)
  return (
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 mb-20 font-extrabold tracking-tight text-white sm:text-4xl ">Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=>(
         <div key={course.id} className="flex justify-center">
          <BackgroundGradient
            className="flex flex-col rounded-2xl bg-zinc-900 overflow-hidden h-full w-[270px] sm:w-[300px]"
          >
            <img
              src={course.image}
              alt={course.title}
              height="400"
              width="400"
              className="object-cover w-full"
            />

            <div className="p-4 sm:p-5 flex flex-col items-center text-center flex-grow">
              <p className="text-base sm:text-lg mt-2 mb-1 text-neutral-200">{course.title}</p>
              <p className="text-sm text-neutral-400">{course.description}</p>
              <Link href={`/`} className="mt-2 text-cyan-500 hover:text-cyan-600">
                Learn More
              </Link>
            </div>
          </BackgroundGradient>
        </div>

                ))}
            </div>
        </div>
        <div className="mt-24 text-center flex justify-center">
            <Link href={"/courses"}>
                <HoverBorderGradient
                    containerClassName="rounded-lg"
                    as="button"
                    className="bg-black text-white shadow-lg flex items-center space-x-2">

                    <span>View All Courses</span>
                </HoverBorderGradient>   
             </Link>

        </div>
    </div>
  )
}

export default FeaturedCourses