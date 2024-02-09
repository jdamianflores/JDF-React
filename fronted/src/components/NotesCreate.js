import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


export default class NotesCreate extends Component {

  state ={
    users: [],
    title: '',
    content: '',
    userSelected: '',
    date: new Date()
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/users');
    this.setState({users: res.data.map(user => user.username)});
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeDate = date => {
    this.setState({date})
  }


  render() {
    return (
      <div className="col md-6 offset-md-3">
        <div className="card card-body">
          <h4>Crear Nota</h4>

          {/** SELECT USER*/}
          <div className="form-group">
            <select 
              name="userSelect" 
              onChange={this.onInputChange}
              className='form-control'
            >
              {
                this.state.users.map(user => 
                <option key={user} value={user}>
                    {user}
                </option>)
              }
            </select>
          </div>
              <br />
          <div className="form-group">
            <input 
              type="text" 
              className='form-control' 
              placeholder='Titulo' 
              name='title'
              onChange={this.onInputChange}
              required />
          </div>
              <br />
          <div className="form-gorup">
            <textarea 
              name="content" 
              className='form-control' 
              placeholder='Contenido'
              onChange={this.onInputChange}
              required></textarea>
          </div>
              <br />
          <div className="form-group">
            <DatePicker
              className='form-control'
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
              <br />
          <form onSubmit={this.onSubmit}> 
              


            <button type='submit' className='btn btn-primary'>
              Guardar
            </button>
          </form>
        </div>
      </div>
    )
  }
}
