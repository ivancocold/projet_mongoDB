//Script JavaScript réalisé dans le cadre du projet MongoDB par le groupe 3:
//-Ivan-Corneille MAGAGI
//-Doria ROUSSEAU
//-Colin DIDELOT
//-Molka JAGHDAM


//Commencez par créer une data base que vous nomerez comme vous souhaitez, en utilisant l'IDE graphique de votre choix

// Modélisation des équipes
db.createCollection("teams");
db.teams.createIndex({ nom: 1 });


// Modélisation des joueurs
db.createCollection("players");
db.players.createIndex({ nom: 1 });


// Modélisation des matchs
db.createCollection("matches");
db.matches.createIndex({ "équipe_domicile": 1, "équipe_extérieur": 1 });



// Modélisation des joueurs ayant joué au moins X matchs avec la moyenne de leurs notes
db.createCollection("players_stats");
db.players_stats.createIndex({ joueur: 1 });




//Ajout d'équipe avec un effectif renseigné avec la clause insertOne
db.teams.insertOne({
  _id:"000000003992",
  nom: "Union Bordeaux Bègles",
  pays: "France",
  effectif: [
    { nom: "MAYNADIER", prénom :"Clément", poste: "Talonneur", numéro: 10,id:ObjectId(), taille: 187, poids:110, date_naissance:new Date("1988-10-11") },
    { nom: "COBILAS", prénom :"Vadim", poste: "Pilier", numéro: 11,id:ObjectId(), taille:183, poids:120, date_naissance:new Date("1983-01-01") },
    { nom: "POIROT", prénom :"Jefferson", poste: "Pilier", numéro: 40,id:ObjectId(), taille:181, poid:117, date_naissance:new Date("1993-01-01") }
  ]
});




// Requête d'insertion d'une équipe sans effectif renseigné avec la clause insertOne
db.teams.insertOne({
  _id: "000000003991",
  nom: "Stade Rochelais",
  couleurs: ["Jaune", "Noir"],
  stade: "GROUPAMA Stadium",
  effectifs: []
});




// Mise à jour du stade d'une équipe
//Variabilisation du nom de l'équipe
var equipeNom = "Stade Rochelais";
//Variabilisation du nouveau nom du stade 
var nouveauStade = "Stade Marcel-Deflandre";
//Requête d'actualisation
db.teams.updateOne(
  { nom: equipeNom },
  { $set: { stade: nouveauStade } }
);





// Requête d'insertion d'un joueur avec la clause insertOne
db.players.insertOne({
  _id: "000000001993",
  nom: "MAGAGI",
  prénom: "Ivan-Corneille",
  date_naissance: new Date("1993-12-29"),
  taille: 180,
  poids: 83,
  poste: "Demi de mêlée"
});





//Utilisation de insertOne() pour insérer un seul document dans une collection
db.teams.insertOne({
  nom: "RC Toulon",
  couleurs: ["Rouge", "Noir"],
  stade: "Stade Mayol",
  effectifs: []
});



// Mise à jour de l'effectif d'une équipe avec le joueur ajouté avec updateOne et $push
db.teams.updateOne(
  { _id: "000000003991" },
  { $push: { effectifs: { $each: [ObjectId("000000001993")] } } }
);





// Insertion de joueurs
db.players.insertMany([
  {
    nom: "JAGHDAM",
    prénom: "Molka",
    date_naissance: new Date("1990-01-01"),
    taille: 165,
    poids: 80,
    poste: "Trois quarts centre"
  },
  {
    nom: "Girodon",
    prénom: "Rémy",
    date_naissance: new Date("1986-05-20"),
    taille: 175,
    poids: 75,
    poste: "Troisième Ligne"
  }
]);



//Utilisation de insertOne() pour insérer un seul document dans une collection
db.teams.insertOne({
  nom: "RC Toulon",
  couleurs: ["Rouge", "Noir"],
  stade: "Stade Mayol",
  effectifs: []
});




// requête d'insertion de 2 joueurs avec la clause insertMany
db.players.insertMany([
  {
    _id: ObjectId(),
    nom: "ROUSSEAU",
    prénom: "Dorian",
    date_naissance: new Date("1990-05-10"),
    taille: 185,
    poids: 45,
    poste: "Pilier"
  },
  {
    _id: ObjectId(),
    nom: "DIDELOT",
    prénom: "Colin",
    date_naissance: new Date("1995-02-15"),
    taille: 170,
    poids: 65,
    poste: "Demi d’ouverture"
  }
]);

// Ajout d'un joueur à une équipe en utilisant le nom de l'équipe
//Création d'une variable : le nom de l'équipe d'intérêt
var equipeNom = "Stade Rochelais";

//Création d'une variable : le document de l'équipe d'intérêt
var equipe = db.teams.findOne({ nom: equipeNom });

//Création d'une variable : l'ID du document d'intérêt
var equipeId = equipe._id;

