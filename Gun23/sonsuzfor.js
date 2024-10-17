
// sonsuz döngü
let n = 1;
for (; ;) {//true anlamına geliyor
    console.log(n++);

    if (n == 200)
        break; // sonsuz döngüyü içerden kırdık
}