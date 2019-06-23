import React, { Component } from 'react';
import { Search as SemSearch, Grid, Header, Segment, Label } from 'semantic-ui-react';
import _ from 'lodash';
import listitem from './listitem';

const ListItem = listitem;

export default class Search extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			value: '',
			results: [],
			loading: false
		}
	}
	
	rS = (e, {result}) => this.setState({ value: result.title })

  sC = (e, { value }) => {
    this.setState({ loading: true, value })
		let items = this.props.items || data
    setTimeout(() => {
		if (this.state.value.length < 1) return this.setState({
			value: "", 
			results: [],
			loading: false
		})

		const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
		const isMatch = result => re.test(result.title)

		this.setState({
			loading: false,
			results: _.filter( items, isMatch),
		})
    }, 300)
  }

  render() {
		let { value, results, loading } = this.state;

    return (
			<SemSearch
				loading={loading}
				onResultSelect={this.rS}
				onSearchChange={_.debounce(this.sC, 500, {
					leading: true,
				})}
				results={value == "" ? [] : results}
				value={value}
				placeholder="Search something."
				noResultsMessage={value == "" ? "" : "I don't know about that yet. If you think it should be here, enter it in the issues section of the GitHub page."}
				resultRenderer={ props => <ListItem {...props}/> }
				{...this.props}
			/>
    )
  }
}

const data = [
	{
		"title": "Blick, Runte and Barton",
		"description": "Distributed tertiary framework",
		"image": "https://s3.amazonaws.com/uifaces/faces/twitter/wiljanslofstra/128.jpg",
		"price": "$26.83"
	},
	{
		"title": "Haley, Zieme and Thompson",
		"description": "Cross-group exuding collaboration",
		"image": "https://s3.amazonaws.com/uifaces/faces/twitter/joe_black/128.jpg",
		"price": "$22.56"
	},
	{
		"title": "Boyer - Bauch",
		"description": "Multi-layered impactful productivity",
		"image": "https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg",
		"price": "$48.53"
	},
	{
		"title": "Kuhlman, Wilderman and Considine",
		"description": "Persevering mobile matrix",
		"image": "https://s3.amazonaws.com/uifaces/faces/twitter/joetruesdell/128.jpg",
		"price": "$59.52"
	},
	{
		"title": "Kessler, Crist and Lindgren",
		"description": "Stand-alone leading edge alliance",
		"image": "https://s3.amazonaws.com/uifaces/faces/twitter/naitanamoreno/128.jpg",
		"price": "$26.12"
	}
]