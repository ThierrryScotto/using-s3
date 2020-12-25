## Descrição do porjeto. 

Esse projeto foi criado para estudos das ferramentas S3 da aws. Ele está rodando em uma máquina EC2.
Para usar o projeto você terá que criar usuário e senha no qual após criado e gerado um token.
Com o usuário autenticado, ele poderá mandar arquivos sendo eles imagens e pdfs. 

O usuário pode enviar quantos arquivos quiser e pode capturá-los quando bem entender basta informar o nome do arquivo.

![image](https://user-images.githubusercontent.com/37625040/103140974-5f3c6b80-46cc-11eb-8a17-d664081a58b7.png)

## Descrição das rotas

**auth**

POST /autheticate (Rota usada para autenticar usuário).

**client**

POST /client (Rota usada para registrar um usuário para acessar a aplicação).

**clientFile**

POST /client/:clientId/file/:fileName (Rota usada para salvar um arquivo no S3).

GET /client/file (Rota usada para pegar um arquivo no s3).

## :rocket: Tecnologias 

-  [Node.js](https://nodejs.org)
-  [Express](https://aws.amazon.com/pt/lambda/)
-  [S3](https://aws.amazon.com/pt/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc)
-  [JWT](https://jwt.io/)
-  [MongoDB](https://www.mongodb.com/)
