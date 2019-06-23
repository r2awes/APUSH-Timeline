import React from 'react';


export default props => {
	let {name} = props;

	return (
		<div className="listcat">
				<h3>
					{name}
				</h3>
		</div>
	)
}
