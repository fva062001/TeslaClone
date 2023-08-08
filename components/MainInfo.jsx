import logo from "/public/assets/tesla.svg";
import Image from "next/image";

function MainInfo({title, desc, opacity}) {
  return (
    <>
      <div className="hidden md:block lg:block fixed w-full">
        <header className="flex flex-row justify-between font-normal mx-10 mt-6 ">
          <Image src={logo} className="w-32" alt="logo" />
          <nav className="flex flex-row text-center space-x-6">
            <h5>Model S</h5>
            <h5>Model 3</h5>
            <h5>Model X</h5>
            <h5>Model Y</h5>
            <h5>Solar Roof</h5>
            <h5>Solar Panels</h5>
          </nav>
          <div className="flex flex-row space-x-6">
            <p>Shop</p>
            <p>Account</p>
            <p>Menu</p>
          </div>
        </header>
        <div className="w-full" style={{opacity: opacity}}>
          <div className="flex flex-col pt-[12vh] absolute left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-4xl font-medium ">{title}</h1>
            <p className="text-lg">{desc}</p>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-[16vh] font-medium flex flex-row left-1/2 transform -translate-x-1/2 space-x-6"
        style={{opacity: opacity}}>
        <button className="bg-[#414346] text-white px-20 py-2 rounded-md">
          Custom Order
        </button>
        <button className="bg-[#e7e7e5] text-[#3a3c41] px-20 py-2 rounded-md">
          Demo Drive
        </button>
      </div>
    </>
  );
}

export default MainInfo;
