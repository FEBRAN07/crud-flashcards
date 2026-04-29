import baralhos from './baralhos.js';
import flashcards from './flashcard.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function deletarBaralho(baralhoID) {
    const indice = baralhos.findIndex(baralho => baralho.id === baralhoID);
    let tamFlashcards = flashcards.length;

    if (indice !== -1) {
        let confirm = prompt("Tem certeza que quer deletar esse baralho?(s/n)");
        if(confirm.toLowerCase() == "s"){
            baralhos.splice(indice, 1);
            for(let i = 0; i < tamFlashcards; i++){
                if(baralhoID == flashcards[i].idBaralho){
                    flashcards.splice(i, 1);
                    tamFlashcards --;
                }
            }
            console.log('Baralho removido com sucesso!');
        } else {
            console.log("Encerrando deleção...");
            return;
        }
    } else {
        console. log("Erro: Baralho não encontrado!");
        return;
    }
}

export default deletarBaralho;