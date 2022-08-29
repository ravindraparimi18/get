import React, { Component } from 'react'

export default function ravindra() {
  const[user, setuser ] =usestate({username: "ravindra"});
console.log(user);
    return (
      <div>
        {user.username}
        <br/>
        <button onclick={() => setuser({age:25})}>click</button>

      </div>
    );
  }


export default usestate