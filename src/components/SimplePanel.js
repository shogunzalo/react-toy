import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';

import SidePanel from './SidePanel'

export default class SimpleExpansionPanel extends Component {

	constructor(props) {
      super(props);
      this.state = {
        isLinearProgressVisible: false,
        expandedPanel: ""
      };
    }

    useStyles () {
        return makeStyles(theme => ({
		  button: {
		    margin: theme.spacing(1),
		  },
		  input: {
		    display: 'none',
		  },
		}));
    }

    handleClick() {
      this.setState({
        isLinearProgressVisible : !this.state.isLinearProgressVisible
      });
    }

    handleChange = (panel, event, isExpanded) => {
      this.setState({
        expandedPanel: isExpanded ? panel : false,
      });
    }

	render() {

		const classes = this.useStyles();

		return (
			<Grid container spacing={3}>
				<Grid item xs={7}>
					<ExpansionPanel key="panelId1" expanded={this.state.expandedPanel === 'panel1'} onChange={this.handleChange.bind(this, "panel1")}>
				        <ExpansionPanelSummary
				          expandIcon={<ExpandMoreIcon />}
				          aria-controls="panel4bh-content"
				          id="panel4bh-header"
				        >
			          	<Container>
			          		<Typography>Panel Title</Typography>
				          	<Container>
			                  <br/>
			                  <LinearProgress
			                    variant="determinate"
			                    color="secondary"
			                    value={10}
			                  />
			                  <Typography align="right">
			                    label
			                  </Typography>
			                </Container>
			          	</Container>
			        </ExpansionPanelSummary>
			        <ExpansionPanelDetails>
			          <Container>
			          	<Typography>
							Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
							vitae egestas augue. Duis vel est augue.
				        </Typography>
				          <br/>
				          <ButtonGroup size="small" color="secondary" variant="contained">
						      <Button>
						        Value 1
						      </Button>
						      <Button>
						        Value 2
						      </Button>
						      <Button>
						        Value 3
						      </Button>
						      <Button>
						        Value 4
						      </Button>
						      <Button>
						        Value 5
						      </Button>
					      </ButtonGroup>
						</Container>
			        </ExpansionPanelDetails>
			      </ExpansionPanel>

			      <ExpansionPanel expanded={this.state.expandedPanel === 'panel2'} onChange={this.handleChange.bind(this, "panel2")}>
				        <ExpansionPanelSummary
				          expandIcon={<ExpandMoreIcon />}
				          aria-controls="panel2bh-content"
				          id="panel2bh-header"
				        >
				        <Container>
			          		<Typography>Panel Title</Typography>
				          	<Container>
			                  <br/>
			                  <LinearProgress
			                    variant="determinate"
			                    color="secondary"
			                    value={10}
			                  />
			                  <Typography align="right">
			                    label
			                  </Typography>
			                </Container>
			          	</Container>
			        </ExpansionPanelSummary>
			        <ExpansionPanelDetails>
			          <Container>
			          	<Typography>
							Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
							vitae egestas augue. Duis vel est augue.
				        </Typography>
				          <br/>
				          <ButtonGroup size="small" color="secondary" variant="contained">
						      <Button>
						        Value 1
						      </Button>
						      <Button>
						        Value 2
						      </Button>
						      <Button>
						        Value 3
						      </Button>
						      <Button>
						        Value 4
						      </Button>
						      <Button>
						        Value 5
						      </Button>
					      </ButtonGroup>
						</Container>
			        </ExpansionPanelDetails>
			      </ExpansionPanel>
				</Grid>
				<Grid item xs={5}>
					<SidePanel/>
				</Grid>
			</Grid>
		);
	}
}