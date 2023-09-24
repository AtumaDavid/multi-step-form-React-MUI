import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
import { Step, Stepper, StepLabel } from "@mui/material";
import { multistepContext } from "./StepContext";
import { useContext } from "react";
import DisplayData from "./components/DisplayData";

function App() {
  const { currentStep, finalData } = useContext(multistepContext);

  //handle NaN values
  const activeStep = isNaN(currentStep) ? 0 : currentStep - 1;

  const showStep = (step) => {
    console.log("Current Step:", currentStep);
    console.log(step);
    switch (step) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
      // default:
      //   return null;
    }
  };
  return (
    <div>
      <h3 style={{ color: "skyblue", textDecoration: "underline" }}>
        Multi Step Apllication
      </h3>
      <div className="center-stepper">
        <Stepper
          // style={{ width: "18%" }}
          activeStep={activeStep}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      {showStep(activeStep)}
      {/* <FirstStep />
      <SecondStep />
      <ThirdStep /> */}
      <br />
      {finalData.length > 0 ? <DisplayData /> : ""}
    </div>
  );
}

export default App;
