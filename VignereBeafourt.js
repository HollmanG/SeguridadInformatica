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

const vignere_beafourt = (opt, c, alfabeto, clave, n = 27) => {
    c = c.replace(/ /g, "");
    c = c.toUpperCase();
    clave = clave.replace(/ /g, "");
    clave = clave.toUpperCase();
    const letras = c.split("");
    let claveTemp = '';
    for (let i = 0; i <= (letras.length/5); i++) {
        claveTemp = clave + claveTemp;
    }
    k = claveTemp.split("");
    let m = [];
    let temp;
    if(opt == 'encriptar vignere') {
        for (let i = 0; i < letras.length; i++) {
            temp = (alfabeto[letras[i]] + alfabeto[k[i]]) % n;
            m[i] = getKeyByValue(alfabeto, temp);
        }
        m = m.join("");
    } else if(opt=='desencriptar vignere'){
        for (let i = 0; i < letras.length; i++) {
            temp = (alfabeto[letras[i]] - alfabeto[k[i]] + n) % n;
            m[i] = getKeyByValue(alfabeto, temp);
        }
        m = m.join("");
    } else if(opt=='beafourt'){
        for (let i = 0; i < letras.length; i++) {
            temp = (alfabeto[k[i]] - alfabeto[letras[i]] + n) % n;
            m[i] = getKeyByValue(alfabeto, temp);
        }
        m = m.join("");
    } else if(opt == 'vignere auto enc') {
        const auto = clave + c;
        k = auto.split("");
        for (let i = 0; i < letras.length; i++) {
            temp = (alfabeto[letras[i]] + alfabeto[k[i]]) % n;
            m[i] = getKeyByValue(alfabeto, temp);
        }
        m = m.join("");
    } else if(opt=='vignere auto des'){
        k = clave.split("");
        for (let i = 0; i < letras.length; i++) {
            temp = (alfabeto[letras[i]] - alfabeto[k[i]] + n) % n;
            m[i] = getKeyByValue(alfabeto, temp);
            k.push(m[i]);
        }
        m = m.join("");
    }
    return m;
}

const alpha = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const alfabeto = nAlpha(alpha);
//Taller A
// const c1= 'SNXSX GRPPF RWTSP OFSKW AICPW TMCPB RRVNA ZEJGR EFPFN QREYX ETQVO ITUJB LASLQ HDEFR WXHDD AMMPN RREDM CWSNP NKUTB PÑOUG WODPD PPFHR YTMNQ SEMZI FFZGE RMOZG KASMU RTGDM IONDE ÑOURN RVYCP NP';
// const clave1 = 'INFORMA';
// const c2 = 'TSPDX TCPHM UZPUR SQNLG HOIMI DRUAA PGBÑZ EPPQL OUBLT DSIKP BIUZV YKOMI KEXEQ AADEE CYPDÑ TIKHT IOGAR IFCDQ VAÑTS KTWGO JQREC LEBEJ EEPBF RZICD YBSDV MPCZQ ZPOWG AQMIN CLFIL EOTEI QQTWE NCQLA TEUAD DÑDEZ MSDSA MLSKZ';
// const clave2 = 'ESTUDIO';
// const c3 = 'Miro a mi alrededor veo que la tecnologia ha sobrepasado nuestra humanidad espero que algun dia nuestra humanidad sobrepase la tecnologia';
// const clave3 = 'TECNOLOGIA';
// console.log(vignere_beafourt('vignere auto enc', c3, alfabeto, clave3));

// const asd = 'FMTBOWWGSRPLVRODDEZIYHODIVXQDBJKSAAEUBPCSVISHDHBVVWJRSHXANHMVTUEZKPRBYXEDOYKQUWQHYEDZMNKCMNHMVTUSVVDECIVEÑSIFTQELHKSA'
// console.log(vignere_beafourt('vignere auto des', asd, alfabeto, clave3));
//Taller B
const c1 = 'HRELC PWKAS QRZLXN SWRZKH AHSLZITA ZVNVWO KYLCLÑIW YQEYGJ ÑQHBZX XWYGP IOBCDW RESGAVL NZAMNH YBVJDLWI PKAKEHA AHGONHR PNMXH DSLVÑA ETTAIAJG AQCSAM PTAEWSW KSDPNPT DTHBVSO ZWTSZYT PYIWHHK WKQCRM OBHSPU HFETHMR ÑZPSRPB PBYAWDZPTFLJWLÑYAALCLOHRDJEXSNR';
const clave1 = 'BELLEZA';
const c2 = 'FAOOL VDSPI MJXHS ECAVW AOXNX OSVAU USXEM JWAIW OAMJS RUJÑG SVMYW WXIQN XOYGI YNWZA YSMXO IUAMÑ SRUJF PEPYS MHYNH JYMGX OMVWG ITJDH YQOKM WGGAA WJSQV J';
const clave2 = 'PASION';
const c3 = 'La Informatica Forense es una ciencia que mediante la aplicacion de una metodologia estructurada de investigacion se encarga de analizar diferentes medios de almacenamiento de datos informaticos con el fin de encontrar informacion que pudiera ser util en un proceso de investigacion o auditoria';
const clave3 = 'Forense';
console.log(vignere_beafourt('beafourt', c1, alfabeto, clave1));

const asd = 'POZQRHVWABUHOWARXUUEJHMQNUMIFWUASCIYGLIQHXPODIPXBGLCIEXLGUOIAQWSXBLAKBOHHEGAKTYKTUUFXCEVHSWMÑNXMHGAKEOKOEYEHQCNRQICERPIPMQEEWMXPVHUIWVPEÑTOUHQAWTEOXBDPLEGIHLQIOLASBUHDKÑOGMNTAORQIXHWZWVEEKBRIJMRKUTBIGERCRUUMEIYUCXZLWQMHJZZGQNBSVWOZWHWMÑNXMHGWGUFPIBGIU';
// console.log(vignere_beafourt('vignere auto des', asd, alfabeto, clave3));