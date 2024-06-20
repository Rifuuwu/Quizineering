document.addEventListener('DOMContentLoaded', function() {
    var nomor = parseInt(localStorage.getItem('nomor'))
    const isiJelas = document.getElementById('penjelasan')

    function loadPenjelasan(index){
        fetch('jawab.json')
        .then(response => response.json())
        .then(explanation => {
            isiJelas.textContent = explanation[index].penjelasan;
        });
    }
    loadPenjelasan(nomor-1);
});
function nextquestion(){
    var nomor = parseInt(localStorage.getItem('nomor'))
    nomor = nomor + 1;
    if(nomor == 11){
        window.location.href='../score.html';
    }else{
        window.location.href='p'+nomor+'.html';
    }
}

