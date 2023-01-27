import { useState } from 'react'
import styles from "styled-components"


function UserForm({submitFunc,data, closeFunc}) {
 const [info,setInfo]=useState(data);
 
  return (
    <MainDiv>
        <span className='cancel' onClick={closeFunc}>x</span>
     <input placeholder='First Name' type="text" value={info?.first_name || ""} onChange={(e)=>setInfo((val)=>({...val,first_name:e.target.value}))} />
     <input placeholder='Last Name'  type="text" value={info?.last_name || ""} onChange={(e)=>setInfo((val)=>({...val,last_name:e.target.value}))} />
     <input placeholder='Email'  type="text" value={info?.email || ""} onChange={(e)=>setInfo((val)=>({...val,email:e.target.value}))} />
     <input onClick={()=>submitFunc(info)} type="submit" value="Submit" className="submit"/>
    </MainDiv>
  )
}

export default UserForm


const MainDiv =styles.div`
display: flex;
    flex-direction: column;
    gap: 19px;
    font-size: 16px;
    padding: 35px 40px;
    padding-top: 70px;
    background: #3b3b3b;
    border-radius: 12px;
    position:relative;
    color:white;
    .cancel{
        position: absolute;
      top: 15px;
      right: 20px;
      border: 1px solid;
      padding: 0px 7px;
      border-radius: 50%;
      cursor: pointer;
      }
      input{
        background: #3b3b3b;
    box-shadow: none;
    border: 1px solid white;
    padding: 10px;
    border-radius: 9px;
    width:250px;
    color:white !important;
      }
      .submit{
        background: white;
        color: black !important;
        font-weight: bolder;
        font-size: 15px;
        margin: auto;
        margin-top: 20px;
      }
`;