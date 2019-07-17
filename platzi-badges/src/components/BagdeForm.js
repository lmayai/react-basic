import React from 'react';
import PageError from '../components/PageError';

class BadgeForm extends React.Component {
  /*state = {
    jobTitle: 'Designer',
  };*/
  /* Se usa el el del padre
  handleChange = (event) => {
    console.log({
      value: event.target.value,
      name: event.target.name,
    });
    this.setState({
      [event.target.name]: event.target.value,
    })
  }*/
  
  handleClick = (event) => {
    console.log('Button was pressed');
  }

  handleSubmit = (event) => {
    console.log('Button submitted');
    event.preventDefault();
    //console.log(this.state)
  }

  render() {
    return( 
      <div>
        <h1>{this.props.title}</h1> 
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="firstName" 
              value={this.props.formValues.firstName}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="lastName" 
              value={this.props.formValues.lastName}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="email" 
              name="email" 
              value={this.props.formValues.email}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Job title</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="jobTitle" 
              value={this.props.formValues.jobTitle}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="twitter" 
              value={this.props.formValues.twitter} />
          </div>
          <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
        
          { this.props.error &&
            <p className="text-danger">{this.props.error.message}</p>
          }

        </form>
      </div>
    )
  }
}

export default BadgeForm;