import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./MarArea.module.scss";

const MapArea = ({ geoPos }) => {
  const coords = geoPos?.toString().split(",");

  return (
    <YMaps>
      <Map
        defaultState={{
          center: [+coords[0], +coords[1]],
          zoom: 14,
        }}
        className={styles["map-area"]}
      >
        <Placemark geometry={[+coords[0], +coords[1]]} />
      </Map>
    </YMaps>
  );
};

export default MapArea;
