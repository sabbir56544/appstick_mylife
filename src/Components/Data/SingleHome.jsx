import React from 'react';
import SingleBanner from './SingleBanner';



const SingleHome = (props) => {
	return (

		<div className="col-lg-4 col-md-6 col-sm-12 mt-4">
			<div className="banner-card">
				<div className="banner-img">
					<img src={props.val.img} alt="popular-2" />
				</div>
				<div className="banner-content">
					<h2 className='text-left'>{props.val.title}</h2>
					
						{
							props.val.features.map((val) => {
								return (

									<SingleBanner val={val} key={val.id} />

								);
							})
						}
				</div>
			</div>
		</div>

	)
}

export default SingleHome