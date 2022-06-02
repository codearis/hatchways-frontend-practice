import styled from "styled-components";
import { MapContainer, TileLayer } from "react-leaflet";
import { StyledTypes } from "../types/StyledTypes";
import { CityCoordsTypes } from "../types/CityTypes";
import { useEffect } from "react";

export const MapBackground = ({ lat, lon }: CityCoordsTypes) => {
  useEffect(() => {}, [lat, lon]);
  return (
    <Map>
      <MapContainer
        center={[lat, lon]}
        zoom={lat ? 6 : 13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </Map>
  );
};

const Map = styled.div<StyledTypes>`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  z-index: -1;
  opacity: 0.4;
  > img {
    filter: grayscale(20%);
  }
`;