//Variabilisation des ID des joueurs d'intérêt
var joueur1Id = db.players.findOne({ nom: "ROUSSEAU", prénom: "Dorian" })._id;
var joueur2Id = db.players.findOne({ nom: "DIDELOT", prénom: "Colin" })._id;

//Requête d'actualisation
db.teams.updateOne(
  { nom: equipeNom },
  { $push: { effectifs: { $each: [joueur1Id, joueur2Id] } } }
);






// Requête simple d'insertion d'un match
db.matches.insertOne({
  équipe_domicile: ObjectId("999999GUEpoe"),
  équipe_extérieur: ObjectId("auEtiDpkrt78"),
  compétition: "Top 14",
  score_équipe_domicile: 10,
  score_équipe_extérieur: 5,
  joueurs_équipe_domicile: [
    { joueur: ObjectId("eyjf7895aufg"), note: 8 },
    { joueur: ObjectId("aSpmd7r8DPmE"), note: 7 }
  ],
  joueurs_équipe_extérieur: [
    { joueur: ObjectId("78riErpPrifD"), note: 6 },
    { joueur: ObjectId("78ErEI78rifD"), note: 9 }
  ]
});



//Utilisation de insertMany() pour insérer plusieurs documents dans une collection
var players = [
  {
    nom: "Wilkinson",
    prénom: "Jonny",
    date_naissance: new Date("1979-05-25"),
    taille: 180,
    poids: 80,
    poste: "Demi d'ouverture"
  },
  {
    nom: "Niekerk",
    prénom: "Joe van",
    date_naissance: new Date("1995-02-02"),
    taille: 175,
    poids: 75,
    poste: "Troisième ligne aile"
  }
];
db.players.insertMany(players);




// Requête de mise à jour d'une note de joueur pour un match donné
var joueurId = ObjectId("000000001993"); // ID du joueur à mettre à jour
var matchId = ObjectId("000000006066"); // ID du match
var nouvelleNote = 8.5; // Nouvelle note du joueur
//Requête d'actualisation
db.players_stats.updateOne(
  { joueur: joueurId, "matches.matchId": matchId },
  { $set: { "matches.$.note": nouvelleNote } }
);





// Suppression d'une équipe
var equipeId = "000000003991"; // ID de l'équipe à supprimer
//Requête de suppression
db.teams.deleteOne({ _id: equipeId });




//Suppression de plusieurs documents selon critères
db.players.deleteMany({ poste: "Première ligne", poids: { $lt: 70 } });




//Utilisation de l'opérateur $eq implicite pour spécifier la condition de recherche, qui est l'ID du document à supprimer
db.players.deleteOne({ _id: ObjectId("61234abcd123456789000001") });




//Recherche des joueurs d'une équipe donnée dans un match d'id="61234abcd123456789000001"
var matchId = ObjectId("61234abcd123456789000001");
db.matches.findOne({ _id: matchId }, { joueurs_équipe_domicile: 1, joueurs_équipe_extérieur: 1 });



//Recherche des joueurs ayant joué au moins 3 matchs et leur moyenne de notes
var nombreMinMatchs = 3;
db.players_stats.find({ count: { $gte: nombreMinMatchs } });



//Recherche des matchs d'une compétition donnée
var Recherche = "Top 14";
db.matches.find({ compétition: Recherche });



//Recherche de joueurs par poste et âge maximal
var posteRecherche = "Demi de mêlée";
var ageMaximal = new Date("1995-01-01");
db.players.find({
  poste: posteRecherche,
  date_naissance: { $lt: ageMaximal }
});





//Recherche d'équipes par nom
db.teams.find({ nom: "RC Toulon" });






// Insertion complexe de matchs
//Variabilisation des ID des équipes domiciles
var equipeDomicileIds = [
  ObjectId("785698745215").toHexString(),
  ObjectId("785698745217").toHexString()
];
//Variabilisation des ID des équipes visiteures
var equipeExterieurIds = [
  ObjectId("256984745215").toHexString(),
  ObjectId("785674896512").toHexString()
];
//Variabilisation de la liste des compétitions
var competitions = ["Top 14", "Champions Cup", "Challenge européen"];
// Boucle pour créer 10 matches
for (var i = 0; i < 10; i++) {
  var match = {
  // Génération aléatoire de l'ID de l'équipe domicile
    équipe_domicile: equipeDomicileIds[Math.floor(Math.random() * equipeDomicileIds.length)],
    // Génération aléatoire de l'ID de l'équipe visiteure
    équipe_extérieur: equipeExterieurIds[Math.floor(Math.random() * equipeExterieurIds.length)],
    // Génération aléatoire de l'ID de la compétition
    compétition: competitions[Math.floor(Math.random() * competitions.length)],
    // Génération aléatoire du score de l'équipe domicile entre 0 et 9
    score_équipe_domicile: Math.floor(Math.random() * 10),
    // Génération aléatoire du score de l'équipe visiteure entre 0 et 9
    score_équipe_extérieur: Math.floor(Math.random() * 10),
    //Ajout des effectifs vides
    joueurs_équipe_domicile: [],
    joueurs_équipe_extérieur: []
  };

  // Ajoutez les joueurs et leurs notes pour l'équipe domicile
  for (var j = 0; j < 15; j++) {
    var joueurId = ObjectId(); // On génère un nouvel ID pour chaque joueur
    var note = Math.floor(Math.random() * 10) + 1; // On génère une note aléatoire entre 1 et 10
    match.joueurs_équipe_domicile.push({ joueur: joueurId, note: note });
  }

  // Ajoutez les joueurs et leurs notes pour l'équipe extérieur
  for (var k = 0; k < 15; k++) {
    var joueurId = ObjectId(); // Générez un nouvel ID pour chaque joueur
    var note = Math.floor(Math.random() * 10) + 1; // Générez une note aléatoire entre 1 et 10
    match.joueurs_équipe_extérieur.push({ joueur: joueurId, note: note });
  }
  // Insérez le match dans la collection 'matches'
  db.matches.insertOne(match);
}


