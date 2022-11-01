function Plan(props){
    return <>
    
    <li className="shadow p-2 my-2 col-sm-9">
       {props.value}
    </li>
    <br></br>
    <button className="btn btn-danger mx-2 my-1 col-sm-2 offset-1 " onClick={()=>{props.sendData(props.id)}}>Delete</button>
    
 
    </>
    
}
export default Plan;