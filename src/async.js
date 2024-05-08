const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
    } catch(e) {
        reject('Deu erro na iteração dos números')
    }
})


async function execucaoPrincipal() {
    console.log("inicio")
    
    await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    
    console.log("fim")
}

execucaoPrincipal()