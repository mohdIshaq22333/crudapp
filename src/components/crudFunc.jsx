import { useState, useEffect } from 'react'
import axios from 'axios';
import styles from "styled-components"
import Form from "./userForm"
import {useDispatch,useSelector} from "react-redux";
import { addUser, updateUser,initialUsers,deleteUser } from '../redux/mainStates';

function CrudFunc() {
  const [status,setStatus]=useState("");
  const [popUp,setPopUp]=useState(false);
  const [id,setId]=useState(-1);
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.users.value);
const fetchData = async()=>{
  setStatus("Loading....");
 const response = await axios.get("https://reqres.in/api/users?page=2")
   .then(function (response) {
  setStatus("");
dispatch(initialUsers(response.data.data));
})
.catch(function (error) {
  setStatus(error);
})
}
const deleteFunc=(id)=>{
  dispatch(deleteUser({id:id}))
}
const updateFunc=(values)=>{
  dispatch(updateUser({id:id, values:values}));
  setPopUp(false);
  setId(-1);
}
const newFunc=(values)=>{
  dispatch(addUser(values))
  setPopUp(false);
  setId(-1);
}
const closePopUp=()=>{
  setPopUp(false);
  setId(-1);
}
useEffect(()=>{
  fetchData();
},[])

 
  return (
    <MainDiv>
      <span className="status">{status}</span>
{
  data && data[0] &&
  <>
      <table>

  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
  </tr>
     {
      data.map((val,index)=>
      <tr className="user" key={val.id}>
      <td>{val?.first_name}</td>
      <td>{val?.last_name}</td>
      <td>{val?.email}</td>
      <td>
        <span className='btns' onClick={()=>
        {
          setId(index)
          setPopUp(true);
        }
          }>Update</span>
      </td>
      <td>
      <span className='btns' onClick={()=>deleteFunc(index)}>Delete</span>
      </td>
      </tr>
      )
     }
  </table>
  <span onClick={()=>setPopUp(true)} className="addUser btns">Add User</span>
{
 popUp &&
  <div className="formCont">
    <Form data={data[id] || {}} closeFunc={closePopUp} submitFunc={data[id] ? updateFunc : newFunc}/>
  </div>
  }
  </>
  }
    </MainDiv>
  )
}

export default CrudFunc


const MainDiv =styles.div`
text-align: left;
table{
  border-spacing:0 20px;
}
tr{
  margin-bottom:20px;
}
td, th {
  padding: 10px;

}
  span.btns{
    border: 1px solid;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
  }
  .addUser{
    margin: auto;
    display: block;
    width: 150px;
    text-align: center;
    margin-top: 55px;
  }
.formCont{
  position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff24;
  
}
`;