import baralhos from './baralhos.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function adicionarBaralho() {
    while (true) {
        let len = baralhos.length;
        let titulo = prompt('Digite o título do baralho: ').trim();
        if (titulo === '') {
            console.log('ERRO: Digite um título válido!');
            continue;
        }
        let ultimoId = baralhos[len - 1].id;
        baralhos.push({
            id: ultimoId + 1,
            titulo: titulo,
        });
        console.log('Baralho adicionado com sucesso!');
        break;
    }
}

adicionarBaralho();
//export default adicionarBaralho;
