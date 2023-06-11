## Início Rápido

Clone o projeto em sua máquina e instale as dependências com o comando:

```bash
$ yarn install
```

## Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Execute as migrations com o comando:

```
npx prisma migrate dev
```

## Rodando o app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

---


## Informações sobre as rotas ficam <a href="http:localhost:3000/docs">aqui</a>.
