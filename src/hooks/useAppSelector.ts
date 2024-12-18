import {RootState} from "../redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";


export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector