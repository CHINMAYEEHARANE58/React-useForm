import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const Form = () => {
    const [registerationSucc, setRegisterationSucc] = useState(false)
    const {register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = () => {
        setRegisterationSucc(true)
    }

  return (
    <div style={{ textAlign: "center", marginTop: "50px", backgroundColor:"black", width:"400px", height:"500px", marginLeft:"400px", display:"flex", flexDirection:"column" }}>
        {registerationSucc && (<div> <p style={{ color: "green", fontSize: "18px" }}>Registration Successful!!</p> </div>)}
        <form className='form' onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px", margin: "auto", height:"400px", paddingTop:"50px"}}>
            <div style={{marginBottom:"20px"}}>
                <label style={{ color:"white", margin: "0 10px 10px 0", height:"50px"}}>First Name:</label>
                <input style={{ width:"250px", height:"30px", textAlign:"center"}} type="text" name='firstName' {...register("firstName", {required: "First name is required!"})}/>
                {errors.firstName && <p className='err' style={{ color: "red", fontSize: "16px", marginTop: "5px" }}>{errors.firstName.message}</p>}
            </div>

            <div style={{marginBottom:"40px"}}>           
                <label style={{ color:"white", margin: "0 10px 10px 0", height:"50px"}}>Last Name:</label>
                <input style={{ width:"250px", height:"30px", textAlign:"center"}} type="text" name='lastName' {...register("lastName", {required: "Last name is required!"})}/>
                {errors.lastName && <p className='err' style={{ color: "red", fontSize: "16px", marginTop: "5px" }}>{errors.lastName.message}</p>}
            </div> 

            <div style={{marginBottom:"40px"}}>
                <label style={{ color:"white", margin: "0 10px 10px 0", height:"50px"}}>Email</label>
                <input style={{ width:"250px", height:"30px", textAlign:"center"}} type="email" name='email' {...register("email", 
                {required: "Email is required!", 
                pattern:{value: /^\S+@\S+$/i}, 
                message: "Invalid Email"}
                )} />
                {errors.email && <p className='err' style={{ color: "red", fontSize: "16px", marginTop: "5px" }}>{errors.email.message}</p>}
            </div>

            <div style={{marginBottom:"40px"}}>
                <label style={{ color:"white", margin: "0 10px 10px 0", height:"50px"}}>Password</label>
                <input style={{ width:"250px", height:"30px", textAlign:"center"}} type="password" name='password' {...register("password", 
                {required: "Password is required!", 
                minLength: {value: 5, 
                message: "Password must be more than 4 charachters"}, 
                maxLength:{value: 20, message:"Password cannot be more than 20 charachters"}}
                )}/>
                {errors.password && <p className='err' style={{ color: "red", fontSize: "16px", marginTop: "5px" }}>{errors.password.message}</p>}
            </div>


            <input type="submit" value={"Submit"} style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px", cursor: "pointer", border: "none", width: "200px", marginTop:"10px" }}/>
        </form>
      
    </div>
  )
}

export default Form
