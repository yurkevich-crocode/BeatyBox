import styles from "./MarArea.module.scss";
import mapboxgl from "!mapbox-gl";
import { useEffect, useState, useRef } from "react";
import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";

const MapArea = ({ geoPos }) => {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      center: [geoPos.longitude, geoPos.latitude],
      zoom: 13,
    });

    const el = document.createElement("div");
    el.className = "marker";

    new mapboxgl.Marker(el)
      .setLngLat([geoPos.longitude, geoPos.latitude])
      .addTo(map.current);
  });

  useEffect(() => {
    return () => {
      if (map.current && map.current.getSource("marker")) {
        map.current.getSource("marker").unsubscribe();
      }
    };
  }, []);

  return <div ref={mapContainer} className={styles["map-area"]} />;
};

export default MapArea;
