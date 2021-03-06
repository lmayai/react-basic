import React from "react";
import "./styles/Badges.css";
import api from "../api";
import { Link } from "react-router-dom";
import confLogo from "./../images/badge-header.svg";
import BadgesList from "./../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("Se llama al constructor");
    this.state = {
      loading: true,
      error: null,
      data: null
    };
  }

  /*componentDidMount(){
    console.log('Se llama al ComponentDidMount');
    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
        {
          id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
          firstName: 'Freda',
          lastName: 'Grady',
          email: 'Leann_Berge@gmail.com',
          jobTitle: 'Legacy Brand Director',
          twitter: 'FredaGrady22221-7573',
          avatarUrl:
            'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
        },
        {
          id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
          firstName: 'Major',
          lastName: 'Rodriguez',
          email: 'Ilene66@hotmail.com',
          jobTitle: 'Human Research Architect',
          twitter: 'MajorRodriguez61545',
          avatarUrl:
            'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
        },
        {
          id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
          firstName: 'Daphney',
          lastName: 'Torphy',
          email: 'Ron61@hotmail.com',
          jobTitle: 'National Markets Officer',
          twitter: 'DaphneyTorphy96105',
          avatarUrl:
            'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
        },
      ]
      }); 
    }, 3000);
  }*/

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  fetchData = async () => {
    console.log("FetchData");
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("Se llama al ComponentDidUpdate");
    console.log({
      prevPops: prevProps,
      prevState: prevState
    });
    console.log({
      props: this.props,
      state: this.state
    });
  }

  componentWillUnmount() {
    console.log("Se llama al ComponentWillUnmount");
    clearTimeout(this.timeoutId);
    clearInterval(this.intervalId);
  }

  render() {
    console.log("Se llama al Render", this.state);

    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    if (this.state.data.length === 0) {
      return (
        <div>
          <h3>No se encontró ningún badge</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Agregar Badges
          </Link>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="" className="Badges__conf-logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link className="btn btn-primary" to="/badges/new">
              New Badges
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
            {this.state.loading && <MiniLoader />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
