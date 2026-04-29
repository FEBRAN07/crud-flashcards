import flashcards from './flashcard.js';
import baralhos from './baralhos.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function adicionarFlashcard() {
    while (true) {
        let pergunta = prompt('Digite a pergunta para o flashcard: ').trim();
        if (pergunta === '') {
            console.log('ERRO: Digite uma pergunta!');
            continue;
        }
        let resposta = prompt('Digite a resposta para o flashcard: ').trim();
        if (resposta === '') {
            console.log('ERRO: Digite uma resposta!');
            continue;
        }
        let idBaralho = parseInt(
            prompt(
                'Digite o Id do baralho a qual será adicionado o flashcard: '
            ).trim()
        );
        let flag = false;
        baralhos.forEach((baralho) => {
            if (baralho.id === idBaralho) {
                flag = true;
            }
        });
        if (!flag) {
            console.log('ERRO: Digite um Id do baralho válido!');
            continue;
        }
        let len = flashcards.length;
        let ultimoId = flashcards[len - 1].id;
        flashcards.push({
            id: ultimoId + 1,
            pergunta: pergunta,
            resposta: resposta,
            idBaralho: idBaralho,
        });
        console.log('Flashcard adicionado com sucesso!');
        break;
    }
}

export default adicionarFlashcard;
