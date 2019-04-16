import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import clearday from '../img/clear-day.png';
import clearnight from '../img/clear-night.png';
import cloudy from '../img/cloudy.png';
import fog from '../img/fog.png';
import partlycloudyday from '../img/partly-cloudy-day.png';
import partlycloudynight from '../img/partlycloudynight.png';
import rain from '../img/rain.png';
import sleet from '../img/sleet.png';
import snow from '../img/snow.png';
import wind from '../img/wind.png';

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
  let weatherIcon = null;
  let map = null;
  switch(props.state.forecast.currently.icon){
    case 'clear-day':
      weatherIcon = clearday;
      break;
    case 'clear-night':
      weatherIcon = clearnight;
      break;
    case 'rain':
      weatherIcon = rain;
      break;
    case 'snow':
      weatherIcon = snow;
      break;
    case 'sleet':
      weatherIcon = sleet;
      break;
    case 'wind':
      weatherIcon = wind;
      break;
    case 'fog':
      weatherIcon = fog;
      break;
    case 'cloudy':
      weatherIcon = cloudy;
      break;
    case 'partly-cloudy-day':
      weatherIcon = partlycloudyday;
      break;
    case 'partly-cloudy-night':
      weatherIcon = partlycloudynight;
      break;
  };



  return (
    <div className="grid-container">
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
          <div className="current-details">
          <Typography color={"textPrimary"} align={"left"} variant={"h5"}>
          Weather for {props.state.term}
          </Typography>
          </div>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
          <div className="current-condition">
          <Typography color={"textPrimary"} align={"left"} variant={"h5"}>
          Current Condition
          </Typography>
          <img className="icons-weather" src={weatherIcon} alt="weather condition"></img>
          <Typography color={"textPrimary"} align={"right"} variant={"h3"} noWrap={false}>
          {props.state.forecast.currently.temperature} C
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