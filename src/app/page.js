import Banner from "@/components/Home/Banner";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import NewsLetter from "@/components/Home/NewsLetter";
import Pricing from "@/components/Home/Pricing";
import Stats from "@/components/Home/Stats";
import Testimonial from "@/components/Home/Testimonial";

const HomePage = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <Banner />
      <Features />
      <Testimonial />
      <Stats />
      <Pricing />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
