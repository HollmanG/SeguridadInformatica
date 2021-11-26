const nAlpha = (alpha) => {
    let obj = {};
    alpha.split("").forEach(function(el, i) {
        obj[el] = i;
    });
    return obj;
}

const count = (str) => {
    let obj = {};
    str.split("").forEach(function(el) {
      obj[el] = obj[el] ? ++obj[el] : 1;
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
    let b1 = [];
    if(!b) {
        const mostRepeatedList = count(c);
        const mostRepeatedListSorted = Object.keys(mostRepeatedList).sort(function(a,b){return mostRepeatedList[b]-mostRepeatedList[a]});
        b1[0] = alfabeto[mostRepeatedListSorted[0]];
        b1[1] = alfabeto[mostRepeatedListSorted[1]];
        console.log(b1);
    }
    let m = [];
    let temp;
    if(opt == 1) {
        for (let i = 0; i < letras.length; i++) {
            temp = (alfabeto[letras[i]] + b) % n;
            m[i] = getKeyByValue(alfabeto, temp);
        }
        m = m.join("");
    } else {
        for (let j = 0; j < 2; j++) {
            m[j] = [];
            for (let i = 0; i < letras.length; i++) {
                temp = (alfabeto[letras[i]] + n - b1[j]) % n;
                m[j][i] = getKeyByValue(alfabeto, temp);
            }
            m[j] = m[j].join("");
        }
    } 
    return m;
}

const c1 = 'ÑDVHJXULGDGLPIRUODWLFDRVHJXULGDGGHWHFPRÑRJLDVGHÑDLPIRUODFLRPHVHÑDUHDGHÑDLPIRUODWLFDTXHVHHPIRFDHPÑDSURWHFFLRPGHÑDLPIUDHVWUXFWXU';
const alpha = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const alfabeto = nAlpha(alpha); 
console.log(desplazamientoPuro(0, c1, alfabeto));

const c2 = 'QBCYI QIQLD ZFMUD DFCUQ TCYIQ BQYCG UIVUS SYFDT UJLMY TQJYD FBQGU IVUSS YFDTU JLZLM UDKLT KQWFI U';
console.log(desplazamientoPuro(0, c2, alfabeto));

const m = 'Los hombres jovenes quieren ser fieles y no lo consiguen los hombres viejos quieren ser infieles y no lo logran';
const mCif = desplazamientoPuro(1, m, alfabeto, 15);
const mDescif = desplazamientoPuro(0, mCif, alfabeto);
console.log(mCif);
console.log(mDescif);