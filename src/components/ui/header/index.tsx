import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export  function Header() {
  return (
    <Box sx={{ flexGrow: 1 , marginBottom: '5%', }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Rick and Mory characters
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}