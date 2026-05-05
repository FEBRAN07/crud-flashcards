import baralhos from './baralhos.js';

function listarBaralhos() {
    baralhos.forEach((baralho) => {
        console.log(
            `\n======\nId do baralho: ${baralho.id}\tTítulo do baralho: ${baralho.titulo}`
        );
    });
    console.log('======');
}

export default listarBaralhos;
