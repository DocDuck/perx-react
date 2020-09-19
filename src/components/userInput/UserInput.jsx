/* eslint-disable no-unused-expressions */
import React from 'react';
import { connect } from 'react-redux'
import { clearCurrentUserData, getCurrentUserData, setUserName } from '../../store/actions'
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

const UserInput = ({ userName, setUserName, getCurrentUserData, clearCurrentUserData }) => {

  return (
      <div className="flex">
          <ValidationTextField
              required
              label="Enter github user"
              variant="outlined"
              onChange={(e) => setUserName(e.target.value)}
              onFocus={() => clearCurrentUserData()}
          />
          <Button disabled={!userName} variant="contained" color="primary" onClick={() => getCurrentUserData()}>Find</Button>
      </div>
  )
}

const mapStateToProps = ({ userName }) => ({ userName })

const mapDispatchToProps = (dispatch) => ({
  setUserName: (val) => dispatch(setUserName(val)),
  getCurrentUserData: () => dispatch(getCurrentUserData),
  clearCurrentUserData: () => dispatch(clearCurrentUserData())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInput)