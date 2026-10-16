// =====================================================================
//  DELF B1 – Compréhension de l'oral : données et logique partagées
//  Format certification : questions fermées uniquement
//  (QCM à 3 choix, sans « On ne sait pas » ni réponse ouverte)
// =====================================================================

// Une couleur par activité, d'après les cinq couleurs du logo de l'OIF
// (vert, jaune, rouge, violet, bleu), ajustées pour la lisibilité.
function applyColor(c) {
    const r = document.documentElement.style;
    r.setProperty("--accent", c.accent);
    r.setProperty("--accent-dark", c.dark);
    r.setProperty("--on-accent", c.on);
    r.setProperty("--accent-text", c.text);
    r.setProperty("--accent-soft", c.soft);
}

const activitiesData = {
    1: {
        title: "Comprendre des échanges",
        subtitle: "Un album pour Nadia",
        type: "Conversation entre locuteurs natifs",
        audio: "DELFB1_activite01.mp3",
        color: { name: "vert", accent: "#2E8540", dark: "#24692F", on: "#ffffff", text: "#2E8540", soft: "#E8F3EA" },
        instruction: "Vous allez entendre une conversation entre deux personnes. Lisez d'abord les questions, puis écoutez le document et choisissez la bonne réponse.",
        questions: [
            { text: "Nadia est…", options: ["la fille de la personne qui cherche un cadeau.","la nièce de la personne qui cherche un cadeau.","une amie de la famille."], ans: 1, quote: "…un album de 10 chansons personnalisées avec le prénom de ta nièce." },
            { text: "Pour son prochain anniversaire, Nadia va avoir…", options: ["7 ans.","8 ans.","10 ans."], ans: 1, quote: "Remarque, c'est normal, elle a bientôt 8 ans." },
            { text: "Pourquoi est-il difficile de choisir un cadeau pour Nadia ?", options: ["Elle n'aime pas les jouets.","Le budget est limité.","Elle a déjà tout."], ans: 2, quote: "Elle est tellement gâtée, elle a tout !" },
            { text: "« Star My Name », c'est…", options: ["un nouveau groupe de musique.","un site où l'on commande des chansons personnalisées.","une émission de télévision pour enfants."], ans: 1, quote: "Starmyname.com est un site où tu peux commander un album de 10 chansons personnalisées…" },
            { text: "L'amie qui a commandé un album a payé…", options: ["un peu moins de 30 euros.","exactement 30 euros.","plus de 30 euros."], ans: 0, quote: "…ça ne lui a coûté pas tout à fait 30 euros…" },
            { text: "Elle a reçu l'album…", options: ["le jour même.","2 ou 3 jours après.","une semaine après."], ans: 1, quote: "…et 2 ou 3 jours après, elle avait l'album avec le livret des paroles." },
            { text: "Avant de commander, on peut…", options: ["écouter des extraits des chansons.","recevoir un CD d'essai gratuit.","choisir les mélodies des chansons."], ans: 0, quote: "Il te suffit de cliquer dessus et tu entends des extraits des chansons." },
            { text: "Si le prénom de l'enfant n'est pas dans la liste…", options: ["on ne peut pas commander l'album.","on doit choisir un prénom proche.","les chansons sont enregistrées sur mesure."], ans: 2, quote: "Et s'il n'y est pas, les chansons sont enregistrées sur mesure." },
            { text: "Olivier, le créateur du site, a eu cette idée…", options: ["pour la naissance de son premier enfant.","pour l'anniversaire de sa nièce.","pour un concours de chanson."], ans: 0, quote: "Olivier, le créateur du site, a eu cette idée pour la naissance de son premier enfant." },
            { text: "En plus de l'album, le site propose…", options: ["des jouets personnalisés.","des cartes d'anniversaire électroniques et des cartes d'invitation.","des cours de chant en ligne."], ans: 1, quote: "Tu peux même lui envoyer une carte d'anniversaire électronique… faire imprimer des cartes d'invitation pour ses copains et copines !" }
        ],
        transcription: `— Tu as vu les photos des dernières vacances ?
— Non, fais voir ! Qui est-ce, là ? Oh ! Mais c'est Nadia !
— Oui, elle a changé, hein ? Remarque, c'est normal, elle a bientôt 8 ans.
— C'est quand, son anniversaire ? Qu'est-ce que tu vas lui offrir ?
— Je ne sais pas... Elle est tellement gâtée, elle a tout !
— Elle aime chanter, je crois. Alors, pourquoi pas un album Star My Name ?
— C'est un nouveau groupe ?
— Non ! Starmyname.com est un site où tu peux commander un album de 10 chansons personnalisées avec le prénom de ta nièce.
— C'est original comme idée, ça ! Je ne connaissais pas. Mais ça doit être cher, et il faut sans doute beaucoup de temps...
— Mais pas du tout ! J'ai une copine qui l'a fait pour sa fille : ça ne lui a coûté pas tout à fait 30 euros, et 2 ou 3 jours après, elle avait l'album avec le livret des paroles.
— C'est possible d'entendre les chansons avant ?
— Tu vas sur le site de Star My Name, et là, dans une liste de plus de 700 prénoms, tu trouveras peut-être le prénom de Nadia. Il te suffit de cliquer dessus et tu entends des extraits des chansons. Et s'il n'y est pas, les chansons sont enregistrées sur mesure.
— 700 prénoms ?
— Olivier, le créateur du site, a eu cette idée pour la naissance de son premier enfant. Puis il l'a fait pour des amis, des amis des amis... À chaque fois, il rechantait les 10 chansons avec le nouveau prénom. La liste des prénoms s'est allongée, et le site est né.
— Bon, eh bien, je crois que je vais commander un album ! Nadia va être contente.
— Tu peux même lui envoyer une carte d'anniversaire électronique avec une chanson à son nom. Et aussi, pour son goûter d'anniversaire, faire imprimer des cartes d'invitation pour ses copains et copines !`
    },
    2: {
        title: "Qi gong et urban training",
        subtitle: "Un nouveau sport en ville",
        type: "Conversation entre locuteurs natifs",
        audio: "DELFB1_activite02.mp3",
        color: { name: "jaune", accent: "#FFC20E", dark: "#E5AC00", on: "#1f2937", text: "#8A6A00", soft: "#FFF6D9" },
        instruction: "Vous allez entendre une conversation entre deux amies. Lisez d'abord les questions, puis écoutez le document et choisissez la bonne réponse.",
        questions: [
            { text: "Jacqueline ne fait plus de qi gong parce qu'elle…", options: ["n'a plus le temps.","a envie de bouger davantage.","trouve ce sport trop cher."], ans: 1, quote: "Non, cette année j'ai envie de bouger un peu plus. Je fais de l'urban training." },
            { text: "L'urban training se pratique…", options: ["dans la rue, en petit groupe, avec un coach.","dans une salle de sport, en équipe.","seul, à la maison."], ans: 0, quote: "Ça se pratique dans la rue, en petit groupe et avec un coach ? C'est bien ça, non ? — Oui." },
            { text: "Pour faire les exercices, on utilise…", options: ["des appareils de musculation.","un tapis et des haltères.","ce qui se trouve autour de nous."], ans: 2, quote: "On utilise ce qui se trouve autour de nous pour nos exercices." },
            { text: "Pour pratiquer l'urban training…", options: ["il faut être un sportif confirmé.","on peut choisir parmi plusieurs niveaux.","il faut avoir fait du qi gong avant."], ans: 1, quote: "Non, il y a plusieurs niveaux. […] L'animateur nous montre les bons gestes et voit ce qui convient à chacun." },
            { text: "Quel équipement est conseillé ?", options: ["Des chaussures de running et des gants.","Une tenue spéciale et un casque.","Un maillot de club et des genouillères."], ans: 0, quote: "Il faut surtout des chaussures adaptées de type running… Il faut aussi des gants pour protéger les mains." },
            { text: "La ceinture sert à…", options: ["protéger le dos.","ranger son téléphone.","accrocher une bouteille d'eau."], ans: 2, quote: "…on recommande d'avoir une ceinture pour accrocher une bouteille d'eau." },
            { text: "L'échauffement dure environ…", options: ["5 minutes.","10 minutes.","30 minutes."], ans: 1, quote: "On commence par l'échauffement pendant 10 minutes environ." },
            { text: "Parmi ces exercices, lequel est mentionné ?", options: ["Des pompes sur un banc.","Des sauts à la corde.","Des longueurs de piscine."], ans: 0, quote: "Des abdos sur des marches, des tractions accrochées à une barre, ou encore des pompes sur un banc." },
            { text: "Une séance d'urban training comporte…", options: ["deux étapes.","trois étapes.","quatre étapes."], ans: 1, quote: "On commence par l'échauffement… Ensuite, ce sont les exercices proprement dits… Et on termine par un moment de stretching et de détente." },
            { text: "Selon Jacqueline, l'autre grand avantage de ce sport, c'est qu'on…", options: ["rencontre beaucoup de monde.","ne paie rien.","redécouvre sa ville."], ans: 2, quote: "Et ce qui est formidable, c'est qu'en plus, tu redécouvres ta ville." }
        ],
        transcription: `— Tiens, Jacqueline ! Comment vas-tu ? On ne te voit plus au qi gong. Qu'est-ce que tu deviens ?
— Non, cette année j'ai envie de bouger un peu plus. Je fais de l'urban training.
— J'ai entendu parler de ce nouveau sport. Ça se pratique dans la rue, en petit groupe et avec un coach ? C'est bien ça, non ?
— Oui. On utilise ce qui se trouve autour de nous pour nos exercices. C'est amusant et dynamique.
— C'est réservé à des sportifs confirmés, alors ?
— Non, il y a plusieurs niveaux. Pour le moment, je fais ça avec un club. L'animateur nous montre les bons gestes et voit ce qui convient à chacun.
— Il faut des vêtements particuliers ?
— Pas vraiment. Il faut surtout des chaussures adaptées de type running, c'est-à-dire pour courir, et des vêtements qui permettent de faire de grands gestes. Il faut aussi des gants pour protéger les mains. Et puis, on recommande d'avoir une ceinture pour accrocher une bouteille d'eau. Il faut absolument se réhydrater à tout moment.
— Et qu'est-ce que vous faites exactement ?
— On commence par l'échauffement pendant 10 minutes environ. L'échauffement est très important : il permet d'augmenter progressivement les pulsations cardiaques. Ensuite, ce sont les exercices proprement dits.
— Comme quoi ?
— Des abdos sur des marches, des tractions accrochées à une barre, ou encore des pompes sur un banc. S'il y a des escalators, on les monte le plus vite possible.
— Eh bien ! C'est tonique ! Et tout ça pendant une heure ?
— Oui. Et on termine par un moment de stretching et de détente pour retrouver son rythme cardiaque en douceur.
— Là, tu pourrais faire du qi gong ! Ça n'a pas l'air mal.
— Ah oui, si on le fait à son rythme. Et ce qui est formidable, c'est qu'en plus, tu redécouvres ta ville.`
    },
    3: {
        title: "Les arnaques aux seniors",
        subtitle: "Interview radiophonique",
        type: "Interview",
        audio: "DELFB1_activite03.mp3",
        color: { name: "rouge", accent: "#D7192D", dark: "#A8131F", on: "#ffffff", text: "#C0172A", soft: "#FCE8EA" },
        instruction: "Vous allez entendre une interview. Lisez d'abord les questions, puis écoutez le document et choisissez la bonne réponse.",
        questions: [
            { text: "Madame Boinard travaille…", options: ["dans une association d'aide aux seniors.","à la Direction centrale de la sécurité publique.","pour la société du gaz et de l'électricité."], ans: 1, quote: "Vous êtes chef de la division Prévention et Partenariat à la Direction centrale de la sécurité publique." },
            { text: "Les personnes les plus vulnérables aux arnaques sont…", options: ["les personnes âgées.","les jeunes adultes.","les commerçants."], ans: 0, quote: "Ce sont les personnes âgées. Les escrocs profitent de leur faiblesse." },
            { text: "Ces personnes sont souvent victimes parce qu'elles…", options: ["ont beaucoup d'argent chez elles.","habitent dans les grandes villes.","sont souvent isolées."], ans: 2, quote: "Ils sont souvent isolés, parfois touchés par le décès de leur mari ou de leur femme." },
            { text: "Les voleurs se font passer pour…", options: ["des médecins ou des infirmiers.","des policiers ou des agents du gaz et de l'électricité.","des facteurs ou des livreurs."], ans: 1, quote: "Ils sonnent chez eux, se font passer pour de faux policiers ou de faux agents de la société du gaz et de l'électricité." },
            { text: "Souvent, les voleurs…", options: ["viennent à deux : l'un distrait la victime, l'autre vole.","téléphonent avant de venir.","viennent seuls, pendant la nuit."], ans: 0, quote: "Souvent, ils viennent à deux. L'un des deux parle avec eux, les distrait, et pendant ce temps, l'autre vole l'argent, les bijoux..." },
            { text: "Quand quelqu'un sonne chez elles, les personnes âgées doivent…", options: ["ne jamais ouvrir la porte.","demander son nom et sa carte professionnelle.","appeler immédiatement un voisin."], ans: 1, quote: "Demander son nom et sa carte professionnelle à la personne qui vient chez eux." },
            { text: "En cas de doute, elles peuvent appeler…", options: ["leur banque.","un membre de leur famille.","le commissariat de police."], ans: 2, quote: "S'ils ont un doute, ils peuvent appeler le commissariat de police." },
            { text: "Les démarcheurs proposent des biens ou des travaux…", options: ["à un prix bien supérieur à leur valeur réelle.","gratuitement, pour gagner leur confiance.","à prix réduit, mais de mauvaise qualité."], ans: 0, quote: "…à un prix en fait bien au-dessus de leur valeur réelle." },
            { text: "L'« Opération Tranquillité Seniors » existe depuis…", options: ["l'hiver 2000.","l'été 2010.","le printemps 2012."], ans: 1, quote: "Depuis l'été 2010, il existe un plan d'action nationale appelé « Opération Tranquillité Seniors »." },
            { text: "Le conseil le plus important de la police est de…", options: ["installer une alarme à la maison.","ne pas garder d'argent chez soi.","garder un lien avec sa famille, ses voisins ou des associations."], ans: 2, quote: "…nous leur recommandons surtout de garder un lien avec leur famille et leurs voisins, ou encore de faire partie d'associations." }
        ],
        transcription: `— Madame Boinard, merci de nous recevoir. Vous êtes chef de la division Prévention et Partenariat à la Direction centrale de la sécurité publique. Pouvez-vous dire quelles sont les personnes les plus vulnérables aux arnaques ?
— Ce sont les personnes âgées. Les escrocs profitent de leur faiblesse. Ils sont souvent isolés, parfois touchés par le décès de leur mari ou de leur femme.
— Quelles sont les situations à risque pour ces personnes ?
— Les seniors sont les premières victimes des voleurs. Ils sonnent chez eux, se font passer pour de faux policiers ou de faux agents de la société du gaz et de l'électricité. Souvent, ils viennent à deux. L'un des deux parle avec eux, les distrait, et pendant ce temps, l'autre vole l'argent, les bijoux...
— Qu'est-ce qu'ils peuvent faire ?
— Demander son nom et sa carte professionnelle à la personne qui vient chez eux. S'ils ont un doute, ils peuvent appeler le commissariat de police.
— Quelles sont les autres arnaques ?
— Les personnes âgées sont aussi les victimes des démarcheurs. Ceux-ci leur proposent d'acheter des biens ou de réaliser des travaux chez eux à un prix en fait bien au-dessus de leur valeur réelle.
— Quelles sont les actions de la police et de la gendarmerie auprès des personnes âgées ?
— Depuis l'été 2010, il existe un plan d'action nationale appelé « Opération Tranquillité Seniors ». Nous organisons des réunions de prévention avec les personnes âgées et les personnes proches d'elles. Mais nous leur recommandons surtout de garder un lien avec leur famille et leurs voisins, ou encore de faire partie d'associations. C'est l'isolement qui les rend plus fragiles, plus vulnérables.`
    },
    4: {
        title: "La luminothérapie",
        subtitle: "Chez le médecin",
        type: "Conversation entre locuteurs natifs",
        audio: "DELFB1_activite04.mp3",
        color: { name: "violet", accent: "#7B2C83", dark: "#5E1F64", on: "#ffffff", text: "#7B2C83", soft: "#F3E9F4" },
        instruction: "Vous allez entendre une conversation entre une patiente et son médecin. Lisez d'abord les questions, puis écoutez le document et choisissez la bonne réponse.",
        questions: [
            { text: "Madame Bonnefoy va chez le médecin parce qu'elle…", options: ["dort mal la nuit.","se sent fatiguée et n'a envie de rien.","a mal aux yeux."], ans: 1, quote: "…je me sens fatiguée. Je n'ai envie de rien." },
            { text: "Ce problème apparaît…", options: ["chaque année, au début de l'hiver.","pour la première fois cette année.","chaque été, pendant les vacances."], ans: 0, quote: "Comme tous les ans, à l'entrée de l'hiver, je me sens fatiguée." },
            { text: "Selon le médecin, Madame Bonnefoy souffre…", options: ["d'une maladie du sommeil.","d'une allergie.","d'une dépression saisonnière."], ans: 2, quote: "C'est un peu de dépression saisonnière, Madame Bonnefoy." },
            { text: "Madame Bonnefoy parle de la luminothérapie parce qu'elle…", options: ["ne veut plus prendre de médicaments.","l'a déjà essayée l'année dernière.","travaille dans un centre du sommeil."], ans: 0, quote: "Vous savez docteur, j'en ai assez des médicaments. J'ai entendu parler de la luminothérapie. Qu'en pensez-vous ?" },
            { text: "La dépression saisonnière est fréquente…", options: ["en Amérique du Sud.","dans les pays nordiques.","dans les pays méditerranéens."], ans: 1, quote: "Dans les pays nordiques où 5 % et même 10 % des personnes en souffrent…" },
            { text: "La luminothérapie est efficace parce qu'elle…", options: ["remplace les médicaments.","limite les effets du manque de soleil.","aide à dormir plus longtemps."], ans: 1, quote: "En fait, elle limite les effets du manque de soleil. Comme lui, c'est un antidépresseur naturel." },
            { text: "D'après les études, le plus efficace, ce sont des séances de…", options: ["30 minutes tous les matins, près du lever du jour.","30 minutes tous les soirs, avant de dormir.","une heure, une fois par semaine."], ans: 0, quote: "…le plus efficace ce sont des séances de 30 minutes, tous les matins, le plus près possible du lever du jour." },
            { text: "La lampe de luminothérapie doit…", options: ["avoir une puissance de 500 lux et être placée à 1 mètre.","avoir une puissance de 3 000 lux et être placée à 40 cm.","avoir au moins 1 500 lux et être placée à 30 cm."], ans: 2, quote: "Il vous faut une lampe de 1 500 lux minimum, placée à 30 centimètres de vous." },
            { text: "Il faut vérifier que l'appareil…", options: ["a une minuterie automatique.","est vendu en pharmacie.","a des filtres contre les rayons ultraviolets et infrarouges."], ans: 2, quote: "Il faut cependant vous assurer que l'appareil a des filtres contre les rayons ultraviolets et infrarouges." },
            { text: "Le simulateur d'aube sert à…", options: ["se réveiller en douceur.","s'endormir plus facilement.","remplacer la lampe de luminothérapie."], ans: 0, quote: "…ces petits appareils vous réveillent en douceur en simulant le lever du soleil." }
        ],
        transcription: `— Bonjour docteur.
— Bonjour Madame Bonnefoy. Qu'est-ce qui vous amène ?
— Comme tous les ans, à l'entrée de l'hiver, je me sens fatiguée. Je n'ai envie de rien.
— Vous dormez bien ?
— Trop bien. J'ai toujours sommeil, et après j'ai beaucoup de mal à me réveiller.
— C'est un peu de dépression saisonnière, Madame Bonnefoy. On va soigner ça.
— Vous savez docteur, j'en ai assez des médicaments. J'ai entendu parler de la luminothérapie. Qu'en pensez-vous ?
— Écoutez, pourquoi pas ? Vous pourriez essayer. C'est un traitement médical reconnu pour combattre la dépression saisonnière. Dans les pays nordiques où 5 % et même 10 % des personnes en souffrent, elle est assez répandue. Les gens constatent qu'ils sont de meilleure humeur, que leur sommeil redevient normal. En fait, elle limite les effets du manque de soleil. Comme lui, c'est un antidépresseur naturel.
— Qu'est-ce qu'il faut faire ?
— D'après des études sur ce sujet, le plus efficace ce sont des séances de 30 minutes, tous les matins, le plus près possible du lever du jour.
— Je peux faire ça chez moi ?
— Bien sûr ! Il y a des centres du sommeil, mais vous pouvez avoir votre propre appareil de luminothérapie chez vous. Il vous faut une lampe de 1 500 lux minimum, placée à 30 centimètres de vous. Ces lampes ne présentent aucun danger pour les yeux. Il faut cependant vous assurer que l'appareil a des filtres contre les rayons ultraviolets et infrarouges.
— Est-ce que c'est cher ?
— Il faut compter 200 à 300 euros environ. Il existe aussi des simulateurs d'aube. Pour environ 100 euros, ces petits appareils vous réveillent en douceur en simulant le lever du soleil. C'est parfait pour ceux qui ont du mal à se réveiller.
— Merci docteur. Vous m'avez convaincue. C'est un peu cher, mais ça en vaut la peine.`
    },
    5: {
        title: "Une AMAP",
        subtitle: "Consommer local",
        type: "Conversation entre locuteurs natifs",
        audio: "DELFB1_activite05.mp3",
        color: { name: "bleu", accent: "#0077C0", dark: "#005A92", on: "#ffffff", text: "#0077C0", soft: "#E5F1F9" },
        instruction: "Vous allez entendre une conversation entre deux amis. Lisez d'abord les questions, puis écoutez le document et choisissez la bonne réponse.",
        questions: [
            { text: "La réunion pour créer l'AMAP a lieu…", options: ["à la mairie de Puy-Guillaume.","dans une ferme de la région.","à la salle des fêtes de Limons."], ans: 2, quote: "La réunion est à la salle des fêtes." },
            { text: "AMAP signifie…", options: ["Association pour le Maintien de l'Agriculture Paysanne.","Association des Marchés Agricoles de Proximité.","Aide aux Maraîchers et Agriculteurs Paysans."], ans: 0, quote: "Une AMAP : une Association pour le Maintien de l'Agriculture Paysanne." },
            { text: "Peuvent faire partie d'une AMAP…", options: ["seulement les agriculteurs.","seulement les familles à revenus modestes.","tout type de personnes."], ans: 2, quote: "…des familles à revenus modestes, des retraités, des sans-abris... tout type de personnes." },
            { text: "Le budget annuel est calculé par…", options: ["la mairie.","l'agriculteur, aidé par un comité de consommateurs.","les consommateurs seuls."], ans: 1, quote: "…l'agriculteur, aidé par un comité de consommateurs, calcule un budget qui correspond au coût de sa production sur l'année." },
            { text: "Chaque membre achète…", options: ["une part de la production de l'agriculteur.","uniquement les produits qu'il choisit.","des produits au prix du supermarché."], ans: 0, quote: "Ensuite, le budget est divisé par le nombre de personnes inscrites. Ça donne le prix de la part de chaque membre…" },
            { text: "En général, les paniers sont distribués…", options: ["tous les jours, toute l'année.","une fois par semaine, pendant deux saisons.","une fois par mois."], ans: 1, quote: "En général pendant deux saisons : printemps-été et automne-hiver. […] un par semaine." },
            { text: "Un membre peut payer moins cher son panier, ou l'avoir gratuitement, en échange…", options: ["d'heures de travail à la ferme.","de ses propres produits.","de l'inscription de nouveaux membres."], ans: 0, quote: "Un membre peut aussi échanger une réduction du prix du panier ou même sa gratuité contre des heures de travail à la ferme." },
            { text: "Un panier correspond aux besoins…", options: ["d'une personne seule.","d'une famille de quatre personnes.","de deux familles."], ans: 1, quote: "Normalement, un panier correspond aux besoins d'une famille de quatre personnes." },
            { text: "Le contenu des paniers…", options: ["est choisi par chaque membre.","est le même toute l'année.","varie selon les saisons."], ans: 2, quote: "Comme les récoltes changent à chaque saison, les paniers varient en taille et en produits." },
            { text: "Pour le fermier, l'avantage principal est…", options: ["de travailler moins d'heures.","d'être sûr de vendre sa production, avec peu de pertes.","de pouvoir exporter ses produits."], ans: 1, quote: "…pour le fermier, la garantie de vendre sa production, d'avoir très peu de pertes et de gaspillage." }
        ],
        transcription: `— Tu viens avec moi à Limons ?
— À Limons ? Près de Puy-Guillaume ? Mais qu'est-ce que tu vas y faire ?
— Participer à la création d'une AMAP. La réunion est à la salle des fêtes.
— Une quoi ?
— Une AMAP : une Association pour le Maintien de l'Agriculture Paysanne. Elle relie un agriculteur à un groupe de consommateurs comme toi et moi, à des familles à revenus modestes, des retraités, des sans-abris... tout type de personnes. C'est la garantie de mettre dans nos assiettes des produits frais et de qualité, au meilleur prix.
— Comment ça marche ? Tu m'expliques ?
— Eh bien, l'agriculteur, aidé par un comité de consommateurs, calcule un budget qui correspond au coût de sa production sur l'année. Dans ce budget, il compte les salaires, les investissements, tout. Ensuite, le budget est divisé par le nombre de personnes inscrites. Ça donne le prix de la part de chaque membre, qui est alors distribuée sous forme de paniers. En général pendant deux saisons : printemps-été et automne-hiver.
— Et les membres, ils les ont comment, ces paniers ?
— C'est simple : ils signent et achètent leurs paniers, un par semaine. Ils peuvent tous les acheter avant la saison ou bien ils se mettent d'accord avec le fermier. Un membre peut aussi échanger une réduction du prix du panier ou même sa gratuité contre des heures de travail à la ferme.
— Qu'est-ce qu'il y a dans un panier ?
— Normalement, un panier correspond aux besoins d'une famille de quatre personnes. Il y a des fruits, des œufs, des produits laitiers... Tout est fraîchement cueilli, localement produit. Comme les récoltes changent à chaque saison, les paniers varient en taille et en produits.
— C'est vraiment une bonne idée, ces associations ! Et puis, tout le monde y gagne.
— Exactement. De bons produits pour les consommateurs, et pour le fermier, la garantie de vendre sa production, d'avoir très peu de pertes et de gaspillage.`
    },
    6: {
        title: "Les sites les plus visités",
        subtitle: "Le palmarès touristique 2010",
        type: "Conversation entre locuteurs natifs",
        audio: "DELFB1_activite06.mp3",
        color: { name: "vert", accent: "#2E8540", dark: "#24692F", on: "#ffffff", text: "#2E8540", soft: "#E8F3EA" },
        instruction: "Vous allez entendre une conversation entre deux personnes. Lisez d'abord les questions, puis écoutez le document et choisissez la bonne réponse.",
        questions: [
            { text: "La personne rentre tard parce qu'elle…", options: ["a accompagné un groupe de touristes.","a dû terminer le nouveau catalogue.","a visité un parc d'attractions."], ans: 1, quote: "Vous n'avez pas encore fini votre nouveau catalogue ? — Si, ça y est, il est enfin terminé." },
            { text: "Dans le nouveau catalogue, son entreprise…", options: ["a augmenté les propositions pour les sites les plus demandés.","propose surtout de nouvelles excursions.","a supprimé les visites de musées."], ans: 0, quote: "Non, pas vraiment. Nous avons augmenté les propositions pour les sites les plus demandés." },
            { text: "En 2010, la France a accueilli…", options: ["15,3 millions de touristes.","20 millions de touristes.","79 millions de touristes."], ans: 2, quote: "C'est plus de 20 % des 79 millions de touristes venus en France." },
            { text: "Disneyland Paris a reçu…", options: ["1,5 million de visiteurs.","15,3 millions de visiteurs.","79 millions de visiteurs."], ans: 1, quote: "Eh bien, c'est Disneyland Paris, avec 15,3 millions de visiteurs en 2010." },
            { text: "Par rapport à la tour Eiffel, Disneyland Paris a eu…", options: ["moitié moins de visites.","à peu près autant de visites.","plus du double de visites."], ans: 2, quote: "Il a fait plus du double de visites que la tour Eiffel." },
            { text: "Parmi les dix sites les plus visités, on trouve…", options: ["deux musées, deux monuments et un palais.","trois musées et un monument.","un musée, deux palais et deux monuments."], ans: 0, quote: "Sur les dix sites les plus visités, il y a deux musées, deux centres culturels, deux monuments, un palais..." },
            { text: "Le Louvre se trouve…", options: ["à la première place.","à la deuxième place.","à la septième place."], ans: 1, quote: "Le Louvre vient après Disneyland, juste avant la tour Eiffel. Et Orsay est à la septième place." },
            { text: "Quel site est à la dernière place du classement ?", options: ["Le Futuroscope.","Le Centre Pompidou.","L'Arc de Triomphe."], ans: 2, quote: "L'Arc de Triomphe. Avec 1,5 million de visiteurs, il est en dernière position." },
            { text: "Dans quel ordre se suivent ces trois sites ?", options: ["Versailles, puis le Centre Pompidou, puis la Cité des sciences.","Le Centre Pompidou, puis Versailles, puis la Cité des sciences.","La Cité des sciences, puis Versailles, puis le Centre Pompidou."], ans: 0, quote: "Versailles est quatrième devant le Centre Pompidou, suivi de la Cité des sciences de La Villette." },
            { text: "Les deux autres parcs d'attractions du classement sont…", options: ["le Futuroscope (8e) et le Parc Astérix (9e).","le Parc Astérix (8e) et le Futuroscope (9e).","le Parc Astérix (5e) et le Futuroscope (6e)."], ans: 1, quote: "Le Parc Astérix, qui est huitième, et le Futuroscope, neuvième, avec un peu moins de visiteurs." }
        ],
        transcription: `— Tu rentres encore bien tard ce soir ! Il exagère, ton patron. Vous n'avez pas encore fini votre nouveau catalogue ?
— Si, ça y est, il est enfin terminé.
— Vous avez programmé de nouvelles excursions, de nouvelles visites ?
— Non, pas vraiment. Nous avons augmenté les propositions pour les sites les plus demandés.
— La tour Eiffel, l'Arc de Triomphe, Versailles...
— Mais non, pas du tout ! Sais-tu quel est, de très loin, le site le plus visité en France ? Il a fait plus du double de visites que la tour Eiffel. Eh bien, c'est Disneyland Paris, avec 15,3 millions de visiteurs en 2010. Tu te rends compte ? C'est plus de 20 % des 79 millions de touristes venus en France.
— Et nos vieilles pierres, nos musées, ils n'attirent plus les touristes ?
— Mais si, rassure-toi. Sur les dix sites les plus visités, il y a deux musées, deux centres culturels, deux monuments, un palais...
— Quels sont les musées ? Le Louvre, Orsay ?
— Oui. Le Louvre vient après Disneyland, juste avant la tour Eiffel. Et Orsay est à la septième place.
— Le palais, c'est Versailles, non ? Et le deuxième monument ?
— L'Arc de Triomphe. Avec 1,5 million de visiteurs, il est en dernière position. Versailles est quatrième devant le Centre Pompidou, suivi de la Cité des sciences de La Villette.
— Ça ne fait pas dix sites.
— Tu as raison : il manque deux parcs d'attractions. Le Parc Astérix, qui est huitième, et le Futuroscope, neuvième, avec un peu moins de visiteurs.
— Huit sites sur dix sont en région parisienne et à Paris, alors ?
— C'est normal, c'est là qu'il y a le plus de touristes.`
    },
    7: {
        title: "Les Vergers de Gally",
        subtitle: "Des fruits au bureau",
        type: "Interview",
        audio: "DELFB1_activite07.mp3",
        color: { name: "jaune", accent: "#FFC20E", dark: "#E5AC00", on: "#1f2937", text: "#8A6A00", soft: "#FFF6D9" },
        instruction: "Vous allez entendre une interview. Lisez d'abord les questions, puis écoutez le document et choisissez la bonne réponse.",
        questions: [
            { text: "Les Vergers de Gally livrent aux entreprises…", options: ["des corbeilles de fruits.","des paniers de fruits et légumes.","des plateaux-repas."], ans: 0, quote: "Nos techniciens confectionnent des corbeilles de fruits et ils les livrent directement au sein de votre entreprise." },
            { text: "Ce service existe depuis…", options: ["2000.","2003.","2010."], ans: 1, quote: "Effectivement, depuis 2003, nous proposons un service de fruits en entreprise." },
            { text: "Les fruits proviennent…", options: ["de toute la France.","des grands marchés de Paris.","de leurs propres vergers, près de Versailles."], ans: 2, quote: "Directement de nos vergers, qui sont situés au cœur de la plaine de Versailles." },
            { text: "Les corbeilles sont livrées…", options: ["par une entreprise de messagerie.","directement dans l'entreprise, sur un présentoir.","chez le concierge de l'entreprise."], ans: 1, quote: "Nos paniers sont livrés sur un présentoir, sans sous-traitance par des entreprises de messagerie." },
            { text: "Le contenu des corbeilles…", options: ["dépend des saisons.","est toujours le même.","est choisi par les salariés."], ans: 0, quote: "Ça dépend des saisons." },
            { text: "Les corbeilles sont livrées…", options: ["une fois par mois.","entre une et cinq fois par semaine.","deux fois par jour."], ans: 1, quote: "Entre une et cinq fois par semaine, ça dépend." },
            { text: "Une corbeille contient…", options: ["8 kg de fruits.","12 kg de fruits.","de 8 à 12 kg de fruits."], ans: 2, quote: "…par panier de 8 à 12 kg de fruits…" },
            { text: "Pour un seul panier par semaine, l'entreprise paie…", options: ["45 euros hors taxes.","48 euros hors taxes.","1 euro par salarié."], ans: 1, quote: "…ou 48 euros hors taxes par panier pour un seul panier de fruits par semaine." },
            { text: "Le programme de solidarité soutient notamment…", options: ["la recherche contre le cancer.","le sport en entreprise.","la campagne « Cinq fruits et légumes par jour »."], ans: 0, quote: "Il est solidaire de la Fondation de France pour la recherche contre le cancer…" },
            { text: "Selon la journaliste, manger des fruits au bureau permet…", options: ["de faire des pauses plus longues.","plus de convivialité dans les relations humaines.","de travailler plus vite."], ans: 1, quote: "…permet aussi plus de convivialité et de naturel dans les relations humaines." }
        ],
        transcription: `— Bonjour madame. « Cinq fruits et légumes par jour », tout le monde connaît ce slogan. Si j'ai bien compris, vous fournissez des fruits dans les entreprises. Pourriez-vous m'expliquer comment cela fonctionne ?
— Oui, bien sûr. Effectivement, depuis 2003, nous proposons un service de fruits en entreprise. Nous sommes convaincus du bien-être du végétal dans les entreprises. Nos techniciens confectionnent des corbeilles de fruits et ils les livrent directement au sein de votre entreprise.
— D'où proviennent ces fruits ?
— Directement de nos vergers, qui sont situés au cœur de la plaine de Versailles. Nos paniers sont livrés sur un présentoir, sans sous-traitance par des entreprises de messagerie.
— Qu'est-ce qu'il y a comme fruits dans vos corbeilles ?
— Ça dépend des saisons. En décembre 2010, nous avions par exemple des clémentines, des litchis, différentes sortes de pommes, des kiwis jaunes, des poires, des oranges bien sûr, des bananes, des pamplemousses et des citrons. Et en juin, des pêches, des nectarines, des fraises, des abricots, des cerises, du raisin...
— Vous les livrez combien de fois par semaine ?
— Entre une et cinq fois par semaine, ça dépend.
— Et ça coûte combien, tout ça ?
— Nos tarifs actuels sont de 45 euros hors taxes par panier de 8 à 12 kg de fruits pour deux paniers de fruits ou plus livrés par semaine, ou 48 euros hors taxes par panier pour un seul panier de fruits par semaine. Ce tarif inclut l'installation, la mise à disposition et l'entretien du présentoir, la confection des paniers et la livraison par les techniciens du Verger de Gally. Ce service de distribution est gratuit pour les salariés. Il est solidaire de la Fondation de France pour la recherche contre le cancer, pour le soutien de la filière biologique et pour la protection de l'environnement. Chaque salarié peut alors se servir avec une participation en moyenne de 1 euro pour trois fruits. Il existe un service gratuit de distribution de paniers de fruits frais sans programme de solidarité.
— Une bien belle idée qui, non seulement incite à consommer des fruits frais au bureau tout au long de la journée, mais permet aussi plus de convivialité et de naturel dans les relations humaines. Et en plus, elle représente une attention et une reconnaissance pour les salariés de la part de l'entreprise. Bravo !`
    },
    8: {
        title: "Le tri des déchets",
        subtitle: "Chez Madame Dupré",
        type: "Conversation entre locuteurs natifs",
        audio: "DELFB1_activite08.mp3",
        color: { name: "rouge", accent: "#D7192D", dark: "#A8131F", on: "#ffffff", text: "#C0172A", soft: "#FCE8EA" },
        instruction: "Vous allez entendre une conversation entre une Française et une personne étrangère. Lisez d'abord les questions, puis écoutez le document et choisissez la bonne réponse.",
        questions: [
            { text: "Les déchets recyclables vont dans…", options: ["les sacs noirs.","les sacs jaunes.","les sacs bleus."], ans: 1, quote: "Dans les sacs jaunes, on met tout ce qui peut être recyclé." },
            { text: "La personne qui parle avec Madame Dupré vient…", options: ["de Thaïlande.","du Japon.","du Vietnam."], ans: 0, quote: "Chez moi, en Thaïlande, on commence aussi à trier." },
            { text: "En France, chaque personne produit chaque année…", options: ["39 kilos de déchets.","190 kilos de déchets.","390 kilos de déchets."], ans: 2, quote: "…nous produisons trop de déchets : 390 kilos par an et par personne." },
            { text: "Pour éviter de gaspiller le papier, on…", options: ["n'imprime que ce qui est nécessaire.","n'utilise plus de papier.","achète uniquement du papier recyclé."], ans: 0, quote: "On évite aussi de gaspiller le papier, on n'imprime que ce qui est nécessaire." },
            { text: "Pour les brouillons, Madame Dupré propose d'utiliser…", options: ["de vieux journaux.","des feuilles mal imprimées.","des enveloppes usagées."], ans: 1, quote: "Tenez, pour vos brouillons, vous pouvez utiliser ces feuilles mal imprimées." },
            { text: "Les lingettes à usage unique, Madame Dupré…", options: ["les recycle.","les utilise souvent.","les évite."], ans: 2, quote: "Par exemple, j'évite les lingettes à usage unique…" },
            { text: "Pour les produits ménagers et les piles, elle achète…", options: ["des recharges et des piles rechargeables.","des grands formats.","des produits en vrac."], ans: 0, quote: "…j'achète des recharges pour les produits ménagers et aussi des piles rechargeables." },
            { text: "Pour Madame Dupré, acheter en vrac ou en grand format…", options: ["est la meilleure solution.","n'est pas une bonne solution, car on finit par jeter des aliments.","coûte trop cher."], ans: 1, quote: "Mais pour moi, ce n'est pas vraiment une bonne solution : on ne consomme pas toujours tout avant la date de péremption et on doit jeter des aliments." },
            { text: "Ses vieux vêtements et ses vieux meubles, elle…", options: ["les jette.","les garde.","les donne ou les vend dans des brocantes."], ans: 2, quote: "Je donne mes vêtements et mes vieux meubles. Je vends aussi ce que je peux à des brocantes ou des vide-greniers." },
            { text: "Selon Madame Dupré…", options: ["de plus en plus de gens font des efforts.","tout le monde réduit déjà ses déchets.","personne ne fait d'efforts."], ans: 0, quote: "Non, mais de plus en plus de gens font des efforts." }
        ],
        transcription: `— Madame Dupré, vous avez deux poubelles différentes : une avec des sacs noirs et l'autre avec des sacs jaunes.
— C'est pour trier les déchets. Dans les sacs jaunes, on met tout ce qui peut être recyclé.
— C'est bien pour l'environnement. Chez moi, en Thaïlande, on commence aussi à trier.
— Oui, mais nous produisons trop de déchets : 390 kilos par an et par personne. Il faut absolument essayer de les réduire.
— Comment ?
— Depuis longtemps déjà, les hypermarchés proposent des sacs réutilisables. On évite aussi de gaspiller le papier, on n'imprime que ce qui est nécessaire. Tenez, pour vos brouillons, vous pouvez utiliser ces feuilles mal imprimées.
— Merci, madame. Je trouve aussi qu'en France, vous utilisez trop d'emballages.
— C'est vrai. Moi, je fais de mon mieux pour les réduire. Par exemple, j'évite les lingettes à usage unique, j'achète des recharges pour les produits ménagers et aussi des piles rechargeables. On nous conseille aussi d'acheter en vrac ou en grand format, parce que les portions individuelles produisent beaucoup de déchets. Mais pour moi, ce n'est pas vraiment une bonne solution : on ne consomme pas toujours tout avant la date de péremption et on doit jeter des aliments. Alors, le gaspillage alimentaire augmente.
— Et les vieilles choses, qu'est-ce que vous en faites ?
— Je donne mes vêtements et mes vieux meubles. Je vends aussi ce que je peux à des brocantes ou des vide-greniers.
— Et tout le monde fait comme vous ?
— Non, mais de plus en plus de gens font des efforts. Réduire nos déchets est indispensable si nous voulons protéger l'environnement.`
    },
    9: {
        title: "2011, l'année du métal",
        subtitle: "Recycler l'acier",
        type: "Conversation entre locuteurs natifs",
        audio: "DELFB1_activite09.mp3",
        color: { name: "violet", accent: "#7B2C83", dark: "#5E1F64", on: "#ffffff", text: "#7B2C83", soft: "#F3E9F4" },
        instruction: "Vous allez entendre une conversation entre deux personnes. Lisez d'abord les questions, puis écoutez le document et choisissez la bonne réponse.",
        questions: [
            { text: "L'« Année du métal » concerne…", options: ["toute la France.","la ville de Vichy seulement.","les communes de Vichy Val d'Allier."], ans: 2, quote: "La communauté d'agglomération décrète 2011 « Année du métal ». Ils voudraient arriver à augmenter le tonnage d'acier recyclé sur les trois communes…" },
            { text: "L'objectif est de recycler, par habitant…", options: ["1,95 kilo d'acier.","2 kilos d'acier.","2,5 kilos d'acier."], ans: 1, quote: "…passer de 1,95 kilo à 2 kilos par habitant." },
            { text: "On peut recycler…", options: ["les boîtes de conserve et les canettes.","seulement les boîtes de conserve.","seulement les canettes."], ans: 0, quote: "Avec quoi ? Nos boîtes de conserve ? — Et aussi les canettes." },
            { text: "Avant de jeter les boîtes dans le sac jaune, il faut…", options: ["les laver.","les écraser.","seulement bien les vider."], ans: 2, quote: "…inutile comme tu le fais de nettoyer les boîtes avant de les jeter dans le sac jaune : il suffit de bien les vider." },
            { text: "Quelle part des emballages en acier recyclé provient du tri sélectif ?", options: ["15 %.","20 %.","54 %."], ans: 1, quote: "Tu savais que 20 % des emballages en acier recyclé proviennent du tri sélectif ?" },
            { text: "Selon les écologistes, l'acier est…", options: ["le matériau le plus recyclé au monde.","un matériau difficile à recycler.","moins recyclé que le verre."], ans: 0, quote: "…l'acier est le matériau le plus recyclé au monde." },
            { text: "Une canette est recyclable…", options: ["à 54 %.","à 90 %.","à 100 %, à l'infini."], ans: 2, quote: "On dit qu'une canette est recyclable à 100 %, à l'infini." },
            { text: "Une canette recyclée peut devenir…", options: ["seulement une autre canette.","toutes sortes d'objets : un frigidaire, un pont, un capot de voiture…","seulement des emballages."], ans: 1, quote: "Une canette peut redevenir une canette, mais aussi un frigidaire, un pont, le capot d'une voiture..." },
            { text: "Dans une voiture neuve, la part d'acier recyclé est de…", options: ["20 %.","45 %.","54 %."], ans: 2, quote: "…54 % de l'acier d'une voiture neuve est issu du recyclage." },
            { text: "Recycler l'acier permet aussi…", options: ["de préserver les ressources naturelles et de réduire les gaz à effet de serre.","de faire baisser le prix des voitures.","de créer de nouveaux emplois."], ans: 0, quote: "…préserver les ressources naturelles… diminuer l'énergie nécessaire à la fabrication d'un nouvel acier et réduire l'émission de gaz à effet de serre dans l'air." }
        ],
        transcription: `— Chantal, tu as lu la lettre de l'environnement de Vichy Val d'Allier ?
— Non, je n'ai pas eu le temps. Pourquoi ?
— La communauté d'agglomération décrète 2011 « Année du métal ». Ils voudraient arriver à augmenter le tonnage d'acier recyclé sur les trois communes : passer de 1,95 kilo à 2 kilos par habitant.
— Avec quoi ? Nos boîtes de conserve ?
— Et aussi les canettes. À ce propos, inutile comme tu le fais de nettoyer les boîtes avant de les jeter dans le sac jaune : il suffit de bien les vider. Tu savais que 20 % des emballages en acier recyclé proviennent du tri sélectif ?
— Non. Mais ce que je sais, parce que les écologistes en parlent souvent, c'est que l'acier est le matériau le plus recyclé au monde.
— C'est vrai. On dit qu'une canette est recyclable à 100 %, à l'infini. Le métal ne perd jamais ses qualités d'origine. Une canette peut redevenir une canette, mais aussi un frigidaire, un pont, le capot d'une voiture... D'ailleurs, d'après l'article, 54 % de l'acier d'une voiture neuve est issu du recyclage. Et comme ils l'écrivent avec humour : en théorie, rien n'interdit de penser qu'une partie de l'épée de Vercingétorix revit dans la tour Eiffel.
— Mais recycler, c'est aussi préserver les ressources naturelles, non ?
— La lettre de l'environnement le rappelle, comme elle précise que cela permet aussi de diminuer l'énergie nécessaire à la fabrication d'un nouvel acier et de réduire l'émission de gaz à effet de serre dans l'air.
— Alors recyclons, recyclons ! Tiens, passe-moi ta canette vide.`
    },
    10: {
        title: "Les plats préférés des Français",
        subtitle: "Un sondage culinaire",
        type: "Conversation entre locuteurs natifs",
        audio: "DELFB1_activite10.mp3",
        color: { name: "bleu", accent: "#0077C0", dark: "#005A92", on: "#ffffff", text: "#0077C0", soft: "#E5F1F9" },
        instruction: "Vous allez entendre une conversation dans un couple. Lisez d'abord les questions, puis écoutez le document et choisissez la bonne réponse.",
        questions: [
            { text: "Le sondage a été réalisé…", options: ["en août 2006.","en août 2010.","en août 2011."], ans: 2, quote: "Un sondage réalisé par la SOFRES au mois d'août 2011…" },
            { text: "Le plat préféré des Français est…", options: ["la blanquette de veau.","le magret de canard.","les moules-frites."], ans: 1, quote: "…21 % d'entre nous préfèrent le magret de canard." },
            { text: "Les moules-frites et le couscous obtiennent…", options: ["20 % et 19 %.","21 % et 20 %.","19 % et 18 %."], ans: 0, quote: "…juste devant les moules-frites et le couscous, qui font 20 et 19 %." },
            { text: "La blanquette de veau…", options: ["est toujours à la première place.","était le plat préféré en 2006 et arrive maintenant quatrième.","n'apparaît plus dans le classement."], ans: 1, quote: "Gagnante en 2006, elle obtient la quatrième place avec 18 %." },
            { text: "Parmi les huit plats préférés, sept sont…", options: ["à base de poisson.","à base de légumes.","à base de viande."], ans: 2, quote: "…parmi les huit premiers plats cités par les Français, sept sont à base de viande…" },
            { text: "Le plat préféré des 50-64 ans est…", options: ["le gigot.","le pot-au-feu.","la blanquette de veau."], ans: 1, quote: "Le pot-au-feu est le plat préféré des 50-64 ans…" },
            { text: "Les hommes préfèrent…", options: ["la côte de bœuf.","le magret de canard.","le gigot."], ans: 0, quote: "25 % préfèrent la côte de bœuf et 23 % le magret de canard, plat préféré des femmes." },
            { text: "Le plat préféré des femmes est…", options: ["le pavé de saumon grillé.","les tomates farcies.","le magret de canard."], ans: 2, quote: "…23 % le magret de canard, plat préféré des femmes." },
            { text: "Dans le Nord et dans l'Est, les spécialités régionales…", options: ["arrivent en tête.","n'occupent que la deuxième place.","ne sont pas citées."], ans: 1, quote: "Dans le Nord, les moules-frites n'occupent que la deuxième place… Et dans l'Est, la choucroute est aussi à la deuxième place…" },
            { text: "Dans l'Est, le plat qui arrive en tête est…", options: ["le magret de canard.","la choucroute.","le couscous."], ans: 2, quote: "Et tiens-toi bien : c'est le couscous avec 28 % qui arrive en tête." }
        ],
        transcription: `— Chérie, qu'est-ce qu'on mange ce soir ?
— Du magret de canard.
— Ça alors, c'est drôle ! Nous allons confirmer les résultats de l'enquête que je viens de lire. Un sondage réalisé par la SOFRES au mois d'août 2011 sur les plats préférés des Français révèle que 21 % d'entre nous préfèrent le magret de canard. Tiens, regarde : les Français le placent juste devant les moules-frites et le couscous, qui font 20 et 19 %.
— Ah bon ? Ce n'est plus la blanquette de veau ?
— Non. Gagnante en 2006, elle obtient la quatrième place avec 18 %. Mais nous sommes très carnivores : parmi les huit premiers plats cités par les Français, sept sont à base de viande, que ce soit du bœuf, du veau, de l'agneau ou du canard.
— Pas bien diététique tout ça ! Seuls le couscous et la blanquette ont des légumes.
— Bien sûr, les classements des plats changent selon les régions, le sexe ou l'âge des personnes interrogées.
— Je suis sûre que les plus âgés préfèrent les plats mijotés.
— Tout à fait. Le pot-au-feu est le plat préféré des 50-64 ans, mais pour les plus de 65 ans, le gigot passe avant la blanquette.
— Quels sont les plats que préfèrent les hommes ?
— 25 % préfèrent la côte de bœuf et 23 % le magret de canard, plat préféré des femmes. D'après l'enquête, vous aimez autant les moules-frites que le couscous, les tomates farcies ou le pavé de saumon grillé.
— Les résultats sont les mêmes partout ?
— Non, ils changent aussi selon les régions.
— C'est normal, les gens aiment bien leurs spécialités régionales.
— Oui, mais il y a quelques surprises. Dans le Nord, les moules-frites n'occupent que la deuxième place avec 25 % des voix. Et dans l'Est, la choucroute est aussi à la deuxième place avec 22 %. Et tiens-toi bien : c'est le couscous avec 28 % qui arrive en tête.
— Ça, c'est l'influence méditerranéenne, l'apport des immigrés.
— En attendant, je suis sûr que ton magret sera réussi. On va se régaler !`
    }
};

