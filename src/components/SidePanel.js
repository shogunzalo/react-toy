import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

export default function SidePanel() {
	return (
		<Grid container spacing={3}>
            <Grid item lg>
              <Container>
                <Typography variant="h4"> Main title </Typography>
                  <Divider variant="middle"/>
                  <h3> Inside Title </h3>
              </Container>
            </Grid>
        </Grid>
	)
}