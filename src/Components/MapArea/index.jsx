import styles from "./MarArea.module.scss";
import mapboxgl from "!mapbox-gl";
import { useEffect, useState, useRef } from "react";

const MapArea = ({ geoPos }) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGFudmVyeXVyayIsImEiOiJjbGE4MTIzam0wZ2Z3M3ZtcTFlYWc0ZnJ0In0.xOVF1gHOacyuHOe2-LSXZw";

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(geoPos.longitude);
  const [lat, setLat] = useState(geoPos.latitude);
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      center: [lng, lat],
      zoom: zoom,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);
  });

  return <div ref={mapContainer} className={styles["map-area"]} />;
};

export default MapArea;
