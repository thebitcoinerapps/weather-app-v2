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
import partlycloudynigh from '../img/partlycloudynight.png';
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
    height: '150px',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGridForecast(props) {
  const { classes } = props;

  const convertTime = (milisectime) => {
    const time = milisectime + '000';
    const newTime = parseInt(time);
    return new Date(newTime).toLocaleDateString();
}
  const chooseIconForForecast =(icon) =>{
    switch(icon){
      case 'clear-day':
        return clearday;
        
      case 'clear-night':
        return clearnight;
        
      case 'rain':
        return rain;
        
      case 'snow':
        return snow;
        
      case 'sleet':
        return sleet;

      case 'wind':
        return wind;
        
      case 'fog':
        return fog;
        
      case 'cloudy':
        return cloudy;
        
      case 'partly-cloudy-day':
        return partlycloudyday;
        
      case 'partly-cloudy-night':
        return partlycloudynigh;
        
    }
  }
  return (
    <div className="grid-container">
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          <div className="forecast-card">
          <Typography variant={"h6"} align={"left"} noWrap={true}>
            {convertTime(props.state.forecast.daily.data[0].time)}
          </Typography>
            <img  className="forecast-img" src={chooseIconForForecast(props.state.forecast.daily.data[0].icon)} alt="detail-weather-icon"></img>
            <Typography variant={"subtitle1"} align={"right"}>
            {props.state.forecast.daily.data[0].temperatureHigh} C
            </Typography>
            <Typography variant={"subtitle2"} align={"left"} noWrap={true}>
            {props.state.forecast.daily.data[0].summary}
            </Typography>
            </div>
          </Paper>
          
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          <div className="forecast-card">
          <Typography variant={"h6"} align={"left"} noWrap={true}>
          {convertTime(props.state.forecast.daily.data[1].time)}
          </Typography>
          <img  className="forecast-img" src={chooseIconForForecast(props.state.forecast.daily.data[1].icon)} alt="detail-weather-icon"></img>
          <Typography variant={"subtitle1"} align={"right"}>
            {props.state.forecast.daily.data[1].temperatureHigh} C
            </Typography>
            <Typography variant={"subtitle2"} align={"left"} noWrap={true}>
            {props.state.forecast.daily.data[1].summary}
            </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          <div className="forecast-card">
          <Typography variant={"h6"} align={"left"} noWrap={true}>
          {convertTime(props.state.forecast.daily.data[2].time)}
          </Typography>
          <img src className="forecast-img" src={chooseIconForForecast(props.state.forecast.daily.data[2].icon)} alt="detail-weather-icon"></img>
          <Typography variant={"subtitle1"} align={"right"}>
            {props.state.forecast.daily.data[2].temperatureHigh} C
            </Typography>
            <Typography variant={"subtitle2"} align={"left"} noWrap={true}>
            {props.state.forecast.daily.data[2].summary}
            </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          <div className="forecast-card">
          <Typography variant={"h6"} align={"left"} noWrap={true}>
          {convertTime(props.state.forecast.daily.data[3].time)}
          </Typography>
          <img src className="forecast-img" src={chooseIconForForecast(props.state.forecast.daily.data[3].icon)} alt="detail-weather-icon"></img>
          <Typography variant={"subtitle1"} align={"right"}>
            {props.state.forecast.daily.data[3].temperatureHigh} C
            </Typography>
            <Typography variant={"subtitle2"} align={"left"} noWrap={true}>
            {props.state.forecast.daily.data[3].summary}
            </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

FullWidthGridForecast.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGridForecast);