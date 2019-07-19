import React from 'react';
import { Link } from 'react-router-dom';

import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import Modal from '../components/Modal';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncreaseCount(max) {
	const [ count, setCount ] = React.useState(0);
	if (count > max) {
		setCount(0);
	}
	return [ count, setCount];
}

function BadgeDetails(props) {
	// const [ count, setCount ] = React.useState(2); 
	const [ count, setCount ] = useIncreaseCount(5);
	
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
							<button onClick={ () => {
								setCount(count+1)
							}} className="btn btn-success mb-2"> Aumentar contador {count} </button>
						</div>
						<div>
							<Link className='btn btn-primary mb-2' to={`/badges/${badge.id}/edit`}>Edit</Link>
						</div>
						<div>
							<button onClick={props.onOpenModal} className='btn btn-danger'>Delete</button>
							<DeleteBadgeModal 
								isOpen={props.modalIsOpen} 
								onClose={props.onCloseModal} 
								onDeleteBadge={props.onDeleteBadge}
							/>
						</div>
					</div>
				</div>
			</div>	
		</div>
	)
}

export default BadgeDetails;