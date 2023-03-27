import React from 'react'
import { useState } from 'react'

// chapter7 lists and keys
function Content() {

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'one and half bag of Cocoa Covered Almonds Unsalted'
    },
    {
      id: 2,
      checked: false,
      item: 'item 2'
    },
    {
      id: 3,
      checked: false,
      item: 'item 3'
    }
  ])
  

  return (
    <main>
      <ul>
        {items.map ((item) => (      // an expression that walks through the list using map
          <li className='item' key={item.id}>      {/* each list item in react needs a key */}
            <input 
            type= "checkedbox"
            checked= {item.checked}    
            />      {/* checked is checking if it etheir true or false */}
            <label>{item.item}</label>  {/* a label for the input it servers as an expression to display for the label */}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content




// // chapter6 useState Hooks
// function Content() {
//   const [name, setName] = useState('Joy') // defining what we will use for state 
//   const [count, setCount] = useState(0)  // there are some gaches learning how to think of state in a correct way
  
//   const handleNameChange = () => {
//     const name = ['Ahneeka', 'Raheem', 'Ade']
//     const int = Math.floor(Math.random() * 3)
//     setName(name[int])
//   };

//   const handleClick = () => {
//     setCount(count + 1 )
//     console.log(count)
//   };

//   const handleClick2 = () => {
//     console.log(count)
//   };



//   return (
//     <main>
//       <p>Hello { name } i'm Jane!</p>
//       <button onDoubleClick={ handleNameChange }>Name changing</button>
//       <button onDoubleClick={ handleClick }>Click me</button>
//       <button onDoubleClick={ handleClick2 }>Click me</button>
//     </main>
//   )
// }

// export default Content

  
  
  
  // chapter5 click event
  
//   const handleNameChange = () => {
//     const names = ['Raheem', 'Ahneeka', 'Ade']
//     const float = Math.floor(Math.random() * 3);
//     return names[float]
//   }

//   // create event type click event
//   const handleClick = () => {
//     console.log('You clicked it')
//   }


//   // if we want to pass in a parameter to a function
//   const handleClick2 = (firstName) => { 
//     console.log(`${firstName} was clicked`) // this is a tempelate literal coz of the backtick ``
//   }

//   // we get access to the event object when we click an event
//   const handleClick3 = (e) => {
//     console.log(e.target.innerText);
//   }

//   return (
//     <main>
//         <p>
//           Hello {handleNameChange()} i'm jane!
//         </p>
//         <button onDoubleClick={handleClick}>click it</button>
//         <button onClick={  () => handleClick2("Ahneeka")}>click it</button>  {/*the () => it's an anonimus function*/}
//         <button onClick={ (e) => handleClick3(e)}>click it</button>

//     </main>
//   )
// }

//export default Content
