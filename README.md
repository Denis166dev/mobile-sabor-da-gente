# 🍕 Sabor da Gente

Aplicativo mobile de uma pizzaria desenvolvido em **React Native + Expo + TypeScript** como projeto da disciplina de **Programação para Dispositivos Móveis (PDM)**.

O objetivo do projeto é desenvolver uma aplicação completa para pedidos de uma pizzaria, permitindo que clientes consultem o cardápio, montem seus pedidos, realizem a compra e acompanhem o pedido.

---

## 🎯 Objetivo do projeto

Desenvolver um sistema de pizzaria com:

- 📱 Aplicativo mobile para clientes;
- 🍕 Cardápio digital;
- 🛒 Carrinho de compras;
- 📦 Sistema de pedidos;
- 👤 Cadastro e gerenciamento de clientes;
- 💳 Formas de pagamento;
- 📍 Endereços de entrega;
- 👨‍💼 Área administrativa;
- 🗄️ Banco de dados;
- 🧱 Aplicação de Programação Orientada a Objetos (POO).

---

## 🛠️ Tecnologias

- React Native
- Expo
- Expo Router
- TypeScript
- Node.js
- Git
- GitHub
- Banco de dados (a definir)

---

## ✅ Funcionalidades implementadas

### 🏠 Tela inicial

- Identidade visual da pizzaria;
- Acesso ao cardápio;
- Categorias de produtos;
- Seção de produtos mais pedidos.

### 📋 Cardápio

Categorias inicialmente planejadas:

- 🍕 Pizzas
- 🥟 Esfihas
- 🥤 Bebidas
- 🍫 Sobremesas

### 🍕 Pizzas Grandes

Atualmente é possível:

- Visualizar os sabores disponíveis;
- Selecionar sabores;
- Selecionar no mínimo 1 e no máximo 2 sabores;
- Desmarcar sabores;
- Identificar visualmente os sabores selecionados;
- Visualizar o preço de cada sabor;
- Calcular automaticamente o preço da pizza.

#### Regra atual de preço

Quando uma pizza possui dois sabores, o preço utilizado é o do sabor de maior valor.

Exemplo:

| Sabores | Preço |
|---|---:|
| Calabresa | R$ 45,00 |
| Frango com Catupiry | R$ 45,00 |
| Portuguesa | R$ 48,00 |
| Calabresa + Frango | R$ 45,00 |
| Calabresa + Portuguesa | R$ 48,00 |
| Frango + Portuguesa | R$ 48,00 |

Essa regra poderá ser alterada posteriormente conforme as necessidades do projeto.

---

## 🚧 Funcionalidades em desenvolvimento

### 🛒 Carrinho

- Adicionar produtos;
- Alterar quantidade;
- Remover produtos;
- Visualizar subtotal;
- Visualizar total;
- Adicionar observações.

### 📦 Finalização do pedido

- Identificação do cliente;
- Endereço de entrega;
- Forma de pagamento;
- Confirmação do pedido;
- Número do pedido;
- Acompanhamento do status.

### 👤 Usuário

- Cadastro;
- Login;
- Perfil;
- Endereços salvos;
- Histórico de pedidos;
- Detalhes dos pedidos.

### 👨‍💼 Área administrativa

- Login de administrador;
- Visualização dos pedidos;
- Alteração do status dos pedidos;
- Cadastro de produtos;
- Edição de produtos;
- Remoção de produtos;
- Gerenciamento de categorias;
- Alteração de preços;
- Estatísticas básicas.

---

## 🧱 Programação Orientada a Objetos

O projeto será estruturado utilizando conceitos de POO.

Algumas das principais entidades planejadas são:

```text
Usuario
├── Cliente
└── Administrador

Produto
├── Pizza
├── Esfiha
└── Bebida

Sabor
Categoria

Pedido
└── ItemPedido

Endereco
Pagamento
