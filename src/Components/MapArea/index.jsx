import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./MarArea.module.scss";

const MapArea = ({ geoPos }) => {
  return (
    <YMaps>
      <Map
        defaultState={{
          center: [geoPos[1], geoPos[0]],
          zoom: 14,
        }}
        className={styles["map-area"]}
      >
        <Placemark geometry={[geoPos[1], geoPos[0]]} />
      </Map>
    </YMaps>
  );
};

export default MapArea;
