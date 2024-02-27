import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useState } from "react"
import axios from "axios";



export const Dashboard = () => {
    const[balance,setBalance]=useState("");

   
        axios.get("http://localhost:3000/api/v1/account/balance",
            {headers:{
            'Authorization' : `Bearer ${localStorage.getItem("token")}`,
           } })
            .then(response => {
                setBalance(response.data.balance)
                
                console.log(response.data.balance);
            });

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}