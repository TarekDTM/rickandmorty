import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {MediaCardItemProps } from './types';

export function MediaCard(props : MediaCardItemProps) {

  const  {
    image,
    name,
    status,
  } = props;
  return (
    <Card sx={{ width: 245 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color={ status === 'Alive' ? 'green': 'red'}>
          {status}
        </Typography>
      </CardContent>
    </Card>
  );
}