const LETTERS = ["A", "B", "C", "D"];
const pad = n => String(n).padStart(2, "0");
const pageOf = id => `activite${pad(id)}.html`;

// ---------- Scores (mémorisés dans le navigateur de l'apprenant) ----------
const STORAGE_KEY = "delfb1_co_scores";
function loadScores() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch (e) { return {}; }
}
function saveScore(id, score, total) {
    const all = loadScores();
    all[id] = { score, total };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(all)); } catch (e) { /* stockage indisponible */ }
}
function badgeHtml(id, scores) {
    const s = scores[id];
    if (!s) return `<span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-100 text-slate-500">À faire</span>`;
    const pct = s.score / s.total;
    const cls = pct >= 0.75 ? "bg-emerald-100 text-emerald-700" : pct >= 0.5 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700";
    return `<span class="text-[10px] px-2 py-0.5 rounded-full font-bold ${cls}">${s.score} / ${s.total}</span>`;
}

// =====================================================================
//  PAGE D'ACCUEIL (index.html)
// =====================================================================
function initIndex() {
    const scores = loadScores();
    const grid = document.getElementById("activity-grid");
    grid.innerHTML = Object.keys(activitiesData).map(id => {
        const act = activitiesData[id];
        const done = !!scores[id];
        return `
        <a href="${pageOf(id)}" style="border-top-color:${act.color.accent}" class="group bg-white rounded-2xl border border-slate-200 border-t-8 shadow-sm p-5 flex flex-col justify-between gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div>
                <div class="flex items-center justify-between gap-2 mb-2">
                    <span style="background:${act.color.accent};color:${act.color.on}" class="text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide">Activité ${id}</span>
                    ${badgeHtml(id, scores)}
                </div>
                <h3 class="text-lg font-bold text-slate-800 leading-snug">${act.title}</h3>
                <p class="text-sm text-slate-500 mt-1">${act.subtitle}</p>
                <p class="text-xs text-slate-400 italic mt-2"><i class="fa-solid fa-headphones-simple mr-1"></i>${act.type} · ${act.questions.length} questions</p>
            </div>
            <span style="color:${act.color.text}" class="inline-flex items-center gap-2 text-sm font-semibold">
                ${done ? "Refaire l'activité" : "Commencer"} <i class="fa-solid fa-arrow-right text-xs"></i>
            </span>
        </a>`;
    }).join("");

    const totals = Object.values(scores).reduce((a, s) => ({ score: a.score + s.score, total: a.total + s.total }), { score: 0, total: 0 });
    document.getElementById("index-summary").textContent = totals.total
        ? `${totals.score} / ${totals.total} points sur les activités réalisées`
        : "Aucune activité réalisée pour l'instant";
}

