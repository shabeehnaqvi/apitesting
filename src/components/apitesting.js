import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ApiTesting() {
    var my_array = []
    const [usersdata, setUsersdata] = useState([])
    useEffect(() => {
        const c = localStorage.getItem('userData')
        const x = JSON.parse(c)
        console.log(x)
        my_array = x
    }, [])
    const id = useRef(null);
    const name = useRef(null);
    const email = useRef(null);

    function myfunction() {
        const user = {
            "id": id.current.value,
            "name": name.current.value,
            "email": email.current.value

        }
        my_array.push(user)
        setUsersdata(my_array)
        localStorage.setItem("userData", JSON.stringify(my_array))
        fetch("http://localhost:3001/users", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.status >= 200 && res.status <= 300) {
                    toast('Success!');
                }
                else {
                    toast('Failed!')
                }
            })
            .then(() => {
                id.current.value = ''
                name.current.value = ''
                email.current.value = ''
            })

    }
    return (
        <>
            <h1>Enter Details to Enter in the Database</h1>
            <label>
                <p>ID</p>
                <input ref={id} name="Id" />
            </label>
            <br></br>
            <label>
                <p>Name</p>
                <input ref={name} name="name" />
            </label>
            <br></br>
            <label>
                <p>Email</p>
                <input ref={email} name="Email" />
            </label>
            <br>

            </br>
            <Button variant='primary' type="submit" onClick={myfunction}>Submit</Button>
            <hr size="8" width="100%" color="red"></hr>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <ToastContainer />

            {my_array.map((mydata) => {
                <>
                    <h1>Previously added Details</h1>
                    <h2>ID = {mydata.id}</h2>
                    <h2>Name = {mydata.name}</h2>
                    <h2>Email = {mydata.email}</h2>
                </>
            })}

        </>
    );
}

export default ApiTesting;
