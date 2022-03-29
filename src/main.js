let upper = document.getElementById("upper-case");

upper.addEventListener("click", function () {
    let words = document.querySelector("textarea").value.trim();
    document.querySelector("textarea").value = words.toUpperCase();
});

let lower = document.getElementById("lower-case");

lower.addEventListener("click", function () {
    let words = document.querySelector("textarea").value.trim();
    document.querySelector("textarea").value = words.toLowerCase();
});

let proper = document.getElementById("proper-case");

proper.addEventListener("click", function () {
    let words = document.querySelector("textarea").value.trim().toLowerCase();
    let arr = words.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
    document.querySelector("textarea").value = arr.join(" ");
});

let sentence = document.getElementById("sentence-case");

sentence.addEventListener("click", function () {
    let words = document.querySelector("textarea").value.trim().toLowerCase();
    let arr = words.split(". ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
    document.querySelector("textarea").value = arr.join(". ");
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

let saveFile = document.getElementById("save-text-file");

saveFile.addEventListener("click", function () {
    let filename = "text.txt";
    let words = document.querySelector("textarea").value.trim();
    download(filename, words);
});
