import React from "react";

function ItemTab({img, id}) {
  const onFocusHandler = () => {
    console.log(id);
  };
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
