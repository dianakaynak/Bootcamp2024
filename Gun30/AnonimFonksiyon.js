//İSMİ OLAN FONKSİYON

function gulucukle(str) {
    return str + ":)))"
}
//CALLBACK FUNCTION
function yazdir(metin, donusturucu) {
    metin = donusturucu(metin)
    console.log(metin)
}

yazdir("sakin olun", gulucukle);


//ANONİM FONKSİYONU DEĞİŞKENDE SAKLAYARAK

const buyutucu = function (x) {
    return x.toLocaleUpperCase();
}

yazdir("emirkoo", buyutucu);


//ANONİM FONKSİYONLA

yazdir("me before you", function (str) {
    //split diziye dönüştürüyo --join ise arasına ne koymak istiyorsan belirterek birleştirebiliyorsun
    return str.split("").join(" ");
});


//ANONİM ARROW FUNCTION İLE

yazdir("Bugun Emir'in okulunda toplantı var!!", x => x.length);


function uckere(str) {
    return str.repeat(3);
}

yazdir("Yaşasınnnn", uckere)

yazdir("Oley! ", x => x.repeat(3))

// sonraki derste callback fonksiyonlara sık sık rastlayacağız

// örnek:

const unluler = ["drake", "rihanna", "zayn", "adele"];

const dizi2 = unluler.map(x => x.toUpperCase());

console.log(unluler);
console.log(dizi2)