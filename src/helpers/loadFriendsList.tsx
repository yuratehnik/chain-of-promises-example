import React from "react";
import {serverResponseController} from "./serverResponseController";
import {getUserById} from "./getUserById";

export const loadFriends = (friends: number[]): Promise<any> => {
    if (friends.length < 1) {
        return new Promise((resolve)=>{
            resolve(serverResponseController(false, {message: "empty friends"}))
        })
    }

    let listOfRequests = friends.map(getUserById)

    return Promise
        .all(listOfRequests.map((item: Promise<any>)=>buildResultObject(item)))
        .then(
            (results: any[]) => {
                return results.filter((item)=>(item.success))
            }
        );
}

const buildResultObject = (promise: Promise<any>) => {
    return promise
        .then(result => {
            if(result.id) {
                return {
                    success: true,
                    result }
            } else {
                return {
                    success: false,
                    message: "error in cathing friend"
                }
            }

        })
        .catch(result => ({
            success: false,
            message: "error in cathing friend"
        }));
};