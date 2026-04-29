import baralhos from './baralhos.js';
import flashcards from './flashcard.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function listarPorBaralho() {
    while (true) {
        let idBaralho = parseInt(prompt('Digite o id do baralho: ').trim());
        let flag = false;
        baralhos.forEach((baralho) => {
            if (baralho.id === idBaralho) {
                flag = true;
            }
        });
        if (!flag) {
            console.log('ERRO: Digite um id de baralho válido!');
            break;
        }
        console.log(`Listando flashcards com o id de baralho ${idBaralho}: `);
        flashcards.forEach((flashcard) => {
            if (flashcard.idBaralho === idBaralho) {
                console.log(
                    `\n======\nId: ${flashcard.id}\nPergunta: ${flashcard.pergunta}\tResposta: ${flashcard.resposta}`
                );
            }
        });
        console.log('======');
        break;
    }
}

//listarPorBaralho();
export default listarPorBaralho;
