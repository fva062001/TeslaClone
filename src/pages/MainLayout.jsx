import { NavBar } from "../components/NavBar";
import { Main } from "../components/Main";

function MainLayout() {
  return (
    <>
      <div className="absolute w-full">
        <NavBar />
      </div>
      <Main title={"Model 3"} desc={"Leasing starting at $399/mo"} />
    </>
  );
}

export { MainLayout };
