import { useEffect, useState } from "react";

export default function WeatherProxy() {
  const [city, setCity] = useState("Auckland");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setError("");
        const res = await fetch(`/api/weather/${city}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setWeather(data);
      } catch (e) {
        setError(e.message);
      }
    }
    load();
  }, [city]);

  return (
    <div className="WeatherProxy componentBox">
      <h2>Weather API (Proxy)</h2>
      <input value={city} onChange={(e) => setCity(e.target.value)} />

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {weather && (
        <div>
          <strong>{city}</strong>: {weather.temperature}, {weather.description}
        </div>
      )}
    </div>
  );
}