// =====================================================================
//  PAGE D'ACTIVITÉ (activite0X.html)
// =====================================================================
let currentId = null;
let verified = false;

function initActivity(id) {
    currentId = id;
    const act = activitiesData[id];
    document.title = `DELF B1 – Activité ${id} : ${act.title}`;
    applyColor(act.color);

    renderMenu();

    document.getElementById("act-tag").textContent = `Activité ${id}`;
    document.getElementById("act-type").textContent = act.type;
    document.getElementById("act-title").textContent = `Activité ${id} : ${act.title}`;
    document.getElementById("act-instruction").textContent = act.instruction;
    document.getElementById("transcript-text").textContent = act.transcription;

    const audio = document.getElementById("audio-player");
    audio.src = act.audio;
    document.getElementById("audio-name").textContent = act.audio;
    audio.addEventListener("error", () => {
        document.getElementById("audio-error").classList.remove("hidden");
    });

    // Navigation précédente / suivante
    const ids = Object.keys(activitiesData).map(Number);
    const prev = document.getElementById("prev-link");
    const next = document.getElementById("next-link");
    if (ids.includes(id - 1)) prev.href = pageOf(id - 1); else prev.classList.add("invisible");
    if (ids.includes(id + 1)) {
        next.href = pageOf(id + 1);
    } else {
        next.href = "index.html";
        next.innerHTML = `Retour à l'accueil <i class="fa-solid fa-house ml-2"></i>`;
    }

    renderQuestions();
    updateHeaderScore();
}

