import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userName: "",
        firstName: "",
        lastName: "",
        sex: "",
        persons: []
    }
  }


  checkBoxChange = (event) => {
    const { checked } = event.target;
    const { sex } = this.state;
    if (checked) {

      this.setState({
        sex: true
      })

    } else {

      this.setState({

        sex: false

      })

    }
  } 

  SubmitHandler = (event) => {
    event.preventDefault();
    const { persons, userName ,firstName ,lastName, sex } = this.state; // const toDoList = this.state.toDoList;
    console.log(this.state.userName);
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.sex);
    (this.state.sex) ? (this.setState({
      persons: [...persons, { userName: userName , firstName: firstName , lastName: lastName , sex:"woman"}],
     
        userName: "",
        firstName: "",
        lastName: "",
        sex:""
        
    })) : ( this.setState({
      persons: [...persons, { userName: userName , firstName: firstName , lastName: lastName , sex:"man"}],
     
        userName: "",
        firstName: "",
        lastName: "",
        sex:""
    }) );
    
    console.log(this.state.persons)
  }

  changeHandler = (event) =>{
    const {name,value} = event.target;
    this.setState({[name]: value});
  }

deletePerson = (event)=>{
  const userName = event.target.getAttribute('data-in');
  const {persons} = this.state;
  const id = persons.findIndex(person=>person.userName == userName);
  persons.splice(id,1);
  this.setState({
    persons:[...persons]
  })
}
  


  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>

        <div className="form">
          <form style={{ display: 'flex', alignItems: 'baseline', width: '100%' }} onSubmit={this.SubmitHandler}>
            <table>
              <tbody>
              <tr>
                <th>UserName</th>
                <th>FirstName</th>
                <th>lastName</th>
                <th>Action</th>
              </tr>
              <tr>

                <td>
                  <input onChange={this.changeHandler} value={this.state.userName || ''} type="text" name="userName" placeholder="username*" className="input"></input>
                </td>
                <td>
                  <input onChange={this.changeHandler} value={this.state.firstName || ''} type="text" name="firstName" placeholder="firstName*" className="input"></input>
                </td>
                <td>
                  <input onChange={this.changeHandler} value={this.state.lastName || ''} type="text" name="lastName" placeholder="lastName*" className="input"></input>
                </td>
                <td>
                <input type="checkbox"  onChange={this.checkBoxChange}/>
                </td>
                <td>
                  <button type="submit">Add</button>
                </td>
              </tr>
              </tbody>
            </table>

          </form>

          </div>

          <div className="list">
          <table>
            <tbody>
            {this.state.persons.map(person => <tr align="center" style={{display:'flex',justifyContent: 'center' , margin: '5px'} }>
            <td align="center">
              <span>{person.userName}</span>
            </td>
            <td align="center">
              <span>{person.firstName}</span>
            </td>
            <td align="center">
              <span>{person.lastName}</span>
            </td>
            <td align="center">
              <span>{person.sex}</span>
            </td>
            <td align="center">
              <button type="button" onClick = {this.deletePerson} data-in={person.userName}>delete</button>
            </td>
            </tr>)}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    )
  }


}



