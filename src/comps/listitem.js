import React from 'react'

const click = (l) => {
	console.log(l);	
}

export default props => {
	let {title, desc, link} = props;
	return (
		<div onClick={click(props)}>
			<p>{title}</p>
		</div>
	)
}
