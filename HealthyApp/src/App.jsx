import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListItems from './components/ListItems'
import Container from './components/Container'
import Style from './App.module.css'
import InputCart from './components/InputCart'
import { v4 as uuidv4 } from 'uuid';


function App() {
  let [items, setItems]=useState([{id:uuidv4(), list:"Roti", isBuy:false}])

  let handleKeyDown = (event)=>{
    if(event.key=='Enter'){
      let newData=event.target.value
      if(newData){
        setItems((prev)=> [...prev, {id:uuidv4(), list:newData, isBuy:false}]);
      }
      event.target.value="";
    }
  }

  let handleRemoveItems = (id) =>{
    setItems((prev)=> prev.filter((list)=> list.id!=id))
  }

  let handleBuyItems = (id) =>{
    setItems((prev)=> {
      return prev.map((list)=>{
        if(list.id==id){
          return {...list, isBuy:true}
        }else{
          return list;
        }
      })
    })
  }

  let handleBuyItemsDouble =(id)=>{
    setItems((prev)=>{
      return prev.map((list)=>{
        if(list.id==id){
          if(list.isBuy==true){
            return {...list, isBuy:false}
          }
        }else{
          return list;
        }
      })
    })
  }

  return (
    <>
    <Container>
      <h2 className={Style.heading}>Healthy App</h2>
      <InputCart handleKeyDown={handleKeyDown}></InputCart>
      {!items.length && <p style={{color:"red", fontWeight:"900", fontSize:"1.2rem", textAlign:"center"}}>I am Hungry!!</p>}
      <ListItems list={items} handleRemoveItems={handleRemoveItems} handleBuyItems={handleBuyItems} handleBuyItemsDouble={handleBuyItemsDouble}></ListItems>
    </Container>
      
    </>
  )
}

export default App
