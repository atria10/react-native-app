import {RouteProp} from "@react-navigation/native";
import { RootStackParams } from "./rootStackParams.type";
import {StackNavigationProp} from "@react-navigation/stack";
import { FC } from "react";

type ScreenNavigationProps<T extends keyof RootStackParams>={
    navigation: StackNavigationProp<RootStackParams,T>;
    route:RouteProp<RootStackParams>;
};
type ScreenFC<S extends keyof RootStackParams>= FC<ScreenNavigationProps<S>>;

export default ScreenFC;