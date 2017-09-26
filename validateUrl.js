let url = 'http://www.google.com.br/mail/user=fulano';
let regex = /^([http]+)?:\/\/?([www]{3}).?([a-z]+.?[a-z]+)(.?[a-z]*)\/*([a-z]*)\/*([a-z=]*)/g;

let [, protocolo, host, dominio, regiao, path, parameters] = regex.exec(url);

console.log(`protocolo: ${protocolo}`);
console.log(`host: ${host}`);
console.log(`dominio: ${dominio}`);
if (regiao) console.log(`regiao: ${regiao}`);
if (path) console.log(`path: ${path}`);
if (parameters) console.log(`parametros: ${parameters}`);
