import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './Todo.css';
// import icon from './images/icon.jpg';


const Todo = () =>{
    const uniqueId= uuid();
    const smallId= uniqueId.slice(0,8);
    console.log(uniqueId);
    const[data,setData]=useState([]);
    const[inputData,setInputData]=useState('');
    const handleCHange=(e) =>{
        setInputData(e.target.value);
        console.log(inputData);
    }

    const addItem =() =>{
        if(inputData===''){
            alert("enter something");
        }
        else{
        setData([...data,inputData]);
        setInputData('');
        }
    }
  return (
      <div className='Todo'>
    <div style={{textAlign: "center" , paddingTop: "5%"}}>
        <h1>TO DO &#128640;</h1>
    </div>
    <div className='parent_div'>
        <div className='child_div'>
            <div className='inputSection'>
            {/* <img src={icon} alt="todoIcon"/> */}
            <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-to-do-list-working-from-home-justicon-lineal-color-justicon.png"/> 
                <br/>
                <br/>
                <input type="text" placeholder='Enter your TODO' onChange={handleCHange} value={inputData}/>
                <button className='addBtn' onClick={addItem}><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
            <br />

            <div className='listItems'>
                {
                    data.map((ele)=>{
                        return(
                            <div className="eachItem">
                            <span>{ele} </span>
                            <button className='deleteBtn' onClick={deleteItem}><i class="fa fa-trash"></i></button>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </div>
    </div>
  );
}

export default Todo;
