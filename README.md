# Teste Leadster

Teste de dev front-end para Leadster, utilizando HTML/CSS/JS, React.js, Next.js e Styled Components.

## Instruções Para Rodar o Projeto

1. Clone o repositório: `git clone https://github.com/voidwalker77/Leadster`
2. Instale as dependências: `npm install`
3. Execute o projeto: `npm start`
4. Acesse o aplicativo em: `http://localhost:3000`

## Decisões Tomadas

Neste projeto, foram tomadas as seguintes decisões:

- Utilização de um simples design system com a seguinte estrutura:
    - **components**: Diretório contendo os componentes reutilizáveis do projeto.
    - **Data**: Diretório para armazenamento de dados estáticos, como arquivos JSON ou de configuração.
    - **utils**: Diretório para utilitários e funções auxiliares.

- Utilização do Material UI como framework de UI para estilizar os componentes do projeto.

- Utilização de ícones do Material UI para adicionar ícones estilizados aos componentes, como a Navbar, Modal, Pagination e Footer, especialmente em dispositivos móveis.

- Uso do React.js como biblioteca JavaScript para a construção da interface do usuário.

- Uso do Next.js como framework React para facilitar a criação de aplicações web modernas, com suporte a Server-Side Rendering (SSR) e Static Site Generation (SSG).

- Uso do Styled Components como uma biblioteca para estilização de componentes com CSS-in-JS, oferecendo maior modularidade e reutilização de estilos.

## Organização do Código

O código do projeto está organizado da seguinte maneira:

- **`components/`**: Este diretório contém os componentes reutilizáveis do projeto. Cada componente está em um arquivo separado para facilitar a manutenção e a reutilização do código.

- **`Data/`**: Neste diretório, encontram-se os arquivos de dados estáticos do projeto, como arquivos JSON.

    - **`videos.json` e `videosAlternative.json`**: Arquivos JSON contendo os dados específicos do projeto.

- **`utils/`**: O diretório `utils/` contém utilitários e funções auxiliares que são utilizados em várias partes do projeto.

    - **`theme.js`**: Arquivo contendo a definição do tema personalizado do projeto.

Além desses diretórios principais, temos outros arquivos e diretórios relevantes:

- **`pages/`**: Diretório que contém a única página da aplicação. A página é composta pelos arquivos `_app.jsx` e `index.jsx`, responsáveis por definir o layout global e renderizar o conteúdo principal da página, respectivamente.

- **`styles/`**: O diretório `styles/` é usado para armazenar os estilos globais e personalizados do projeto. Esses estilos são aplicados aos componentes e à interface do usuário como um todo.

## Funcionalidades

1. **Navbar**: 
   - Uma barra de navegação responsiva que permite ao usuário acessar diferentes seções do site de forma intuitiva.
   - Inclui um menu dropdown para datas, proporcionando uma navegação por datas específicas.

2. **Modal**: 
   - Um componente modal que mostra um título, vídeo, descrição e botões de download.
   - Permite ao usuário visualizar conteúdo adicional de forma interativa e realizar downloads relevantes.

3. **Pagination**: 
   - Um sistema de paginação de cards que está ligado à Navbar.
   - Permite ao usuário navegar entre diferentes páginas de cards relacionados.

4. **Footer**: 
   - Um rodapé que contém informações adicionais, links úteis ou direitos autorais.

5. **Responsividade da Navbar**: 
   - A Navbar é projetada para ser responsiva, transformando-se em um menu hamburguer quando visualizada em dispositivos móveis.
   - Proporciona uma experiência de navegação amigável em diferentes tamanhos de tela.