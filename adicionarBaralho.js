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
        //SE O NOME DO BARALHO FOR REPETIDO
        //função de busca recebe o nome novo. 
        // se achar, retorno negativo. se nao, push

        let ultimoId = baralhos[len - 1].id;
        baralhos.push({
            id: ultimoId + 1,
            titulo: titulo,
        });
        console.log('Baralho adicionado com sucesso!');
    }
}

export default adicionarBaralho;
