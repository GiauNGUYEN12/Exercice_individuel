const dossierPrincipal = {
    nom: 'Ada',
    contenu: [{
        nom: 'Projets collectifs Ada',
        contenu: [{
            nom: 'Pico8',
            contenu: [{
              nom: 'mariokart.p8'
            }]
          },
          {
            nom: 'Dataviz',
            contenu: [{
                nom: 'index.html'
              },
              {
                nom: 'script.js'
              }
            ]
          }
        ]
      },
      {nom: 'CV.pdf'},
      {
        nom: 'Projets persos',
        contenu: [{
          nom: 'Portfolio',
          contenu: [{
              nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }]
      },
    ],
  }
//console.log(dossierPrincipal)

function afficherDossier (obj) {
    console.log (obj.nom)
}
afficherDossier(dossierPrincipal)

function afficherDossierInteratif (dossier){
  for ( const fichierAda of dossier.contenu){
    console.log(fichierAda.nom)
    if (fichierAda.contenu){
    for (const fichierProjetContenu of fichierAda.contenu){
    console.log(fichierProjetContenu.nom)
    if (fichierProjetContenu.contenu){
      for (const fichierOfProjet of fichierProjetContenu.contenu){
        console.log(fichierOfProjet.nom)
      }
    }
    }}
    }
}
afficherDossierInteratif(dossierPrincipal)

function afficherDossierRecursif (dossier, i) {
  if ( i >= dossier.contenu.length){
    return
  }
  console.log (dossier.contenu[i].nom)
afficherDossierRecursif(dossierPrincipal, i+1)
}
afficherDossierRecursif(dossierPrincipal, 0)



function afficherDossierRecursif2 (obj){
    if (obj.contenu === undefined){
        return
    }
    for (const enfant of obj.contenu){
        console.log(enfant.nom)
        afficherDossierRecursif2(enfant)
    }
}
afficherDossierRecursif2(dossierPrincipal)
