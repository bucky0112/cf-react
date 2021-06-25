import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
// import logo from './../logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  }
}))

function Index () {
  const classes = useStyles()

  return (
    <div className='App'>
      <div className={classes.root}>
        <Paper elevation={3}>
          <p>123</p>
        </Paper>
      </div>
    </div>
  )
}

export default Index
