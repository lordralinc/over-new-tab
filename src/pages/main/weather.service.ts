interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

interface WeatherCurrent {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

interface WeatherLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface WeatherInfo {
  location: WeatherLocation;
  current: WeatherCurrent;
}

class WeatherService {
  async getCity(): Promise<string> {
    let storedCity = localStorage.getItem("city");
    if (!storedCity) {
      let city = await fetch("https://ipinfo.io/json")
        .then((r) => r.json())
        .then((r) => r.city);
      localStorage.setItem("city", city);
      return city;
    }
    return storedCity;
  }

  async getWeatherInfo(city: string): Promise<WeatherInfo> {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?lang=ru&key=${apiKey}&q=${encodeURIComponent(city)}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.statusText}`);
    }

    return await response.json();
  }
}

export default new WeatherService();
