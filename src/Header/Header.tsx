import ProgressStepper from "./Stepper";

function Header() {
    return (   
    <div id="home" style={{ backgroundImage: "linear-gradient(to right,yellow,red)" }} className="max-w-full max-h-full">
        <div className="text-white text-left p-[8%] ">
          <h1 className="text-4xl font-bold">Progress</h1>
        </div>
  <ProgressStepper activeStep={0}/>
      </div>);
}

export default Header;