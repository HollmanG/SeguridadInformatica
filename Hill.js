
const math = require('mathjs');
const adjunto = require('./inverse');

function multiply(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0;             // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    return m;
  }

const transpose = (arr) => {
    return Object.keys(arr[0]).map(function (c) {
        return arr.map(function (r) {
            return r[c];
        });
    });
}

const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}

const nAlpha = (alpha) => {
    let obj = {};
    alpha.split("").forEach(function(el, i) {
        obj[el] = i;
    });
    return obj;
}

const hill = (opt, m, k, n, alfabeto) => {

    m = m.replace(/ /g, "");
    m = m.toUpperCase();
    const letrasMensaje = m.split('');

    let matriz = [];
    matriz[0] = [];
    matriz[1] = [];
    let j = 0;
    for (let i = 0; i < letrasMensaje.length/2; i++) {
        if(!letrasMensaje[j+1]) {
            matriz[0][i] = alfabeto[letrasMensaje[j]];
            matriz[1][i] = alfabeto['X'];
        } else {
            matriz[0][i] = alfabeto[letrasMensaje[j]];
            matriz[1][i] = alfabeto[letrasMensaje[j+1]];
        }
        j = j+2;
    }

    console.log(matriz);
    if(opt == 0) {
        const adj = adjunto(2,k);
        const mod = adj.map(x=>x.map(a => (a +n)%n));
        const det = (math.det(k) + n) % n;
        const detinv = math.xgcd(det,n)['_data'][1];
        k = mod.map(x=>x.map(a => (a*detinv)%n));
    }

    const multiplicacion = (multiply(k, matriz));

    const mod = multiplicacion.map(x=>x.map(a => (a)%n));

    const msg = mod.map(x=>x.map(a=>getKeyByValue(alfabeto, a)));

    const mensaje = transpose(msg).flat().join('');

    return mensaje;

}

const alpha = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const alpha1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alfabeto = nAlpha(alpha);
const alfabeto1 = nAlpha(alpha1);

const m = 'SUPER BOWL';

const k = [[5, 11], [8, 15]];
const m1 = 'KPTMWÑUQ';
console.log(hill(0, m1, k, 27, alfabeto));


const k1 = [[3, 3], [2, 5]];
const m2 = 'HIAT';
console.log(hill(0, m2, k1, 26, alfabeto1));

