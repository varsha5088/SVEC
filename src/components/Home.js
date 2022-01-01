import React from 'react'
import {BrowserRouter,Link,Route,Routes}from 'react-router-dom'
import FormRndering from './FormRndering'
export default function Home() {
    return (
        <div>
         <BrowserRouter>
         <Routes>
           <Route path ="/home" element={<Main />}></Route>
           <Route path ="/login" element={<FormRndering />}></Route>
         </Routes>
         </BrowserRouter>   
        </div>
    )
}


function Main(){
    return(
        <>
        <h1>:: Home Page ::</h1>
        <Link to={"Login"}>Login</Link>
        </>
    )
}
