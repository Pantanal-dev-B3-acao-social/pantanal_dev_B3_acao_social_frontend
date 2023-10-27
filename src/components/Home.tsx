import React from 'react';

function Home() {
  const socialActions = [
    {
      id: 1,
      title: 'Projeto de Educação',
      description: 'Ajudando comunidades locais a obter uma educação de qualidade.',
      imageUrl: 'caminho/para/imagem1.jpg',
    },
    {
      id: 2,
      title: 'Campanha de Alimentação',
      description: 'Fornecendo refeições nutritivas para famílias carentes.',
      imageUrl: 'caminho/para/imagem2.jpg',
    },
  ];

  return (
    <div>
      <h1>Projetos Sociais da Empresa</h1>
      <p>Bem-vindo à página inicial! Conheça nossas iniciativas sociais e faça parte da mudança.</p>

      <div>
        {socialActions.map((action) => (
          <div key={action.id}>
            <h2>{action.title}</h2>
            <img src={action.imageUrl} alt={action.title} />
            <p>{action.description}</p>
            <a href={action.donationLink} target="_blank" rel="noopener noreferrer">
              Faça uma doação
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
