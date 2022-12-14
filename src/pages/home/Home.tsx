import "./Home.css";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import { Grid, Button, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      navigate("/login");
    }
  }, [token]);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="container"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo-h3"
            >
              Seja bem-vindo!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo-h5"
            >
              Blog pessoal
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to="/posts" className="text-decorator-none">
              <Button variant="outlined" className="btn">
                Ver Postagens
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://64.media.tumblr.com/58d8a7c0e3c64f7e4505cdb4091eb159/tumblr_ozrtbsdD871w4zyh1o5_500.gifv"
            alt="Esqueleto maneiro"
            width="200"
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
