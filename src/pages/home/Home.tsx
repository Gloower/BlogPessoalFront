import "./Home.css";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import { Grid, Button, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { useEffect } from "react";

function Home() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado!");
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
              Seja bem-vinde s2
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
            <Button variant="outlined" className="btn">
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F37.media.tumblr.com%2F5d7df7d34b9f5e76ab12b22579ec55df%2Ftumblr_na697gAEzS1stwx7xo1_400.gif&f=1&nofb=1"
            alt=""
            width="790px"
            height="512px"
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
