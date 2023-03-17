import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SimpleCard from '../card/Card';


import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    minHeight:"120px",
    maxHeight:"200px" ,
    my: 2 ,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <Box sx={{ width: '100%',bgcolor: '#cfe8fc', height: '100vh' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Item><SimpleCard/></Item>
          </Grid>
          <Grid item xs={3}>
            <Item><SimpleCard/></Item>
          </Grid>
          <Grid item xs={3}>
            <Item><SimpleCard/></Item>
          </Grid>
          <Grid item xs={3}>
            <Item><SimpleCard/></Item>
          </Grid>
          <Grid item xs={3}>
            <Item><SimpleCard/></Item>
          </Grid>
          <Grid item xs={3}>
            <Item><SimpleCard/></Item>
          </Grid>
          <Grid item xs={3}>
            <Item><SimpleCard/></Item>
          </Grid>
        </Grid>
      </Box>
      </Container>
    </React.Fragment>
  );
}


