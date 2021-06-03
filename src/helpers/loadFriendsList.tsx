import React from "react";
import {serverResponseController} from "./serverResponseController";
import {getUserById} from "./getUserById";

export const loadFriends = (friends: number[]): Promise<any> => {
    if (friends.length < 1) {
        return new Promise((resolve)=>{
            resolve(serverResponseController(false, {message: "empty friends"}))
        })
    }

    let listOfRequests = friends.map((id)=>{
        return getUserById(id)
    })

    /*let TEST_ERRORS_REQUEST_LIST = [
        getUserById(5),
        getUserById(3, "https://jsonplaceholder.typicode.com/users/353553"),
        getUserById(318, "https://google.com/"),
        getUserById(4)
    ]*/

    return Promise.allSettled(listOfRequests)
        .then(
            (results: any[]) => {
                let filteredArray = results.filter((item)=>{
                    return item.status === "fulfilled" && item.value?.id
                })
                return filteredArray.map(item=>(serverResponseController(true, item.value)))
            }
        );
}