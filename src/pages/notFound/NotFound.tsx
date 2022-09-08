import { Grid } from '@material-ui/core';
import { Box } from '@mui/material';

import './NotFound.css';

function NotFound(){
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" className="container">
      <Grid alignItems="center">
      <Box>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F37.media.tumblr.com%2F5d7df7d34b9f5e76ab12b22579ec55df%2Ftumblr_na697gAEzS1stwx7xo1_400.gif&f=1&nofb=1" alt="" />
      </Box>
      </Grid>
    </Grid>
  )
}

export default NotFound;