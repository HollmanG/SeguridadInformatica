
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

const count = (str) => {
    let obj = {};
    str.split("").forEach(function(el) {
      obj[el] = obj[el] ? ++obj[el] : 1;
    });
    return obj;
}

function Euclid_gcd(a, b) {
    const suma = b;
    a = +a;
    b = +b;
    if (a !== a || b !== b) {
        return [NaN, NaN, NaN];
    }

    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
        return [Infinity, Infinity, Infinity];
    }
    // Checks if a or b are decimals
    if ((a % 1 !== 0) || (b % 1 !== 0)) {
        return false;
    }
    var signX = (a < 0) ? -1 : 1,
        signY = (b < 0) ? -1 : 1,
        x = 0,
        y = 1,
        u = 1,
        v = 0,
        q, r, m, n;
    a = Math.abs(a);
    b = Math.abs(b);

    while (a !== 0) {
        q = Math.floor(b / a);
        r = b % a;
        m = x - u * q;
        n = y - v * q;
        b = a;
        a = r;
        x = u;
        y = v;
        u = m;
        v = n;
    }

    let retorno = signX * x;
    if(retorno < 0){
        retorno = retorno + suma;
    }

    return retorno;
}

const alfabeto = (alpha) => {
    let obj = {};
    alpha.split("").forEach(function(el, i) {
        obj[el] = i;
    });
    return obj;
}

const sustitucionAfin = (opt, c, repeated = 0, a = null, b = null) => {

    c = c.replace(/ /g, "");

    const mostRepeatedList = count(c);
    delete mostRepeatedList[ ' ' ];

    let arr = Object.values(mostRepeatedList);

    arr.sort(function(a, b) {
        return b - a;
    });

    const mostRepeated = getKeyByValue(mostRepeatedList, arr[0]);

    const secondRepeated = getKeyByValue(mostRepeatedList, arr[1]);

    let value;

    if(repeated == 0){
        value = nAlpha[mostRepeated];
    } else {
        value = nAlpha[secondRepeated];
    }

    const letras = c.split("");

    let m = [];

    if (opt==0) {
        for (let b = 1; b < 27; b++) {
            a = ( (value - b) * 7 ) % 27;
            m[b-1] = [];
            for (let i = 0; i < letras.length; i++) {
                temp = (Math.abs(nAlpha[letras[i]] - b + 27) * Euclid_gcd(a, 27)) % 27;
                m[b-1][i] = getKeyByValue(nAlpha, temp);
            }
            m[b-1] = m[b-1].join("");
            m[b-1] = m[b-1] + `- a=${a} b=${b}`;
        }
    } else {
        for (let i = 0; i < letras.length; i++) {
            temp = (a * nAlpha[letras[i]] + b) % 27;
            m[i] = getKeyByValue(nAlpha, temp);
        }
        m = m.join("");
    }

    return m;

}

const hallarAlfabeto = (alf, a, b) => {
    let alfabeto = [];
    alf = alf.split('');
    for (let i = 0; i < alf.length; i++) {
        temp = (a * nAlpha[alf[i]] + b) % 27;
        alfabeto[i] = getKeyByValue(nAlpha, temp);
    }
    alfabeto = alfabeto.join("");
    return alfabeto;
}

const c1 = 'JFWFG DSWHM HWOCA FRPQG DGWSC AGWGO KGOHK GOGWW FYCOO HZGÑF WZGKG OGWBF MFDKF SCOSC OKFWB CPQGD HGOKG GBFBI FCQOF AHDKC WHFNF OKFDK HSFPQ GZGBG HKGDQ GVCDF ÑGOCD CKFBX GYSWG GWBCP QGOQO SFNQG';
const c2 = 'RFBQH CWBÑF ZBQÑU IHBQV UVAUQ BBSAF LQIRU IÑUVB WÑUIS VUIVU SJUÑU ABÑUR IÑUSC USWBR UVCCV RFQCV RIFRB VWCSW BJIVB WBABQ SIVUL FBYJI GIAUL IVULF BYBJW CJCQU SGUSU AC';
const c3 = 'NAQÑF EKNDP NCIVU FPUAN EJUIP FCNER NFRÑF UNPLN AFPFQ TFPEI JRTÑE FPKÑI KTAPF LIKIÑ AIPÑU RCUJI PCIVU CUNER IRLNP TJIAF NEOIÑ CFLNC NLUFA TEF';

const mensaje = 'PARAESCRIBIRNOHAYQUESERCOHERENTENITENERRAZONNIDEJARDETENERLABASTACONCONTARLOQUESIENTEELALMAOUNAHISTORIAFANTASTICAQUEDELEITESUEÑOSAJENOSOTALVEZCREERLOQUENUNCAFUE';

const alpha = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

const nAlpha = alfabeto(alpha);

// console.log(sustitucionAfin(0, c2, 1));

console.log(sustitucionAfin(1, mensaje, 0, 11, 12));

const c4 = 'IOAWB UGÑGD BIÑPT DTRJW BPGOS GQGOT DGÑWD PDGAW ÑSWÑP WGOGK  POSGO STQGG OSÑWÑ GOGKZ PDZTD PDSGZ WIOWR TSÑWX GHWMW OQTOW OQTGK  TMFGS PXT'

console.log(sustitucionAfin(0, c4, 0));

const a = (-11+27)%27

console.log(a);

console.log(hallarAlfabeto(alpha, a, 23));
