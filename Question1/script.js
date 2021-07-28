function extractSentence() {
    let paragraph = document.getElementById("paragraph").value;
    let sentences = paragraph.match(/(.*?(?:\.|\?|!))(?: |$)/g);
    console.log(sentences);
    sentences.filter(words => {
        if (words.match(/\s/g).length <= 2) {
            sentences.splice(sentences.indexOf(words), 1);
        }
    })
    sentences.filter(words => {
        if (words.match(/[0-9]{3,}/g)) {
            let index = sentences.indexOf(words);
            words = words.replace(/[0-9]/g, 'X');
            sentences[index] = words;
        }
    });
    var list = document.createElement("ol");
    for (var i in sentences) {
        var elem = document.createElement("li");
        elem.innerHTML = sentences[i];
        list.appendChild(elem);
    }
    $('body').append(list);
}