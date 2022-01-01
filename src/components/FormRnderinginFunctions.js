import React,{useState} from 'react'

export default function FormRnderinginFunctions() {

    let initialData={
        uname:"",
        pword:"",
        email:""
    }
    
     const changeUserName=(event)=>{
       updateValues({
         ...values, uname:event.target.value
        })
      }
     const  changePassword=(event)=>{
         updateValues({
        ...values, pword:event.target.value
          })
        }
        const changeEmail=(event)=>{
            updateValues({
        ...values, email:event.target.value
             })
           }
     const submitUserData=(event)=>{
            event.preventDefault()
            console.log(`${values.uname} ${values.pword} ${values.email}`)
        }
        let [values,updateValues]=useState(initialData);
    return (
        <div>
            <form onSubmit={submitUserData} method='get'>
                    <input type="text" value={values.uname}
                    onChange={changeUserName}/>
                    <br/>
                    <br/>
                    <input type="text" value={values.pword}
                    onChange={changePassword}/>
                    <br/>
                    <br/>
                    <input type="text" value={values.email}
                    onChange={changeEmail}/>
                    <br/>
                    <br/>
                    <button type='submit'>Login</button>
                </form>
        </div>
    )
}
