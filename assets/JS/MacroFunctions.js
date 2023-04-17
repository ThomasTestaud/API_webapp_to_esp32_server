class MacroFunction {

    constructor() {
        this.getContentToPHP();
        this.getText();
    }

    getContentToPHP() {
        function getContent() {
            document.getElementById("textarea").value = document.getElementById("text-box").innerHTML;
        }
        window.addEventListener('keypress', function () {
            getContent();
        })
        window.addEventListener('click', function () {
            getContent();
        })
    }

    getText() {
        let btnCopyClip = document.querySelector('#copyClip');
        btnCopyClip.onclick = function () {
            let textBox = document.getElementById("text-box");
            let text = textBox.textContent;
            alert("Copied the text: " + text);
        }
    }

}

export default MacroFunction;