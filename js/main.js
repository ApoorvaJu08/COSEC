function myFunction() {
  //var x = document.getElementById('myDIV4');
  if (document.getElementById("myDIV").style.display === 'none') {
      document.getElementById("myDIV").style.display = 'block';
      document.getElementById("myDIV1").style.display = 'none';
    } else {
      document.getElementById("myDIV").style.display = 'none';
  }
}
function myFunction1() {
  //var x = document.getElementById('myDIV4');
  if (document.getElementById("myDIV1").style.display === 'none') {
      document.getElementById("myDIV1").style.display = 'block';
      document.getElementById("myDIV").style.display = 'none';
    } else {
      document.getElementById("myDIV1").style.display = 'none';
  }
}
