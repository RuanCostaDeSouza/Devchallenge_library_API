Library API

The system was developed to manage the collection of a library dealing with a basic CRUD being possible to carry out all the necessary queries and changes with ease and security.

Using the REST concepts this project was developed with the intention of being a simple and safe system, which allowed the user to write and read information.

🚀 Started

📋 Requirements

You must have Node, and a prostgres database installed on the machine to run this application.

Insert the following variable into an .env file with the corresponding values:

DATABASE_URL="postgresql://username:password@host:port/database?schema=public"

🔧 Install

install all dependencies using:

npm install

or

yarn add

With the dependencies installed, just run the command below depending on your preferred package manager

 * yarn prisma migrate dev
 * yarn start

or

 * npm run prisma migrate dev
 * npm run start

API will be running on port 3030 of your localhost

📦 Development

Utilizando os conceitos REST este projeto foi desenvolvido com o intuito de ser um sistema simples e seguro, que permitisse ao usuário escrever, ler, editar e deletar informações, neste sistema foram utilizados os principios do SOLID e código limpo para que o sistema fosse escalavel e facil de manter.

🛠️ Built with

Node

Express

Prisma ORM

Postgress

Json web token

Typescript


⌨️ Built by Ruan Costa de Souza😊