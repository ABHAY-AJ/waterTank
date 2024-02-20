import React, { useState, useEffect } from 'react';
import WaterLevel from './components/WaterLevel';
import Temperature from './components/Temperature';
import Humidity from './components/Humidity';
import WaterPurity from './components/WaterPurity';
import WaterTiming from './components/WaterTiming';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [waterLevel, setWaterLevel] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [waterPurity, setWaterPurity] = useState(null);
  const [waterTiming, setWaterTiming] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          'arduino-url/water-level',
          'arduino-url/temperature',
          'arduino-url/humidity',
          'arduino-url/water-purity',
          'arduino-url/water-timing'
        ];

        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));

        setWaterLevel(data[0].value);
        setTemperature(data[1].value);
        setHumidity(data[2].value);
        setWaterPurity(data[3].value);
        setWaterTiming(data[4].value);

        const today = new Date();
        const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
        setDate(formattedDate);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  return (
    <div className='body-color d-flex flex-column min-vh-100'>
      <div className='nav-bg pb-1 mb-1 rounded-bottom text-center font-weight-bold shadow-sm'>
      <h1 className="text-center">IoT Water Monitoring System</h1>
      </div>
      
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <WaterLevel  value={waterLevel} />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <Temperature value={temperature} />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <Humidity value={humidity} />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <WaterPurity value={waterPurity} />
          </div>
          <div className="col-lg-6 offset-lg-3 d-flex justify-content-center">
            <WaterTiming value={waterTiming} />
          </div>
        </div>
      </div>
      <p className='text-center text-primary'>Today's Date: {date}</p>
    </div>
  );
}

export default App;
