var SignaturePad = require('signature_pad');
var moment = require('moment');
var jsPDF = require('jspdf');

moment.locale('fr');

function signature() {

  var signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
    penColor: 'rgb(40, 60, 131)'
  });
  var saveButton = document.getElementById('save');
  var cancelButton = document.getElementById('clear');

  saveButton.addEventListener('click', function(event) {
    var sig = signaturePad.toDataURL('image/png');
    image(sig)
  });

  cancelButton.addEventListener('click', function(event) {
    signaturePad.clear();
  });

  // console.log('allo');

};

function image(sig) {

  var logo = new Image();
  logo.onload = function() {
      fairePDF(sig,logo);
  };
  logo.src = '/../../assets/img/excellence.png';
}

function fairePDF(sig,logo) {

  var titre = document.getElementById('titre').innerHTML;
  var texte = document.getElementById('textecite').innerHTML;
  var contrat = 're. contrat ' + document.getElementsByName('contrat')[0].value;
  var nom = document.getElementsByName('nom')[0].value;
  var courriel = document.getElementsByName('courriel')[0].value;
  var date = moment().format('D MMMM YYYY');

    toPDF(sig, titre, texte, nom, courriel, date, contrat, logo);

    // console.log(logo);

}

function toPDF(sig, titre, texte, nom, courriel, date, contrat, logo) {

  var doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter'
  })

  var splitTitre = doc.splitTextToSize(titre, 580);
  var splitText = doc.splitTextToSize(texte, 580);

  doc.addImage(logo, 'PNG', 100, 55, 100, 50)
  doc.setFontSize(18)
  doc.text(splitTitre, 100, 200)
  doc.setFontSize(12)
  doc.text(contrat, 100, 160)
  doc.text(date, 420, 100)
  doc.text(nom, 100, 340)
  doc.text(splitText, 100, 230)
  doc.addImage(sig, 'PNG', 100, 280, 100, 50)

  var lepdf = doc.output('datauristring');

  mail(lepdf, courriel, titre, contrat);
  // doc.save('steak.pdf')

  function mail(pdf, courriel, titre, contrat) {
    $.post("../../php/test.php", {
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        pdf: pdf,
        email: courriel,
        titre: titre,
        contrat: contrat
      }),
      dataType: 'json'
    }).done(function(reponse) {
      console.log(reponse);
      window.open("../../merci.html","_self")
    });
  }

}

$(document).ready(function() {
  signature();
});
