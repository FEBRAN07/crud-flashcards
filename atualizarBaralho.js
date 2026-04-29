import baralhos from './baralhos.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function atualizarBaralho(baralhoId) {

    const indice = baralhos.findIndex(baralho => baralho.id === baralhoId);

    if (indice === -1) {
        console. log("Erro: Baralho não encontrado!");
        return;
    }

    baralhos[indice].titulo = prompt("Digite o título atualizado do baralho: ");
    return;
}
export default atualizarBaralho;
