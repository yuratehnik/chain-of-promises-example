import React from "react";
import {userRequestResponse, userType} from "../types/types";
import {USER_API} from "../config/config";

export const getUserById = (id: number): Promise<userType> => {
    return new Promise((resolve, reject) => {
        fetch(`${USER_API}${id}`)//https://jsonplaceholder.typicode.com/users/
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