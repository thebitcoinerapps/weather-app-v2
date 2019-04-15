import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    height: '250px',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className="grid-container">
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6} sm={8}>
          <Paper className={classes.paper}>
          <Typography>
          Weather for {props.state.term}
          </Typography>
          
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
          <div className="current-condition">
          <Typography>
          Current Condition
          </Typography>
          
          
          </div>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);