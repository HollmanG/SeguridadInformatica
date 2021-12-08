const arrayColumn = (arr, n) => arr.map(x => x[n]);
const getIndexOfK = (arr, k) => {
    for (var i = 0; i < arr.length; i++) {
      var index = arr[i].indexOf(k);
      if (index > -1) {
        return [i, index];
      }
    }
}

const playfair = (opt,m, k, alpha) => {
    const letras = alpha.split('');
    m = m.replace(/ /g, "");
    m = m.toUpperCase();
    let alfabeto = [];
    const letrasClave = k.split('');
    const letrasMensaje = m.split('');
    let l = 0;
    let x = 0;
    let i = 0;
    let z = 0;
    let matriz = [];
    while (i<25) {
        if(!alfabeto.includes(letrasClave[l]) & letrasClave.length>l){
            alfabeto[i] = letrasClave[l];
            i++;
        } else {
            if(!alfabeto.includes(letras[x])){
                alfabeto[i] = letras[x];
                i++;
            }
            x++;
        }
        l++;
    }
    for (let j = 0; j < 5; j++) {
        matriz[j] = [];
        for (let y = 0; y < 5; y++) {
            matriz[j][y] = alfabeto[z];
            z++;
        }
    }
    let mensaje = [];
    if(opt == 0){
        i = 0;
        l = 0;
        let parejas = [];
        while(letrasMensaje.length>l) {
            if(letrasMensaje[l+1] == undefined){
                parejas[i] = letrasMensaje[l] + 'X';
                l += 1;
            }
            else if(letrasMensaje[l] != letrasMensaje[l+1]) {
                parejas[i] = letrasMensaje[l] + letrasMensaje[l+1];
                l += 2;
            } else {
                parejas[i] = letrasMensaje[l] + 'X';
                l += 1;
            }
            i++;
        }
        let parLetras;
        let primeraLetra;
        let segundaLetra;
        let col;
        for (let index = 0; index < parejas.length; index++) {
            parLetras = parejas[index].split('');
            primeraLetra = parLetras[0];
            segundaLetra = parLetras[1];
            let posicionesP;
            let posicionesS;
            let temp;
            for (let ind = 0; ind < 5; ind++) {
                col = arrayColumn(matriz, ind);
                if(matriz[ind].includes(primeraLetra) & matriz[ind].includes(segundaLetra)) {
                    if(matriz[ind].indexOf(primeraLetra)==4) {
                        mensaje[index] = matriz[ind][0];
                    } else {
                        mensaje[index] = matriz[ind][matriz[ind].indexOf(primeraLetra)+1];
                    }
                    if(matriz[ind].indexOf(segundaLetra)==4) {
                        mensaje[index] = mensaje[index] + matriz[ind][0];
                    } else {
                        mensaje[index] = mensaje[index] + matriz[ind][matriz[ind].indexOf(segundaLetra)+1];
                    }
                } else if(col.includes(primeraLetra) & col.includes(segundaLetra)) {
                    if(col.indexOf(primeraLetra)==4) {
                        mensaje[index] = col[0];
                    } else {
                        mensaje[index] = col[col.indexOf(primeraLetra)+1];
                    }
                    if(col.indexOf(segundaLetra)==4) {
                        mensaje[index] = mensaje[index] + col[0];
                    } else {
                        mensaje[index] = mensaje[index] + col[col.indexOf(segundaLetra)+1];
                    }
                } 
            }
            if(!mensaje[index]) {
                posicionesP = getIndexOfK(matriz,primeraLetra);
                posicionesS = getIndexOfK(matriz,segundaLetra);
                temp = posicionesP[1];
                posicionesP[1] = posicionesS[1];
                posicionesS[1] = temp;
                mensaje[index] = matriz[posicionesP[0]][posicionesP[1]] + matriz[posicionesS[0]][posicionesS[1]];
            }
        }
        
    } else {
        i = 0;
        l = 0;
        let parejas = [];
        while(letrasMensaje.length>l) {
            if(letrasMensaje[l+1] == undefined){
                parejas[i] = letrasMensaje[l] + 'X';
                l += 1;
            }
            else if(letrasMensaje[l] != letrasMensaje[l+1]) {
                parejas[i] = letrasMensaje[l] + letrasMensaje[l+1];
                l += 2;
            } else {
                parejas[i] = letrasMensaje[l] + 'X';
                l += 1;
            }
            i++;
        }
        let parLetras;
        let primeraLetra;
        let segundaLetra;
        let col;
        for (let index = 0; index < parejas.length; index++) {
            parLetras = parejas[index].split('');
            primeraLetra = parLetras[0];
            segundaLetra = parLetras[1];
            let posicionesP;
            let posicionesS;
            let temp;
            for (let ind = 0; ind < 5; ind++) {
                col = arrayColumn(matriz, ind);
                if(matriz[ind].includes(primeraLetra) & matriz[ind].includes(segundaLetra)) {
                    if(matriz[ind].indexOf(primeraLetra)==0) {
                        mensaje[index] = matriz[ind][4];
                    } else {
                        mensaje[index] = matriz[ind][matriz[ind].indexOf(primeraLetra)-1];
                    }
                    if(matriz[ind].indexOf(segundaLetra)==0) {
                        mensaje[index] = mensaje[index] + matriz[ind][4];
                    } else {
                        mensaje[index] = mensaje[index] + matriz[ind][matriz[ind].indexOf(segundaLetra)-1];
                    }
                } else if(col.includes(primeraLetra) & col.includes(segundaLetra)) {
                    if(col.indexOf(primeraLetra)==0) {
                        mensaje[index] = col[4];
                    } else {
                        mensaje[index] = col[col.indexOf(primeraLetra)-1];
                    }
                    if(col.indexOf(segundaLetra)==0) {
                        mensaje[index] = mensaje[index] + col[4];
                    } else {
                        mensaje[index] = mensaje[index] + col[col.indexOf(segundaLetra)-1];
                    }
                } 
            }
            if(!mensaje[index]) {
                posicionesP = getIndexOfK(matriz,primeraLetra);
                posicionesS = getIndexOfK(matriz,segundaLetra);
                temp = posicionesP[1];
                posicionesP[1] = posicionesS[1];
                posicionesS[1] = temp;
                mensaje[index] = matriz[posicionesP[0]][posicionesP[1]] + matriz[posicionesS[0]][posicionesS[1]];
            }
        }
    }
    
    return mensaje.join('');

    
}

const alpha = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
const k = 'BEATLES';
const m = 'WITH A LITTLE HELP FROM MY FRIENDS';

// console.log(playfair(0,m,k,alpha));

const alpha1 = 'ABCDEFGHIJLMNOPQRSTUVWXYZ';
const m1 = 'EC TB AZ EN WB JH TX AB BU VC LO JT PM IL';
// console.log(playfair(1,m1,k,alpha1));

const alpha2 = 'ABCDEFGHIJLMNOPQRSTUVWXYZ';
const m2 = "Las sombras llaman a la puerta del castillo hoy";
const k2 = "MIEDO";
// console.log(playfair(0,m2,k2,alpha2));
