import React from 'react';

const Country = (props) => {
	return (
		<>
			<option value={props.val.name.common}>{props.val.name.common}</option>
		</>
	);
};

export default Country;