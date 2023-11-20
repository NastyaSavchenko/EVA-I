import { useState, useEffect, useRef } from "react";
import { MainBtn } from "../MainBtn/MainBtn";
import { HeroStyles, HeroSubTitle, HeroTitle, Span } from "./Hero.styled";
import NET from "vanta/dist/vanta.net.min";
import { FormattedMessage } from "react-intl";

export const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          color: 0x7552c8,
          backgroundColor: 0x07061f,
          showDots: true,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          points: 15.0,
          maxDistance: 20.0,
          spacing: 20.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section ref={myRef}>
      <div className="container container--hero">
        <HeroStyles>
          <HeroTitle>
            <FormattedMessage id="hero_title_1" />

            <HeroSubTitle>
              {" "}
              <FormattedMessage id="hero_subtitle" />
            </HeroSubTitle>
            <FormattedMessage id="hero_title_2" />
            <Span>
              {" "}
              <FormattedMessage id="hero_span" />
            </Span>
          </HeroTitle>

          <MainBtn title={<FormattedMessage id="hero_MainBtn" />} />
        </HeroStyles>
      </div>
    </section>
  );
};
