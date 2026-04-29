import flashcards from './flashcard.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function atualizarFlashcard(flashcardId) {

    const indice = flashcards.findIndex(flashcard => flashcard.id === flashcardId);

    if (indice === -1) {
        console. log("Erro: Baralho não encontrado!");
        return;
    }

    flashcards[indice].pergunta = prompt("Digite a pergunta atualizada do flashcard: ");
    flashcards[indice].resposta = prompt("Digite a resposta atualizada do flashcard: ");
    console.log("Flashcard atualizado com sucesso!!");
    return;
}
export default atualizarFlashcard;