export interface Park {
  description: string;
  designation: string;
  directionsInfo: string;
  directionsUrl: string;
  fullName: string;
  fullStates: string;
  id: string;
  isFavorite: boolean;
  lat: string;
  long: string;
  name: string;
  parkCode: string;
  photoUrl: string;
  states: string;
  thumbUrl: string;
  url: string;
  weatherInfo: string;
}

export interface AppData {
  [key: string]: Park;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}
