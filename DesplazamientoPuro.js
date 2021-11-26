const nAlpha = (alpha) => {
    let obj = {};
    alpha.split("").forEach(function(el, i) {
        obj[el] = i;
    });
    return obj;
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

const desplazamientoPuro = (opt, c, alfabeto, b = null, n = 27) => {
    c = c.replace(/ /g, "");
    c = c.toUpperCase();
    const letras = c.split("");
    let m = [];
    let temp;
    if(opt == 1) {
        for (let i = 0; i < letras.length; i++) {
            temp = (alfabeto[letras[i]] + b) % n;
            m[i] = getKeyByValue(alfabeto, temp);
        }
        m = m.join("");
    } else if(b) {
        for (let i = 0; i < letras.length; i++) {
            temp = (alfabeto[letras[i]] + n - b) % n;
            m[i] = getKeyByValue(alfabeto, temp);
        }
        m = m.join("");
    } else {
        for (let j = 1; j < 27; j++) {
            m[j-1] = [];
            for (let i = 0; i < letras.length; i++) {
                temp = (alfabeto[letras[i]] + n - j) % n;
                m[j-1][i] = getKeyByValue(alfabeto, temp);
            }
            m[j-1] = m[j-1].join("");
        }
    }
    return m;
}

const c1 = 'ÑDVHJXULGDGLPIRUODWLFDRVHJXULGDGGHWHFPRÑRJLDVGHÑDLPIRUODFLRPHVHÑDUHDGHÑDLPIRUODWLFDTXHVHHPIRFDHPÑDSURWHFFLRPGHÑDLPIUDHVWUXFWXU';
const alpha = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const alfabeto = nAlpha(alpha); 
// console.log(desplazamientoPuro(0, c1, alfabeto));

const c2 = 'QBCYI QIQLD ZFMUD DFCUQ TCYIQ BQYCG UIVUS SYFDT UJLMY TQJYD FBQGU IVUSS YFDTU JLZLM UDKLT KQWFI U';
console.log(desplazamientoPuro(0, c2, alfabeto, 17));

const m = 'Los hombres jovenes quieren ser fieles y no lo consiguen los hombres viejos quieren ser infieles y no lo logran';
// const mCif = desplazamientoPuro(1, m, alfabeto, 15);
// const mDescif = desplazamientoPuro(0, mCif, alfabeto, 15);
// console.log(mCif);
// console.log(mDescif);
