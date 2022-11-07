const palindrom = (word) => {
    let hasil = '';
    if (typeof word != 'string') {
        console.log('Input harus string');
    } else if (word.length <= 2) {
        console.log('Tipe data harus lebih dari 2 karakter');
    } else {
        let [...newArr] = word;
        for (let d = newArr.length-1; d >= 0; d--) {
            hasil += newArr[d];
        }
        (hasil == word) ? console.log('Teks Palindrom') : console.log('Teks Bukan Palindrom');
    }
    return;
}

    palindrom('katak');