import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';

function BadgeDetails(props) {
	const badge = props.badge;

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
							{ 
								ReactDOM.createPortal(<h1>No estoy aquí</h1>, 
								document.getElementById('modal'))
							}
						</div>
					</div>
				</div>
			</div>	
		</div>
	)
}

export default BadgeDetails;