import React from 'react';
import SingleTrip from './SingleTrip';
import TripData from './TripData';

const Trip = () => {
	return (

		<section className="inspiration-area bg-are">
			<div className="container">
				<div className="row inspiration">
					<div className="col-12">
						<div className="inspiration-header">
							<h2>Inspiration for your next trip</h2>
							<span>See All</span>
						</div>
					</div>

					{
						TripData.map((val) => {
							return (

								<SingleTrip val={val} key={val.id} />

							);
						})
					}


				</div>
			</div>
		</section>

	);
};

export default Trip;