import { useRef } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import NavBar from "../../components/navbar/NavBar";
import heroVideo from "../../assets/videos/hero/giantScreen2.mp4";

const Header = () => {
    const videoRef = useRef(null);

    const setPlayBack = () => {
        videoRef.current.playbackRate = 0.5;
      };
  return (
    <header id="header" className="relative w-full h-dvh flex flex-col justify-center overflow-x-clip">
        <video 
            ref={videoRef}
            src={heroVideo}
            autoPlay
            loop 
            muted
            onCanPlay={() => setPlayBack()}
            className="absolute w-full h-full object-cover"
        ></video>
        <NavBar />
        <HeroSection />
    </header>
  )
}

export default Header;

