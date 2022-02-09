import Login from './Login';
import React from "react";
import {ProfileProps} from "./Profile";

type PrivateProps = {
    isLoggedIn: boolean;
    Component: React.ComponentType<ProfileProps>;
}

const Private = ({isLoggedIn, Component}: PrivateProps) => {
    if(isLoggedIn){
        return <Component name={"jewoo"}></Component>
    }else{
        return <Login></Login>
    }
}

export default Private;