function renderMenu() {
    const scores = loadScores();
    const nav = document.getElementById("desktop-nav");
    const select = document.getElementById("activity-select");
    nav.innerHTML = "";
    select.innerHTML = `<option value="index.html">Accueil – Toutes les activités</option>`;

    Object.keys(activitiesData).forEach(key => {
        const id = Number(key);
        const act = activitiesData[key];
        const active = id === currentId;

        const a = document.createElement("a");
        a.href = pageOf(id);
        a.className = "w-full text-left p-4 hover:bg-slate-50 transition-all flex items-center justify-between border-l-4";
        a.style.borderLeftColor = act.color.accent;
        if (active) a.style.background = act.color.soft;
        a.innerHTML = `
            <div class="truncate pr-2">
                <span class="text-xs block font-bold" style="color:${act.color.text}">ACTIVITÉ ${id}</span>
                <span class="text-sm font-semibold text-slate-700 block truncate">${act.title}</span>
            </div>
            <span id="badge-${id}">${badgeHtml(id, scores)}</span>`;
        nav.appendChild(a);

        const opt = document.createElement("option");
        opt.value = pageOf(id);
        opt.textContent = `Activité ${id} – ${act.title}`;
        if (active) opt.selected = true;
        select.appendChild(opt);
    });
    select.onchange = e => { window.location.href = e.target.value; };
}

