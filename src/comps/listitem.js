import React from 'react';
import {Link} from 'react-router-dom'

const click = l => console.log(l);

export default props => {
	let {title, desc, link, real, type} = props;

	real = real == null ? true : false
	return (
		<Link to={`/${type}/${title}`}>
			<div className="listitem" onClick={() => click(props)}>
				{ real ? (
					<a href={link}>
						<h4>{title}</h4>
					</a>
				) : (
					<h4>
						I don't know about that yet. If you think it should be here, enter it in the issues section of the GitHub page.
					</h4>
				) }
			</div>
		</Link>
	)
}
