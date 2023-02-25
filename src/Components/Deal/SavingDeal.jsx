import React from 'react'
import SingleDeal from './SingleDeal'
import DealData from './DealData'

const SavingDeal = () => {
	return (

		<section className="our-savings-area bg-area">
			<div className="container">

				<div className="row our-savings">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<div className="inspiration-header">
							<h2>Our Savings Deal</h2>
							<span>See All</span>
						</div>
					</div>
					{
						DealData.map((val) => {
							return (

								<SingleDeal val={val} key={val.id} />

							);
						})
					}

				</div>
			</div>
		</section>

	)
}

export default SavingDeal