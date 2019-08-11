import React, { Component }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Sidebar from './components/Sidebar';
import SimpleAppBar from './components/SimpleAppBar'
import SimplePanel from './components/SimplePanel'

class App extends Component {

  constructor(props) {
      super(props);

      this.handleThemeToggle = this.handleThemeToggle.bind(this);

      this.state = {
        theme: {
          palette: {
            type: "dark"
          }
        }
      };
    }

    handleThemeToggle() {
      let newPaletteType = this.state.theme.palette.type === "light" ? "dark" : "light";
      this.setState({
        theme : {
          palette: {
            type: newPaletteType
          }
        }
      });
    }


  render() {

    const muiTheme = createMuiTheme(this.state.theme);

    return ( 
       <MuiThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SimpleAppBar toggleDarkTheme={this.handleThemeToggle} theme={this.state.theme}/>
            </Grid>
            <Grid item xs={3}>
              <Sidebar/>
            </Grid>
            <Grid item xs={9}>
              <SimplePanel/>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      )
  }

}

export default App;
