import flashcards from './flashcard.js';
import baralhos from './baralhos.js';

import adicionarBaralho from './adicionarBaralho.js';
import adicionarFlashcard from './adicionarFlashcard.js';

import listarBaralhos from './listarBaralhos.js';
import listarFlashcards from './listarFlashcards.js';
import listarPorBaralho from './listarPorBaralho.js';

import atualizarBaralho from './atualizarBaralho.js';
import atualizarFlashcard from './atualizarFlashcard.js';

import deletarBaralho from './deletarBaralho.js';
import deletarFlashcard from './deletarFlashcard.js';

import buscarBaralho from './buscarBaralho.js';
import buscarFlashcard from './buscarFlashcard.js';

import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function operacoes(op) {
    let idBaralho = 0;
    let idFlashcard = 0;

    switch (op) {
        case 0:
            console.log('Encerrando o programa...');
            return 'sair';
        case 1:
            adicionarBaralho();
            return 'sucesso';
        case 2:
            adicionarFlashcard();
            return 'sucesso';
        case 3:
            listarBaralhos();
            return 'sucesso';
        case 4:
            listarFlashcards();
            return 'sucesso';
        case 5:
            listarPorBaralho();
            return 'sucesso';
        case 6:
            idBaralho = parseInt(
                prompt('Digite o id do baralho que deseja atualizar: ').trim()
            );
            atualizarBaralho(idBaralho);
            return 'sucesso';
        case 7:
            idFlashcard = parseInt(
                prompt('Digite o id do flashcard que deseja atualizar: ').trim()
            );
            atualizarFlashcard(idFlashcard);
            return 'sucesso';
        case 8:
            idBaralho = parseInt(
                prompt('Digite o id do baralho que deseja deletar: ').trim()
            );
            deletarBaralho(idBaralho);
            return 'sucesso';
        case 9:
            idFlashcard = parseInt(
                prompt('Digite o id do flashcard que deseja deletar: ').trim()
            );
            deletarFlashcard(idFlashcard);
            return 'sucesso';
        //buscas
        case 10:
            buscarFlashcard();
            return 'sucesso';
        case 11:
            buscarBaralho();
            return 'sucesso';
        default:
            console.log('ERRO: Digite uma operação válida!');
            return 'ERRO';
    }
}

export default operacoes;
