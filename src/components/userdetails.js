
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
    const pageData = useParams()
    const [userDetails, setUserDetails] = useState({})
    function getUserDetails() {
        fetch('https://jsonplaceholder.typicode.com/users/'+pageData.userid)
            .then(response => response.json())
            .then(json => setUserDetails(json))
        
    }
    useEffect(()=>{getUserDetails()},[])

    return (
        <>
            <h1>UserDetails</h1>
            <h2>{userDetails.name}</h2>
            <h2>{userDetails.email}</h2>
            <h2>{userDetails.phone}</h2>
        </>);
}

export default UserDetails;
