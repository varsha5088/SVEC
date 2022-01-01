import React from 'react'
import {BrowserRouter,Route,Routes}from 'react-router-dom'

export default function ListRendering() {

    // let emplist=["Adhya","abhi","prakruthi","pavitra"]

    let emplist=[
        {
            name:"varsha",
            salary:80000,
            email:"varsha@gmail.com"
        },

        {
            name:"adhya",
            salary:80000,
            email:"adhya@gmail.com"
        },

        {
            name:"abhi",
            salary:80000,
            email:"abhi@gmail.com"
        }
    ]
    return (
        <div>
        <BrowserRouter>
         <Routes>
           <Route path ="/h" element={<M />}></Route>
         </Routes>
         </BrowserRouter>
            <h1> List Rendering </h1>
                {
            //    emplist.map(element => (
            //        <h1>{ element }</h1>
            //    ) )
               } 

            {
                   emplist.map(
                   empdata=>

                    <>
                       <p>{empdata.name}</p>
                       <p>{empdata.salary}</p>
                       <p>{empdata.email}</p>
                     </>
                   )
                   }
        </div>
    )
}

function M(){
    return(
        <>
        <h1>:: Home ::</h1>
        </>
    )
}

