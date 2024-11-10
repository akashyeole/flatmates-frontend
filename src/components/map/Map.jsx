import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import "../map/Map.css";
import axios from "axios";

const Map = (props) => {
  const [pos, setPos] = useState({lat:78 , lng:45});
    
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCGvHaw6zRdndtdU2PVfDKl5DMPAjrFZTw",
  });
  
    useEffect(()=>{
      const params = {
        apiKey: 'v6c7FJ4lJBw7k6IeqJPKPCI7ZIh-WNqpq9__P5uOxII',
        q: props.address,
        limit: 1
      }
      const getData = async () => {
        await axios.get(url, { params })
        .then(async response => {
          const data=response.data.items[0].position
          setPos(data);
        }).catch(error => {
          console.log(error);
        });
      };
      getData();
    }, [props.address])

    const url = "https://geocode.search.hereapi.com/v1/geocode";
    var center = pos

  return (
    <div className="main rounded-3" >
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          options={{
          streetViewControl: false,
          disableDefaultUI: true,
          }}
          mapContainerClassName="map-container rounded-3"
          center={center}
          zoom={15}
        >
          <Marker position={pos} icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}/>
          
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;