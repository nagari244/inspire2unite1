// =====================================================================
//  DELF B1 – Compréhension de l'oral : données et logique partagées
//  Format certification : questions fermées uniquement
//  (QCM à 3 choix et Vrai / Faux, sans « On ne sait pas »)
// =====================================================================

const VF = ["Vrai", "Faux"];

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
            { text: "Nadia est…", options: ["la fille de la personne qui cherche un cadeau.", "la nièce de la personne qui cherche un cadeau.", "une amie de la famille."], ans: 1, quote: "…un album de 10 chansons personnalisées avec le prénom de ta nièce." },
            { text: "Pour son prochain anniversaire, Nadia va avoir…", options: ["8 ans.", "10 ans.", "7 ans."], ans: 0, quote: "Remarque, c'est normal, elle a bientôt 8 ans." },
            { text: "Pourquoi est-il difficile de choisir un cadeau pour Nadia ?", options: ["Elle n'aime pas les jouets.", "Le budget est limité.", "Elle a déjà tout."], ans: 2, quote: "Elle est tellement gâtée, elle a tout !" },
            { text: "« Star My Name », c'est…", options: ["un nouveau groupe de musique.", "un site où l'on commande des chansons personnalisées.", "une émission de télévision pour enfants."], ans: 1, quote: "Starmyname.com est un site où tu peux commander un album de 10 chansons personnalisées…" },
            { text: "L'amie qui a commandé un album a payé…", options: ["un peu moins de 30 euros.", "exactement 30 euros.", "plus de 30 euros."], ans: 0, quote: "…ça ne lui a coûté pas tout à fait 30 euros…" },
            { text: "Elle a reçu l'album…", options: ["le jour même.", "une semaine après.", "2 ou 3 jours après."], ans: 2, quote: "…et 2 ou 3 jours après, elle avait l'album avec le livret des paroles." },
            { text: "Sur le site, on peut écouter des extraits des chansons avant de commander.", options: VF, ans: 0, quote: "Il te suffit de cliquer dessus et tu entends des extraits des chansons." },
            { text: "Si le prénom de l'enfant n'est pas dans la liste…", options: ["on ne peut pas commander l'album.", "les chansons sont enregistrées sur mesure.", "on doit choisir un prénom proche."], ans: 1, quote: "Et s'il n'y est pas, les chansons sont enregistrées sur mesure." },
            { text: "Olivier, le créateur du site, a eu cette idée…", options: ["pour la naissance de son premier enfant.", "pour l'anniversaire de sa nièce.", "pour un concours de chanson."], ans: 0, quote: "Olivier, le créateur du site, a eu cette idée pour la naissance de son premier enfant." },
            { text: "Le site propose uniquement des albums de chansons.", options: VF, ans: 1, quote: "Tu peux même lui envoyer une carte d'anniversaire électronique… faire imprimer des cartes d'invitation pour ses copains et copines !" }
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
            { text: "Jacqueline ne fait plus de qi gong parce qu'elle…", options: ["n'a plus le temps.", "a envie de bouger davantage.", "trouve ce sport trop cher."], ans: 1, quote: "Non, cette année j'ai envie de bouger un peu plus. Je fais de l'urban training." },
            { text: "L'urban training se pratique…", options: ["dans la rue, en petit groupe, avec un coach.", "dans une salle de sport, en équipe.", "seul, à la maison."], ans: 0, quote: "Ça se pratique dans la rue, en petit groupe et avec un coach ? C'est bien ça, non ? — Oui." },
            { text: "Pour faire les exercices, on utilise…", options: ["des appareils de musculation.", "un tapis et des haltères.", "ce qui se trouve autour de nous."], ans: 2, quote: "On utilise ce qui se trouve autour de nous pour nos exercices." },
            { text: "L'urban training est réservé aux sportifs confirmés.", options: VF, ans: 1, quote: "Non, il y a plusieurs niveaux." },
            { text: "Quel équipement est conseillé ?", options: ["Une tenue spéciale et un casque.", "Des chaussures de running et des gants.", "Un maillot de club et des genouillères."], ans: 1, quote: "Il faut surtout des chaussures adaptées de type running… Il faut aussi des gants pour protéger les mains." },
            { text: "La ceinture sert à…", options: ["accrocher une bouteille d'eau.", "protéger le dos.", "ranger son téléphone."], ans: 0, quote: "…on recommande d'avoir une ceinture pour accrocher une bouteille d'eau." },
            { text: "L'échauffement dure environ…", options: ["5 minutes.", "30 minutes.", "10 minutes."], ans: 2, quote: "On commence par l'échauffement pendant 10 minutes environ." },
            { text: "Parmi ces exercices, lequel est mentionné ?", options: ["Des pompes sur un banc.", "Des sauts à la corde.", "Des longueurs de piscine."], ans: 0, quote: "Des abdos sur des marches, des tractions accrochées à une barre, ou encore des pompes sur un banc." },
            { text: "Une séance d'urban training dure environ une heure.", options: VF, ans: 0, quote: "Et tout ça pendant une heure ? — Oui." },
            { text: "Selon Jacqueline, l'autre grand avantage de ce sport, c'est qu'on…", options: ["rencontre beaucoup de monde.", "redécouvre sa ville.", "ne paie rien."], ans: 1, quote: "Et ce qui est formidable, c'est qu'en plus, tu redécouvres ta ville." }
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
            { text: "Madame Boinard travaille…", options: ["dans une association d'aide aux seniors.", "à la Direction centrale de la sécurité publique.", "pour la société du gaz et de l'électricité."], ans: 1, quote: "Vous êtes chef de la division Prévention et Partenariat à la Direction centrale de la sécurité publique." },
            { text: "Les personnes les plus vulnérables aux arnaques sont…", options: ["les personnes âgées.", "les jeunes adultes.", "les commerçants."], ans: 0, quote: "Ce sont les personnes âgées. Les escrocs profitent de leur faiblesse." },
            { text: "Ces personnes sont souvent victimes parce qu'elles…", options: ["ont beaucoup d'argent chez elles.", "habitent dans les grandes villes.", "sont souvent isolées."], ans: 2, quote: "Ils sont souvent isolés, parfois touchés par le décès de leur mari ou de leur femme." },
            { text: "Les voleurs se font passer pour…", options: ["des médecins ou des infirmiers.", "des policiers ou des agents du gaz et de l'électricité.", "des facteurs ou des livreurs."], ans: 1, quote: "Ils sonnent chez eux, se font passer pour de faux policiers ou de faux agents de la société du gaz et de l'électricité." },
            { text: "Les voleurs viennent souvent à deux : l'un distrait la victime pendant que l'autre vole.", options: VF, ans: 0, quote: "Souvent, ils viennent à deux. L'un des deux parle avec eux, les distrait, et pendant ce temps, l'autre vole l'argent, les bijoux..." },
            { text: "Quand quelqu'un sonne chez elles, les personnes âgées doivent…", options: ["ne jamais ouvrir la porte.", "appeler immédiatement un voisin.", "demander son nom et sa carte professionnelle."], ans: 2, quote: "Demander son nom et sa carte professionnelle à la personne qui vient chez eux." },
            { text: "En cas de doute, elles peuvent appeler le commissariat de police.", options: VF, ans: 0, quote: "S'ils ont un doute, ils peuvent appeler le commissariat de police." },
            { text: "Les démarcheurs proposent des biens ou des travaux…", options: ["à un prix bien supérieur à leur valeur réelle.", "gratuitement, pour gagner leur confiance.", "à prix réduit, mais de mauvaise qualité."], ans: 0, quote: "…à un prix en fait bien au-dessus de leur valeur réelle." },
            { text: "L'« Opération Tranquillité Seniors » existe depuis…", options: ["l'hiver 2000.", "l'été 2010.", "le printemps 2012."], ans: 1, quote: "Depuis l'été 2010, il existe un plan d'action nationale appelé « Opération Tranquillité Seniors »." },
            { text: "Le conseil le plus important de la police est de…", options: ["installer une alarme à la maison.", "ne pas garder d'argent chez soi.", "garder un lien avec sa famille, ses voisins ou des associations."], ans: 2, quote: "…nous leur recommandons surtout de garder un lien avec leur famille et leurs voisins, ou encore de faire partie d'associations." }
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
            { text: "Madame Bonnefoy va chez le médecin parce qu'elle…", options: ["dort mal la nuit.", "se sent fatiguée et n'a envie de rien.", "a mal aux yeux."], ans: 1, quote: "…je me sens fatiguée. Je n'ai envie de rien." },
            { text: "Ce problème apparaît…", options: ["chaque année, au début de l'hiver.", "pour la première fois cette année.", "chaque été, pendant les vacances."], ans: 0, quote: "Comme tous les ans, à l'entrée de l'hiver, je me sens fatiguée." },
            { text: "Madame Bonnefoy a beaucoup de mal à se réveiller.", options: VF, ans: 0, quote: "J'ai toujours sommeil, et après j'ai beaucoup de mal à me réveiller." },
            { text: "Selon le médecin, Madame Bonnefoy souffre…", options: ["d'une maladie du sommeil.", "d'une allergie.", "d'une dépression saisonnière."], ans: 2, quote: "C'est un peu de dépression saisonnière, Madame Bonnefoy." },
            { text: "Madame Bonnefoy souhaite un traitement avec des médicaments.", options: VF, ans: 1, quote: "Vous savez docteur, j'en ai assez des médicaments." },
            { text: "Dans les pays nordiques, cette maladie touche…", options: ["1 à 2 % des personnes.", "5 à 10 % des personnes.", "plus de 20 % des personnes."], ans: 1, quote: "Dans les pays nordiques où 5 % et même 10 % des personnes en souffrent…" },
            { text: "D'après les études, le plus efficace, ce sont des séances de…", options: ["30 minutes tous les matins, près du lever du jour.", "30 minutes tous les soirs, avant de dormir.", "une heure, une fois par semaine."], ans: 0, quote: "…le plus efficace ce sont des séances de 30 minutes, tous les matins, le plus près possible du lever du jour." },
            { text: "La lampe de luminothérapie doit…", options: ["avoir une puissance de 500 lux et être placée à 1 mètre.", "avoir une puissance de 3 000 lux et être placée à 40 cm.", "avoir au moins 1 500 lux et être placée à 30 cm."], ans: 2, quote: "Il vous faut une lampe de 1 500 lux minimum, placée à 30 centimètres de vous." },
            { text: "Un appareil de luminothérapie coûte environ…", options: ["100 euros.", "200 à 300 euros.", "plus de 500 euros."], ans: 1, quote: "Il faut compter 200 à 300 euros environ." },
            { text: "Le simulateur d'aube sert à…", options: ["se réveiller en douceur.", "s'endormir plus facilement.", "remplacer la lampe de luminothérapie."], ans: 0, quote: "…ces petits appareils vous réveillent en douceur en simulant le lever du soleil." }
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
            { text: "La réunion pour créer l'AMAP a lieu…", options: ["à la mairie de Puy-Guillaume.", "dans une ferme de la région.", "à la salle des fêtes de Limons."], ans: 2, quote: "La réunion est à la salle des fêtes." },
            { text: "AMAP signifie…", options: ["Association pour le Maintien de l'Agriculture Paysanne.", "Association des Marchés Agricoles de Proximité.", "Aide aux Maraîchers et Agriculteurs Paysans."], ans: 0, quote: "Une AMAP : une Association pour le Maintien de l'Agriculture Paysanne." },
            { text: "Seules les familles à revenus modestes peuvent faire partie d'une AMAP.", options: VF, ans: 1, quote: "…des familles à revenus modestes, des retraités, des sans-abris... tout type de personnes." },
            { text: "Le budget annuel est calculé par…", options: ["la mairie.", "l'agriculteur, aidé par un comité de consommateurs.", "les consommateurs seuls."], ans: 1, quote: "…l'agriculteur, aidé par un comité de consommateurs, calcule un budget qui correspond au coût de sa production sur l'année." },
            { text: "Le prix de la part de chaque membre correspond…", options: ["au budget divisé par le nombre de personnes inscrites.", "au prix des produits au supermarché.", "au poids des produits reçus."], ans: 0, quote: "Ensuite, le budget est divisé par le nombre de personnes inscrites. Ça donne le prix de la part de chaque membre…" },
            { text: "En général, les paniers sont distribués…", options: ["tous les jours, toute l'année.", "une fois par mois.", "une fois par semaine, pendant deux saisons."], ans: 2, quote: "En général pendant deux saisons : printemps-été et automne-hiver. (…) un par semaine." },
            { text: "Un membre peut payer moins cher son panier en travaillant à la ferme.", options: VF, ans: 0, quote: "Un membre peut aussi échanger une réduction du prix du panier ou même sa gratuité contre des heures de travail à la ferme." },
            { text: "Un panier correspond aux besoins…", options: ["d'une personne seule.", "d'une famille de quatre personnes.", "de deux familles."], ans: 1, quote: "Normalement, un panier correspond aux besoins d'une famille de quatre personnes." },
            { text: "Les paniers ont toujours la même taille et les mêmes produits.", options: VF, ans: 1, quote: "Comme les récoltes changent à chaque saison, les paniers varient en taille et en produits." },
            { text: "Pour le fermier, l'avantage principal est…", options: ["de travailler moins d'heures.", "d'être sûr de vendre sa production, avec peu de pertes.", "de pouvoir exporter ses produits."], ans: 1, quote: "…pour le fermier, la garantie de vendre sa production, d'avoir très peu de pertes et de gaspillage." }
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
        const isVF = q.options === VF;
        const opts = q.options.map((opt, o) => `
            <label class="option-label flex items-start gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200 cursor-pointer hover:border-blue-300 transition-all text-sm font-medium ${isVF ? "" : "w-full"}">
                <input type="radio" name="q${i}" value="${o}" class="h-4 w-4 mt-0.5 shrink-0">
                <span>${isVF ? "" : `<span class="font-bold text-[#0f2c59] mr-1">${LETTERS[o]}.</span>`}${opt}</span>
            </label>`).join("");
        const correctLabel = isVF ? q.options[q.ans] : `${LETTERS[q.ans]}. ${q.options[q.ans]}`;
        return `
        <div id="block-${i}" class="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/60 transition-all relative">
            <div class="flex justify-between items-start gap-4">
                <p class="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                    <span class="text-[var(--accent-text)] mr-1">${i + 1}.</span>${q.text}
                    ${isVF ? `<span class="ml-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 align-middle">Vrai / Faux</span>` : ""}
                </p>
                <span id="indicator-${i}" class="hidden shrink-0 text-sm font-bold flex items-center gap-1"></span>
            </div>
            <div class="${isVF ? "flex flex-wrap gap-3" : "flex flex-col gap-2"} mt-3">${opts}</div>
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
