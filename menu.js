import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function menu() {
    console.log('=== FLASHCARDS ===');
    console.log(
        '0. Sair\n1. Adicionar Baralho\n2. Adicionar Flashcard\n3. Listar Baralhos\n4. Listar Flashcards\n5. Listar por Baralho\n6. Atualizar Baralho\n7. Atualizar Flashcard\n8. Remover Baralho\n9. Remover Flashcard\n10. Buscar por Pergunta\n11. Buscar por Baralho\n'
    );
    console.log('==================');
    return parseInt(prompt('Digite a operação: ').trim());
}

export default menu;
