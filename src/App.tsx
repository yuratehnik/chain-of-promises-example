import React, {useEffect, useState} from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import {getUserById} from "./helpers/getUserById";
import {loadFriends} from "./helpers/loadFriendsList";
import {userRequestResponse, userType} from "./types/types";

const userId = 1;

type userStateType = userType | null;
type friendsStateType = Array<userType> | null;

function App() {
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [user, setUser] = useState<userStateType>(null)
  const [friends, setFriends] = useState<friendsStateType>(null)

  const getFriendsHandler = () => {
      setDataLoading(true);

      getUserById(userId)
          .then((user)=>{

              setUser(user)
              loadFriends([2,3,4])
                  .then((data)=> {
                      /*setDataLoading(false)
                      setFriends(data.map((item: userRequestResponse)=>item.result))*/
                      console.log(data)
                  })
          })
  }

  let userBLock: JSX.Element | null = user ?
      <div>
          User id: {user?.id}<br/>
          User name: {user?.name}
      </div>
      : null;

  let friendsList = friends ?
      friends.map((item)=>{
          return <div key={item.id}>
              <br/>
              Friend id: {item.id}<br/>
              Friend name: {item.name}<br/>
          </div>
      }) : null;

  return (
    <div className="App">
        <Button variant="outlined"
                color="primary"
                onClick={getFriendsHandler}>
            Load user!
        </Button>
        <br/>

        {dataLoading ? "Loading..." : null}

        {userBLock}
        {friendsList}
    </div>
  );
}

export default App;
