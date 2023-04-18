///////////AJAX CONVERT//////////////
let convertBtn = document.querySelector('#convert-btn');
let codeInput = document.querySelector('#textarea-input');
let codeOutput = document.querySelector('#textarea-output');

convertBtn.addEventListener('click', function () {
    let code = codeInput.value;
    let myRequest = new Request('index.php?route=api', {
        method: 'POST',
        body: JSON.stringify({ codeToConvert: code })
    })
    fetch(myRequest)
        .then(res => res.text())
        .then(res => {
            codeOutput.innerHTML = res;
        })
});
//////////TOOLBAR INPUT///////////
function copyToClipboard(text) {
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
let btnCopyClip = document.querySelector('#copyClip');
btnCopyClip.addEventListener('click', function () {
    let text = codeInput.value;
    copyToClipboard(text);
});

let trash1 = document.querySelector('#trash1');
trash1.addEventListener('click', function () {
    codeInput.value = "";
});

//////////TOOLBAR OUTPUT///////////

let btnCopyClip2 = document.querySelector('#copyClip2');
btnCopyClip2.addEventListener('click', function () {
    let text = codeOutput.textContent;
    copyToClipboard(text);
});

let trash2 = document.querySelector('#trash2');
trash2.addEventListener('click', function () {
    codeOutput.textContent = "";
});