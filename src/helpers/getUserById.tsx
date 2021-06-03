import React from "react";
import {userRequestResponse, userType} from "../types/types";
import {USER_API} from "../config/config";

export const getUserById = (id: number, link: string = USER_API): Promise<userType> => {
    return new Promise((resolve, reject) => {
        fetch(`${link}${id}`)
            .then((response) => response.json())
            .then((response)=> {
                resolve(response)
            })
            .catch((response)=> {
                reject({
                    type: "error",
                    code: response.code,
                    message: response.message
                })
            })
    })
}