import React, { Component } from 'react';
import {Label} from 'semantic-ui-react';

export default class Event extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			title: '',
			text: '',
			link: '',
			sections: []
		}
	}

	componentDidMount() {
		this.get()
	}
	
	get = async () => {
		let {title} = this.props.match.params;
		this.setState({title})
		let uri = encodeURI(title);
		let search = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${uri}&limit=10&origin=*&format=json`

		await fetch( search )
			.then( res => res.json() )
			.then( data => {
				console.log(data);
				
				this.setState({ text: data[2][0], link: data[3][0] })
			} )
			.catch( err => console.log(err) )

		let page = `https://en.wikipedia.org/w/api.php?action=parse&page=${uri}&format=json&origin=*`

		await fetch( page )
			.then( res => res.json() )
			.then( data => {
				console.log(data);
				let {sections} = data.parse;
				this.setState({sections});
			} )
			.catch( err => console.log(err) )
	}

	render() {
		let {title, text, sections} = this.state;


		let links = sections.map( (item, key) => (
			<p className="label">{item.line} </p>
		) )

		return (
			<div>
				<div className="card">
					<h4>Event: {title}</h4>
					<p className="article">{text}</p>
				</div>
				{/* <div className="card">
					<h4>Useful Links</h4>
					<div className="hor">{links}</div>
				</div> */}
			</div>
		)
	}
}
