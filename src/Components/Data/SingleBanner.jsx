import React from 'react'

const SingleBanner = (props) => {
	return (
		<div className="row mb-3">
			<div className="col-2">
				<div className="banner-icon">
					<img src={props.val.icon} alt="" />
				</div>
			</div>
			<div className="col-10">
				<div className="banner-info ">
					<h3>{props.val.title}</h3>
					<h6>{props.val.text}</h6>
				</div>
			</div>
		</div>
	)
}

export default SingleBanner