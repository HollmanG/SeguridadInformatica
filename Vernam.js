const alfabeto = {
    '0': '000000',
    '1': '000001',
    '2': '000010',
    '3': '000011',
    '4': '000100',
    '5': '000101',
    '6': '000110',
    '7': '000111',
    '8': '001000',
    '9': '001001',
    'A': '001010',
    'B': '001011',
    'C': '001100',
    'D': '001101',
    'E': '001110',
    'F': '001111',
    'G': '010000',
    'H': '010001',
    'I': '010010',
    'J': '010011',
    'K': '010100',
    'L': '010101',
    'M': '010110',
    'N': '010111',
    'Ñ': '011000',
    'O': '011001',
    'P': '011010',
    'Q': '011011',
    'R': '011100',
    'S': '011101',
    'T': '011110',
    'U': '011111',
    'V': '100000',
    'W': '100001',
    'X': '100010',
    'Y': '100011',
    'Z': '100100',
    'a': '100101',
    'b': '100110',
    'c': '100111',
    'd': '101000',
    'e': '101001',
    'f': '101010',
    'g': '101011',
    'h': '101100',
    'i': '101101',
    'j': '101110',
    'k': '101111',
    'l': '110000',
    'm': '110001',
    'n': '110010',
    'ñ': '110011',
    'o': '110100',
    'p': '110101',
    'q': '110110',
    'r': '110111',
    's': '111000',
    't': '111001',
    'u': '111010',
    'v': '111011',
    'w': '111100',
    'x': '111101',
    'y': '111110',
    'z': '111111',
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function vernam(m, k) {

    const letrasMensaje = m.split('');
    const letrasClave = k.split('');

    let mensaje = [];
    let binario;
    for (let i = 0; i < letrasMensaje.length; i++) {

        binario = '';
        let letraMensajeBinario = alfabeto[letrasMensaje[i]].split('');
        let letraClaveBinario = alfabeto[letrasClave[i]].split('');

        for (let j = 0; j < 6; j++) {

            if(letraMensajeBinario[j] === letraClaveBinario[j]) {
                binario = binario + '0';
            } else {
                binario = binario + '1';
            }
            
        }

        mensaje[i] = getKeyByValue(alfabeto, binario);

    }

    return mensaje.join('');

}

const m = 'Alemania';
const k = '1pQw3F2m';

const m1 = 'st9CHYG';
const k1 = 'oK6vQB9';

const mp = 'HollmanEstebanGonzalezSuarez';
const kp = 'EstaEsUnaClavePersonalParaMi';

const cif = vernam(mp, kp);
console.log(cif);
console.log(vernam(cif, kp));