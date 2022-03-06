import React, {useState} from 'react'
import './App.css';

function App() {
  const [isModal, setModal] = useState(false)
  const [isValidate, setValidate] = useState(false)
  const [state, setState] = useState({
    name: "",
    price: "",
    description: ""
  })
  const [data, setData] = useState([
    {
      name: 'item-1',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: '35'
    },
    {
      name: 'item-2',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: '45'
    },
    {
      name: 'item-3',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: '55'
    },
    {
      name: 'item-4',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: '65'
    },
  ])

  const handleAdd = () => setModal(true)
  const handleChange = e => setState({...state, [e.target.name]: e.target.value});
  const handleRemove = (e) => setData(data.filter(item => item.name !== e.name))
  const handleClose = () => {
    setModal(false) 
    setValidate(false)
    setState({
      name: "",
      price: "",
      description: ""
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (state.name !== "" && state.price !== "" && state.description !== "") {
      setData([...data, state])
      setModal(false)
      setValidate(false)
    } else setValidate(true)
  }

  return (
    <div className="App">
      <h1>React add or remove items from array list</h1>
      <button className='btn-add' onClick={() => handleAdd()}>Add Item +</button>
      <div className='grid-container'>
        {data.map((items, index) => {
          return (
            <div className='grid-item' key={index}>
                <h2>{items.name}</h2>
                <p>{items.description}</p>
                <h3>${items.price}</h3>
                <button className='btn-delete' onClick={(e) => handleRemove(items)}>Delete</button>
            </div>
          )
        })}  
      </div>
      {isModal && (
        <div className="app-modal">
            <div className='app-modal-content'>            
              <button className="btn-delete" onClick={() => handleClose()}>X</button>
              <form onSubmit={handleSubmit}>
                <label>*Name</label>
                <input placeholder='Enter Item Name' name='name' type="text" className='form-control' onChange={handleChange} />  
                <label>*Price</label>
                <input placeholder='Enter Item Price' name='price'  type="text" className='form-control' onChange={handleChange} />  
                <label>*Description</label>
                <textarea placeholder='Enter Item Description' name="description" className='form-control' onChange={handleChange} />  
                <button className='btn-add' type='submit'>Submit</button>
                {isValidate && <p>Please fill all the fields</p>}
              </form>
            </div>
        </div>
      )}
    </div>
  );
}

export default App;
