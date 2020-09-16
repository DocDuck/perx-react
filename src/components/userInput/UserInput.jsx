import React from 'react';
import { TextField, Button } from '@material-ui/core';


const UserInput = () => {
    return (
        <div className="flex">
            <TextField
                error
                id="outlined-error-helper-text"
                label="Error"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
            />
            <Button/>
        </div>
    )
}

export default UserInput