import React, { Component } from 'react';
import { Search as SemSearch } from 'semantic-ui-react';
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
			loading: false,
			sel: false
		}
	}
	
	rS = (e, {result}) => this.setState({ value: result.title, results: [], sel: true })

  sC = (e, { value }) => {
    this.setState({ loading: true, value })
		let source = this.props.items || data
    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState({
				value: '',
				results: [],
				sel: false,
				loading: false
			})

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      const filteredResults = _.reduce(
        source,
        (memo, data, name) => {
          const results = _.filter(data.results, isMatch)
          if (results.length) memo[name] = { name, results } // eslint-disable-line no-param-reassign

          return memo
        },
        {},
      )

      this.setState({
        isLoading: false,
        results: filteredResults,
      })
    }, 300)
  }

  render() {
		let { value, results, loading, sel } = this.state;

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
				noResultsMessage={value == "" || sel ? "" : <ListItem real={false}/>}
				resultRenderer={ props => <ListItem {...props}/> }
				categoryRenderer={ props => <ListCat {...props}/> }
				{...this.props}
			/>
    )
  }
}

let data = {
	era: {
		results: [
			{
				title: "Jeffersonian",
				type: "era"
			},
			{
				title: "Jacksonian",
				type: "era"
			}
		]
	},
	event: {
		results: [
			{
				title: "Sinking of The USS Maine",
				type: "event"
			}
		]
	},
	people: {
		results: [
			{
				title: "Thomas Jefferson",
				type: "person"
			},
			{
				title: 'Theodore Roosevelt',
				type: "person"
			}
		]
	}
}