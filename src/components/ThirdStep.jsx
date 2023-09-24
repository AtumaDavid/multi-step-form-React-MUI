import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { multistepContext } from "../StepContext";

export default function ThirdStep() {
  const { setCurrentStep, userData, setUserData, submitData } =
    useContext(multistepContext);
  return (
    <div>
      <div>
        <TextField
          label="City"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) => setUserData({ ...userData, city: e.target.value })}
          value={userData["city"]}
        />
      </div>
      <div>
        <TextField
          label="Local Govt"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) =>
            setUserData({ ...userData, localgovt: e.target.value })
          }
          value={userData["localgovt"]}
        />
      </div>
      <div>
        <TextField
          label="Postal code"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) =>
            setUserData({ ...userData, postalcode: e.target.value })
          }
          value={userData["postalcode"]}
        />
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setCurrentStep(2)}
      >
        Back
      </Button>{" "}
      <span></span>
      <Button variant="contained" color="primary" onClick={submitData}>
        Submit
      </Button>
    </div>
  );
}
