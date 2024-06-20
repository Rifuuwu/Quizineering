function showButtons() {
    document.getElementById('content').classList.add('blur');
    document.getElementById('tagDiv').classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
}
function hideButtons() {
    document.getElementById('content').classList.remove('blur');
    document.getElementById('tagDiv').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
}

function hard(){
    localStorage.clear();
    window.location.href='quiz/hard/p1.html';
}
function soft(){
    localStorage.clear();
    window.location.href='quiz/soft/p1.html';
}