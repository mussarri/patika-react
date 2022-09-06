import React, { useState } from "react";
import { useLocation } from "./context/LocationContext";
import { cities } from "./Cities";

export default function Input() {
  const [input, setInput] = useState("");
  const { setLocation } = useLocation();
  const obj = Object.keys(cities);

  const showPosition = (position) => {
    setLocation([position.coords.latitude, position.coords.longitude])
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.")
    }
  }

  return (
    <section className="input-part">
      <p className="info-txt"></p>
      <div className="content">
        <input
          required
          type="text"
          list="cars"
          placeholder="Enter city name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setLocation(input);
            }
          }}
        />
        <datalist id="cars">
          {obj.map((city, index) => (
            <option key={index}>{city}</option>
          ))}
        </datalist>
        <div className="separator">OR</div>
        <button
          onClick={() => {
            getLocation()
          }}
        >
          Get Device Location
        </button>
      </div>
    </section>
  );
}
