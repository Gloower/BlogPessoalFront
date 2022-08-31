import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid alignItems='center' xs={6}>
        <Box paddingX={20}>
          <form>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='color-weight'>Entrar</Typography>
            <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
            <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
            <Box marginTop={2} textAlign='center'>
              <Link to='/home' className='text-decorator-none'>
                <Button type='submit' variant='contained' color='secondary' className='btn'>Logar</Button>
              </Link>
            </Box>
          </form>
          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box marginRight={1}>
              <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
            </Box>
            <Typography variant='subtitle1' gutterBottom align='center' className='color-weight'>Cadastre-se</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className='imagem' style={{
        backgroundImage: `url(https://64.media.tumblr.com/58d8a7c0e3c64f7e4505cdb4091eb159/tumblr_ozrtbsdD871w4zyh1o5_500.gifv)`,
        backgroundRepeat: 'no-repeat',
        width: '100vh',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>

      </Grid>
    </Grid>
  );
}

export default Login;