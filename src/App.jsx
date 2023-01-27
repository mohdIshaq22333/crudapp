import {useState} from "react"
import Test1 from "./components/crudFunc"
import Chart from "./components/chart"
import styles from "styled-components"
import "./App.css"
function App() {
 const [active,setActive]=useState(0);
  return (
    <MainCont className="App">
      <div className="btnns">
        <span className={active==0 ? "btn active" : "btn"} onClick={()=>setActive(0)}>CRUD App</span>
        <span className={active==1 ? "btn active" : "btn"} onClick={()=>setActive(1)}>Chart</span>
      </div>
      {
      active==0 &&
      <Test1/>
      }
      {
      active==1 &&
     <Chart/>
      }
    </MainCont>
  )
}

export default App


const MainCont =styles.div`
.btnns{
  width: 200px;
  justify-content: space-between;
  display: flex;
  margin-bottom: 50px;
  align-items: center;
  .btn{
    cursor: pointer;
    border: 1px solid;
    padding: 7px;
    border-radius: 11px;
}
.btn.active{
  background: white;
  color: #242424;
}
}
`;