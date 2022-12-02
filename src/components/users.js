
import { React, useState, useEffect } from "react"


import { Link } from "react-router-dom";

function Users() {

  const [userDetails, setUserDetails] = useState([])
  
  function getUserDetails() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUserDetails(json))
  }

  useEffect(() => { getUserDetails() }, [])
  return (
    <>
      <h1>UserDetails</h1>
      {userDetails.map((item,index) => <h2> <Link to={"/user/"+item.id} >{index+1}.{item.name}</Link> </h2>)}
    </>
  );
}


export default Users;