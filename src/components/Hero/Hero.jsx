import { useState, useEffect, useRef } from "react";
import { MainBtn } from "../MainBtn/MainBtn";
import { HeroStyles, HeroSubTitle, HeroTitle } from "./Hero.styled";
import NET from 'vanta/dist/vanta.net.min';

export const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        // el: '.hero',
        el: myRef.current,
        color: 0x7552c8,
        backgroundColor: 0x07061f,
        showDots: true,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        points: 15.00,
        maxDistance: 20.00,
        spacing: 20.00,
      }))
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);

  return (
    <section ref={myRef}>
      <div className="container container--hero" >
      <HeroStyles>
        <HeroTitle>
          Headline Clearly Positioning
          <HeroSubTitle>
            The Primary USP
          </HeroSubTitle>
        </HeroTitle>
        <MainBtn title={"Button"} />
      </HeroStyles>
      </div>
    </section>
  );
};
