import React, { useEffect, useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Typography, TextField } from "@material-ui/core";

const NewSecondPage = (props) => {
  const [celsius, setCelsius] = useState(0.0);
  const [fahrenheit, setFahrenheit] = useState(0.0);

  useEffect(() => {
    setCelsius(props.temp_c);
    setFahrenheit(props.temp_f);
  });

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Typography color='secondary' align='left'>
          Celsius
        </Typography>
        <TextField
          color='secondary'
          style={styles.textField}
          value={celsius}
          InputProps={{
            readOnly: true,
          }}
        />
        <br />
        <br />
        <br />
        <Typography color='secondary' align='left'>
          Fahrenheit
        </Typography>
        <TextField
          color='secondary'
          style={styles.textField}
          value={fahrenheit}
          InputProps={{
            readOnly: true,
          }}
        />
      </React.Fragment>
    </ThemeProvider>
  );
};

const styles = {
  textField: {
    margin: 8,
    width: 300,
  },

  button: {
    width: 300,
  },
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

export default NewSecondPage;
