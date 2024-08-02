"use client"

import auth from "@/apis/apis/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
 import axios from "axios";
import Router, { useRouter } from "next/navigation";
import { Provider, useDispatch } from "react-redux";
import { useState } from "react";
import {setUser} from '../../auth'
import { myStore } from "@/store";



 let SignupForm= ()=>{
  return <Provider store={myStore}>
       <LoginForm></LoginForm>
  </Provider>
}
  function LoginForm(){


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  let router=useRouter();
  let dispatch=useDispatch();
  // let [users,setUser]=useState([])
    function signUPkarlo(data){



         axios.post("/api/signup",data).then(function(resp){
          toast.success("sign up successfull");
          console.log(resp.data)
         })
        //  console.log(data);
        //  user.push(data)
        //  setUser([...user]);
      //   console.log(data);
      //   localStorage.removeItem("token");
      //   toast.success("loging successfull");
      //   auth.login(data).then(function(resp){
      //     let result=resp.data;
      //     localStorage.setItem("token" ,result.token);
      //     console.log(result);
      //     if(resp.status==200){
      //       dispatch(setUser(resp.data.user));
      //  router.push("./dashboard");
      //     }
          
      //   })
        //  toast.success("login successfull")
        // localStorage.removeItem('token')
        //  auth.login(data).then(function(response){
        //   let result=response.data;
        //   localStorage.setItem("token",result.token);
        //   console.log(result);
        //   if(response.status==200){
        //     alert("okay")
        //     router.push("./dashboard")
        //   }
        //  })

  }




    return <div>
        <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid"
          alt="Sample image"
        />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={handleSubmit(signUPkarlo)}>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
             
          </div>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          {/* Email input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input
            {...register("user_email",{required:true})}
              type="email"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid email address"
            />
            {errors.user_email ? <div style={{color:"red"}}>please fill this field</div>:null}
           
          </div>
          {/* Password input */}
          <div data-mdb-input-init="" className="form-outline mb-3">
            <input
            {...register("user_password",{required:true, minLength:6})}
              type="password"
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter password"
            />
            {errors.user_password && errors.user_password.type=="required" ? <div style={{color:"red"}}>please fill this field</div>:null}
            {errors.user_password && errors.user_password.type=="minLength" ? <div style={{color:"red"}}>password must be at least 6 charactor</div>:null}

            
          </div>
          <div className="d-flex justify-content-between align-items-center">
            {/* Checkbox */}
            <div className="form-check mb-0">
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">
              Forgot password?
            </a>
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="submit"
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
            >
              Login
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?{" "}
              <a href="#!" className="link-danger">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    {/* Copyright */}
    <div className="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
    {/* Copyright */}
    {/* Right */}
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter" />
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google" />
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in" />
      </a>
    </div>
    {/* Right */}
  </div>
</section>

    </div>
}

export default SignupForm;