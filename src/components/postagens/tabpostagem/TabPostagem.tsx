import { useState } from 'react';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';

import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string){
      setValue(newValue);
  }
return (
  <>
    <TabContext value={value}>
      <AppBar position="static" style={{ background: "#74849C" }}>
        <Tabs centered indicatorColor="secondary" onChange={handleChange}>
          <Tab label="Todas as postagens" value="1" className='bold-weight'/>
          <Tab label="Sobre mim" value="2" className='bold-weight'/>
        </Tabs>
      </AppBar>
      <TabPanel value="1" >
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <ListaPostagem />
        </Box>
      </TabPanel>
      <TabPanel value="2">
        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre Mim</Typography>
        <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
        Olá meu nome é Nicolas Saldanha Alves, tenho 18 anos e moro em São Paulo/capital atualmente. Sempre desejei em ingressar no mercado de trabalho e com essa vontade de querer trabalhar muito cedo, aos meus 16 anos acabei estagiando na Avance Estagios na parte administrativa, trabalhando com contratos, entrando em contato com empresas diariamente referente aos contratos dos novos estagiarios e organizando documentaçõs empresariais, com isso eu ganhei muita exeriencia com ambiente de trabalho e pessoal tambem, tendo que me organizar, criar e seguir uma rotina. Apos sair do meu ultimo emprego na Avance, fiquei me questionando em fazer algo que sempre fui apaixonado ou continuar na mesma area por ja estar acostumado, felizmente no final de 2021 resolvi começar o meu curso de Analise e Desenvolvimento de Sistemas na universidade italo brasileiro e nesse periodo de 1 ano fazendo a transição de area foi onde eu tive certeza que era apaixonado pela area de tecnologia em geral. Sempre gostei muito de saber como as coisas eram feitas e me lembro do meu primeiro contato com a programação, quando eu tinha 11 anos eu era fissurado por um jogo chamado Minecraft e eu queria saber como era feito os plugins de servidores e os mod’s que eu jogava todos os dias praticamente e com isso eu tive o primeiro contato com o Java e mesmo sem saber por onde começar eu sempre busquei saber como eram feitos os plugins, desde esse dia minha paixão pela programação só foi aumentando e por conta da minha curiosidade e vontade de fazer os meus proprios plugins estou aqui hoje vivendo com e pela programação. No momento busco trabalhar como Junior em uma empresa de tecnologia, acredito que uma oportunidade de Junior no momento vai se vincular com o meu objetivo pessoal que é crescer profissionalmente e ganhar conhecimento com pessoas que ja trabalham na area. 
          </Typography>
      </TabPanel>
    </TabContext>
  </>
);
}
export default TabPostagem;