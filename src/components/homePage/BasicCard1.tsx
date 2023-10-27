import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 370 }}>
      <img src='./images/SocialAction.jpeg' style={{ maxWidth: '100%', height: 'auto', width: '370px', maxHeight: '370px' }} alt="Social Action" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ações Sociais
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A B3, uma das principais bolsas de valores do mundo, 
          não apenas se destaca por seu papel crucial no mercado financeiro,
          mas também por suas notáveis iniciativas sociais. Ao longo dos anos,
          a B3 tem demonstrado um compromisso exemplar com a responsabilidade social corporativa,
          investindo em uma variedade de programas e projetos que têm um impacto significativo nas comunidades em que opera.
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/acao-social" style={{ textDecoration: 'none' }}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
