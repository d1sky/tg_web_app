import { useEffect } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <Typography variant="h3" gutterBottom>
        Стройка
      </Typography>
      <TextField fullWidth label="fullWidth" id="fullWidth" />
      <Button variant="outlined" onClick={onClose}>Закрыть</Button>
    </div>
  );
}

export default App;
