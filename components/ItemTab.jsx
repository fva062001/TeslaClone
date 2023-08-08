import React, {useRef, useState, useEffect} from "react";
import {useScroll, useMotionValueEvent} from "framer-motion";

function ItemTab({img, id}) {
  return (
    <div
      className="snap-center snap-always w-full h-full"
      id={id}
      style={{
        background: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}></div>
  );
}

export default ItemTab;
