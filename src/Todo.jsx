import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './Todo.css';
// import icon from './images/icon.jpg';


const Todo = () =>{
    const uniqueId= uuid();
    const smallId= uniqueId.slice(0,8);
   
    const[data,setData]=useState([]);
    const[inputData,setInputData]=useState('');
    const handleCHange=(e) =>{
        setInputData(e.target.value);
    }

    const[toggle,setToggle]= useState(false);
    const[editItemId, seteditItemId]= useState(null);
    const addItem =() =>{
        if(inputData===''){
            alert("enter something");
        }
        else if(inputData &&toggle){
            setData(
                data.map((ele)=>{
                    if(ele.id === editItemId){
                        return {...ele,name :inputData}
                    }
                    return ele;
                })
            )
            setToggle(false);
        }
        else{
        setData([...data,{
            id: smallId,
            name: inputData
        }]);
        }
        setInputData('');
    }

    const deleteItem =(id)=>{
        const dataAfterDeletion = data.filter((ele)=>{
            return id!==ele.id
        })
        setData(dataAfterDeletion)
    }

    const editItem=(id) =>{
        setToggle(true);
        seteditItemId(id);
        const previousValue =data.find(ele=> ele.id==id);
        setInputData(previousValue.name);
    }

    const deleteAll=()=>{
       setData([]);
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
                {
                    (toggle ===true) ?(<button className='inputEdit' onClick={addItem}><i class="fa fa-check-circle fa-lg" aria-hidden="true"></i></button>)
                    :(<button className='addBtn' onClick={addItem}><i class="fa fa-plus" aria-hidden="true"></i></button>)
                }
                
                
            </div>
            <br />

            <div className='listItems'>
                {
                    data.map((ele)=>{
                        return(
                            <div key={ele.id} className="eachItem">
                            <span>{ele.name} </span>
                            <button className='deleteBtn' onClick={()=> deleteItem(ele.id)}><i class="fa fa-trash"></i></button>
                            <button className='editBtn' onClick={()=> editItem(ele.id)}><i class="fa fa-edit"></i></button>
                            </div>
                        )
                    })
                    
                        
                    
                }
               <button className='deleteAll' onClick={deleteAll}><i class="fa fa-trash"></i> &nbsp; DELETE ALL</button>
               
            </div>
            
        </div>
    </div>
    </div>
  );
}

export default Todo;
