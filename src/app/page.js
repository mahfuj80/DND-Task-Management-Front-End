import Counter from "@/components/Counter/Counter";
import Hero from "@/components/Home/Hero";
import NewsLetter from "@/components/Home/NewsLetter";
import Pricing from "@/components/Home/Pricing";
import Testimonial from "@/components/Home/Testimonial";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <Testimonial />
      <Pricing />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
