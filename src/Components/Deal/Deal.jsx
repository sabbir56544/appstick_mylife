import React from 'react';

const Deal = (props) => {
	return (

		<li>
			<p>{props.val.title} :</p>
			<span>{props.val.text}</span>
		</li>

	);
};

export default Deal;