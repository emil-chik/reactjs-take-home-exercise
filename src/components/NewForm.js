import React, { useState, useEffect } from "react";
import NewFrontPage from "./NewFrontPage";
import NewSecondPage from "./NewSecondPage";
import Grid from "@material-ui/core/Grid";

const NewForm = () => {
  const [component, setComponent] = useState(1);
  const [temp_c, setTemp_C] = useState(0);
  const [temp_f, setTemp_F] = useState(0);
  const [api, setAPI] = useState("");

  useEffect(async () => {
    const response = await fetch(api);
    const data = await response.json();
    if (response.ok == true) {
      const celsius = data.current.temp_c;
      const fahrenheit = data.current.temp_f;
      setTemp_C(celsius);
      setTemp_F(fahrenheit);
    }
  }, [api]);

  const nextPage = (apiKey, cityName) => {
    setComponent(2);
    setAPI(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`
    );
    console.log(api);
  };

  return (
    <React.Fragment>
      {component === 1 && (
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justify='center'
          style={{ minHeight: "100vh" }}
        >
          <Grid item>
            <NewFrontPage nextPage={nextPage} />
          </Grid>
        </Grid>
      )}

      {component === 2 && (
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          style={{ minHeight: "100vh" }}
        >
          <Grid item>
            <NewSecondPage temp_c={temp_c} temp_f={temp_f} />
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default NewForm;
