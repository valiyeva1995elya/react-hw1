import React from 'react';
import "./style.css"


const UsersBlock = (props: any) => {
  const users = props.users
  console.log(users);
  
 
 const result = users.map(user => {
 
  return (
        <>
          <div className='main-block' key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.textStatus}</p>
            <img src={user.ava} alt="" />
            <p><i> {user.status}</i></p>
          </div>
        </>
      )
 })
 
  return (
    <>
      {result}
    </>
  )
}

function App() {
  const users = [
    {
      id: 1,
      name: "Anna",
      textStatus: "I'm super girl!",
      ava: "https://avatars.mds.yandex.net/i?id=a129b50e80fb503343d665c47f783f26d8cd2810-5325822-images-thumbs&n=13",
      status: "online"
    },
    {
      id: 2,
      name: "Mark",
      textStatus: "I'm a developer!",
      ava: "https://avatars.mds.yandex.net/i?id=e27665568c5b5828accb7e94799c496a63d56db8-8497208-images-thumbs&n=13",
      status: "online"
    },
    {
      id: 3,
      name: "Jony",
      textStatus: "I'm a waiter!",
      ava: "https://avatars.mds.yandex.net/i?id=d860c37f0340f8fb3d5c1e2fa88e9354-4270998-images-thumbs&n=13",
      status: "offline"
    },
    {
      id: 4,
      name: "Leo",
      textStatus: "i'm a rock musician",
      ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3SJakJxg_W9WpCgi2Pzi3SIOX0jQmUlgbVQ96zfrrerCwbXo4sNR8e_GmpdTTPn_BaE&usqp=CAU",
      status: "online"
    },
  ]
  return (
    <UsersBlock users={users}/>
  );
}

export default App;
