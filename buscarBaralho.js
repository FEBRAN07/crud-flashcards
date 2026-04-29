import baralhos from './baralhos.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function buscarBaralho() {
    const termo = prompt('Digite o nome do baralho que deseja buscar: ').toLowerCase().trim();
    
    // Filtra baralhos que contenham o termo digitado no título
    const resultados = baralhos.filter(baralho => baralho.titulo.toLowerCase().includes(termo));

    if (resultados.length > 0) {
        console.log(`\nResultados encontrados (${resultados.length}):`);
        resultados.forEach(b => {
            console.log(`ID: ${b.id} | Título: ${b.titulo}`);
        });
    } else {
        console.log('Nenhum baralho encontrado com esse nome.');
    }
}

export default buscarBaralho;