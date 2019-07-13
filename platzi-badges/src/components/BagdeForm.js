import React from 'react';

class BadgeForm extends React.Component {
  state = {
    jobTitle: 'Designer',
  };

  handleChange = (event) => {
    console.log({
      value: event.target.value,
      name: event.target.name,
    });
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  
  handleClick = (event) => {
    console.log('Button was pressed');
  }

  handleSubmit = (event) => {
    console.log('Button submitted');
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    return( 
      <div>
        <h2>New Attendant</h2> 
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="firstName" 
              value={this.state.firstName}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="lastName" 
              value={this.state.lastName}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="email" 
              name="email" 
              value={this.state.email}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Job title</label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="jobTitle" 
              value={this.state.jobTitle}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="twitter" 
              value={this.state.twitter} />
          </div>
          <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm;