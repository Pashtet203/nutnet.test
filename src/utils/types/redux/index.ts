import {TCityList} from "../cityList";


export interface IInitialStateHomeReducer {
    searchString: string;
    cityList: TCityList[],
}