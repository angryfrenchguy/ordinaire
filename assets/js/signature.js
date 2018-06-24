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
  var backdeux = document.getElementById('backdeux');

  saveButton.addEventListener('click', function(event) {
    var sig = signaturePad.toDataURL('image/png');
    image(sig)
  });

  cancelButton.addEventListener('click', function(event) {
    signaturePad.clear();
  });

  backdeux.addEventListener('click', function(event) {
    boutons.style.display = 'none';
    texte.style.display = 'inline';
  });

  // Option UN de resize Canvas

  // function resizeCanvas() {
  //   console.log(this); // I should always be the canvas element
  //   var ratio = Math.max(window.devicePixelRatio || 1, 1);
  //   this.width = this.offsetWidth * ratio;
  //   this.height = this.offsetHeight * ratio;
  //   this.getContext("2d").scale(ratio, ratio);
  // }
  // window.onresize = resizeCanvas.bind(document.querySelector('canvas'));

    // Option DEUX de resize Canvas

  //   function resizeCanvas() {
  //     var ratio =  Math.max(window.devicePixelRatio || 1, 1);
  //     canvas.width = canvas.offsetWidth * ratio;
  //     canvas.height = canvas.offsetHeight * ratio;
  //     canvas.getContext("2d").scale(ratio, ratio);
  //     signaturePad.clear(); // otherwise isEmpty() might return incorrect value
  // }
  //
  // window.addEventListener("resize", resizeCanvas);

};

function image(sig) {

  var logo = new Image();
  logo.onload = function() {
    fairePDF(sig, logo);
  };
  logo.src = '/../../assets/img/excellence.png';
}

function fairePDF(sig, logo) {

  var titre = document.getElementById('titre').innerHTML;
  var texte = document.getElementById('textecite').innerHTML;
  var contrat = 're. contrat ' + document.getElementsByName('contrat')[0].value;
  var nom = document.getElementsByName('nom')[0].value;
  var courriel = document.getElementsByName('courriel')[0].value;
  var date = moment().format('D MMMM YYYY');

  toPDF(sig, titre, texte, nom, courriel, date, contrat, logo);
  console.log(sig, titre, texte, nom, courriel, date, contrat, logo)

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
    $.post("../../php/mail-bus.php", {
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
      window.open("../../merci.html", "_self")
    });
  }

}

function next() {
  // var titre = document.getElementById('titre').innerHTML;
  // var texte = document.getElementById('textecite').innerHTML;
  var nextButton = document.getElementById('next');

  nextButton.addEventListener('click', function(event) {
    texte.style.display = 'inline';
    infodiv.style.display = 'none';
    back.style.display = "block";
    // var contrat = 're. contrat ' + document.getElementsByName('contrat')[0].value;
    // var nom = document.getElementsByName('nom')[0].value;
    // var courriel = document.getElementsByName('courriel')[0].value;
    // var date = moment().format('D MMMM YYYY');
    // suite(contrat,nom,courriel);
    suite();
  });
}

function suite() {

  var backButton = document.getElementById('back');
  var okButton = document.getElementById('ok');

  okButton.addEventListener('click', function(event) {
    texte.style.display = 'none';
    boutons.style.display = 'block';
  });

  backButton.addEventListener('click', function(event) {
    texte.style.display = 'none';
    infodiv.style.display = 'inline';
  });
}


$(document).ready(function() {
  // signature();
  next();
  signature();
});
