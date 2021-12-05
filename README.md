# Todo app

## Getting started
### Pré-requisitos
Para executar este projeto no modo de desenvolvimento, você precisará ter um ambiente básico com NodeJS 8+ instalado.

### Instalação de dependências
```
$ yarn
```

ou

```
$ npm install
```

### Configuração de variaveis de ambiente
Crie e adicione ao seu .env as seguintes variaveis para conexão com o banco de dados mongo:
```
MONGO_URI="mongodb" (Pode ser um cluster ou algum mongodb local)
JWT_SECRET="s3cr3t"
```

### Buildando o projeto
```
$ yarn build
```

ou 

```
$ npm run build
```

### Iniciando o projeto
Em dev mode:
```
$ yarn dev
```

ou

```
npm run dev
```

Em prod mode:
```
$ yarn start
```

ou 

```
$ npm run start
```
