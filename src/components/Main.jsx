import mainImage from "../../assets/M3-Homepage-D.jpg";

function Main({ title, desc }) {
  return (
    <div
      style={{
        backgroundImage: `url(${mainImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[100vw] h-[100vh]"
    >
      <div className="flex flex-col pt-[12vh] absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-4xl font-medium ">{title}</h1>
        <p className="text-lg">{desc}</p>
      </div>

      <div className="absolute bottom-[16vh] font-medium flex flex-row left-1/2 transform -translate-x-1/2 space-x-6">
        <button className="bg-[#414346] text-white px-20 py-2 rounded-md">
          Custom Order
        </button>
        <button className="bg-[#e7e7e5] text-[#3a3c41] px-20 py-2 rounded-md">
          Demo Drive
        </button>
      </div>
    </div>
  );
}

export { Main };
