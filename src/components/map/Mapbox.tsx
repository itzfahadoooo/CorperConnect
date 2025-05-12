import { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
mapboxgl.accessToken = MAPBOX_TOKEN;

const MapboxComponent = () => {
  const mapContainerRef = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);

  
  const [lng] = useState(-97.7431);
  const [lat] = useState(30.2672);
  const [zoom] = useState(2);

  useEffect(() => {
    // Check for WebGL support
    if (!mapboxgl.supported()) {
      console.error("Your browser does not support WebGL.");
      alert("Your browser does not support WebGL. Please use a supported browser.");
      return;
    }

    // Initialize the map
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current as unknown as HTMLElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Resize the map on load
    map.current.on("load", () => {
      if (map.current) {
        map.current.resize();
      }
    });

    // Handle missing Mapbox token
    if (!MAPBOX_TOKEN) {
      console.error("Mapbox token is missing. Please set VITE_MAPBOX_TOKEN in your .env file.");
    }

    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [lat, lng, zoom]);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default MapboxComponent;