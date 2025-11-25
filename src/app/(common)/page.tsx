import AboutSection from "@/components/pages/home/AboutSection/AboutSection";
import BecomeMember from "@/components/pages/home/BecomeMember/BecomeMember";
import CoachingTraining from "@/components/pages/home/CoachingTraining/CoachingTraining";
import Dining from "@/components/pages/home/Dining/Dining";
import FitnessWellness from "@/components/pages/home/FitnessWellness/FitnessWellness";
import HeroSection from "@/components/pages/home/HeroSection/HeroSection";
import TennisFacilities from "@/components/pages/home/TennisFacilities/TennisFacitlities";
import TestimonialsSection from "@/components/pages/home/Testimonial/TestimonialsSection";

const HompPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TennisFacilities />
      <CoachingTraining />
      <FitnessWellness />
      <Dining />
      <TestimonialsSection />
      <BecomeMember />
    </>
  );
};

export default HompPage;
