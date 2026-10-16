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
            { text: "Au début de la conversation, les deux personnes…", options: ["préparent leurs prochains congés.","regardent des souvenirs d'un séjour passé.","organisent la fête d'anniversaire de Nadia."], ans: 1, quote: "Tu as vu les photos des dernières vacances ?" },
            { text: "Qu'est-ce qui frappe l'une des personnes en voyant Nadia ?", options: ["L'enfant ressemble beaucoup à sa mère.","L'enfant a l'air fatiguée sur la photo.","L'enfant a beaucoup grandi."], ans: 2, quote: "Oui, elle a changé, hein ? Remarque, c'est normal, elle a bientôt 8 ans." },
            { text: "Pourquoi est-ce difficile de trouver un cadeau pour Nadia ?", options: ["Personne ne sait vraiment ce qu'elle aime.","Son anniversaire tombe pendant les vacances.","On lui offre déjà énormément de choses."], ans: 2, quote: "Je ne sais pas... Elle est tellement gâtée, elle a tout !" },
            { text: "Quand on lui parle de « Star My Name », la personne croit d'abord qu'il s'agit…", options: ["d'une boutique de jouets en ligne.","de musiciens qui débutent.","d'un spectacle pour enfants."], ans: 1, quote: "C'est un nouveau groupe ?" },
            { text: "Avant d'avoir plus d'informations, la personne pense que ce cadeau sera…", options: ["coûteux et long à recevoir.","difficile à trouver dans les magasins.","mal adapté à l'âge de l'enfant."], ans: 0, quote: "Mais ça doit être cher, et il faut sans doute beaucoup de temps..." },
            { text: "D'après l'expérience d'une amie, la commande…", options: ["revient à moins de trente euros et arrive rapidement.","dépasse trente euros mais arrive en quelques jours.","est bon marché mais prend plusieurs semaines."], ans: 0, quote: "…ça ne lui a coûté pas tout à fait 30 euros, et 2 ou 3 jours après, elle avait l'album avec le livret des paroles." },
            { text: "Comment peut-on se faire une idée de l'album avant de l'acheter ?", options: ["En recevant un premier disque à l'essai.","En demandant conseil au créateur du site.","En écoutant quelques passages sur le site."], ans: 2, quote: "Il te suffit de cliquer dessus et tu entends des extraits des chansons." },
            { text: "Si le prénom de Nadia ne figure pas dans la liste…", options: ["il faudra choisir un prénom qui lui ressemble.","les chansons seront enregistrées spécialement pour elle.","il ne sera pas possible de passer commande."], ans: 1, quote: "Et s'il n'y est pas, les chansons sont enregistrées sur mesure." },
            { text: "Comment la liste des prénoms s'est-elle allongée ?", options: ["Le créateur a chanté pour ses proches, puis pour un cercle de plus en plus large.","Des chanteurs connus ont accepté de participer au projet.","Les clients ont ajouté eux-mêmes leurs prénoms sur le site."], ans: 0, quote: "Puis il l'a fait pour des amis, des amis des amis... À chaque fois, il rechantait les 10 chansons avec le nouveau prénom." },
            { text: "À la fin de la conversation, la personne…", options: ["préfère envoyer seulement une carte électronique.","est convaincue et va passer commande.","veut d'abord en parler aux parents de Nadia."], ans: 1, quote: "Bon, eh bien, je crois que je vais commander un album ! Nadia va être contente." }
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
            { text: "Pourquoi l'amie de Jacqueline est-elle surprise ?", options: ["Jacqueline a beaucoup changé physiquement.","Jacqueline ne répond plus à ses messages.","Jacqueline ne participe plus à une activité qu'elles pratiquaient."], ans: 2, quote: "On ne te voit plus au qi gong. Qu'est-ce que tu deviens ?" },
            { text: "Jacqueline a changé de sport parce qu'elle recherche…", options: ["une activité plus intense.","une activité plus calme et relaxante.","une activité moins chère."], ans: 0, quote: "Non, cette année j'ai envie de bouger un peu plus." },
            { text: "Ce qui caractérise l'urban training, c'est…", options: ["la compétition entre les participants.","l'entraînement sur des machines en salle.","l'utilisation de l'environnement urbain pour s'entraîner."], ans: 2, quote: "On utilise ce qui se trouve autour de nous pour nos exercices." },
            { text: "Un débutant peut-il pratiquer l'urban training ?", options: ["Oui, car l'animateur adapte les exercices à chacun.","Non, ce sport est réservé aux personnes très entraînées.","Oui, mais après quelques mois de qi gong."], ans: 0, quote: "Non, il y a plusieurs niveaux. […] L'animateur nous montre les bons gestes et voit ce qui convient à chacun." },
            { text: "Selon Jacqueline, pour l'équipement, l'essentiel est d'avoir…", options: ["une tenue de sport de marque.","de bonnes chaussures pour courir.","un sac pour transporter son matériel."], ans: 1, quote: "Il faut surtout des chaussures adaptées de type running, c'est-à-dire pour courir…" },
            { text: "Pourquoi conseille-t-on d'avoir de l'eau sur soi ?", options: ["Parce qu'il n'y a pas de fontaines dans la rue.","Parce qu'il est indispensable de boire régulièrement.","Parce que le coach l'exige pour participer."], ans: 1, quote: "Il faut absolument se réhydrater à tout moment." },
            { text: "À quoi sert l'échauffement ?", options: ["À éviter d'avoir mal aux muscles le lendemain.","À apprendre les gestes avec l'animateur.","À faire monter le rythme du cœur petit à petit."], ans: 2, quote: "L'échauffement est très important : il permet d'augmenter progressivement les pulsations cardiaques." },
            { text: "Que font les participants quand il y a des escaliers mécaniques ?", options: ["Ils les montent en courant.","Ils les évitent pour des raisons de sécurité.","Ils s'y reposent entre deux exercices."], ans: 0, quote: "S'il y a des escalators, on les monte le plus vite possible." },
            { text: "Comment se termine une séance ?", options: ["Par une course rapide dans le quartier.","Par des étirements pour se calmer progressivement.","Par quelques mouvements de qi gong."], ans: 1, quote: "Et on termine par un moment de stretching et de détente pour retrouver son rythme cardiaque en douceur." },
            { text: "Selon Jacqueline, l'urban training a aussi l'avantage de…", options: ["permettre de se faire de nouveaux amis.","pouvoir s'entraîner à n'importe quelle heure.","faire voir son quartier autrement."], ans: 2, quote: "Et ce qui est formidable, c'est qu'en plus, tu redécouvres ta ville." }
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
            { text: "Qui est la personne interviewée ?", options: ["Une responsable de la prévention dans la police.","Une victime d'escroquerie.","La présidente d'une association de retraités."], ans: 0, quote: "Vous êtes chef de la division Prévention et Partenariat à la Direction centrale de la sécurité publique." },
            { text: "Selon elle, pourquoi les seniors sont-ils des cibles faciles ?", options: ["Ils gardent généralement beaucoup d'argent chez eux.","Ils vivent souvent seuls, parfois après avoir perdu leur conjoint.","Ils ne savent pas utiliser les nouvelles technologies."], ans: 1, quote: "Ils sont souvent isolés, parfois touchés par le décès de leur mari ou de leur femme." },
            { text: "Comment les voleurs procèdent-ils souvent ?", options: ["Ils se présentent au domicile en prétendant exercer un métier de confiance.","Ils envoient de faux courriers officiels.","Ils téléphonent en se faisant passer pour un membre de la famille."], ans: 0, quote: "Ils sonnent chez eux, se font passer pour de faux policiers ou de faux agents de la société du gaz et de l'électricité." },
            { text: "Pourquoi les voleurs viennent-ils souvent à deux ?", options: ["L'un occupe la victime pendant que l'autre fouille le logement.","Pour paraître plus sérieux et plus crédibles.","Pour pouvoir s'enfuir plus facilement."], ans: 0, quote: "L'un des deux parle avec eux, les distrait, et pendant ce temps, l'autre vole l'argent, les bijoux..." },
            { text: "Avant de faire entrer quelqu'un, il est conseillé de…", options: ["demander l'avis d'un voisin.","vérifier son identité et sa profession.","exiger un rendez-vous par écrit."], ans: 1, quote: "Demander son nom et sa carte professionnelle à la personne qui vient chez eux." },
            { text: "Si la personne âgée a encore des soupçons, elle peut…", options: ["appeler la société du gaz et de l'électricité.","refuser de répondre à toute question.","contacter les forces de l'ordre."], ans: 2, quote: "S'ils ont un doute, ils peuvent appeler le commissariat de police." },
            { text: "Le problème avec certains démarcheurs, c'est qu'ils…", options: ["entrent dans les maisons sans autorisation.","font payer leurs produits ou leurs services beaucoup trop cher.","proposent des travaux qui ne sont jamais réalisés."], ans: 1, quote: "Ceux-ci leur proposent d'acheter des biens ou de réaliser des travaux chez eux à un prix en fait bien au-dessus de leur valeur réelle." },
            { text: "L'« Opération Tranquillité Seniors » est…", options: ["une initiative lancée par une seule mairie.","une association de bénévoles.","un plan d'action mis en place dans tout le pays."], ans: 2, quote: "Depuis l'été 2010, il existe un plan d'action nationale appelé « Opération Tranquillité Seniors »." },
            { text: "Les réunions de prévention s'adressent…", options: ["aux personnes âgées et à leur entourage.","uniquement aux personnes âgées isolées.","aux policiers et aux gendarmes."], ans: 0, quote: "Nous organisons des réunions de prévention avec les personnes âgées et les personnes proches d'elles." },
            { text: "Selon Mme Boinard, la meilleure protection pour les seniors est de…", options: ["ne plus ouvrir leur porte aux inconnus.","installer un système d'alarme.","ne pas rester seuls et garder des contacts."], ans: 2, quote: "Mais nous leur recommandons surtout de garder un lien avec leur famille et leurs voisins, ou encore de faire partie d'associations. C'est l'isolement qui les rend plus fragiles." }
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
            { text: "Pourquoi Mme Bonnefoy consulte-t-elle le médecin ?", options: ["Elle manque d'énergie et de motivation.","Elle n'arrive pas à trouver le sommeil.","Elle veut renouveler son traitement habituel."], ans: 0, quote: "…je me sens fatiguée. Je n'ai envie de rien." },
            { text: "Ce problème…", options: ["est apparu après une maladie.","revient à la même période chaque année.","dure depuis plusieurs années sans interruption."], ans: 1, quote: "Comme tous les ans, à l'entrée de l'hiver, je me sens fatiguée." },
            { text: "Comment dort-elle ?", options: ["Elle se réveille plusieurs fois par nuit.","Elle s'endort très tard et dort peu.","Elle a sans cesse envie de dormir et peine à se lever."], ans: 2, quote: "Trop bien. J'ai toujours sommeil, et après j'ai beaucoup de mal à me réveiller." },
            { text: "Que pense Mme Bonnefoy des traitements classiques ?", options: ["Elle les trouve trop chers.","Elle ne veut plus prendre de médicaments.","Elle pense qu'ils sont dangereux pour les yeux."], ans: 1, quote: "Vous savez docteur, j'en ai assez des médicaments." },
            { text: "Comment le médecin réagit-il quand elle parle de luminothérapie ?", options: ["Il est favorable et l'encourage à essayer.","Il est sceptique et préfère les médicaments.","Il refuse car ce traitement n'est pas reconnu."], ans: 0, quote: "Écoutez, pourquoi pas ? Vous pourriez essayer. C'est un traitement médical reconnu…" },
            { text: "Selon le médecin, les personnes qui suivent ce traitement…", options: ["perdent du poids et retrouvent l'appétit.","ont un meilleur moral et retrouvent un sommeil normal.","n'ont plus besoin de dormir autant."], ans: 1, quote: "Les gens constatent qu'ils sont de meilleure humeur, que leur sommeil redevient normal." },
            { text: "Pour être efficaces, les séances doivent avoir lieu…", options: ["le soir, juste avant d'aller se coucher.","deux fois par semaine, à n'importe quelle heure.","chaque jour, tôt, au moment où le jour se lève."], ans: 2, quote: "…des séances de 30 minutes, tous les matins, le plus près possible du lever du jour." },
            { text: "Où Mme Bonnefoy peut-elle suivre ce traitement ?", options: ["Uniquement dans un centre du sommeil.","À la maison, avec son propre appareil.","Seulement à l'hôpital, sur ordonnance."], ans: 1, quote: "Il y a des centres du sommeil, mais vous pouvez avoir votre propre appareil de luminothérapie chez vous." },
            { text: "Pour la sécurité, il faut vérifier que l'appareil…", options: ["ne s'utilise pas plus de trente minutes.","est placé loin du visage.","protège contre certains rayons nocifs."], ans: 2, quote: "Il faut cependant vous assurer que l'appareil a des filtres contre les rayons ultraviolets et infrarouges." },
            { text: "À la fin, Mme Bonnefoy…", options: ["trouve le traitement cher mais décide de le suivre.","préfère acheter le simulateur d'aube, moins cher.","veut encore réfléchir à cause du prix."], ans: 0, quote: "Merci docteur. Vous m'avez convaincue. C'est un peu cher, mais ça en vaut la peine." }
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
            { text: "Où la personne propose-t-elle à son ami de l'accompagner ?", options: ["Au marché d'un village voisin.","À une réunion pour fonder une association.","À la fête annuelle d'une ferme."], ans: 1, quote: "Participer à la création d'une AMAP. La réunion est à la salle des fêtes." },
            { text: "Une AMAP met en relation…", options: ["plusieurs agriculteurs et une coopérative.","des supermarchés et des fermes locales.","un producteur et un groupe de consommateurs."], ans: 2, quote: "Elle relie un agriculteur à un groupe de consommateurs comme toi et moi…" },
            { text: "Qui peut devenir membre ?", options: ["Tout le monde, quelle que soit sa situation.","Seulement les familles qui ont peu de moyens.","Seulement les habitants du village."], ans: 0, quote: "…à des familles à revenus modestes, des retraités, des sans-abris... tout type de personnes." },
            { text: "Pour les consommateurs, l'intérêt principal est…", options: ["de recevoir des produits gratuitement.","de cueillir eux-mêmes leurs produits.","de manger des produits frais et de qualité à un prix juste."], ans: 2, quote: "C'est la garantie de mettre dans nos assiettes des produits frais et de qualité, au meilleur prix." },
            { text: "Comment le budget est-il établi ?", options: ["En se basant sur les prix pratiqués dans les magasins.","Grâce à un vote de tous les membres.","En calculant tout ce que coûte la production sur une année."], ans: 2, quote: "…calcule un budget qui correspond au coût de sa production sur l'année. Dans ce budget, il compte les salaires, les investissements, tout." },
            { text: "Comment détermine-t-on le prix payé par chaque membre ?", options: ["On répartit le budget entre tous les inscrits.","On paie selon le poids des produits reçus.","Chacun donne la somme qu'il souhaite."], ans: 0, quote: "Ensuite, le budget est divisé par le nombre de personnes inscrites. Ça donne le prix de la part de chaque membre…" },
            { text: "Pour le paiement des paniers…", options: ["il faut obligatoirement payer chaque semaine.","on peut tout régler à l'avance ou trouver un arrangement avec le producteur.","on paie uniquement à la fin de la saison."], ans: 1, quote: "Ils peuvent tous les acheter avant la saison ou bien ils se mettent d'accord avec le fermier." },
            { text: "Un membre qui a peu d'argent peut…", options: ["recevoir un panier plus petit.","demander une aide à la mairie.","aider à la ferme pour payer moins, voire rien."], ans: 2, quote: "Un membre peut aussi échanger une réduction du prix du panier ou même sa gratuité contre des heures de travail à la ferme." },
            { text: "Pourquoi les paniers ne sont-ils pas toujours les mêmes ?", options: ["Ils dépendent de ce que la ferme produit selon la période.","Chaque membre compose son propre panier.","Le producteur achète une partie des produits ailleurs."], ans: 0, quote: "Comme les récoltes changent à chaque saison, les paniers varient en taille et en produits." },
            { text: "Pour l'agriculteur, ce système permet surtout…", options: ["de travailler moins d'heures.","d'écouler sa production en jetant très peu.","de vendre ses produits plus cher."], ans: 1, quote: "…pour le fermier, la garantie de vendre sa production, d'avoir très peu de pertes et de gaspillage." }
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
            { text: "Pourquoi la personne rentre-t-elle tard ?", options: ["Son patron lui a demandé d'accompagner un groupe.","Elle a dû terminer un document présentant les offres de son entreprise.","Elle a participé à une visite organisée."], ans: 1, quote: "Vous n'avez pas encore fini votre nouveau catalogue ? — Si, ça y est, il est enfin terminé." },
            { text: "Qu'est-ce qui a changé dans le catalogue ?", options: ["Il propose surtout des destinations inédites.","Il y a davantage d'offres pour les lieux les plus populaires.","Il ne propose plus de visites de musées."], ans: 1, quote: "Non, pas vraiment. Nous avons augmenté les propositions pour les sites les plus demandés." },
            { text: "L'interlocuteur pense d'abord que les sites les plus demandés sont…", options: ["des parcs d'attractions.","des musées de province.","des monuments célèbres de la capitale."], ans: 2, quote: "La tour Eiffel, l'Arc de Triomphe, Versailles..." },
            { text: "Qu'est-ce qui est étonnant au sujet de Disneyland Paris ?", options: ["Il est presque aussi visité que la tour Eiffel.","Il est surtout fréquenté par les Parisiens.","Il attire plus de deux fois plus de monde que la tour Eiffel."], ans: 2, quote: "Il a fait plus du double de visites que la tour Eiffel. Eh bien, c'est Disneyland Paris…" },
            { text: "Les visiteurs de Disneyland représentent…", options: ["plus d'un cinquième des touristes venus en France.","environ la moitié des touristes venus en France.","moins de 15 % des touristes venus en France."], ans: 0, quote: "C'est plus de 20 % des 79 millions de touristes venus en France." },
            { text: "Qu'est-ce qui inquiète l'interlocuteur ?", options: ["Que le patrimoine historique n'intéresse plus les touristes.","Que les visites coûtent de plus en plus cher.","Que les touristes évitent désormais Paris."], ans: 0, quote: "Et nos vieilles pierres, nos musées, ils n'attirent plus les touristes ?" },
            { text: "Pourquoi la personne le rassure-t-elle ?", options: ["Les musées occupent les premières places.","Le classement compte aussi plusieurs lieux culturels et historiques.","Il n'y a qu'un seul parc d'attractions dans le classement."], ans: 1, quote: "Mais si, rassure-toi. Sur les dix sites les plus visités, il y a deux musées, deux centres culturels, deux monuments, un palais..." },
            { text: "Où se situe le Louvre dans le classement ?", options: ["Entre Disneyland et la tour Eiffel.","Juste après la tour Eiffel.","À la septième place."], ans: 0, quote: "Le Louvre vient après Disneyland, juste avant la tour Eiffel. Et Orsay est à la septième place." },
            { text: "Le dernier site du classement est…", options: ["un monument qui a reçu un million et demi de visiteurs.","un parc d'attractions de province.","un centre culturel parisien."], ans: 0, quote: "L'Arc de Triomphe. Avec 1,5 million de visiteurs, il est en dernière position." },
            { text: "Comment explique-t-on que presque tous les sites soient autour de Paris ?", options: ["Les transports y sont plus pratiques.","Les visites y sont moins chères.","C'est la région qui accueille le plus de touristes."], ans: 2, quote: "Huit sites sur dix sont en région parisienne et à Paris, alors ? — C'est normal, c'est là qu'il y a le plus de touristes." }
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
            { text: "Dans cette interview, on présente…", options: ["une campagne nationale pour manger plus de légumes.","un marché bio réservé aux salariés.","un service qui apporte des fruits frais sur le lieu de travail."], ans: 2, quote: "Si j'ai bien compris, vous fournissez des fruits dans les entreprises." },
            { text: "Selon la responsable, son entreprise est convaincue…", options: ["que les salariés mangent mal le midi.","que les végétaux sont bénéfiques au travail.","que les fruits remplacent un repas."], ans: 1, quote: "Nous sommes convaincus du bien-être du végétal dans les entreprises." },
            { text: "D'où viennent les fruits ?", options: ["De producteurs de toutes les régions de France.","D'importateurs, selon les saisons.","De leurs propres cultures, près de Versailles."], ans: 2, quote: "Directement de nos vergers, qui sont situés au cœur de la plaine de Versailles." },
            { text: "Pour la livraison, l'entreprise…", options: ["fait appel à un transporteur spécialisé.","s'occupe elle-même du transport.","envoie les fruits par la poste."], ans: 1, quote: "Nos paniers sont livrés sur un présentoir, sans sous-traitance par des entreprises de messagerie." },
            { text: "En hiver, les corbeilles contiennent par exemple…", options: ["des fruits rouges et des pêches.","des agrumes et des fruits exotiques.","uniquement des pommes et des poires."], ans: 1, quote: "En décembre 2010, nous avions par exemple des clémentines, des litchis, […] des oranges bien sûr, des bananes, des pamplemousses et des citrons." },
            { text: "Le nombre de livraisons…", options: ["varie selon les besoins de l'entreprise.","est fixé à une fois par semaine.","est le même pour tous les clients."], ans: 0, quote: "Entre une et cinq fois par semaine, ça dépend." },
            { text: "Le prix par panier est plus avantageux quand l'entreprise…", options: ["commande un seul panier par semaine.","s'engage pour une année entière.","commande plusieurs paniers par semaine."], ans: 2, quote: "…45 euros hors taxes par panier […] pour deux paniers de fruits ou plus livrés par semaine, ou 48 euros hors taxes par panier pour un seul panier." },
            { text: "Le prix payé par l'entreprise comprend…", options: ["le présentoir, la préparation et la livraison des paniers.","uniquement les fruits.","les fruits et un don à une fondation."], ans: 0, quote: "Ce tarif inclut l'installation, la mise à disposition et l'entretien du présentoir, la confection des paniers et la livraison…" },
            { text: "Avec le programme solidaire, les salariés…", options: ["versent une petite participation pour soutenir de bonnes causes.","se servent sans rien payer.","paient chaque fruit au prix du marché."], ans: 0, quote: "Il est solidaire de la Fondation de France pour la recherche contre le cancer… Chaque salarié peut alors se servir avec une participation en moyenne de 1 euro pour trois fruits." },
            { text: "Selon la journaliste, cette initiative montre aussi que l'entreprise…", options: ["veut que ses salariés travaillent plus.","est attentive à ses salariés et les reconnaît.","cherche surtout à faire des économies."], ans: 1, quote: "Et en plus, elle représente une attention et une reconnaissance pour les salariés de la part de l'entreprise." }
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
            { text: "Pourquoi Mme Dupré a-t-elle deux poubelles ?", options: ["Pour séparer ce qui se recycle du reste.","Pour séparer le verre et le papier.","Pour séparer la cuisine et la salle de bain."], ans: 0, quote: "C'est pour trier les déchets. Dans les sacs jaunes, on met tout ce qui peut être recyclé." },
            { text: "Dans le pays de son interlocuteur, le tri des déchets…", options: ["existe depuis très longtemps.","n'existe pas encore.","est en train de se développer."], ans: 2, quote: "Chez moi, en Thaïlande, on commence aussi à trier." },
            { text: "Selon Mme Dupré, le vrai problème en France, c'est…", options: ["la quantité de déchets produite par chacun.","le manque de poubelles dans les rues.","le prix du tri pour les habitants."], ans: 0, quote: "Oui, mais nous produisons trop de déchets : 390 kilos par an et par personne." },
            { text: "Que propose Mme Dupré à son interlocuteur ?", options: ["Un sac réutilisable pour ses courses.","Un guide pour apprendre à trier.","Des feuilles ratées pour écrire ses brouillons."], ans: 2, quote: "Tenez, pour vos brouillons, vous pouvez utiliser ces feuilles mal imprimées." },
            { text: "Qu'est-ce qui étonne l'interlocuteur en France ?", options: ["On ne trie pas assez les déchets.","On imprime trop de documents.","On emballe beaucoup trop les produits."], ans: 2, quote: "Je trouve aussi qu'en France, vous utilisez trop d'emballages." },
            { text: "Pour produire moins de déchets, Mme Dupré…", options: ["achète tout en grande quantité.","choisit des produits qu'on peut recharger ou réutiliser.","fait ses courses uniquement au marché."], ans: 1, quote: "…j'évite les lingettes à usage unique, j'achète des recharges pour les produits ménagers et aussi des piles rechargeables." },
            { text: "On conseille d'éviter les portions individuelles parce qu'elles…", options: ["génèrent beaucoup de déchets.","coûtent plus cher.","se conservent moins longtemps."], ans: 0, quote: "…parce que les portions individuelles produisent beaucoup de déchets." },
            { text: "Que pense Mme Dupré des achats en grande quantité ?", options: ["C'est la solution la plus écologique.","Ils font jeter de la nourriture qui n'a pas été consommée à temps.","Ils sont trop difficiles à transporter."], ans: 1, quote: "…on ne consomme pas toujours tout avant la date de péremption et on doit jeter des aliments. Alors, le gaspillage alimentaire augmente." },
            { text: "Que fait-elle de ses vieilles affaires ?", options: ["Elle les apporte à la déchetterie.","Elle les répare pour les garder.","Elle leur donne une seconde vie en les offrant ou en les revendant."], ans: 2, quote: "Je donne mes vêtements et mes vieux meubles. Je vends aussi ce que je peux à des brocantes ou des vide-greniers." },
            { text: "Quelle est la conclusion de Mme Dupré ?", options: ["Les Français trient tous correctement leurs déchets.","Les Français font plus d'efforts, mais pas encore tous.","Les efforts individuels ne servent à rien."], ans: 1, quote: "Non, mais de plus en plus de gens font des efforts. Réduire nos déchets est indispensable si nous voulons protéger l'environnement." }
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
            { text: "Qu'est-ce que « l'Année du métal » ?", options: ["Une exposition sur l'histoire du métal.","Une nouvelle loi nationale sur les déchets.","Une opération locale pour recycler davantage d'acier."], ans: 2, quote: "La communauté d'agglomération décrète 2011 « Année du métal ». Ils voudraient arriver à augmenter le tonnage d'acier recyclé sur les trois communes…" },
            { text: "Quel est l'objectif fixé ?", options: ["Doubler la quantité d'acier recyclé.","Une légère augmentation de la quantité recyclée par habitant.","Réduire la consommation de canettes."], ans: 1, quote: "…passer de 1,95 kilo à 2 kilos par habitant." },
            { text: "Que fait Chantal avec ses boîtes de conserve ?", options: ["Elle les lave, ce qui est inutile.","Elle les jette avec les ordures ménagères.","Elle les garde pour les réutiliser."], ans: 0, quote: "À ce propos, inutile comme tu le fais de nettoyer les boîtes avant de les jeter dans le sac jaune : il suffit de bien les vider." },
            { text: "Le tri sélectif fournit…", options: ["un cinquième des emballages en acier recyclé.","la moitié de l'acier recyclé.","la totalité de l'acier recyclé."], ans: 0, quote: "Tu savais que 20 % des emballages en acier recyclé proviennent du tri sélectif ?" },
            { text: "Chantal sait que l'acier est très recyclé parce que…", options: ["elle l'a lu dans la lettre de l'environnement.","c'est un sujet dont les écologistes parlent souvent.","elle travaille dans une entreprise de recyclage."], ans: 1, quote: "Mais ce que je sais, parce que les écologistes en parlent souvent, c'est que l'acier est le matériau le plus recyclé au monde." },
            { text: "Quelle est la particularité du métal recyclé ?", options: ["Il perd un peu de qualité à chaque recyclage.","Il ne peut servir qu'à fabriquer des emballages.","Il ne perd jamais ses qualités, même recyclé plusieurs fois."], ans: 2, quote: "On dit qu'une canette est recyclable à 100 %, à l'infini. Le métal ne perd jamais ses qualités d'origine." },
            { text: "Plus de la moitié de l'acier d'une voiture neuve…", options: ["provient du recyclage.","est importée de l'étranger.","est ensuite transformée en canettes."], ans: 0, quote: "D'ailleurs, d'après l'article, 54 % de l'acier d'une voiture neuve est issu du recyclage." },
            { text: "La phrase sur l'épée de Vercingétorix et la tour Eiffel est…", options: ["une plaisanterie pour montrer que le métal se recycle sans fin.","un fait historique prouvé par des scientifiques.","une critique de l'industrie du recyclage."], ans: 0, quote: "Et comme ils l'écrivent avec humour : en théorie, rien n'interdit de penser qu'une partie de l'épée de Vercingétorix revit dans la tour Eiffel." },
            { text: "En plus de préserver les ressources, recycler l'acier permet…", options: ["de faire baisser les impôts locaux.","de consommer moins d'énergie et de polluer moins.","de fabriquer des voitures moins chères."], ans: 1, quote: "…cela permet aussi de diminuer l'énergie nécessaire à la fabrication d'un nouvel acier et de réduire l'émission de gaz à effet de serre dans l'air." },
            { text: "À la fin de la conversation, Chantal…", options: ["reste sceptique sur l'utilité du recyclage.","décide de lire la lettre de l'environnement.","veut appliquer tout de suite ce qu'elle a appris."], ans: 2, quote: "Alors recyclons, recyclons ! Tiens, passe-moi ta canette vide." }
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
            { text: "Pourquoi l'homme trouve-t-il le menu du soir amusant ?", options: ["C'est son plat préféré depuis l'enfance.","C'est justement le plat qui arrive en tête d'un sondage.","Il en a déjà mangé à midi."], ans: 1, quote: "Nous allons confirmer les résultats de l'enquête que je viens de lire." },
            { text: "Dans le sondage, le magret de canard devance les autres plats…", options: ["de très loin.","uniquement chez les femmes.","de très peu."], ans: 2, quote: "…21 % d'entre nous préfèrent le magret de canard. […] juste devant les moules-frites et le couscous, qui font 20 et 19 %." },
            { text: "Qu'est-il arrivé à la blanquette de veau ?", options: ["Elle n'a jamais été très appréciée.","Elle reste le plat préféré des Français.","Elle était en tête en 2006 mais a perdu sa place."], ans: 2, quote: "Ah bon ? Ce n'est plus la blanquette de veau ? — Non. Gagnante en 2006, elle obtient la quatrième place avec 18 %." },
            { text: "Que révèle le sondage sur les goûts des Français ?", options: ["Ils apprécient particulièrement les plats de viande.","Ils préfèrent le poisson à la viande.","Ils mangent de plus en plus de légumes."], ans: 0, quote: "Mais nous sommes très carnivores : parmi les huit premiers plats cités par les Français, sept sont à base de viande…" },
            { text: "Pourquoi la femme dit-elle « Pas bien diététique tout ça ! » ?", options: ["Les plats préférés sont trop salés.","Peu de plats préférés contiennent des légumes.","Les portions sont trop importantes."], ans: 1, quote: "Pas bien diététique tout ça ! Seuls le couscous et la blanquette ont des légumes." },
            { text: "Selon la femme, les personnes âgées préfèrent…", options: ["les plats rapides à préparer.","les plats venus d'autres pays.","les plats qui cuisent longtemps."], ans: 2, quote: "Je suis sûre que les plus âgés préfèrent les plats mijotés. — Tout à fait." },
            { text: "Chez les plus de 65 ans, le gigot…", options: ["arrive derrière la blanquette.","est mieux classé que la blanquette.","n'apparaît pas dans le classement."], ans: 1, quote: "…mais pour les plus de 65 ans, le gigot passe avant la blanquette." },
            { text: "Les hommes et les femmes…", options: ["n'ont pas le même plat préféré.","préfèrent tous le magret de canard.","placent tous la côte de bœuf en tête."], ans: 0, quote: "25 % préfèrent la côte de bœuf et 23 % le magret de canard, plat préféré des femmes." },
            { text: "Qu'est-ce qui surprend dans les résultats par région ?", options: ["Les spécialités locales ne sont pas toujours en tête.","Toutes les régions ont les mêmes préférences.","Le magret arrive premier partout."], ans: 0, quote: "Dans le Nord, les moules-frites n'occupent que la deuxième place… Et dans l'Est, la choucroute est aussi à la deuxième place…" },
            { text: "Comment la femme explique-t-elle le succès du couscous dans l'Est ?", options: ["Par son prix peu élevé.","Par l'influence des cultures méditerranéennes.","Par la proximité de l'Allemagne."], ans: 1, quote: "Ça, c'est l'influence méditerranéenne, l'apport des immigrés." }
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
    // GitHub Pages distingue majuscules et minuscules : on essaie plusieurs extensions
    const base = act.audio.replace(/\.[^.]+$/, "");
    const candidates = [".mp3", ".MP3", ".m4a", ".wav"].map(ext => base + ext);
    let attempt = 0;
    audio.src = candidates[attempt];
    document.getElementById("audio-name").textContent = act.audio;
    audio.addEventListener("error", () => {
        if (++attempt < candidates.length) {
            audio.src = candidates[attempt];
        } else {
            document.getElementById("audio-error").classList.remove("hidden");
        }
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
