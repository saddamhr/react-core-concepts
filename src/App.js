import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks = ['Razzak', 'Jasim', 'Alomgir', 'Salman', 'Bappi', 'Shuvo']
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'}
  ]
  const friends =[
    {name:'Zahid', ID:'15162103068'},
    {name:'Sudipto', ID:'15162103068'}
  ]

  // const productNames = products.map(product => products.name)
  // const nayokNames = nayoks.map(nayok => nayok);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>

        <Counter></Counter>
        <Users></Users>
        
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
          products.map(product =><Product product={product}></Product>)
        }

        {
          friends.map(friend => <Friends friend={friend}></Friends>)
        }
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>Name: {user.name} | Email: {user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    marginTop: '10px',
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'gray',
    height: '300px',
    width: '250px',
    float: 'left',
    color: 'black'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

// console.log(props.friend)

function Friends(props) {
  const {name, ID} = props.friend;
  // console.log(name,id)
  return(
    <div style={{border:'2px solid yellow', width:'400px', margin:'10px'}}>
      <h1>Name: {name}</h1>
      <h2>ID: {ID}</h2>
    </div>
  )
}

export default App;
