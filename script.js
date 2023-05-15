const devName = document.getElementById('dev-name');
const modal = new bootstrap.Modal(document.getElementById('notify-modal'));
const modalLabel = document.getElementById('modal-label');
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

window.onload = async () => {
    const devNameChars = ['T', 'a', 's', 'e', 'e', 'r', ' ', 'A', 'h', 'm', 'a', 'd', ' ', '.'];
    for (let i = 0; i < devNameChars.length; i++) {
       typeWrite(devNameChars, i);
       await sleep(350);
    }

    playFullStopAnimation();
};

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time || 1000);
    });
}

function typeWrite(arr, index) {
    devName.innerHTML = devName.innerHTML + arr[index];
}

function playFullStopAnimation() {
    setInterval(() => {
        const len = devName.innerHTML.length;
        const fullStop = devName.innerHTML[len - 1];
        if (fullStop === '.') {
            devName.innerHTML = devName.innerHTML.slice(0, len - 1);
        } else {
            devName.innerHTML = devName.innerHTML + ' ' + '.';
        }
    }, 500);
}

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