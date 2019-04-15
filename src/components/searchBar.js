import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

function CustomizedInputBase(props) {
  const { classes } = props;
  let term = '';
    const onSubmit = (event) => {
        event.preventDefault();
        props.onInputSubmitted(term);
    }
  return (
    <div className="searchbar-container">
    <form onSubmit={onSubmit}>
    <Paper className={classes.root} elevation={1}>
      <InputBase 
                className={classes.input} 
                onChange={(event)=>{
                    term = event.target.value;
                            }} 
                placeholder="Search for weather in cities accros the world!" />

      <IconButton className={classes.iconButton} aria-label="Search">
      <i className="fas fa-search-location"></i>
      </IconButton>
    </Paper>
    </form>
    </div>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);