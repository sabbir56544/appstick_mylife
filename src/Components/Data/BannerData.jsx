import frame1 from '../../images/frame1.png';
import frame2 from '../../images/frame2.png';
import frame3 from '../../images/frame3.png';
import booking from "../../images/booking.png";
import card from "../../images/card.png";
import home from "../../images/home.png";
import mobility from "../../images/mobility.png";
import plan from "../../images/plan.png";
import saving from "../../images/saving.png";
import travel from "../../images/travel.png";
import acc from "../../images/acc.png";


const BannerData = [
	{
		id: 1,
		img: frame3,
		title: "BANKING",
		features: [
			{
				id: 1,
				icon: acc,
				title: "Add Account",
				text: "Your Multiple Bank Account",
			},
			{
				id: 2,
				icon: saving,
				title: "Savings",
				text: "Explore Saving Plans",
			},
			{
				id: 3,
				icon: card,
				title: "Add Cards",
				text: "Personalize Your Cards",
			},
		]
	},

	{
		id: 2,
		img: frame1,
		title: "INSURANCE",
		features: [
			{
				id: 1,
				icon: home,
				title: "Home",
				text: "1 year - 25 year",
			},
			{
				id: 2,
				icon: mobility,
				title: "Mobility",
				text: "3 month - 10 year",
			},
			{
				id: 3,
				icon: travel,
				title: "Travelling",
				text: "Day Long - 6 months",
			}
		]
	},

	{
		id: 3,
		img: frame2,
		title: "TRAVEL",
		features: [
			{
				id: 1,
				icon: booking,
				title: "New Booking",
				text: "Book a new schedule",
			},
			{
				id: 2,
				icon: plan,
				title: "Plans & Roots",
				text: "Explore all packages",
			},
		]
	}

];

export default BannerData;