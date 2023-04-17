
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