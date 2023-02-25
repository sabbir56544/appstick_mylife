import React from 'react'
import Deal from './Deal';


const SingleDeal = (props) => {
	return (

		<div className="col-lg-4 col-md-6 col-sm-12">
			<div className="our-savings-card">
				<ul>
					<div className="savings-header">
						<div className="savings-content-icon">
							<img src={props.val.img} alt="" style={{ width: '115px', height: '44px' }} />
						</div>
					</div>
					{

						props.val.deal.map((val) => {
							return (

								<Deal val={val} key={val.id} />

							);
						})

					}
				</ul>
				<div className='d-flex '>
					<button className="btn our-savings-btn mr-4">Explore</button>
				
				</div>
			</div>
		</div>

	)
}

export default SingleDeal