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

Caso seja preciso adicionar um campo novo em uma tabela temos que criar uma nova migration:

  ~~~
    npx knex migrate:make add_nomecampo_to_treino
  ~~~

Em seguida, no código vamos fazer o seguinte por exemplo:

  ~~~
    exports.up = function(knex) {
      return knex.schema.alterTable('treino', (table) => {
        table.string('nomecampo'); // substitua pelo nome e tipo desejado
      });
    };

    exports.down = function(knex) {
      return knex.schema.alterTable('treino', (table) => {
        table.dropColumn('nomecampo');
      });
    };
  ~~~

Para finalizar, rodar:
  ~~~
    npx knex migrate:latest
  ~~~

Documentação da biblioteca [Joi](https://joi.dev/api/?v=17.13.3#introduction)

Para adicionar um icone do fontawsome, podemos fazer da seguinte maneira ([documentação](https://docs.fontawesome.com/web/add-icons/how-to) e [icons](https://fontawesome.com/search)):
~~~html
  <i class="fa-solid fa-user"></i>
~~~
que resulta em: <i class="fa-solid fa-user"></i>

✅ Boas práticas com workspaces

Sempre use npm install --workspace nome para manter organizado.

Evite rodar npm install dentro dos subdiretórios.

Evite manter múltiplos node_modules separados — o ideal é que o node_modules fique na raiz, controlado centralmente.

Para instalar uma biblioteca só para o frontend ou backend, fazer:

~~~
npm install nome-da-biblioteca --workspace frontend
npm install nome-da-lib --workspace backend
~~~