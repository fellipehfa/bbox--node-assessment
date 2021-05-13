[![Generic badge](https://img.shields.io/badge/version-1.0.0-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/TypeScript-yes-blue.svg)](https://shields.io/)

# <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> Desafio Back-end BossaBox 

## **Instruções**
Você deve efetuar o _pull_ do código local e após a finalização, abrir um _**Merge Request**_ para avaliação.
TEMPO ESTIMADO DE RESOLUÇÃO: **20~30min**

## **Avaliação**
Neste desafio, você deve identificar falhas no código que comprometam os seguintes itens:
1. DDD
2. Single Responsibility Principle
3. Code quality
4. RESTful Apps (HTTP Verbs and Codes)
5. Immutability

## **Desafio**
Você deve melhorar o código apresentado, levando em consideração os pontos de avaliação.

## **Recomendações**
Recomendamos a implementação dos seguintes itens:
1. Global Exception Handler
2. Nullish verification
3. Request validation

## **Preparação do ambiente**

O projeto está preparado para utilizar um banco de dados **postgres**. Caso não tenha instalado na sua máquina, aconselhamos a utilização via **Docker**, através do seguinte comando:

`docker run -d --name bbox_pg -p 25060:5432 -e POSTGRES_PASSWORD='postgres' -e PGDATA=/var/lib/postgresql/data/pgdata -v bbox_pg:/var/lib/postgresql/data postgres:12.2-alpine`

Próximo passo é criar o _database_ **bbox**, que será utilizado no projeto.

Instale o _ts-node_ globalmente com o seguinte comando

`npm i -g ts-node`

Instale todas as dependências com algum dos comandos abaixo:

`npm install --quiet`

`yarn install --quiet`

Depois execute as migrations do _typeorm_ para criar as tabelas necessárias, com algum dos comandos abaixo:

`npm run typeorm migration:run` 

`yarn typeorm migration:run`
