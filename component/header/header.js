
"use client";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./header.css"
import Link from "next/link";
import { myStore } from "@/store";
import { useState } from "react";




 let MyHeader=()=>{
  return  <Provider store={myStore}>
        <Headers></Headers>
  </Provider>
}





 function Headers(){

 let someName=useSelector(function(store){
     return store.currentUser
 })
 let meraUser=useSelector(function(store){
  return store.users
 })
  


    return  <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Bussiness    
    </a>
    {someName._id ? <span>Welcome, <b>{someName.user_email}</b></span> : null}
    <button
      data-mdb-collapse-init=""
      className="navbar-toggler"
      type="button"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">
            Home
          </a>
        </li>
        <li className="nav-item">
        {!someName._id ?<li class="nav-item">
              <Link class="nav-link" href="/login">Login</Link>
            </li>: null}
        </li>
        <li className="nav-item">
        {someName._id ?<li class="nav-item">
              <Link class="nav-link" href="/login">Login out</Link>
            </li>: null}
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="./signUp">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
        {someName._id ?<li class="nav-item">
              <Link class="nav-link" href="/users">users</Link>
            </li>: null}
        </li>

        <li className="nav-item">
        {someName._id ?<li class="nav-item">
              <Link class="nav-link" href="/create-products">products</Link>
            </li>: null}
        </li>


        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  
  
}

export default MyHeader;