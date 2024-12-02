import {TCityList} from "../cityList";
import {TWeatherInCity} from "../weather";


export interface IInitialStateHomeReducer {
    searchString: string;
    cityList: TCityList[],
    weatherInCity: TWeatherInCity | null,
    favoriteCity: TWeatherInCity[],
}