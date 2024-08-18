import Counter from "@/components/Counter/Counter";
import Hero from "@/components/Home/Hero";
import NewsLetter from "@/components/Home/NewsLetter";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
