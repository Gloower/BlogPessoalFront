import "./Home.css";

import { Grid, Button, Typography } from "@material-ui/core";
import { Box } from "@mui/material";

function Home() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className="container">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center">Seja bem-vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center">Blog pessoal feito com react</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="btn">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://64.media.tumblr.com/58d8a7c0e3c64f7e4505cdb4091eb159/tumblr_ozrtbsdD871w4zyh1o5_500.gifv" alt="" width="500" height="300" />
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
    </>
  );
}

export default Home;
