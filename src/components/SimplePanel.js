import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import ContentPanel from './ContentPanel';
import SidePanel from './SidePanel';

const a = [1, 2, 3, 4, 5];

export default class SimpleExpansionPanel extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
		expandedPanel: ""
      };
    }

	handleChange (panel, event, expanded) {
      this.setState({
        expandedPanel: expanded ? panel : false,
      });
    }

	render() {
		return (
			<Grid container spacing={3}>
				<Grid item xs={7}>
					{a.map(i => {
				        return <ContentPanel key={i} identifier={i} expandedPanel={this.state.expandedPanel} handleChange={this.handleChange}/>
					})}
				</Grid>
				<Grid item xs={5}>
					<SidePanel/>
				</Grid>
			</Grid>
		);
	}
}