import React from "preact/compat";
import weatherService, { WeatherInfo } from "./weather.service";
import styles from "./weather.module.scss";
import Spinner from "../../ui/spinner";

export default function Weather() {
  const [city, setCity] = React.useState<string>("");
  const [weatherInfo, setWeatherInfo] = React.useState<
    WeatherInfo | undefined
  >();

  React.useEffect(() => {
    weatherService.getCity().then(setCity);
  }, []);

  React.useEffect(() => {
    if (city) weatherService.getWeatherInfo(city).then(setWeatherInfo);
  }, [city]);

  return (
    <div className={styles.weather}>
      {weatherInfo ? (
        <>
          <img
            src={weatherInfo?.current.condition.icon}
            width="24px"
            height="24px"
          />{" "}
          {weatherInfo?.location.name}, {weatherInfo?.current.condition.text},{" "}
          {weatherInfo?.current.temp_c} °C
        </>
      ) : (
        <Spinner variant="small" />
      )}
    </div>
  );
}
