import React from "react";
import {serverResponseController} from "./serverResponseController";
import {getUserById} from "./getUserById";

export const loadFriends = (friends: number[]): Promise<any> => {
    if (friends.length < 1) {
        return new Promise((resolve)=>{
            resolve(serverResponseController(false, {message: "empty friends"}))
        })
    }

    let arrayOfUsers: any[] = []

    let listOfRequests: Promise<any> = friends.reduce( async (accumulator: Promise<any>, id)=>{

        await accumulator
            .then((data)=>{
                if(data){
                    arrayOfUsers.push(data)
                }
            });

        return getUserById(id)

    }, Promise.resolve())

    return listOfRequests.then((data)=>{
        arrayOfUsers.push(data);
        return arrayOfUsers;
    })
}