function updateHeaderScore() {
    const act = activitiesData[currentId];
    const s = loadScores()[currentId];
    const el = document.getElementById("header-score");
    const label = document.getElementById("header-score-label");
    if (s) {
        el.textContent = `${s.score} / ${s.total}`;
        label.textContent = verified ? `Score – Activité ${currentId}` : `Dernier score – Activité ${currentId}`;
    } else {
        el.textContent = `-- / ${act.questions.length}`;
        label.textContent = `Score – Activité ${currentId}`;
    }
    const badge = document.getElementById(`badge-${currentId}`);
    if (badge) badge.innerHTML = badgeHtml(currentId, loadScores());
}

function renderQuestions() {
    const act = activitiesData[currentId];
    const form = document.getElementById("exercise-form");
    form.innerHTML = act.questions.map((q, i) => {
        const opts = q.options.map((opt, o) => `
            <label class="option-label flex items-start gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200 cursor-pointer hover:border-blue-300 transition-all text-sm font-medium w-full">
                <input type="radio" name="q${i}" value="${o}" class="h-4 w-4 mt-0.5 shrink-0">
                <span><span class="font-bold text-[#0f2c59] mr-1">${LETTERS[o]}.</span>${opt}</span>
            </label>`).join("");
        const correctLabel = `${LETTERS[q.ans]}. ${q.options[q.ans]}`;
        return `
        <div id="block-${i}" class="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/60 transition-all relative">
            <div class="flex justify-between items-start gap-4">
                <p class="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                    <span class="text-[var(--accent-text)] mr-1">${i + 1}.</span>${q.text}
                </p>
                <span id="indicator-${i}" class="hidden shrink-0 text-sm font-bold flex items-center gap-1"></span>
            </div>
            <div class="flex flex-col gap-2 mt-3">${opts}</div>
            <div id="correction-${i}" class="hidden mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-xs sm:text-sm text-red-800 space-y-2">
                <div class="font-bold flex flex-wrap items-center gap-1.5 text-red-900">
                    <i class="fa-solid fa-circle-check text-emerald-600"></i>
                    <span>Réponse correcte :</span>
                    <span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">${correctLabel}</span>
                </div>
                <div class="border-t border-red-200/60 pt-2">
                    <div class="flex items-center gap-1.5 font-bold mb-1 text-red-900">
                        <i class="fa-solid fa-quote-left text-red-400"></i><span>Dans l'enregistrement :</span>
                    </div>
                    <p class="italic pl-4 text-slate-700 leading-relaxed">« ${q.quote} »</p>
                </div>
            </div>
        </div>`;
    }).join("");

    // Retirer la mise en évidence « non répondu » dès qu'on répond
    form.querySelectorAll("input[type=radio]").forEach(inp => inp.addEventListener("change", () => {
        const block = inp.closest("[id^=block-]");
        block.classList.remove("ring-2", "ring-amber-300");
    }));
}

