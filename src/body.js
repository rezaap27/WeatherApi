import React from "react";
import InfoTabel from "./informationTabel";
import Sub from "./sub";
import { useState } from "react";
export default function Body() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [apiKey] = useState("d0ed18f4f7399dc2d0e41cfe22dbddb6");
  const [isLoading, setIsLoading] = useState(false);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(false);
  const handelClick = () => {
    if (cityName !== "") {
      fetch(
        `https:api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=fa&appid=${apiKey}&units=metric`,
        { method: "GET" }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.name) {
            setWeatherInfo(data);
          }
          setIsLoading(false);
          if (data.message === "city not found") {
            setError(true);
          }
          console.log(data);
        })

        .catch((err) => {
          console.log(err);
          alert("ارتباط با سرور قطع شد , لطفا مجددا تلاش کنید");
          setIsLoading(false);
        });
    } else if (cityName === "") {
      alert("لطفا نام شهر مورد نظر را وارد کنید");
      setError(false);
      setWeatherInfo(null);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);
    setWeatherInfo(null);
  };
  return (
    <>
      <div id="body">
        <Sub
          cityName={cityName}
          setCityName={setCityName}
          handelClick={handelClick}
          handleSubmit={handleSubmit}
        />
        <InfoTabel
          weatherInfo={weatherInfo}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </>
  );
}
