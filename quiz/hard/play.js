function cekJawaban(nomor, jawaban) {
  switch (nomor) {
    case 1:
      if (jawaban == 1) {
        return true;
      }
      break;
    case 2:
      if (jawaban == 2) {
        return true;
      }
      break;
    case 3:
      if (jawaban == 0) {
        return true;
      }
      break;
    case 4:
      if (jawaban == 1) {
        return true;
      }
      break;
    case 5:
      if (jawaban == 3) {
        return true;
      }
      break;
    case 6:
      if (jawaban == 2) {
        return true;
      }
      break;
    case 7:
      if (jawaban == 0) {
        return true;
      }
      break;
    case 8:
      if (jawaban == 2) {
        return true;
      }
      break;
    case 9:
      if (jawaban == 0){
        return true;
      }
      break;
    case 10:
      if (jawaban == 3){
        return true;
      }
      break;
    default:
      return false;
  }
}

document.getElementById('pertanyaan').onsubmit = function(event){
  event.preventDefault();
  var jawaban = parseInt(document.querySelector('input[name="ops"]:checked').value);
  var no = parseInt(document.getElementById('nomor').value); // Konversi nomor ke integer
  localStorage.setItem('nomor', no);
  var currentScore = parseInt(localStorage.getItem('score')) || 0;
  if(cekJawaban(no, jawaban) == true){ // Pastikan no juga sudah dalam bentuk integer
    localStorage.setItem('score', currentScore + 1);
    window.location.href='penjelasanbenar.html';
  }
  else{
    window.location.href='penjelasansalah.html';
  }
}