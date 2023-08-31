import { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";

import { Logo } from "../../components/Logo/Logo";
import { Error } from "../../components/Error/Error";

export const ErrorPage = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          color: 0x7552c8,
          // color: 0xff3f81,
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
    <main ref={myRef}>
      <div className="authContainer">
        <Logo />
        <Error />
      </div>
    </main>
  );
};
