# Sistema judo

Se formos adicionar um campo novo em uma tabela, vamos ter que criar uma migration com o comando:

~~~
npx knex migrate:make <nomeTabela>
~~~

Esse comando criara um arquivo no formato a seguir. No exports.up vamos adicionar as alterações que quisermos, como criar a tabela ou adicionar um novo campo, mas para cada alteração, temos que "desfazer" essas alterações depois com o exports.down. Seguir a [documentação oficial](https://knexjs.org/guide/)


~~~javascript
exports.up = function(knex) {
};

exports.down = function(knex) {
  return 
};
~~~

Após fazer as alterações desejadas, vamos rodar o seguinte comando para aplicar as alterações feitas nas migrates criadas e que não foram rodadas ainda:

~~~
npx knex migrate:latest
~~~

Caso seja preciso atualizar uma migration depois de roda-la, vamos fazer o seguinte:
  - Vamos fazer um rollback para desfazer as migrations que fizemos (repetir até fazer de todas)
    ~~~
    npx knex migrate:rollback
    ~~~
  - Alteramos o arquivo de migrate que foi criado anteriormente
  - Rodar as migrations:
    ~~~
    npx knex migrate:latest
    ~~~

Documentação da biblioteca [Joi](https://joi.dev/api/?v=17.13.3#introduction)