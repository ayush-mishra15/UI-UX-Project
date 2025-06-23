import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WebTestimonialCards from "@/components/TestimonialCards";
import Instructors from "@/components/ui/Instructors";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (

   <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <WebTestimonialCards/>
    <UpcomingWebinars/>
    <Instructors/>
    <Footer/>
   </main>
          
  );
}
 