<h1 align="center">👥 Cadastro de Usuários</h1>

<h4 align="center">
Aplicação Full Stack desenvolvida para cadastro e gerenciamento de usuários,
integrando front-end em React com API REST em Node.js.
</h4>

<p align="center">
  <a href="#sobre-o-projeto">📌 Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias-utilizadas">💻 Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#principais-funcionalidades">✨ Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arquitetura">🏗️ Arquitetura</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#modo-de-uso">ℹ️ Modo de Uso</a>
</p>

---

<h2 id="sobre-o-projeto">📌 Sobre o Projeto</h2>

O **Cadastro de Usuários | Full Stack App** é uma aplicação completa desenvolvida para praticar e consolidar a integração entre **front-end e back-end**, utilizando React no cliente e Node.js com MongoDB no servidor.

O sistema permite cadastrar, visualizar e deletar usuários através de uma **API REST**, aplicando boas práticas de organização de código, componentização e escalabilidade.

O projeto foi construído com foco em:

- Integração entre React + Node
- CRUD completo com banco de dados
- Consumo de API REST
- Estrutura escalável
- Código limpo e reutilizável
- Tratamento de erros e funções assíncronas

---

<h2 id="tecnologias-utilizadas">💻 Tecnologias Utilizadas</h2>

### Front-end
<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
</p>

### Back-end
<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
</p>

---

<h2 id="principais-funcionalidades">✨ Principais Funcionalidades</h2>

- ✅ Cadastro de usuários
- 👀 Listagem dinâmica de usuários
- 🗑️ Remoção de usuários
- 🔁 CRUD completo com API REST
- ⚡ Comunicação assíncrona entre front e back
- ❌ Tratamento de erros no servidor
- 🧠 Uso de Hooks (useState, useEffect, useNavigate)
- 🧩 Componentização no React
- 📦 Organização modular de código
- 🔄 Atualização automática da interface

---

<h2 id="arquitetura">🏗️ Arquitetura</h2>

O projeto segue uma arquitetura separada em duas camadas:

**Front-end**
- Interface React com Vite
- Consumo de API via requisições HTTP
- Gerenciamento de estado com Hooks

**Back-end**
- API REST com Node.js + Express
- MongoDB para persistência de dados
- Rotas organizadas por responsabilidade
- Funções assíncronas com async/await

---

<h2 id="modo-de-uso">ℹ️ Modo de Uso</h2>

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/devclub-cadastro-usuarios.git
```

2. Instale as dependências:

Back-end
```bash
cd server
npm install
```

Front-end
```bash
cd client
npm install
```

3. Configure o banco de dados:
Crie um arquivo .env na pasta do servidor com:
```bash
MONGO_URI=sua_string_do_mongodb
PORT=3000
```

4. Inicie o projeto:

Servidor
```bash
node --watch server.js
```

Cliente
```bash
yarn dev
```

A aplicação estará disponível em:
<br>
👉 http://localhost:5173

---

## 👨‍💻 Autor

Feito com dedicação por Leonardo Antunes 💚
<br>
🔗 [LinkedIn](https://www.linkedin.com/in/leoantuness/)

⭐ Se este projeto te ajudou ou te inspirou, considere deixar uma estrela no repositório!
