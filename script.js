const typewrite = document.getElementById('typewrite');
const modal = new bootstrap.Modal(document.getElementById('notify-modal'));
const modalLabel = document.getElementById('modal-label');
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const typeWriter = new Typewriter(typewrite, {
    loop: true,
    delay: 100
});

window.onload = async () => {
    const toWrite = ['Taseer Ahmad .', 'a Software Engineer .',
                     ' Problem Solver .', ' Mobile Developer .', 
                     ' Collaborater .', ' Coffee Lover .', 
                     ' Game Night Aficionado .', ' Geek .', 
                     ' Lifelong Leaner .', ' Friend ♥ .'];
    typeWriter
        .pauseFor(700)
        .typeString(toWrite[0])
        .pauseFor(2000)
        .deleteChars(toWrite[0].length)
        .typeString(toWrite[1])
        .pauseFor(400)
        .deleteChars(toWrite[1].length - 1)
        .typeString(toWrite[2])
        .pauseFor(400)
        .deleteChars(toWrite[2].length)
        .typeString(toWrite[3])
        .pauseFor(400)
        .deleteChars(toWrite[3].length)
        .typeString(toWrite[4])
        .pauseFor(400)
        .deleteChars(toWrite[4].length)
        .typeString(toWrite[5])
        .pauseFor(400)
        .deleteChars(toWrite[5].length)
        .typeString(toWrite[6])
        .pauseFor(400)
        .deleteChars(toWrite[6].length)
        .typeString(toWrite[7])
        .pauseFor(400)
        .deleteChars(toWrite[7].length)
        .typeString(toWrite[8])
        .pauseFor(400)
        .deleteChars(toWrite[8].length)
        .typeString(toWrite[9])
        .pauseFor(400)
        .deleteChars(toWrite[9].length + 1)
        .pauseFor(1000)
        .start();
};

function copyEmailAddress() {
    copyToClipboard('taseer.ahmadd@gmail.com');
    modalLabel.innerHTML = '✔ Email copied!';
    modal.show();
}

function copyPhoneNumber() {
    copyToClipboard('+92(0)3034172052');
    modalLabel.innerHTML = '✔ Phone number copied!';
    modal.show();
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}