import baralhos from './baralhos.js';
import PromptSync from 'prompt-sync';
import flashcards from './flashcard.js';
const prompt = PromptSync();

function deletarFlashcard(flashcardID) {
    const indice = flashcards.findIndex(flashcard => flashcard.id === flashcardID);

    if (indice !== -1) {
        let confirm = prompt("Tem certeza que quer deletar esse flashcard?(s/n)");
        if(confirm.toLowerCase() == "s"){
            flashcards.splice(indice, 1);
            console.log('Flashcard removido com sucesso!');
        } else {
            console.log("Encerrando deleção...");
            return;
        }
    } else {
        console. log("Erro: Flashcard não encontrado!");
        return;
    }
}

export default deletarFlashcard;