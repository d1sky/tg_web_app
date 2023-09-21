import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';

import { useEffect } from 'react';
import './App.css';
import Form from './components/form/form';
import { useTelegram } from './hooks/useTelegram';

const tg = window.Telegram.WebApp;

function App() {
  const { user } = useTelegram();

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onClose}
          >
            <TelegramIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user?.username}
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <Form />
    </Box>
  );
}

export default App;
