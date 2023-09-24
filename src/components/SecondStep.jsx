import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { multistepContext } from "../StepContext";

export default function SecondStep() {
  const { setCurrentStep, setUserData, userData } =
    useContext(multistepContext);
  return (
    <div>
      <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          value={userData["email"]}
        />
      </div>
      <div>
        <TextField
          label="Country"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) =>
            setUserData({ ...userData, country: e.target.value })
          }
          value={userData["country"]}
        />
      </div>
      <div>
        <TextField
          label="Continent"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) =>
            setUserData({ ...userData, continent: e.target.value })
          }
          value={userData["continent"]}
        />
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setCurrentStep(1)}
      >
        Back
      </Button>{" "}
      <span></span>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCurrentStep(3)}
      >
        Next
      </Button>
    </div>
  );
}
