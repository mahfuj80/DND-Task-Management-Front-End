import Counter from "@/components/Counter/Counter";
import Banner from "@/components/Home/Banner";
import NewsLetter from "@/components/Home/NewsLetter";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
