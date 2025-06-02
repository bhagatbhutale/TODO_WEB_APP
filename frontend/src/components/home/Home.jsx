import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div className="home d-flex flex-column justify-content-center align-items-center">
      <div className="container d-flex flex-column justify-content-center align-items-center flex-column ">
        <h1 className='text-center' >
          Orginize Yoour <br /> work and file finally{" "}
        </h1>
        <p>
          Become focused, orginize, and clam with <br />
          todo app. The World's #1 Task Manager app{" "}
        </p>
        <button className='home-btn p-2' >Make Todo List</button>
      </div>
    </div>
  );
}

export default Home
