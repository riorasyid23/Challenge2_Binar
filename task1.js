function changeWord(selectedText, changedText, text){
    var kalimat = text;
    kalimat = kalimat.replace(selectedText,changedText);
    return kalimat;
}
const kalimat1 = 'Kalimat ini adalah kalimat yang belum diganti'
const kalimat2 = 'aku bangun tidur langsung mandi'

console.log(changeWord('belum','telah',kalimat1));
console.log(changeWord('mandi','tidur',kalimat2));
