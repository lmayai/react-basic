import React from 'react';

class BadgeForm extends React.Component {
  handleChange = (event) => {
    console.log({
      value: event.target.value,
      name: event.target.name,
    });
  }
  
  handleClick = (event) => {
    console.log('Button was pressed');
  }

  handleSubmit = (event) => {
    console.log('Button submitted');
    event.preventDefault();
  }

  render() {
    return( 
      <div>
        <h2>New Attendant</h2> 
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName" id=""/>
          </div>
          <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm;