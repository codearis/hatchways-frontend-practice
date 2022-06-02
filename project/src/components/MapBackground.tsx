import styled from "styled-components";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { StyledTypes } from "../types/StyledTypes";
import { CityCoordsTypes } from "../types/CityTypes";

export const MapBackground = (location: CityCoordsTypes) => {
  const api = process.env.REACT_APP_OPEN_API;
  const cloudLayerUrl = `https://tile.openweathermap.org/map/precipitation_new/10/{x}/{y}.png?appid=${api}`;
  const groundLayerUrl = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;

  function ChangeMapView({ coords }: any) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  }

  return (
    <Map>
      <MapContainer
        center={[location.lat, location.lon]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <div style={{ position: "absolute", zIndex: -1 }}>
          <TileLayer url={groundLayerUrl} />
        </div>
        <div style={{ position: "absolute", zIndex: 0 }}>
          <TileLayer url={cloudLayerUrl} />
        </div>
        <ChangeMapView coords={location} />
      </MapContainer>
    </Map>
  );
};

const Map = styled.div<StyledTypes>`
  width: 100vw;
  height: 120%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  z-index: -1;
  opacity: 0.4;
  > img {
    filter: grayscale(20%);
  }

  @media (max-width: 480px) {
    height: 200%;
  }
`;
