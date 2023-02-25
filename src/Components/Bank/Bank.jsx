import React from 'react'
import BankImage from './BankImage'
import SingleBank from './SingleBank'

const Bank = () => {
	return (

		<div className="remunerative-area bg-area">
			<div className="container">
				<div className="row remunerative">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<div className="remunerative-header">
							<h2>
								Our Remunerative

								<span className="pr-2">Banks</span>
							</h2>

						</div>
					</div>
					<div className="col-lg-12 col-md-12 col-sm-12 mt-5">
						<div className="remunerative-content">
							<ul>
								{
									BankImage.map((val) => {
										return (

											<SingleBank val={val} key={val.id} />

										);
									})
								}

							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Bank