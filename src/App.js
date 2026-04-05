import { useState } from "react";
import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const apiKey = "a27ae9cb1909ed64f3d4c2b88935c312";

  const getWeather = async () => {
    if (city === "") return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const res = await fetch(url);
    const result = await res.json();

    setData(result);
  }; 

  let bgColor = "";

if (data?.weather[0].main === "Clear") bgColor = "#f7b733";
else if (data?.weather[0].main === "Clouds") bgColor = "#757f9a";
else if (data?.weather[0].main === "Rain") bgColor = "#4b79a1";
else bgColor = "#333";

  return ( 
<>
  <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    
    {/* Brand */}
    <a className="navbar-brand" href="#">Navbar</a>

    {/* Toggle Button (IMPORTANT) */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Collapse Section */}
    <div className="collapse navbar-collapse" id="navbarNav">

      {/* Left side links */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li> 
        <li className="nav-item"> 
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> 
      </ul>

      {/* Right side search */}
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

    </div>
  </div>
</nav>
    <div className="card" style={{ width: "18rem", margin: "20px auto" }}> 


      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather} className="search">Search</button> 

  

      {data && data.main && (
  <div className="card shadow" style={{ width: "18rem", margin: "20px auto" }}>
    
    <div className="card-body"> 

      <img 
  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
  alt="weather icon"
/>
      
      <h5 className="card-title">{data.name}</h5>
      
      <h6 className="card-subtitle mb-2 text-muted">
        {data.main.temp}°C
      </h6>
      
      <p className="card-text">
        {data.weather[0].main}
      </p>

    </div>

  </div>
      )}
    </div>
    </>
  );
}

export default App;