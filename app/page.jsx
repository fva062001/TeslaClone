"use client";
import MainInfo from "@/components/MainInfo";
import model3Image from "/public/assets/M3-Homepage-D.jpg";
import modelYImage from "/public/assets/model-y_R1@2.jpg";
import modelSImage from "/public/assets/ms-main-hero-desktop.jpg";
import modelXImage from "/public/assets/MX-Hero-Desktop.jpg";
import solarRoofImage from "/public/assets/solar-panel-desktop.jpg";
// import solarStormImage from "/public/assets/sr-storm-desktop.png";

import ItemTab from "@/components/ItemTab";
import {useEffect, useState} from "react";

export default function Home() {
  const [mainInfo, setMainInfo] = useState({
    title: "Model 3",
    desc: "Lease from $399/mo",
  });

  return (
    <>
      <MainInfo title={mainInfo.title} desc={mainInfo.desc} />
      <div className="h-fit">
        <div
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
