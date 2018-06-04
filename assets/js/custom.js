// Custom scripts

function rougeVert() {
  var span = document.getElementsByTagName('span');

  for ( var i=0 ; i < span.length; i++ ){
     // span[i].style.color = "pink";
     // span[i].style.padding = '0.5em';
     if (/\bNon\b/i.test(span[i].innerHTML)) {
         span[i].style.color= 'red';
       } else if (/\bOui\b/i.test(span[i].innerHTML)) {
         span[i].style.color= 'green';
       } else if (/\u00C0\s\bvos\b\s\brisques\b/i.test(span[i].innerHTML)){
         span[i].style.color= 'orange';
       }
  }
}