function verifyCurrentActivity() {
    if (verified) return;
    const act = activitiesData[currentId];
    const total = act.questions.length;

    // Comme à l'examen : toutes les questions doivent avoir une réponse
    const unanswered = act.questions.map((_, i) => i)
        .filter(i => !document.querySelector(`input[name="q${i}"]:checked`));
    if (unanswered.length) {
        unanswered.forEach(i => document.getElementById(`block-${i}`).classList.add("ring-2", "ring-amber-300"));
        const banner = document.getElementById("score-banner");
        banner.className = "mt-6 p-4 rounded-xl flex items-center gap-3 bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium";
        banner.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-amber-500 text-lg"></i>
            <span>Il reste ${unanswered.length} question${unanswered.length > 1 ? "s" : ""} sans réponse (n° ${unanswered.map(i => i + 1).join(", ")}). Répondez à toutes les questions avant de vérifier.</span>`;
        document.getElementById(`block-${unanswered[0]}`).scrollIntoView({ behavior: "smooth", block: "center" });
        return;
    }

    let score = 0;
    act.questions.forEach((q, i) => {
        const chosen = Number(document.querySelector(`input[name="q${i}"]:checked`).value);
        const ok = chosen === q.ans;
        if (ok) score++;
        const block = document.getElementById(`block-${i}`);
        const ind = document.getElementById(`indicator-${i}`);
        ind.classList.remove("hidden");
        if (ok) {
            block.className = "p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 transition-all relative";
            ind.innerHTML = `<span class="text-emerald-600"><i class="fa-solid fa-check mr-1"></i>Correct</span>`;
        } else {
            block.className = "p-5 rounded-2xl bg-red-50/40 border border-red-200 transition-all relative";
            ind.innerHTML = `<span class="text-red-500"><i class="fa-solid fa-xmark mr-1"></i>Incorrect</span>`;
            document.getElementById(`correction-${i}`).classList.remove("hidden");
        }
        // Mettre en évidence la bonne option
        block.querySelectorAll("input[type=radio]").forEach(inp => {
            inp.disabled = true;
            const label = inp.closest("label");
            label.classList.remove("cursor-pointer", "hover:border-blue-300");
            if (Number(inp.value) === q.ans) label.classList.add("border-emerald-400", "bg-emerald-50");
            else if (inp.checked) label.classList.add("border-red-300", "bg-red-50");
        });
    });

    verified = true;
    saveScore(currentId, score, total);
    updateHeaderScore();
    renderScoreBanner(score, total);

    const verifyBtn = document.getElementById("verify-btn");
    verifyBtn.disabled = true;
    verifyBtn.innerHTML = `<i class="fa-solid fa-circle-check mr-2"></i>Activité vérifiée`;
    document.getElementById("transcript-btn").disabled = false;
    document.getElementById("lock-icon").className = "fa-solid fa-unlock ml-1 text-emerald-500";
    document.getElementById("repeat-btn").disabled = false;
}

function renderScoreBanner(score, total) {
    const banner = document.getElementById("score-banner");
    const pct = score / total;
    const [cls, icon, msg] = pct >= 0.75
        ? ["bg-emerald-50 border-emerald-200 text-emerald-800", "fa-trophy text-emerald-500", "Excellent travail ! Votre compréhension est solide."]
        : pct >= 0.5
            ? ["bg-amber-50 border-amber-200 text-amber-800", "fa-thumbs-up text-amber-500", "Bon résultat. Consultez la transcription pour repérer ce qui vous a échappé."]
            : ["bg-red-50 border-red-200 text-red-800", "fa-rotate text-red-500", "Réécoutez le document en lisant la transcription, puis recommencez l'activité."];
    banner.className = `mt-6 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 border ${cls}`;
    banner.innerHTML = `
        <div class="flex items-center gap-3">
            <i class="fa-solid ${icon} text-2xl"></i>
            <div>
                <span class="block text-xs font-bold uppercase tracking-wider opacity-70">Votre score</span>
                <span class="text-sm font-medium">${msg}</span>
            </div>
        </div>
        <span class="text-3xl font-extrabold">${score} / ${total}</span>`;
}

function toggleTranscript() {
    if (!verified) return;
    const panel = document.getElementById("transcript-panel");
    const btnLabel = document.getElementById("transcript-label");
    panel.classList.toggle("hidden");
    const open = !panel.classList.contains("hidden");
    btnLabel.textContent = open ? "Masquer la transcription" : "Consulter la transcription";
    if (open) panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function copyTranscript() {
    const text = activitiesData[currentId].transcription;
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
}

function repeatActivity() {
    verified = false;
    renderQuestions();
    const audio = document.getElementById("audio-player");
    audio.pause();
    audio.currentTime = 0;

    const verifyBtn = document.getElementById("verify-btn");
    verifyBtn.disabled = false;
    verifyBtn.innerHTML = `<i class="fa-solid fa-square-check mr-2"></i>Vérifier mes réponses`;
    document.getElementById("transcript-btn").disabled = true;
    document.getElementById("transcript-label").textContent = "Consulter la transcription";
    document.getElementById("lock-icon").className = "fa-solid fa-lock ml-1";
    document.getElementById("transcript-panel").classList.add("hidden");
    document.getElementById("repeat-btn").disabled = true;
    document.getElementById("score-banner").className = "hidden";
    updateHeaderScore();
    window.scrollTo({ top: 0, behavior: "smooth" });
}
