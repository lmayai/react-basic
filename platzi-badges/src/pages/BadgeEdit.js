import React from 'react';

import "./styles/BadgeEdit.css";
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BagdeForm.js';
import api from '../api';
import PageLoader from '../components/PageLoading';

class BadgeEdit extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      );
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });  
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }; 

  render() {
    if (this.state.loading){
      return <PageLoader />
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img src={header} alt="Logo" className="img-fluid" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST NAME'}
                lastName={this.state.form.lastName || 'LAST NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB TITLE'}
                twitter={this.state.form.twitter || 'twitter'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https:www.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                title='Edit card'
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;