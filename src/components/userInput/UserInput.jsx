import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ValidationTextField = withStyles({
    root: {
      marginRight: '1rem',  
      '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
      },
    },
  })(TextField);

const handleClick = () => {
    console.log('click!')
}  

const UserInput = () => {
    return (
        <div className="flex">
            <ValidationTextField
                required
                label="Enter github user"
                defaultValue="DocDuck"
                variant="outlined"
            />
            <Button variant="contained" color="primary" onClick={() => handleClick()}>Find</Button>
        </div>
    )
}

export default UserInput