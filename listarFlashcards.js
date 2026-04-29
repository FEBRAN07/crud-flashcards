import flashcards from './flashcard.js';

function listarFlashcards() {
    flashcards.forEach((flashcard) => {
        console.log(
            `\n=======\nId: ${flashcard.id}\tId do baralho: ${flashcard.idBaralho}\nPergunta: ${flashcard.pergunta}\tResposta: ${flashcard.resposta}`
        );
    });
    console.log('======');
}

//listarFlashcards();
export default listarFlashcards;
