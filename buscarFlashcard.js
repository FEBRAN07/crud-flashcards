import flashcards from './flashcard.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function buscarFlashcard() {
    console.log("Como deseja buscar?");
    console.log("1. Por texto na pergunta");
    console.log("2. Por ID do Baralho");
    const opcao = prompt("Escolha uma opção: ");

    if (opcao === '1') {
        const termo = prompt('Digite o termo de busca: ').toLowerCase().trim();
        // Localiza flashcards que contenham a pergunta 
        const busca = flashcards.filter(f => f.pergunta.toLowerCase().includes(termo));
        exibirResultados(busca);
    } else if (opcao === '2') {
        const idB = parseInt(prompt('Digite o ID do baralho: '));
        // Filtra baseado no idBaralho 
        const busca = flashcards.filter(f => f.idBaralho === idB);
        exibirResultados(busca);
    } else {
        console.log("Opção inválida.");
    }
}

function exibirResultados(lista) {
    if (lista.length > 0) {
        lista.forEach(f => {
            console.log(`\nID: ${f.id} (Baralho: ${f.idBaralho})`);
            console.log(`P: ${f.pergunta}`);
            console.log(`R: ${f.resposta}`);
        });
    } else {
        console.log('Nenhum flashcard encontrado.');
    }
}

export default buscarFlashcard;