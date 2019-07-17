import React from 'react';
import './styles/BadgeDetails.css';
import { Link } from 'react-router-dom';

import confLogo from '../images/platziconf-logo.svg';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Badge from '../components/Badge';
import api from '../api';

class BadgeDetails extends React.Component {
	state = {
		loading: true,
		error: null,
		data: undefined,
	}

	componentDidMount(){
		this.fetchData();
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null });
		try {
			const data = await api.badges.read(
				this.props.match.params.badgeId
			)
			this.setState({ loading: false, data });
		} catch (error) {
			this.setState({ loading: false, error });
		}
	}

	render(){
		if(this.state.loading){
			return <PageLoading />
		}
		
		if(this.state.error){
			return <PageError error={this.state.error} />
		}

		const badge = this.state.data;

		return (
			<div>
				<div className="BadgeDetails__hero">
					<div className="container">
						<div className="row">
							<div className="col-6">
								<img src={confLogo} alt="LogoConf"/>
							</div>
							<div className="col-6 BadgeDetails__hero-attendant-name">
								<h1>{badge.firstName} {badge.lastName}</h1>
							</div>
						</div>
					</div>
				</div>
			
				<div className="container">
					<div className="row">
						<div className="col">
							<Badge 
								firstName={badge.firstName}
								lastName={badge.lastName}
								twitter={badge.twitter}
								email={badge.email}
								jobTitle={badge.jobTitle}
							/>
						</div>
						<div className="col">
							<h2>Actions</h2>
							<div>
								<Link className='btn btn-primary mb-2' to={`/badge/${badge.edit}/edit`}>Edit</Link>
							</div>
							<div>
								<button className='btn btn-danger'>Delete</button>
							</div>
						</div>
					</div>
				</div>	
			</div>
		)
	}
}

export default BadgeDetails;