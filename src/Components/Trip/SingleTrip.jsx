import React from 'react';

const SingleTrip = (props) => {

	return (

		<div className="col-lg-4 col-md-6 col-sm-12 mb-4">
			<div className="inspiration-card">
				<div className="inspiration-img">
					<img src={props.val.img} alt="" />
				</div>
				<div className="inspiration-content">
					<h2>{props.val.name}</h2>
					<h6>{props.val.trip_days}</h6>
				</div>
			</div>
		</div>

	);
};

export default SingleTrip;