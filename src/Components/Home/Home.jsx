import React, { Fragment } from 'react';
import Bank from '../Bank/Bank';
import BannerData from '../Data/BannerData';
import GetTouch from '../Data/GetTouch';
import SingleHome from '../Data/SingleHome';
import SavingDeal from '../Deal/SavingDeal';
import Trip from '../Trip/Trip';

const Home = () => {
	return (
		<>
			<section className="banner-area bg-area">
				<div className="container">
					<div className="row popular">
						{
							BannerData.map((val) => {
								return (

									<SingleHome val={val} key={val.id} />

								);
							})
						}

					</div>
				</div>
			</section>
			<SavingDeal />
			<GetTouch />
			<Trip />
			<Bank />
		</>
	)
}

export default Home
