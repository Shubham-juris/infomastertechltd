
import Abosection from "../components/Home/Abosection";
import Experience from "../components/Home/Experience";
import Expert from "../components/Home/Expert ";
import Hero from "../components/Home/Hero";
import Itservise from "../components/Home/Itservise";
import Latesnews from "../components/Home/Latesnews";
import Ourservise from "../components/Home/Ourservise";
import Pricing from "../components/Home/Pricing";
import Whychoose from "../components/Home/Whychoose";

const Home = () => {
  return (
    <>
    <div className="font-sans min-h-screen bg-black">
    <Hero/>
    <Abosection/>
    <Whychoose/>i
    <Ourservise/>
    <Pricing/>
    <Experience/>
    <Expert/>
    <Latesnews/>

    </div>
    </>
  );
};

export default Home;  