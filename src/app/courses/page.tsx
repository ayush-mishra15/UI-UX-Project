'use client'
import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import courseData from "@/data/development_course.json";

function Page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36 relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-7xl text-center font-sans font-bold mb-8 text-white"
      >
        All courses ({courseData.courses.length})
      </motion.h1>

      <div className="flex flex-wrap justify-center z-10 relative">
        {courseData.courses.map((course, index) => (
          <motion.div
            key={course.id || course.title || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <CardContainer className="inter-var m-6">
              <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[22rem] h-auto rounded-xl p-4 border transition-all duration-300">
                <CardItem translateZ={50} className="text-xl font-bold text-white">
                  {course.title}
                </CardItem>
                <CardItem as="p" translateZ={60} className="text-sm max-w-sm mt-2 text-neutral-300">
                  {course.description}
                </CardItem>
                <CardItem translateZ={100} className="w-full mt-4">
                  <img
                    src={course.image}
                    height="1000"
                    width="1000"
                    className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl transition duration-300"
                    alt="thumbnail"
                  />
                </CardItem>

                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    as="a"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    translateZ={20}
                    className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:underline transition"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    as="button"
                    translateZ={20}
                    className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-black text-xs font-bold transition"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>

      <ShootingStars className="z-0" />
      <StarsBackground />
    </div>
  );
}

export default Page;
