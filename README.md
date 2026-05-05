Autores: [Felipe Brandes](https://github.com/FEBRAN07), [Pedro Paulo Woytichoski Neto](https://github.com/PedroPwoyti), [Ana Carolina Ataya](https://github.com/carol1802)

Descrição do sistema:
Sistema interativo que permite gerenciar os flashcards e seus respectivos baralhos.

ESTRUTURA
baralhos.js: Estrutura dos baralhos
O baralho serve para classificar os flashcards.
Análogo às diferentes caixas de baralhos e suas respectivas cartas(flashcards).

        Exporta uma array de objetos
        id: identificador único para cada baralho
        título: nome ou categoria (ex: "JavaScript").

    flashcard.js: Estrutura dos flashcards
        Exporta uma array de objetos
        id: identificador único para cada flashcard
        pergunta: questão a ser respondida
        resposta: solução correspondente à pergunta
        idBaralho: chave estrangeira que vincula o flashcard a um baralho específico

CREATE
adicionarBaralho.js 1. Recebe o titulo 2. Se a resposta for vazia, retorna erro por título inválido. 3. Se não, se o nome do baralho for repetido, retorna erro por título já existente. 4. Se não, gera um id automático.

    adicionarFlashcard.js
        1. Recebe pergunta , resposta e idBaralho . O id é gerado automaticamente.
        2. Se pelo menos um deles for vazio, retorna erro por resposta inválida.
        3. Percorre o array baralho para verificar se o id requisitado existe.
        4. Se não existe, retorna erro por id inválido.
        5. O id é gerado automaticamente e o novo flashcard é adicionado ao array.

READ
listarBaralhos.js
Exibir todos os baralhos cadastrados com seus respectivos ids e títulos.

    listarflashcards.js
        Exibir todos os flashcards do sistema com seus respectivos ids, id do baralho, perguntas e respostas.

    listarPorBaralho.js
        Verifica se o id do baralho é válido.
        Se for, lista apenas os flashcards que pertencem a um idBaralho específico.

UPDATE
atualizarBaralho.js
recebe o id do flashcard a ser atualizado
verifica se o id existe
se não existe, retorna erro por invalido
se existe, recebe o título novo e atualiza.

    atualizarFlashcard.js
        recebe o id do flashcard a ser deletado
        verifica se o id existe
        se não existe, retorna erro por invalido
        se existe, recebe a pergunta e a resposta novas e atualiza.

DELETE

    deletarBaralho.js
        recebe o id do baralho a ser deletado
        verifica se o id existe
        se não existe, retorna erro por invalido
        se existe, verifica se quer mesmo deletar
        se quer mesmo, deletao baralho e todos os flashcards com a classificação do baralho.
        se não quer, encerra a operação.

    deletarFlashcard.js
        recebe o id do flashcard a ser deletado
        verifica se o id existe
        se não existe, retorna erro por invalido
        se existe, verifica se quer mesmo deletar
        se quer mesmo, deleta.
        se não quer, encerra a operação.

BUSCA
buscarBaralho.js
recebe o nome/título do baralho que deseja encontrar
filtra os baralhos que tenham o título recebido
se existir resultados, ele retorna todos os resultados.
se não, retorna que nao tem resultados

    buscaFlashcard.js
        pergunta se quer fazer a busca por id ou por texto da pergunta
        se nao for nem o do id nem pergunta retorna como invalido
        recebe o id / pergunta
        filtra e verifica se existe
        se existir, retorna a lista de existentes com id, id do baralho, pergunta e resposta
        se não existir, retorna que não há resultados pra busca

menu.js
Lista das opções de funções do sistema

operacoes.js
mudança das funções por switch

main.js
central de operações
