
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 =()=>{
    alert('button 2 clicked')

  }


  const addToFive=(num)=>{
    alert( num * 6)
  }


return (
    <>
      <h3>Rect core concepts 2</h3>
     <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      

      <button onClick={ handleClick}>Click Me</button>
      <button onClick={ handleClick2}>Click 2</button>

      <button onClick={()=>{alert('thirrd click')}}>Third</button>


      <button onClick={()=>{ addToFive(6)}}>Four</button>



    </>
  )
}

export default App
