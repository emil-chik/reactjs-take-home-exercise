import React, { useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  Typography,
} from "@material-ui/core";

const NewFrontPage = (props) => {
  const [apiKey, setAPIKey] = useState("ff9f895b2e884d6680530135202710");
  const [cityName, setCityName] = useState("");

  const onNextPage = () => {
    props.nextPage(apiKey, cityName);
  };

  const handleTextChange = (event) => {
    setAPIKey(event.target.value);
  };

  const handleSelectChange = (event) => {
    setCityName(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Typography color='secondary' align='left'>
          Your API Key
        </Typography>
        <TextField
          color='secondary'
          style={styles.textField}
          value={apiKey}
          onChange={handleTextChange}
        />
        <br />
        <br />
        <br />
        <Typography color='secondary' align='left'>
          City Name
        </Typography>
        <FormControl>
          <Select
            labelId='select-label'
            color='secondary'
            style={styles.textField}
            defaultValue={cityName}
            onChange={handleSelectChange}
          >
            <MenuItem value={"Kuala%20Lumpur"}>Kuala Lumpur</MenuItem>
            <MenuItem value={"Singapore"}>Singapore</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <br />
        <Button
          variant='contained'
          color='secondary'
          style={styles.button}
          size='large'
          onClick={onNextPage}
        >
          Submit
        </Button>
      </React.Fragment>
    </ThemeProvider>
  );
};

const theme = createMuiTheme({
  typography: {
    body1: {
      fontSize: 14,
      fontWeight: 700,
    },
    button: {
      fontSize: 12,
      fontWeight: 700,
    },
  },
});

const styles = {
  textField: {
    margin: 8,
    width: 300,
  },

  button: {
    width: 300,
  },
};

export default NewFrontPage;
