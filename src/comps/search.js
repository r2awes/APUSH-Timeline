import React, { Component } from 'react';
import { Search as SemSearch, Grid, Header, Segment, Label, List } from 'semantic-ui-react';
import _ from 'lodash';
import listitem from './listitem';
import listcat from './listcat';

const ListItem = listitem;
const ListCat = listcat;

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
		let items = this.props.items || catdata
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
				category
				loading={loading}
				onResultSelect={this.rS}
				onSearchChange={_.debounce(this.sC, 500, {
					leading: true,
				})}
				results={value == "" ? [] : results}
				value={value}
				placeholder="Search something."
				noResultsMessage={value == "" ? "" : <ListItem real={false}/>}
				resultRenderer={ props => <ListItem {...props}/> }
				categoryRenderer={ props => <ListCat {...props}/> }
				{...this.props}
			/>
    )
  }
}

const data = [
	{
		"title": "Blick, Runte and Barton",
		"desc": "Distributed tertiary framework",
		"image": "https://s3.amazonaws.com/uifaces/faces/twitter/wiljanslofstra/128.jpg",
		"price": "$26.83"
	},
	{
		"title": "Haley, Zieme and Thompson",
		"desc": "Cross-group exuding collaboration",
		"image": "https://s3.amazonaws.com/uifaces/faces/twitter/joe_black/128.jpg",
		"price": "$22.56"
	},
	{
		"title": "Boyer - Bauch",
		"desc": "Multi-layered impactful productivity",
		"image": "https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg",
		"price": "$48.53"
	},
	{
		"title": "Kuhlman, Wilderman and Considine",
		"desc": "Persevering mobile matrix",
		"image": "https://s3.amazonaws.com/uifaces/faces/twitter/joetruesdell/128.jpg",
		"price": "$59.52"
	},
	{
		"title": "Kessler, Crist and Lindgren",
		"desc": "Stand-alone leading edge alliance",
		"image": "https://s3.amazonaws.com/uifaces/faces/twitter/naitanamoreno/128.jpg",
		"price": "$26.12"
	}
]

const catdata = {
  "protocol": {
    "name": "protocol",
    "results": [
      {
        "title": "Stark - Hettinger",
        "description": "Up-sized attitude-oriented methodology",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/bartoszdawydzik/128.jpg",
        "price": "$79.98"
      },
      {
        "title": "Hilll, Batz and Bailey",
        "description": "Fundamental bi-directional protocol",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/croakx/128.jpg",
        "price": "$4.26"
      },
      {
        "title": "Collins Inc",
        "description": "Phased asynchronous service-desk",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/vickyshits/128.jpg",
        "price": "$69.49"
      },
      {
        "title": "Wolff - Balistreri",
        "description": "Fundamental empowering hub",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/Talbi_ConSept/128.jpg",
        "price": "$9.41"
      },
      {
        "title": "Wehner, Hirthe and Wiegand",
        "description": "Robust client-server help-desk",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/waghner/128.jpg",
        "price": "$11.24"
      }
    ]
  },
  "transmitter": {
    "name": "transmitter",
    "results": [
      {
        "title": "Harris, Lang and Volkman",
        "description": "Stand-alone solution-oriented info-mediaries",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/txcx/128.jpg",
        "price": "$93.77"
      },
      {
        "title": "Lind - Conroy",
        "description": "Seamless homogeneous time-frame",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/illyzoren/128.jpg",
        "price": "$54.94"
      },
      {
        "title": "Friesen - Wilkinson",
        "description": "Decentralized encompassing workforce",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/aaronalfred/128.jpg",
        "price": "$12.21"
      },
      {
        "title": "Rice - Conn",
        "description": "Inverse heuristic budgetary management",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/brandonburke/128.jpg",
        "price": "$53.99"
      },
      {
        "title": "Ryan - Prohaska",
        "description": "Cloned value-added intranet",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/peachananr/128.jpg",
        "price": "$36.70"
      }
    ]
  },
  "system": {
    "name": "system",
    "results": [
      {
        "title": "Doyle, Huels and Tremblay",
        "description": "Visionary next generation internet solution",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/elenadissi/128.jpg",
        "price": "$9.37"
      },
      {
        "title": "Vandervort Group",
        "description": "Team-oriented regional emulation",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/r_garcia/128.jpg",
        "price": "$60.71"
      },
      {
        "title": "Windler LLC",
        "description": "Expanded zero defect paradigm",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/orkuncaylar/128.jpg",
        "price": "$40.92"
      },
      {
        "title": "Smitham and Sons",
        "description": "Optimized static access",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/calebjoyce/128.jpg",
        "price": "$46.73"
      },
      {
        "title": "Lynch, Kerluke and Schumm",
        "description": "Persevering client-server analyzer",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/eitarafa/128.jpg",
        "price": "$74.09"
      }
    ]
  }
}