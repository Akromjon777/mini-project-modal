import React, { useState } from 'react';
import Modal from 'react-modal'
import "./App.css"
const App = () => {
  const [modal, setModal] = useState(false)
  return (
    <div className='app'>
      <h1 className='text-center mt-3'>Simple Modal react js</h1>
      <button className='btn btn-danger ms-5' onClick={() => setModal(true)}>Open Modal</button>
      <Modal isOpen={modal}>
        <h2>Modal title</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        <button className='btn btn-primary' onClick={() => setModal(false)}>Close</button>
      </Modal>      
    </div>
  );
};

export default App;