import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function CircularUnderLoad() {
  return(
    <div className="spinner">
    <CircularProgress disableShrink />
    </div>
  ); 
}

export default CircularUnderLoad;