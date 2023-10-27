import React from 'react';
import BasicCard1 from './BasicCard1';
import BasicCard2 from './BasicCard2';
import BasicCard3 from './BasicCard3';
import BasicCard4 from './BasicCard4';
import BasicCard5 from './BasicCard5';

const containerStyle: React.CSSProperties = {
  backgroundColor: '#f2f2f2', // Fundo cinza claro para a página inteira
  minHeight: '100vh', // Garante que a página tenha pelo menos a altura da viewport
  display: 'flex',
  flexDirection: 'column',
};

const titleContainerStyle: React.CSSProperties = {
  backgroundColor: '#004685', // Fundo azul para o título
  color: '#FFFFFF', // Cor do texto (branco)
  padding: '20px', // Espaçamento interno do container do título
  marginBottom: '20px', // Espaçamento inferior
};

const cardContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px', // Espaçamento entre os cards
  padding: '20px', // Espaçamento interno do container de cards
};

function HomePage() {
  return (
    <div style={containerStyle}>
      <div style={titleContainerStyle}>
        <h1 style={{ margin: 0 }}>Bem vindos à B3 Social</h1>
      </div>
      <div style={cardContainerStyle}>
        <BasicCard1 />
        <BasicCard2 />
        <BasicCard3 />
        <BasicCard4 />
        <BasicCard5 />
      </div>
      {/* Outros componentes ou conteúdos da sua homepage podem vir aqui */}
    </div>
  );
}

export default HomePage;
