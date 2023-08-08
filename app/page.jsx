"use client";
import MainInfo from "@/components/MainInfo";
import model3Image from "/public/assets/M3-Homepage-D.jpg";
import modelYImage from "/public/assets/model-y_R1@2.jpg";
import modelSImage from "/public/assets/ms-main-hero-desktop.jpg";
import modelXImage from "/public/assets/MX-Hero-Desktop.jpg";
import solarRoofImage from "/public/assets/solar-panel-desktop.jpg";
// import solarStormImage from "/public/assets/sr-storm-desktop.png";
import {useScroll, useMotionValueEvent} from "framer-motion";

import ItemTab from "@/components/ItemTab";
import {useEffect, useRef, useState} from "react";

export default function Home() {
  const [mainInfo, setMainInfo] = useState({
    title: "Model 3",
    desc: "Lease from $399/mo",
  });
  const containerRef = useRef(null);
  const {scrollYProgress} = useScroll({
    container: containerRef,
  });
  const [mainInfoOpacity, setMainInfoOpacity] = useState(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let opacity = 1;

    const percentage = Math.round(latest * 100);
    if (percentage === 12) {
      opacity = 0;
      console.log("klk");
    }

    setMainInfoOpacity(opacity);

    switch (latest * 100) {
      case 0:
        setMainInfo({
          title: "Model 3",
          desc: "Lease from $399/mo",
        });

        break;
      case 25:
        setMainInfo({
          title: "Model Y",
          desc: "Lease from $499/mo",
        });

        break;
      case 50:
        setMainInfo({
          title: "Model S",
          desc: "Lease from $899/mo",
        });

        break;
      case 75:
        setMainInfo({
          title: "Model X",
          desc: "Lease from $1,049/mo",
        });

        break;
      case 100:
        setMainInfo({
          title: "Solar for New Roofs",
          desc: "Solar Roof Costs Less Than a New Roof Plus Solar Panels",
        });

        break;
    }
  });

  return (
    <>
      <MainInfo
        title={mainInfo.title}
        desc={mainInfo.desc}
        opacity={mainInfoOpacity}
      />
      <div className="h-fit">
        <div
          ref={containerRef}
          className="snap-y snap-mandatory h-screen overflow-y-scroll"
          id="container">
          <ItemTab img={model3Image} id={0} />
          <ItemTab img={modelYImage} id={1} />
          <ItemTab img={modelSImage} id={2} />
          <ItemTab img={modelXImage} id={3} />
          <ItemTab img={solarRoofImage} id={4} />
        </div>
      </div>
    </>
  );
}
