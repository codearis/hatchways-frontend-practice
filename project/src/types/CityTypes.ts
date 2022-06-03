export interface CityListTypes {
  name?: string;
  state?: string;
  country?: string;
}

export interface CityCoordsTypes {
  name?: string;
  lat: number;
  lng: number;
}

export interface CityFetchResponse {
  country: string;
  lat: number;
  local_names: { [x: string]: string };
  lon: number;
  name: string;
  state?: string;
}
