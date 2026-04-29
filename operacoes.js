import flashcards from './flashcard.js';
import baralhos from './baralhos.js'

import adicionarBaralho from './adicionarBaralho.js'
import adicionarFlashcard from './adicionarFlashcard.js'

import listarBaralhos from './listarBaralhos.js'
import listarFlashcards from './listarFlashcards.js'
import listarPorBaralho from './listarPorBaralho.js'

import atualizarBaralho from './atualizarBaralho.js';
import atualizarFlashcard from './atualizarFlashcard.js';

import deletarBaralho from './deletarBaralho.js';
import deletarFlashcard from './deletarFlashcard.js';



function operacoes(op) {
    switch (op) {
        case 0:
            console.log('Encerrando o programa...');
            return 'sair';
        case 1:
            adicionarBaralho();
        case 2:
            adicionarFlashcard()
        case 3:
            listarBaralhos()
        case 4:
            listarFlashcards()
        case 5:
            listarPorBaralho()
        case 6:
            atualizarBaralho()
        case 7:
            atualizarFlashcard()
        case 8:
            deletarBaralho()
        case 9:
            deletarFlashcard()

    }
}
