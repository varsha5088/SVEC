import React,{useState}from 'react'

export default function StatesInFunctionalComponets() {

    let [name,updateName]=useState("Adhya Sree");
    return (
        <div>
                <h1 onMouseOver={()=>{updateName("Neelambari v")}}
                    onMouseLeave={()=>{updateName("Neelambari")}}>
                     {name}
            </h1>
        </div>
    )
}
