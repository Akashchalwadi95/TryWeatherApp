import { useState } from "react";
import SignUp from "./SignUp";
import Weather from "./Weather";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App(){

  const [isSignedUp,setIsSignedUp] = useState(false);
  return(
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<SignUp setIsSignedUp={setIsSignedUp}/>}/>
            <Route path="/Weather" element={isSignedUp ? <Weather/> : <SignUp setIsSignedUp={setIsSignedUp}/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;




// import axios from "axios";
// import { useState } from "react";
// import './App.css';

// function App(){
//   const [city,setCity] = useState("");
//   const [weather,setWeather] = useState(null);
//   const [error,setError] = useState("");
//   const [loading,setLoading] = useState(false);


//   const API_KEY = "7bdcce40d67c68a887187c65da20a7e2";
//   const fetchWeather=async()=>{
//     if(!city.trim()){
//       setError("Please Enter City Name");
//       setWeather(null);
//       return;
//     }

//     setLoading(true);
//     setError("");
//     try{
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
//     );
//     setWeather({
//       temperature: response.data.main.temp,
//       humidity: response.data.main.humidity,
//       condition: response.data.weather[0].description,
//       city: response.data.name,

//     })
//   }
//   catch(err){
//     setError("City not found. Try again");
//     setWeather(null);
//   }
//   setLoading(false);
// }
//   return(
//     <div className="app-container">
//       <h1>Weather App</h1>
//       <div className="cardType">
//       <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="Enter City Name"></input>
//       <button onClick={fetchWeather}>Search</button>
//       </div>
//       {loading ? <p className="loading">Loading...</p>:
//        error ? <p className="error">{error}</p>:
//        weather ? (<div className="div-info">
//         <h2>City:{weather.city}</h2>
//         <h2>Temperature:{weather.temperature}°C</h2>
//         <h2>Humidity:{weather.humidity}%</h2>
//         <h2>Conditon:{weather.condition}</h2>
//        </div>):null
//       }
//     </div>
//   );
// }

// export default App;