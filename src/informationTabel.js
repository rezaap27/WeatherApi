import React from "react";
export default function InfoTabel(props) {
  function unixTime(x) {
    let date = new Date(x * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  }
  return (
    <>
      {props.isLoading === true && (
        <div id="loading-box">
          <p>Please Wait</p>
          <div id="cir">
            <div className="pointer" id="p1">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="pointer" id="p2">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      )}
      {props.error === true && <div id="city-error">شهر مورد نظر یافت نشد</div>}
      <div id="info-tabel">
        <div id="weather-img">
          {props.weatherInfo &&
            (props.weatherInfo.weather[0].main === "Clouds" ? (
              <img src="./scattered.png" alt="" />
            ) : props.weatherInfo.weather[0].main === "Clear" ? (
              <img src="./clear.png" alt="" />
            ) : props.weatherInfo.weather[0].main === "Drizzle" ? (
              <img src="./shower.png" alt="" />
            ) : props.weatherInfo.weather[0].main === "Rain" ? (
              <img src="./rain.png" alt="" />
            ) : props.weatherInfo.weather[0].main === "Thunderstorm" ? (
              <img src="./thunderstorm.png" alt="" />
            ) : props.weatherInfo.weather[0].main === "Snow" ? (
              <img src="./snow.png" alt="" />
            ) : props.weatherInfo.weather[0].main === "Mist" || "Haze" ? (
              <img src="./mist.png" alt="" />
            ) : (
              ""
            ))}
        </div>
        <fieldset>
          <legend>{props.weatherInfo && props.weatherInfo.sys.country}</legend>
          <table>
            <thead className="basic-info">
              <tr>
                <td>شهر</td>
                <td>
                  <div className="basic-value">
                    {props.weatherInfo && props.weatherInfo.name}
                  </div>
                </td>
              </tr>
              <tr>
                <td>دما</td>
                <td>
                  <div className="basic-value">
                    {props.weatherInfo && props.weatherInfo.main.temp}
                  </div>
                </td>
              </tr>
              <tr>
                <td>حالت هوا</td>
                <td>
                  <div className="basic-value">
                    {props.weatherInfo &&
                      props.weatherInfo.weather[0].description}
                  </div>
                </td>
              </tr>
            </thead>
            <tbody className="more-info">
              <tr>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>رطوبت</td>
                <td>
                  <div className="more-value">
                    {props.weatherInfo &&
                      props.weatherInfo.main.humidity + "% "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>فشار هوا</td>
                <td>
                  <div className="more-value">
                    {props.weatherInfo && props.weatherInfo.main.pressure}
                  </div>
                </td>
              </tr>
              <tr>
                <td>حداکثر دما</td>
                <td>
                  <div className="more-value">
                    {props.weatherInfo && props.weatherInfo.main.temp_max}
                  </div>
                </td>
              </tr>
              <tr>
                <td>حداقل دما</td>
                <td>
                  <div className="more-value">
                    {props.weatherInfo && props.weatherInfo.main.temp_min}
                  </div>
                </td>
              </tr>
              <tr>
                <td>میزان ابر</td>
                <td>
                  <div className="more-value">
                    {props.weatherInfo && props.weatherInfo.clouds.all + "%"}
                  </div>
                </td>
              </tr>
              <tr>
                <td>میدان دید</td>
                <td>
                  <div className="more-value">
                    {props.weatherInfo && props.weatherInfo.visibility + "m"}
                  </div>
                </td>
              </tr>
              <tr>
                <td>سرعت باد</td>
                <td>
                  <div className="more-value">
                    {props.weatherInfo && props.weatherInfo.wind.speed + "m/s"}
                  </div>
                </td>
              </tr>
              <tr>
                <td>جهت باد</td>
                <td>
                  <div className="more-value">
                    {props.weatherInfo && props.weatherInfo.wind.deg + "deg"}
                  </div>
                </td>
              </tr>
              <tr>
                <td>طلوع خورشید</td>
                <td>
                  <div className="more-value">
                    {props.weatherInfo &&
                      unixTime(props.weatherInfo.sys.sunrise)}
                  </div>
                </td>
              </tr>
              <tr>
                <td>غروب خورشید</td>
                <td>
                  <div className="more-value">
                    {props.weatherInfo &&
                      unixTime(props.weatherInfo.sys.sunset)}
                  </div>
                </td>
              </tr>
              <tr>
                <td>طول جغرافیایی</td>
                <td>
                  <div className="more-value">
                    {props.weatherInfo && props.weatherInfo.coord.lon}
                  </div>
                </td>
              </tr>
              <tr>
                <td>عرض جغرافیایی</td>
                <td>
                  <div className="more-value">
                    {props.weatherInfo && props.weatherInfo.coord.lat}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
    </>
  );
}
