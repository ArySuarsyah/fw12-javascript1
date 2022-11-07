let teks =''
let hasil ;
let result = '';
const ubahHuruf = (word) => {
    if(typeof word != 'string') {
        console.log('Input harus string')
    } else if (word.length <= 2) { 
        console.log('tipe data harus lebih dari 2 karakter');
    } else {
        let [...hasil] = word;
        for(let i = 0; i < hasil.length; i++) {
            if(hasil[i] == 'a') {
                hasil[i] = 'o';
            }
        }
        for (let i = 0; i < hasil.length; i++) {
            result += hasil[i];
            if (word == result ) {
                console.log('Huruf tidak ada');
            }
        }
        console.log(result)
    }
}


ubahHuruf('jakarta');