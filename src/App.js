import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  Plan from './Plan'


 class App extends Component {
  state ={
    items:[],
    text:""
  }
  handleChange = e =>{
    this.setState({text: e.target.value})
  }
  handleAdd = e =>{
    if (this.state.text !== ""){
      const items = [...this.state.items,this.state.text]
      this.setState({items:items,text:""});
    }
  }
  handleDelete = id =>{
    console.log('Deleted',id);
    const Olditems = [...this.state.items]
    console.log("Olditems",Olditems);
    const items = Olditems.filter((element , i ) => {
      return i !== id
    })
    console.log("Newitems",items);
    this.setState({items:items});

  }
  render() {
    return (
      
        <>
        <nav className="navbar navbar-light bg-light">
  <div className="container">
    <span className="navbar-brand ">Plan Organizer</span>
  </div>
</nav>
      <div className="container-fluid my-9">
          <div className="row">
            <div className="col-sm-6 mx-auto my-5 shadow-lg p-5 ">
              <h2 className='text-center'>Today's Plan</h2>
              <div className="row">
                <div className="col-9">
                  <input type="text" className="form-control" placeholder='Write your Plan here' value={this.state.text} onChange={this.handleChange} />
                </div>
                <div className="col-2">
                  <button className="btn btn-warning px-5 fw-bold" onClick={this.handleAdd}>Add</button>
                </div>
                <div className="container-fluid ">
                  <ul className='list row m-5'>
                    {this.state.items.map((value, i) => {
                      return <Plan key={i} id={i} value={value} sendData={this.handleDelete} />;
                    })}

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div></>
        
    )
  }
}

export default App;
