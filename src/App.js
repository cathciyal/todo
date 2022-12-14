import React, { useState } from 'react';
import './App.css'
import '../node_modules/rsuite/dist/rsuite.min.css';
import Draggable from 'react-draggable';
import { Modal, Button } from 'rsuite';

function Todo() {


    const [open, setOpen] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const handleOpen = () => { setOpen(true); setBackdrop(true); }
    const handleClose = () => setOpen(false);
    const [Name,setName]=useState("");
    const [list,setList]=useState([])
    const [Completedtodo,setCompletedTodo]=useState([])

    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log(Name);
        const date={Name}
        if(Name)
        {
           setList((ls)=>[...ls,date])
           setName("")
        }
    }
    
    
   
   
    
  
    return (
     
        <div>
            <h2 style={{textAlign:"center"}}>To Do List Application</h2>
            <Button color="green" appearance="primary" style={{marginLeft:"1310px",backgroundColor: '#08FF08',color:"black",border:"2px solid black"}}  className='ModalButton' 
                onClick={handleOpen}>
                New Task +
            </Button>
            <br /><br />
            
            <Modal
                open={open}
                onClose={handleClose}
                backdrop={backdrop}
            >
                <Modal.Header>
                    <p textAlign="center" color="black">Add an Item</p>
                </Modal.Header>
                <Modal.Body>
                    <p>
                       <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} 
                       className='Input'/>
                       <input type="submit"  value={"Add"} className="Addbutton" onClick={handleSubmit}/> 
                        </p>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
            
           
        
            <div className='notStarted' style={{marginTop:"30px"}}>
            
            <Draggable><h4 style={{backgroundColor:"#ADD8E6",textAlign:"center",height:"40px",width:"160px",marginTop:"30px",marginLeft:"65px"}}>Not Started</h4></Draggable>
            
            
                 {
                    list.map((c)=>
        
                      <Draggable>
                         <p style={{backgroundColor:"red",color:"white",textAlign:"center",height:"40px",width:"160px",marginTop:"30px",marginLeft:"65px"}}>
                       {c.Name}
                        </p>
                      </Draggable>
                    )
                 }
                 
            </div>
            <div className='InProgress'style={{marginTop:"30px"}}>
                <h4 style={{backgroundColor:"#ADD8E6",textAlign:"center",height:"40px",width:"160px",marginLeft:"65px",marginTop:"20px"}}>In Progress</h4>
                <Draggable>
                <p style={{backgroundColor:"yellow",color:"black",textAlign:"center",height:"40px",width:"160px",marginTop:"30px",marginLeft:"65px"}}>
                       
                       Buy Milk</p>
                </Draggable>
                
            </div>
            <div className='Completed'style={{marginTop:"30px"}}>
                <h4 style={{backgroundColor:"#ADD8E6",textAlign:"center",height:"40px",width:"160px",marginLeft:"65px",marginTop:"20px",MarginTop:"7px",border:"1px solid gray"}}>Completed</h4>
                <Draggable>
                <p style={{backgroundColor:"#08FF08",color:"black",textAlign:"center",height:"40px",width:"160px",marginTop:"30px",marginLeft:"65px"}}>
                       
                       Go Walking</p>
                </Draggable>
                
            </div>
            
           
         
                
           </div>
            
            
      
     
    );
  
   
  }
  
  export default Todo;
  