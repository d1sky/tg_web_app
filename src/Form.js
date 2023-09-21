import { useEffect } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" gutterBottom>
        Стройка
      </Typography>
      <Stack
        component="form"
        sx={{
          width: '25ch',
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >

        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          variant="filled"
          placeholder="ФИО"
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder="Телефон"
          variant="filled"
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder="Кадастр"
          variant="filled"
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder="Населенный пункт"
          variant="filled"
        />
      </Stack>
      <Button variant="outlined" onClick={onClose}>Закрыть</Button>
    </Container>
  );
}

export default App;
