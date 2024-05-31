import '@fontsource/roboto/300.css'
import Stack from '@mui/material/Stack'
import Menu from './components/Menu';
import Content from './components/Content';
import Images from './components/Images';
import { Box, Container } from '@mui/material';
import Header from './components/Header';



function App() {
  return (
    <Box>
      <Header />
      <Container maxWidth={'xl'}>
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
          <Menu />
          <Content />
          <Images />
        </Stack>
      </Container>
    </Box>


  );
}

export default App;
