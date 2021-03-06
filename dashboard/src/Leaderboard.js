import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Leaderboard extends PureComponent {
  render() {
    const {top} = this.props
    const leader = top[0] || {score: 0}
    return(
      <Paper elevation={1} style={{padding: '.5%'}}>
        <Typography variant="h2" component="h1">
          Leader<Hidden mdDown>board</Hidden>
        </Typography>
        <Grid container item xs={12} lg={12} spacing={16} alignItems="center">
          <Grid container item xs={12} lg={12}>
            <Typography variant="h4" component="h3" style={{display: 'flex', flexBasis: '100%', justifyContent:'center', margin: '15px 0px'}}>
              {leader.username} - {leader.score.toLocaleString()}
            </Typography>
            <Hidden mdDown>
              <Grid item lg={12} style={{marginTop: '10px', display: 'flex', flexWrap: 'wrap'}}>
                {top.slice(1, 9).map(obj => (
                  <Typography variant="h5" component="h4" style={{display: 'flex', flexBasis: '25%', justifyContent:'center'}}>
                    {obj.username} - {obj.score.toLocaleString()}
                  </Typography>
                ))}
              </Grid>
            </Hidden>
            <Hidden mdDown>
              <Grid item lg={12} style={{marginTop: '10px', display: 'flex', flexWrap: 'wrap'}}>
                {top.slice(10, 40).map(obj => (
                  <Typography variant="h6" component="h4" style={{display: 'flex', flexBasis: '10%', justifyContent:'center'}}>
                    {obj.username} - {obj.score.toLocaleString()}
                  </Typography>
                ))}
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default Leaderboard