import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { multistepContext } from "../StepContext";

export default function FirstStep() {
  const { setCurrentStep, userData, setUserData } =
    useContext(multistepContext);
  return (
    <div>
      <div>
        <TextField
          label="First Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
          value={userData["firstname"]}
        />
      </div>
      <div>
        <TextField
          label="Last Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
          value={userData["lastname"]}
        />
      </div>
      <div>
        <TextField
          label="Contact Number"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) => setUserData({ ...userData, number: e.target.value })}
          value={userData["number"]}
        />
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setCurrentStep(2)}
      >
        Next
      </Button>
    </div>
  );
}
