import styled from "styled-components";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { StyledTypes } from "../types/StyledTypes";
import { CityCoordsTypes } from "../types/CityTypes";

export const MapBackground = (location: CityCoordsTypes) => {
  //

  const api = process.env.REACT_APP_OPEN_API;
  const cloudLayerUrl = `https://tile.openweathermap.org/map/precipitation_new/10/{x}/{y}.png?appid=${api}`;
  const groundLayerUrl = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;

  function ChangeMapView({ coords }: any) {
    const map = useMap();
    map.flyTo(coords, map.getZoom());
    return null;
  }

  return (
    <Map>
      {!location ? (
        <></>
      ) : (
        <MapContainerStyled
          center={[location.lat, location.lon]}
          zoom={10}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <MapLayer zIndex={-1}>
            <TileLayer url={groundLayerUrl} />
          </MapLayer>
          <MapLayer zIndex={0}>
            <TileLayer url={cloudLayerUrl} />
          </MapLayer>
          <ChangeMapView coords={location} />
        </MapContainerStyled>
      )}
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
  @media (max-width: 480px) {
    height: 180%;
  }
`;

const MapContainerStyled = styled(MapContainer)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MapLayer = styled.div<StyledTypes>`
  position: absolute;
  z-index: ${(props) => props.zIndex};
`;