// Insertion d'équipes
db.teams.insertMany([
  {
    nom: "Stade toulousain",
    couleurs: ["Rouge", "Noir"],
    stade: "Stade Ernest-Wallon",
    effectifs: []
  },
  {
    nom: "Lyon Olympique Universitaire",
    couleurs: ["Rouge", "Noir"],
    stade: "Matmut Stadium Gerland",
    effectifs: []
  }
]);




//Utilisation de findOne() pour récupérer le premier document correspondant à une requête dans une collection
var joueur = db.players.findOne({ nom: "MAGAGI" });
print(joueur);




// Requête de sélection des joueurs pour un poste donné et un âge maximal
var posteRecherche = "Pilier";
var ageMaximal = new Date("1998-01-01");
db.players.find({
  poste: posteRecherche,
  date_naissance: { $lt: ageMaximal }
});



// Requête pour récupérer la liste des joueurs ayant joué au moins X matchs avec la moyenne de leurs notes
var nombreMatchsMin = 10; // Nombre minimal de matchs joués
var moyenneNotesMin = 7.5; // Moyenne minimale des notes

db.players_stats.aggregate([
  {
    $match: {
      $expr: { $gte: [{ $size: "$matches" }, nombreMatchsMin] }
    }
  },
  {
    $project: {
      joueur: 1,
      moyenneNotes: { $avg: "$matches.note" }
    }
  },
  {
    $match: {
      moyenneNotes: { $gte: moyenneNotesMin }
    }
  }
]);





// Suppression d'un joueur d'une équipe
var joueurId = ObjectId("000000001993"); // ID du joueur à supprimer
db.teams.updateOne(
  {},
  { $pull: { effectifs: joueurId } },
  { multi: true }
);



//Utilisation de find pour éviter une insertion d'un doublon
var joueurExistant = db.players.findOne({ nom: "Niekerk" });
if (joueurExistant) {
  print("Le joueur existe déjà !");
} else {
  // Insérer le document
  db.players.insertOne({
    nom: "Niekerk",
    prénom: "Joe van",
    date_naissance: new Date("1995-02-02"),
    taille: 175,
    poids: 75,
    poste: "Troisième ligne aile"
  });
  print("Le joueur a été inséré avec succès !");
}





// Construction de la collection des joueurs ayant joué au moins X matchs avec la moyenne de leurs notes
var nombreMinMatchs = 3;
// Agrégation pour les joueurs de l'équipe domicile
db.matches.aggregate([
  { $unwind: "$joueurs_équipe_domicile" },
  //$unwind : Décompose chaque élément du tableau

  { $group: { _id: "$joueurs_équipe_domicile.joueur", count: { $sum: 1 }, totalNotes: { $sum: "$joueurs_équipe_domicile.note" } } },
  //$group: Regroupe les joueurs par leur ID, compte le nombre de fois qu'ils apparaissent et calcule la somme de leurs notes.

  { $match: { count: { $gte: nombreMinMatchs } } },
  //$match : Filtre les joueurs qui ont joué au moins 'nombreMinMatchs' matchs.

  { $project: { joueur: "$_id", _id: 0, moyenneNotes: { $divide: ["$totalNotes", "$count"] } } },
  //Projette le joueur, supprime l'ID et calcule la moyenne de ses notes.

  { $out: "players_stats" }
  //Insère les résultats dans la collection 'players_stats'.

]);
// Agrégation pour les joueurs de l'équipe extérieure
db.matches.aggregate([
  { $unwind: "$joueurs_équipe_extérieur" },
  //$unwind : Décompose chaque élément du tableau 'joueurs_équipe_extérieur' pour les traiter

  { $group: { _id: "$joueurs_équipe_extérieur.joueur", count: { $sum: 1 }, totalNotes: { $sum: "$joueurs_équipe_extérieur.note" } } },
  { $match: { count: { $gte: nombreMinMatchs } } },
  { $project: { joueur: "$_id", _id: 0, moyenneNotes: { $divide: ["$totalNotes", "$count"] } } },
  { $merge: { into: "players_stats" } }
]);