import React from "react";
import {userRequestResponse} from "../types/types";

type responseControllerType = (success: boolean, result: any)=> userRequestResponse;

export const serverResponseController: responseControllerType = (success: boolean, result: any) => {
    return {
        success,
        result
    }
}