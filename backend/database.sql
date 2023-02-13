-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `shop_around_me`
--
-- --------------------------------------------------------

--
-- Structure de la table `shop`
--

CREATE TABLE `shop` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `brand` varchar(50),
  `type` varchar(50),
  `address` varchar(100),
  `opening_hours` varchar(255),
  `website` varchar(100),
  `email` varchar(100),
  `phone` varchar (15),
  `fb_page` varchar(255),
  `insta_page` varchar(255),
  `x` float NOT NULL,
  `y` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `shop`
--

INSERT INTO `shop` (`id`, `name`, `brand`, `type`, `address`, `opening_hours`, `website`, `phone`, `email`, `fb_page`, `insta_page`, `x`, `y`) VALUES
(1, "Magasin Fossier", "Maison Fossier", "biscuit", "25 Cr Jean-Baptiste Langlet, 51100 Reims", "", "http://www.fossier.fr/", "0326475984", "fossier@fossier.fr", "https://www.facebook.com/biscuitsfossier", "https://www.instagram.com/biscuitsfossier/", 4.030900226012637, 49.25594501951917)

/* INSERT QUERY NO: 1 */
,
(
2, 'Boutique officielle SDR Delaune', 'Stade de Reims', 'vêtements', '33 Chaussée Bocquaine, 51100 Reims', '{"lundi": "fermé", "mardi": "fermé", "mercredi": "10:00–12:00 14:00-18:00", "jeudi": "10:00–12:00 14:00-18:00", "vendredi": "10:00–12:00 14:00-18:00", "samedi": "10:00–12:00 14:00-18:00", "dimanche": "fermé"}', 'http://boutique.stade-de-reims.com/', '08.91.02.49.33', 'boutique@stade-de-reims.com', 'https://www.facebook.com/SDROFFICIELLE', 'https://www.instagram.com/stadedereims/', 4.025034427642822, 49.24589157104492
)
,
(
3, 'Boutique officielle SDR Centre', 'Stade de Reims', 'vêtements', '1 Rue Chanzy, 51100 Reims', '{"lundi": "fermé", "mardi": "13:00-18:00", "mercredi": "13:00-18:00", "jeudi": "13:00-18:00", "vendredi": "13:00-18:00", "samedi": "13:00-19:00", "dimanche": "fermé"}', 'http://boutique.stade-de-reims.com/', '08.91.02.49.33', 'boutique@stade-de-reims.com', 'https://www.facebook.com/SDROFFICIELLE', 'https://www.instagram.com/stadedereims/', 4.032470703125, 49.25199890136719
)
,
(
4, 'Mojito Skateshop', '', 'vêtements', '15 Rue du Clou-dans-le-Fer, 51100 Reims', '{"lundi": "10:00-12:00 14:00-19:00", "mardi": "10:00-12:00 14:00-19:00", "mercredi": "10:00-19:00", "jeudi": "10:00-12:00 14:00-19:00", "vendredi": "10:00-12:00 14:00-19:00", "samedi": "10:00-19:00", "dimanche": "fermé"}', 'https://www.mojito-skateshop.com/', '03.26.04.54.95', 'mojitoskateshop@gmail.com', 'https://www.facebook.com/mojito.skateshop/', 'https://www.instagram.com/mojitoskateshop/', 4.0282211, 49.255123138427734
)
,
(
5, 'Nicolas', 'Nicolas', 'alcool', '16 Rue de l Étape, 51100 Reims', '{"lundi": "fermé", "mardi": "09:30-13:00 14:30-19:30", "mercredi": "09:30-13:00 14:30-19:30", "jeudi": "09:30-13:00 14:30-19:30", "vendredi": "09:30-13:00 14:30-19:30", "samedi": "09:30-19:30", "dimanche": "09:30-12:30"}', 'https://www.nicolas.com/', '03.26.88.55.38', '', 'https://www.facebook.com/CaveNicolasReims/', '', 4.0282211, 49.2555462996293
)

/* INSERT QUERY NO: 2 */
,
(
6, 'Champagne Henri Abelé', '', 'alcool', '50 Rue de Sillery, 51100 Reims', '', '', '', '', '', '', 4.0476558330436, 49.2488371319464
)

/* INSERT QUERY NO: 3 */
,
(
7, 'Maison de Champagne Louis Roderer', '', 'alcool', '21 Bd Lundy, 51100 Reims', '', '', '', '', '', '', 4.03553404856429, 49.2600001456078
)

/* INSERT QUERY NO: 4 */
,
(
8, 'Vin et Plaqomusophiles', '', 'alcool', 'Reims', '', '', '08 99 86 54 45', '', '', '', 4.0362629, 49.248616299631
)

/* INSERT QUERY NO: 5 */
,
(
9, 'Cave des Sacres', '', 'alcool', 'Reims', '', '', '', '', '', '', 4.0328038, 49.2529802996299
)

/* INSERT QUERY NO: 6 */
,
(
10, 'Cave Balourdet', '', 'alcool', 'Reims', '', 'http://balourdet.fr', '+33 3 26 82 15 69', '', '', '', 4.0409329, 49.2512253996303
)

/* INSERT QUERY NO: 7 */
,
(
11, 'Le Parvis', '', 'alcool', 'Reims', '', '', '', '', '', '', 4.0319395, 49.2532466996298
)

/* INSERT QUERY NO: 8 */
,
(
12, 'Champagne Lanson', '', 'alcool', 'Reims', '', '', '', '', '', '', 4.01925654654676, 49.2428342760272
)

/* INSERT QUERY NO: 9 */
,
(
13, 'Les Délices Champenoises', '', 'alcool', 'Reims', '', '', '', '', '', '', 4.0318606, 49.2531985996299
)

/* INSERT QUERY NO: 10 */
,
(
14, 'La Cave Colbery', '', 'alcool', 'Reims', '', 'http://cave-colbert.com', '+33 326362116', '', '', '', 4.0329924, 49.256871599629
)

/* INSERT QUERY NO: 11 */
,
(
15, 'Pix''Hall', '', 'appareils', 'Reims', '', 'http://www.pixhall.fr/magasin-pixhall/reims.html', '+33 3 26 87 52 74', '', '', '', 4.00306042698135, 49.2740819314093
)

/* INSERT QUERY NO: 12 */
,
(
16, 'Europlex', '', 'appareils', '43 Avenue Nationale 51100 Reims', '', 'http://www.europlex.fr', '', '', '', '', 4.0076906, 49.2865328996217
)

/* INSERT QUERY NO: 13 */
,
(
17, 'Le Jeune', '', 'boulangeries', 'Reims', '', '', '', '', '', '', 4.0149919, 49.2491013996309
)

/* INSERT QUERY NO: 14 */
,
(
18, 'Boulangerie des Lys', '', 'boulangeries', 'Reims', '', '', '+33 3 26 47 78 12', '', '', '', 4.02913267249238, 49.2518044828373
)

/* INSERT QUERY NO: 16 */
,
(
20, 'Le Fournil du Jard', '', 'boulangeries', 'Reims', '', '', '+33 3 26 35 85 55', '', '', '', 4.0308914, 49.2474971996313
)

/* INSERT QUERY NO: 17 */
,
(
21, 'La Mie Câline', 'La Mie Câline', 'boulangeries', 'Reims', '', '', '', '', '', '', 4.027943, 49.2539291996297
)

/* INSERT QUERY NO: 18 */
,
(
22, 'Le Four à Bois', '', 'boulangeries', 'Reims', '', 'http://zunic.fr', '+33 3 26 47 40 20', '', '', '', 4.02692754995335, 49.2529234388108
)

/* INSERT QUERY NO: 19 */
,
(
23, 'La Fournée Croquante', '', 'boulangeries', 'Reims', '', '', '+33 3 26 24 83 93', '', '', '', 4.0384706, 49.2471095996314
)

/* INSERT QUERY NO: 22 */
,
(
26, 'La Briocherie', '', 'boulangeries', 'Reims', '', '', '', '', '', '', 4.02637427863624, 49.2552248769132
)

/* INSERT QUERY NO: 23 */
,
(
27, 'Case à Pain Forum', '', 'boulangeries', 'Reims', '', 'https://case-a-pain.fr/nos-magasins/', '+33 3 26 84 92 93', '', '', '', 4.0327256, 49.2560311996292
)

/* INSERT QUERY NO: 24 */
,
(
28, 'Boulangerie Pâtisserie Amoud', '', 'boulangeries', 'Reims', '', '', '+33 3 26 85 05 84', '', '', '', 4.0229779, 49.2757896996243
)

/* INSERT QUERY NO: 26 */
,
(
30, 'Boulangerie L''Arbre à Pains', '', 'boulangeries', '43 Ter Avenue Nationale 51100 Reims', '', '', '+33 3 26 09 26 98', '', '', '', 4.007484, 49.2867078996216
)

/* INSERT QUERY NO: 27 */
,
(
31, 'La Boîte à Pain', '', 'boulangeries', 'Reims', '', '', '', '', '', '', 4.0475671, 49.260593399628
)

/* INSERT QUERY NO: 28 */
,
(
32, 'L''Artisane', '', 'boulangeries', 'Reims', '', '', '+33 6 67 69 36 11', '', '', '', 4.0162059, 49.223947099637
)

/* INSERT QUERY NO: 29 */
,
(
33, 'Boulangerie Petit', '', 'boulangeries', 'Reims', '', '', '33326090917', '', '', '', 4.0254883, 49.2696819996258
)

/* INSERT QUERY NO: 30 */
,
(
34, 'Boulangerie Pâtisserie', '', 'boulangeries', 'Reims', '', '', '', '', '', '', 4.0542913, 49.2630154996274
)

/* INSERT QUERY NO: 31 */
,
(
35, 'La Flamande', '', 'boulangeries', 'Reims', '', '', '', '', '', '', 4.0426869, 49.2584513996286
)

/* INSERT QUERY NO: 32 */
,
(
36, 'La Gourmandise', '', 'boulangeries', 'Reims', '', '', '', '', '', '', 4.0218614, 49.2247895996368
)

/* INSERT QUERY NO: 33 */
,
(
37, 'Boulangerie Frédéric Hardy', '', 'boulangeries', 'Reims', '', 'https://www.boulangerie51.org/boulangerie-hardy-frederic-sarl-b-h-c-reims-163.html', '+33 3 26 47 68 81', 'frederichardy@neuf.fr', '', '', 4.0326377, 49.2577514996288
)

/* INSERT QUERY NO: 34 */
,

(
39, 'Boulangerie Patisserie Laurent Lamaix', '', 'boulangeries', 'Reims', '', '', '+33 3 26 47 03 06', '', '', '', 4.0264835, 49.264741799627
)

/* INSERT QUERY NO: 36 */
,
(
40, 'La Pétrisane', '', 'boulangeries', 'Reims', '', '', '+33 326400730', '', '', '', 4.0400999, 49.2575897996288
)

/* INSERT QUERY NO: 37 */
,
(
41, 'Aux Fruits de la Moisson', '', 'boulangeries', 'Reims', '', '', '', '', '', '', 4.0515378, 49.248496999631
)

/* INSERT QUERY NO: 38 */
,
(
42, 'Fisher', 'Fischer', 'boulangeries', 'Reims', '', 'https://fischer1913.com', '+333 26 23 33 76', '', '', '', 4.0202844, 49.2614135996278
)

/* INSERT QUERY NO: 39 */
,

(
44, 'Boulangerie Dufresne', '', 'boulangeries', 'Reims', '', '', '', '', '', '', 4.0459509, 49.2437416996322
)

/* INSERT QUERY NO: 41 */
,
(
45, 'Boulangerie des Halles', '', 'boulangeries', 'Reims', '', '', '', '', '', '', 4.0317037, 49.2593822996283
)

/* INSERT QUERY NO: 42 */
,
(
46, 'Boulangerie Louise', 'Boulangerie Louise', 'boulangeries', 'Reims', '', 'https://www.boulangerielouise.com', '', '', '', '', 4.0838624, 49.240180099633
)

/* INSERT QUERY NO: 43 */
,
(
47, 'La Huche à Pain', '', 'boulangeries', 'Reims', '', '', '+33 326478727', '', '', '', 4.0348863, 49.2508265996305
)

/* INSERT QUERY NO: 44 */
,
(
48, 'La Fournée d''Hugo', '', 'boulangeries', 'Reims', '', '', '', '', '', '', 4.0266022, 49.2134283996396
)

/* INSERT QUERY NO: 45 */
,

(
50, 'Case à Pain', '', 'boulangeries', 'Reims', '', '', '', '', '', '', 4.0622305, 49.2462057996316
)

/* INSERT QUERY NO: 47 */
,
(
51, 'Les gourmandises de Marido', '', 'boulangeries', 'Reims', '', '', '+33 3 26 40 54 69', '', '', '', 4.0291187, 49.2538631996297
)

/* INSERT QUERY NO: 51 */
,
(
55, 'Norgil Institut d Expertise Capillaire', '', 'beauté', 'Reims', '', '', '', '', '', '', 4.0485813, 49.2581207996287
)

/* INSERT QUERY NO: 52 */
,
(
56, 'Meggan', '', 'beauté', 'Reims', '', '', '', '', '', '', 4.030358, 49.2535870996298
)

/* INSERT QUERY NO: 53 */
,
(
57, 'Marie LaurEsthétisur', '', 'beauté', 'Reims', '', '', '+33 3 26 87 66 60', '', '', '', 4.0339235, 49.244599299632
)

/* INSERT QUERY NO: 54 */
,
(
58, 'Ongle Beauté', '', 'beauté', 'Reims', '', '', '+33 3 26 05 79 80', '', '', '', 4.0375343, 49.2482180996311
)

/* INSERT QUERY NO: 55 */
,
(
59, 'Institut Oran’g', '', 'beauté', 'Reims', '', 'http://institut-Orange.com', '+33 3 26 82 85 82', '', '', '', 4.0402118, 49.248494499631
)

/* INSERT QUERY NO: 56 */
,
(
60, 'Guinot', '', 'beauté', 'Reims', '', '', '', '', '', '', 4.0336031, 49.256886099629
)

/* INSERT QUERY NO: 57 */
,
(
61, 'Yves Rocher', 'Yves Rocher', 'beauté', 'Reims', '', '', '', '', '', '', 4.0281848, 49.2534053996298
)

/* INSERT QUERY NO: 58 */
,
(
62, 'L''Onglerie', '', 'beauté', 'Reims', '', '', '', '', '', '', 4.0469023, 49.2599267996282
)

/* INSERT QUERY NO: 59 */
,
(
63, 'Coco Nails & beauté', '', 'beauté', 'Reims', '', 'https://dreambodyinstitut.wixsite.com/dreambodyreims', '+33 3 26 03 66 07', '', '', '', 4.0467524, 49.2571446996289
)

/* INSERT QUERY NO: 60 */
,
(
64, 'Instant de Sérénité', '', 'beauté', 'Reims', '', 'http://instantdeserenite-reims.fr/', '', '', '', '', 4.0382368, 49.2422823996325
)

/* INSERT QUERY NO: 61 */
,
(
65, 'Stylforme', '', 'beauté', 'Reims', '', 'http://stylforme.com', '+33 326402394', '', '', '', 4.0273092, 49.2523243996301
)

/* INSERT QUERY NO: 62 */
,
(
66, 'Pb CosmeticS', '', 'beauté', 'Reims', '', '', '', '', '', '', 4.0292713, 49.2543102996296
)

/* INSERT QUERY NO: 63 */
,
(
67, 'Parashop', '', 'beauté', 'Reims', '', '', '', '', '', '', 4.0264053060672, 49.2550754106135
)

/* INSERT QUERY NO: 64 */
,
(
68, 'Natur’Elles', '', 'beauté', 'Reims', '', '', '', '', '', '', 4.0443444, 49.2634396996273
)

/* INSERT QUERY NO: 65 */
,
(
69, 'Les 2 font la Paire', '', 'beauté', 'Reims', '', '', '', '', '', '', 4.0331967, 49.256716699629
)

/* INSERT QUERY NO: 66 */
,
(
70, 'Influences d''Orient', '', 'beauté', 'Reims', '', 'http://www.influencedorient.fr/', '33326770390', '', '', '', 4.01896593194016, 49.2619039964511
)

/* INSERT QUERY NO: 67 */
,
(
71, 'L & LUI Minceur', '', 'beauté', 'Reims', '', '', '', '', '', '', 4.0337705, 49.2512690996303
)

/* INSERT QUERY NO: 68 */
,
(
72, 'Les Soins de Pauline', '', 'beauté', 'Reims', '', '', '+33 326868186', '', '', '', 4.0356439, 49.2542016996296
)

/* INSERT QUERY NO: 69 */
,
(
73, 'Ma Boîte à Beauté', '', 'beauté', 'Reims', '', 'http://maboitameabeauté.fr', '+33 3 51 42 18 97', '', '', '', 4.0438162, 49.2429269996324
)

/* INSERT QUERY NO: 70 */
,
(
74, 'Les Loges du Regard', '', 'beauté', 'Reims', '', '', '', '', '', '', 4.03109613218508, 49.2476203804547
)

/* INSERT QUERY NO: 71 */
,
(
75, 'L’Institut de l’Ongle', '', 'beauté', 'Reims', '', '', '+33 326471863', '', '', '', 4.0248318, 49.2522932996301
)

/* INSERT QUERY NO: 72 */
,
(
76, 'Clair de Femme', '', 'beauté', 'Reims', '', '', '', '', '', '', 4.021369, 49.2579427996287
)

/* INSERT QUERY NO: 73 */
,
(
77, 'Cycles Hubert', '', 'bicycle', 'Reims', '', 'https://www.hubert-cycles.com/', '+33 3 26 09 16 93', 'info@hubert-cycles.com', '', '', 4.0273719, 49.2783271996237
)

/* INSERT QUERY NO: 74 */
,
(
78, 'Vél''Oxygène', '', 'bicycle', 'Reims', '', 'http://reims.fubicy.org', '', 'reims@fubicy.org', '', '', 4.0348953, 49.2264258996364
)

/* INSERT QUERY NO: 75 */
,
(
79, 'France Loisir', '', 'livres', 'Reims', '', '', '', '', '', '', 4.0300556, 49.2547250996295
)

/* INSERT QUERY NO: 76 */
,
(
80, 'Échoppe de Relieur d''Art (Yves Laporte)', '', 'livres', 'Reims', '', '', '', '', '', '', 4.0264971, 49.2676551996263
)

/* INSERT QUERY NO: 77 */
,
(
81, 'La Procure', 'La Procure', 'livres', 'Reims', '', '', '', '', '', '', 4.0331659, 49.2550215996294
)

/* INSERT QUERY NO: 78 */
,
(
82, 'Amory', '', 'livres', 'Reims', '', '', '+33 326474621', '', '', '', 4.042117, 49.2582322996286
)

/* INSERT QUERY NO: 79 */
,
(
83, 'Fnac', 'Fnac', 'livres', 'Reims', '', 'http://fnac.com/', '', '', '', '', 4.02581951537573, 49.2550049796707
)

/* INSERT QUERY NO: 80 */
,
(
84, 'Bibliotheme', '', 'livres', 'Reims', '', '', '+33 326884342', '', '', '', 4.033831, 49.2560095996292
)

/* INSERT QUERY NO: 81 */
,
(
85, 'Le Bouquiniste', '', 'livres', 'Reims', '', '', '', '', '', '', 4.028887, 49.2550248996294
)

/* INSERT QUERY NO: 82 */
,
(
86, 'Bazarine', '', 'livres', 'Reims', '', '', '', '', '', '', 4.0340091, 49.2500735996306
)

/* INSERT QUERY NO: 83 */
,
(
87, 'Senses Brewing', '', 'brasseries', 'Reims', '', 'https://www.sensesbrewing.com', '', '', 'https://www.facebook.com/SensesBrewing/', '', 4.0409294, 49.2666856996265
)

/* INSERT QUERY NO: 85 */
,
(
89, 'Boucherie  Hippodrome', '', 'boucheries', 'Reims', '', '', '', '', '', '', 4.0045289, 49.2373608996337
)

/* INSERT QUERY NO: 86 */
,
(
90, 'Le Comptoir des Viandes', '', 'boucheries', 'Reims', '', '', '', '', '', '', 4.0461993, 49.2600501996282
)

/* INSERT QUERY NO: 87 */
,
(
91, 'Maison Audinot', '', 'boucheries', 'Reims', '', 'http://maisonaudinot.fr', '970355064', 'contact@maisonaudinot.fr', '', '', 4.0125542, 49.2439862996321
)

/* INSERT QUERY NO: 88 */
,
(
92, 'Boucherie Thierry Brezillon', '', 'boucheries', 'Reims', '', '', '', '', '', '', 4.0317312, 49.2593190996284
)

/* INSERT QUERY NO: 89 */
,
(
93, 'Pâté Croute Piquet''s', '', 'boucheries', '67 Avenue Nationale 51100 Reims', '', '', '', '', '', '', 4.0045991, 49.2896213996209
)

/* INSERT QUERY NO: 90 */
,
(
94, 'Ets Denis & Cie', '', 'boucheries', 'Reims', '', 'http://denis.fr', '+33 326400752', '', '', '', 4.0312502, 49.2596195996283
)

/* INSERT QUERY NO: 91 */
,
(
95, 'Au Gourmet des Halles', '', 'boucheries', 'Reims', '', '', '', '', '', '', 4.0314341, 49.2592954996284
)


/* INSERT QUERY NO: 93 */
,
(
97, 'Pâté Croûte Piquet''S', '', 'boucheries', 'Reims', '', 'https://patecroutepiquets.fr/', '+33 3 26 84 93 20', '', '', '', 4.0489412, 49.260693599628
)

/* INSERT QUERY NO: 94 */
,

(
99, 'François Léau', '', 'boucheries', 'Reims', '', '', '+33 3 26 05 23 46', '', '', '', 4.0366445, 49.25256839963
)

/* INSERT QUERY NO: 139 */
,
(
143, 'Maison Dallet', '', 'chocolateries', '47 Cours Jean-Baptiste Langlet', '{"lundi": "fermé", "mardi": "09:30-19:00", "mercredi": "09:30-19:00", "jeudi": "09:30-19:00", "vendredi": "09:30-19:00", "samedi": "09:00-19:00", "dimanche": "fermé"}', 'https:/www.chocolat-vincentdallet.fr', '', '03.26.35.40.53', 'https://www.facebook.com/PatisserieChocolaterieDallet/', 'instagram.com/chocolat51/?hl=fr', 4.02973336615391, 49.2571007956441
)

/* INSERT QUERY NO: 142 */
,
(
146, 'Princesse tam.tam', 'Princesse tam.tam', 'vêtements', '27 Rue de Vesle, 51100 Reims', '{"lundi": "14:00-19:00", "mardi": "10:00-19:00", "mercredi": "10:00-19:00", "jeudi": "10:00-19:00", "vendredi": "10:00-19:00", "samedi": "10:00-19:00", "dimanche": "fermé"}', 'https://www.princessetamtam.com/', '', '03.26.89.29.94', '', '', 4.0299491, 49.2537603996297
)

/* INSERT QUERY NO: 143 */
,
(
147, 'Outlet', '', 'vêtements', 'Reims', '', '', '', '', '', '', 4.029494, 49.2541834996296
)

/* INSERT QUERY NO: 144 */
,
(
148, 'K-Way', 'K-Way', 'vêtements', '30 Rue du Cadran Saint-Pierre, 51100 Reims', '{"lundi": "14:00-19:00", "mardi": "10:00-12:30 13:30-19:00", "mercredi": "10:00-12:30 13:30-19:00", "jeudi": "10:00-12:30 13:30-19:00", "vendredi": "10:00-12:30 13:30-19:00", "samedi": "10:00-19:00", "dimanche": "fermé"}', 'https://www.k-way.fr/', '', '03.26.24.65.99', 'https://www.facebook.com/KwayReims/', '', 4.0290294, 49.2557984996292
)

/* INSERT QUERY NO: 145 */
,
(
149, 'Parano', '', 'vêtements', '91 Rue de Vesle, 51100 Reims', '', '', '', '', '', '', 4.0272459, 49.25272549963
)

/* INSERT QUERY NO: 148 */
,
(
152, 'Celio', 'Celio', 'vêtements', 'Reims', '', '', '', '', '', '', 4.02577333823231, 49.2552018244568
)

/* INSERT QUERY NO: 149 */
,
(
153, 'Magnum', '', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0288282, 49.2546997996295
)

/* INSERT QUERY NO: 150 */
,
(
154, 'Fashion', '', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0301755, 49.2536223996298
)

/* INSERT QUERY NO: 151 */
,
(
155, 'À l’Entrechat', '', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0314781, 49.2588828996285
)

/* INSERT QUERY NO: 152 */
,
(
156, 'Casting', '', 'vêtements', 'Reims', '', '', '+33 326899179', '', '', '', 4.0314846, 49.2565139996291
)

/* INSERT QUERY NO: 153 */
,
(
157, 'IKKS Junior', '', 'vêtements', 'Passage Subé', '', '', '', '', '', '', 4.0282988, 49.2546380996295
)

/* INSERT QUERY NO: 154 */
,
(
158, 'A louer (Ex : C Collection)', '', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0303848, 49.2535518996298
)

/* INSERT QUERY NO: 155 */
,
(
159, 'Seen', '', 'vêtements', '19 Place du Forum, 51100 Reims', '{"lundi": "14:00-19:00", "mardi": "10:00-12:00 14:00-19:00", "mercredi": "10:00-12:00 14:00-19:00", "jeudi": "10:00-12:00 14:00-19:00", "vendredi": "10:00-12:00 14:00-19:00", "samedi": "10:00-19:00", "dimanche": "fermé"}', 'https://linecl-seen.fr/', 'contact@linecl-seen.fr', '03.26.78.10.80', 'https://www.facebook.com/linecl.seen.reims', 'https://www.instagram.com/explore/locations/420291992/linecl-seen/?hl=fr', 4.0329055, 49.256608899629
)

/* INSERT QUERY NO: 156 */
,
(
160, 'Brice', 'Brice', 'vêtements', 'Reims', '', '', '', '', '', '', 4.02627017525768, 49.2555237102394
)

/* INSERT QUERY NO: 157 */
,
(
161, 'W-boutique', '', 'vêtements', 'Reims', '', 'https://www.wboutique-saintjames.com/', '+33 3 26 88 40 33', '', '', '', 4.0314989, 49.2557131996292
)

/* INSERT QUERY NO: 158 */
,

(
163, 'Camaïeu', 'Camaïeu', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0291049, 49.2537422996297
)

/* INSERT QUERY NO: 160 */
,
(
164, 'Ivana', '', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0284714, 49.2560076996292
)

/* INSERT QUERY NO: 161 */
,
(
165, 'Etam', 'Etam', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0298531, 49.2537238996297
)

/* INSERT QUERY NO: 162 */
,
(
166, 'Jules', 'Jules', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0283899, 49.2534818996298
)

/* INSERT QUERY NO: 163 */
,
(
167, 'Sergent Major', 'Sergent Major', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0263498143331, 49.2552297175195
)

/* INSERT QUERY NO: 164 */
,
(
168, 'Cotélac', 'Cotélac', 'vêtements', 'Reims', '', '', '', '', '', '', 4.02669, 49.2538342996297
)

/* INSERT QUERY NO: 165 */
,
(
169, 'La Bobida', '', 'vêtements', 'Reims', '', 'http://labovida.com', '+33 3 26 40 58 01', '', '', '', 4.0256274, 49.2521510996301
)

/* INSERT QUERY NO: 166 */
,
(
170, 'Liu Jo', 'Liu Jo', 'vêtements', '22 Cours Jean Baptiste Langlet, 51100 Reims', '{"lundi": "14:00-19:00", "mardi": "10:00-19:00", "mercredi": "10:00-19:00", "jeudi": "10:00-19:00", "vendredi": "10:00-19:00", "samedi": "10:00-19:00", "dimanche": "fermé"}', 'https://luijo.com', '','+33.3.26.06.38.28', '', 'https://www.instagram.com/liujoreims/', 4.0318425, 49.256597899629
)

/* INSERT QUERY NO: 167 */
,
(
171, 'Orchestra', 'Orchestra', 'vêtements', 'Rue Docteur Serge Bazelaire', '', '', '+33 326091144', '', '', '', 4.0264275, 49.2899661996208
)

/* INSERT QUERY NO: 168 */
,
(
172, 'Armand Thiery', 'Armand Thiery', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0301123, 49.2541191996296
)

/* INSERT QUERY NO: 169 */
,
(
173, 'The North Face', 'The North Face', 'vêtements', '46 Rue des Élus, 51100 Reims', '{"lundi": "10:30-19:00", "mardi": "10:30-19:00", "mercredi": "10:30-19:00", "jeudi": "10:30-19:00", "vendredi": "10:30-19:00", "samedi": "10:30-19:00", "dimanche": "fermé"}', 'https://www.thenorthface.fr','09.53.47.92.46', '', '', '', 4.0299424, 49.2550964996294
)

/* INSERT QUERY NO: 170 */
,
(
174, 'Kiabi', 'Kiabi', 'vêtements', 'Rue Docteur Serge Bazelaire', '', 'http://liane.com', '+33 326369800', '', '', '', 4.02719679997793, 49.2893508497737
)

/* INSERT QUERY NO: 171 */
,
(
175, 'Cop.Copine', '', 'vêtements', 'Reims', '', 'https://www.cop-copine.com/boutiques/cop-copine-reims', '+33 326616595', '', '', '', 4.0289967, 49.2549708996294
)

/* INSERT QUERY NO: 172 */
,
(
176, 'Caviar', '', 'vêtements', '16 Rue du Cadran Saint-Pierre, 51100 Reims', '{"lundi": "14:00-19:00", "mardi": "10:00-19:00", "mercredi": "10:00-19:00", "jeudi": "10:00-19:00", "vendredi": "10:00-19:00", "samedi": "10:00-19:00", "dimanche": "fermé"}', '', '', '03.26.40.19.19', 'https://www.facebook.com/boutiquecaviar/', 'https://www.instagram.com/caviar_reims/', 4.0297553, 49.2560232996292
)

/* INSERT QUERY NO: 173 */
,
(
177, 'IKKS Women', '', 'vêtements', 'Reims', '', '', '+33 326257931', '', '', '', 4.0294053, 49.2545976996295
)

/* INSERT QUERY NO: 174 */
,
(
178, 'Izac', '', 'vêtements', 'Reims', '', 'https://boutiques.izac.fr/costume-chemise/boutique-izac-reims-2675/', '', '', '', '', 4.02934571487363, 49.2559474803035
)

/* INSERT QUERY NO: 175 */
,
(
179, 'Wazabi', '', 'vêtements', 'Reims', '', 'http://WAZABI-Shop.com', '+33 326860941', '', '', '', 4.026214, 49.2908671996206
)

/* INSERT QUERY NO: 176 */
,
(
180, 'Cyrillus', 'Cyrillus', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0303102, 49.2562262996291
)

/* INSERT QUERY NO: 177 */
,
(
181, 'Couture by SH', '', 'vêtements', 'Reims', '', 'http://www.couturebysh.com', '', '', '', '', 4.03642545664549, 49.2255526272561
)

/* INSERT QUERY NO: 178 */
,
(
182, 'Christel VI', '', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0262064, 49.2901754996208
)

/* INSERT QUERY NO: 179 */
,
(
183, 'Marie Alice Création', '', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0444448, 49.2593566996283
)

/* INSERT QUERY NO: 180 */
,
(
184, 'La Femme s''entête', '', 'vêtements', 'Reims', '', 'https://www.lafemmesentete.fr/', '+33 3 10 16 58 17', '', '', '', 4.0368374, 49.25251459963
)

/* INSERT QUERY NO: 181 */
,
(
185, 'Moto Expert', '', 'vêtements', 'Reims', '', 'http://Dady-moto.com', '+33 326086400', '', '', '', 4.02492969999365, 49.2915984497087
)

/* INSERT QUERY NO: 182 */
,
(
186, 'Nokomis', '', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0332217, 49.256774899629
)

/* INSERT QUERY NO: 183 */
,
(
187, 'Damart', 'Damart', 'vêtements', 'Reims', '', 'http://damart.fr', '+33 3 26 40 43 67', '', '', '', 4.0264322, 49.2524310996301
)

/* INSERT QUERY NO: 184 */
,
(
188, 'Mim', '', 'vêtements', 'Reims', '', '', '', '', '', '', 4.02569726100785, 49.2551086664611
)

/* INSERT QUERY NO: 185 */
,
(
189, 'Le Jour J', '', 'vêtements', '12 Avenue Léon Blum', '', '', '', '', '', '', 4.0103462, 49.2260946996365
)

/* INSERT QUERY NO: 186 */
,
(
190, 'Mille et Une Excuses', '', 'vêtements', 'Reims', '', '', '', '', '', '', 4.02458559129959, 49.252623574675
)

/* INSERT QUERY NO: 187 */
,
(
191, 'Comptoir des Cotonniers', 'Comptoir des Cotonniers', 'vêtements', 'Reims', '', '', '', '', '', '', 4.02866952707646, 49.2554547959272
)

/* INSERT QUERY NO: 188 */
,
(
192, 'Ding Fring', '', 'vêtements', 'Reims', '', 'https://www.dingfring-nordest-iledefrance.fr', '+33 3 23 53 43 72', '', '', '', 4.0227375, 49.2179010996385
)

/* INSERT QUERY NO: 189 */
,
(
193, 'Mise au Green', 'Mise au Green', 'vêtements', 'Passage Saint-Jacques', '', '', '', '', '', '', 4.0289559, 49.2542660996296
)

/* INSERT QUERY NO: 190 */
,
(
194, 'Petit Bateau', 'Petit Bateau', 'vêtements', 'Reims', '', '', '', '', '', '', 4.0282682, 49.2544706996295
)

/* INSERT QUERY NO: 191 */
,
(
195, 'L''Échoppe magique', '', 'collection', '', '', '', '', '', '', '', 4.02235294302742, 49.2513240386918
)

/* INSERT QUERY NO: 194 */
,
(
198, 'Billiotte Biscuits', '', 'confiseries', '', '', '', '', '', '', '', 4.038898, 49.2422112996326
)

/* INSERT QUERY NO: 195 */
,
(
199, 'La petite Friande', '', 'confiseries', '', '', '', '+33 324485772', '', '', '', 4.0398143, 49.2574881996288
)

/* INSERT QUERY NO: 196 */
,
(
200, 'Biscuits Fossier', '', 'confiseries', '', '', 'http://dossier.fr', '+33 3 26 40 67 67', '', '', '', 4.01596559996519, 49.2932507913632
)

/* INSERT QUERY NO: 198 */
,
(
202, 'Maison Caffet', '', 'confiseries', '', '', 'https://www.maison-caffet.com/maison-caffet-reims', '+33 3 26 49 05 75', 'reims@maison-caffet.com', '', '', 4.0316897, 49.2594578996283
)

/* INSERT QUERY NO: 199 */
,
(
203, 'Shakestar', '', 'confiseries', '', '', '', '', '', '', '', 4.02643880506177, 49.2554476755935
)

/* INSERT QUERY NO: 200 */
,
(
204, 'Casino Shop', 'Casino Shop', 'commodités', '', '', '', '', '', '', '', 4.0290894330798, 49.2516925836769
)

/* INSERT QUERY NO: 201 */
,
(
205, 'CocciMarket', 'CocciMarket', 'commodités', '', '', 'http://www.coccinelle.fr/', '', '', '', '', 4.0264216, 49.2140046996395
)

/* INSERT QUERY NO: 202 */
,
(
206, 'Épicerie de Quartier', '', 'commodités', '', '', '', '', '', '', '', 4.0265132, 49.2683652996261
)

/* INSERT QUERY NO: 203 */
,
(
207, 'La Fine Épicerie', '', 'commodités', '', '', '', '', '', '', '', 4.0348724, 49.256831299629
)

/* INSERT QUERY NO: 204 */
,
(
208, 'Carrefour Express', 'Carrefour Express', 'commodités', '', '', 'http://carrefour.fr', '+33 326062048', '', '', '', 4.0374546, 49.2569041996289
)

/* INSERT QUERY NO: 205 */
,
(
209, 'Thiriet', '', 'commodités', '', '', '', '', '', '', '', 4.0211291, 49.2189810996383
)

/* INSERT QUERY NO: 206 */
,
(
210, 'Épicerie du Monde', '', 'commodités', '', '', '', '', '', '', '', 4.0046362, 49.2372470996338
)

/* INSERT QUERY NO: 207 */
,
(
211, 'Leclerc Relais Drive Reims Elus', 'E. Leclerc Drive', 'commodités', '', '', 'http://leclercdrive.fr', '', '', '', '', 4.0310141, 49.2552165996294
)

/* INSERT QUERY NO: 208 */
,
(
212, 'Dinar Abdelilah', '', 'commodités', '', '', '', '+33 3 26 47 75 55', '', '', '', 4.0379898, 49.2510586996304
)

/* INSERT QUERY NO: 209 */
,
(
213, 'CocciMarket', 'CocciMarket', 'commodités', '', '', '', '+33 3 26 03 41 83', '', '', '', 4.0555003, 49.2634596996273
)

/* INSERT QUERY NO: 210 */
,
(
214, 'ALI BAKASSOU', '', 'commodités', '', '', '', '+33 3 26 04 65 11', '', '', '', 4.045199, 49.2593981996283
)

/* INSERT QUERY NO: 211 */
,
(
215, 'Le Marché Franprix', '', 'commodités', '', '', '', '', '', '', '', 4.0387403, 49.2426192996325
)

/* INSERT QUERY NO: 212 */
,
(
216, 'CocciMarket', 'CocciMarket', 'commodités', '', '', '', '', '', '', '', 4.0339427, 49.2511989996304
)

/* INSERT QUERY NO: 213 */
,
(
217, 'Akshayah Mini Market', '', 'commodités', '', '', '', '+33 3 26 87 08 85', '', '', '', 4.0346921, 49.2518406996302
)

/* INSERT QUERY NO: 214 */
,
(
218, 'Proxi', 'Proxi', 'commodités', '', '', '', '', '', '', '', 4.0445513, 49.2653646996269
)

/* INSERT QUERY NO: 215 */
,
(
219, 'Proxi', 'Proxi', 'commodités', '', '', '', '', '', '', '', 4.0496911, 49.2574097996288
)

/* INSERT QUERY NO: 216 */
,
(
220, 'Day by Day', 'Day by Day', 'commodités', '', '', 'http://daybyday-shop.com/magasin/reims', '33326799650', '', '', '', 4.04195543305903, 49.2582228078005
)

/* INSERT QUERY NO: 217 */
,
(
221, 'Timothée Alimentatio', '', 'commodités', '', '', '', '+33 326851907', '', '', '', 4.043966, 49.2432783996323
)

/* INSERT QUERY NO: 218 */
,
(
222, 'Monop''', 'Monop''', 'commodités', 'Rue du Docteur Jacquin', '', 'https://www.monoprix.fr/monop-rue-jacquin-reims-reims-51100-s', '', '', '', '', 4.0317574, 49.2569516996289
)

/* INSERT QUERY NO: 219 */
,
(
223, 'Votre Marché', '', 'commodités', '', '', '', '+33 3 26 86 47 11', '', '', '', 4.0215779, 49.2249095996368
)

/* INSERT QUERY NO: 220 */
,
(
224, 'Il Fanano', '', 'commodités', '', '', '', '', '', '', '', 4.03507, 49.2568834996289
)

/* INSERT QUERY NO: 221 */
,
(
225, 'Proximité Store', '', 'commodités', '', '', '', '+33 326473843', '', '', '', 4.0300889, 49.2483282996311
)

/* INSERT QUERY NO: 222 */
,
(
226, 'Laiterie Gilbert', '', 'commodités', '', '', 'https://www.laiterie-gilbert.fr', '+33 3 26 61 35 70', '', '', '', 4.0560812, 49.2594347996283
)

/* INSERT QUERY NO: 227 */
,
(
231, 'Sephora', 'Sephora', 'cosmetics', '', '', '', '', '', '', '', 4.0270862, 49.2547638996295
)

/* INSERT QUERY NO: 228 */
,
(
232, 'La Maison du Savon de Marseille', '', 'cosmetics', '', '', '', '', '', '', '', 4.02801948308488, 49.2547439352925
)

/* INSERT QUERY NO: 229 */
,
(
233, 'Nocibé', 'Nocibé', 'cosmetics', '', '', '', '', '', '', '', 4.0279866, 49.2554773996293
)

/* INSERT QUERY NO: 230 */
,
(
234, 'L''Occitane', 'L''Occitane', 'cosmetics', '', '', '', '', '', '', '', 4.0285361, 49.2545885996295
)

/* INSERT QUERY NO: 231 */
,
(
235, 'KIKO Milano', 'KIKO Milano', 'cosmetics', '', '', '', '', '', '', '', 4.0288582, 49.2536447996297
)

/* INSERT QUERY NO: 232 */
,
(
236, 'La Maison du Savon de Marseille', '', 'cosmetics', '', '', '', '', '', '', '', 4.0279969, 49.2547365996295
)

/* INSERT QUERY NO: 233 */
,
(
237, 'Motio', '', 'cosmetics', '', '', 'https://www.motioreims.com/', '', '', '', '', 4.03248003830438, 49.2556824441159
)

/* INSERT QUERY NO: 246 */
,
(
250, 'VAPOA', '', 'e-cigarette', '', '', '', '', '', '', '', 4.0290283, 49.2541878996296
)

/* INSERT QUERY NO: 252 */
,
(
256, 'Tendance Liège', '', 'accessoires de mode', '', '', 'https://liege-et-passion.fr/', '+33 9 86 46 65 86', 'contact@liege-et-passion.fr', '', '', 4.0284287, 49.2529526996299
)

/* INSERT QUERY NO: 254 */
,
(
258, 'Centaurea', '', 'fleuristes', '', '', '', '', '', '', '', 4.0334455, 49.256840699629
)

/* INSERT QUERY NO: 255 */
,
(
259, 'Fleur de Sel', '', 'fleuristes', '87 Avenue de Laon , 51100 Reims', '{"lundi": "fermé", "mardi": "09:00-12:00 14:00-19:00", "mercredi": "09:00-12:00 14:00-19:00", "jeudi": "09:00-12:00 14:00-19:00", "vendredi": "09:00-12:00 14:00-19:00", "samedi": "09:30-12:30 14:00-19:30", "dimanche": "09:30-13:00"}', 'https://www.fleurdesel-reims.com/', '', '03.26.06.30.89', 'https://www.facebook.com/Fleur-de-sel-Reims-1006030219498840/', '', 4.0253793, 49.2660693996267
)

/* INSERT QUERY NO: 256 */
,
(
260, '', '', 'fleuristes', '', '', '', '', '', '', '', 4.0365297, 49.2269620996363
)

/* INSERT QUERY NO: 257 */
,
(
261, 'Osiris', '', 'fleuristes', '', '', '', '', '', '', '', 4.0314307, 49.2589414996284
)

/* INSERT QUERY NO: 258 */
,
(
262, 'Only Fleurs', '', 'fleuristes', '', '', '', '', '', '', '', 4.0506372, 49.2612732996279
)

/* INSERT QUERY NO: 259 */
,
(
263, 'Rapid Flore', '', 'fleuristes', '', '', 'http://www.rapidflore.com/', '', '', '', '', 4.0454407, 49.2421040996326
)

/* INSERT QUERY NO: 260 */
,
(
264, 'Opuscule', '', 'fleuristes', '', '', '', '+33 6 41 70 95 44', '', '', '', 4.030319, 49.2536267996297
)

/* INSERT QUERY NO: 276 */
,
(
280, 'La Petite centres commerciauxe d''Apolline', '', 'jeux', '', '', '', '', '', '', '', 4.0249669, 49.2547674996295
)

/* INSERT QUERY NO: 278 */
,
(
282, 'Mini...KAL', '', 'cadeaux', '', '', '', '', '', '', '', 4.0291753, 49.2543959996296
)

/* INSERT QUERY NO: 316 */
,
(
320, 'Montblanc', '', 'bijouteries', '', '', '', '', '', '', '', 4.02949469087188, 49.2546264040203
)

/* INSERT QUERY NO: 317 */
,
(
321, 'Guilde des Orfèvres - Reims', '', 'bijouteries', '', '', 'https://guildedesorfevres.fr/bijouterie/reims-1321M', '+33 3 26 47 22 75', 'bijouteriepierremarechal@orange.fr', '', '', 4.0287063, 49.2548730996294
)

/* INSERT QUERY NO: 318 */
,
(
322, 'Poret Michel', '', 'bijouteries', '', '', '', '+33 3 26 86 62 84', '', '', '', 4.0382866, 49.2473355996313
)

/* INSERT QUERY NO: 319 */
,
(
323, 'Mélinda ZAND', '', 'bijouteries', '', '', 'https://www.bijouterie-melindazand.fr/', '+33 3 26 02 19 74', '', '', '', 4.0288794, 49.2543497996296
)

/* INSERT QUERY NO: 320 */
,
(
324, 'Bijouterie Fleau', '', 'bijouteries', '', '', '', '+33 3 26472476', '', '', '', 4.0277698, 49.2553850996293
)

/* INSERT QUERY NO: 321 */
,
(
325, 'Tresor', '', 'bijouteries', '', '', '', '', '', '', '', 4.02611964812923, 49.2553359809642
)

/* INSERT QUERY NO: 322 */
,
(
326, 'Babouchka', '', 'bijouteries', '', '', '', '', '', '', '', 4.029054, 49.2549893996294
)

/* INSERT QUERY NO: 323 */
,
(
327, 'Julien d''Orcel', 'Julien d''Orcel', 'bijouteries', '', '', 'http://www.bijouterie-reims.com', '+33 9 61 34 69 16', '', '', '', 4.065451, 49.260659299628
)

/* INSERT QUERY NO: 324 */
,
(
328, 'Le Nid de Pie', '', 'bijouteries', '', '', '', '+33 326886149', '', '', '', 4.0272114, 49.2524504996301
)

/* INSERT QUERY NO: 325 */
,
(
329, 'Tempka', '', 'bijouteries', '', '', '', '', '', '', '', 4.02660686804635, 49.2555070359179
)

/* INSERT QUERY NO: 328 */
,
(
332, '', '', 'kiosk', '', '', '', '', '', '', '', 4.03113400527798, 49.2542213377465
)

/* INSERT QUERY NO: 329 */
,
(
333, 'Chez Dom''', '', 'kiosk', '', '', '', '', '', '', '', 4.02953915000003, 49.2604899996316
)

/* INSERT QUERY NO: 330 */
,
(
334, '', '', 'kiosk', '', '', '', '', '', '', '', 4.02708206638371, 49.2585695482993
)

/* INSERT QUERY NO: 343 */
,
(
347, 'Centre commercial Cernay', '', 'centres commerciaux', '', '', '', '', '', '', '', 4.06519465795947, 49.2604766839177
)

/* INSERT QUERY NO: 344 */
,
(
348, 'Centre Commercial de l''Hippodrome', '', 'centres commerciaux', '', '', '', '', '', '', '', 4.00759429608512, 49.2358237562144
)

/* INSERT QUERY NO: 345 */
,
(
349, 'Flora Mei', '', 'massages', '', '', 'http://www.floramei.com', '', '', '', '', 4.03740524049667, 49.2483723352612
)

/* INSERT QUERY NO: 357 */
,
(
361, 'L’Accord Parfait', '', 'instrument de musique', '', '', '', '+33 3 26 47 33 68', '', '', '', 4.0356358, 49.2506781996305
)

/* INSERT QUERY NO: 361 */
,
(
365, 'Nature et Découvertes', 'Nature et Découvertes', 'extérieur', '', '', 'https://www.natureetdecouvertes.com/magasins/marne/reims', '+33 3 26 36 92 00', '', '', '', 4.0271633, 49.2558332996292
)

/* INSERT QUERY NO: 367 */
,
(
371, 'Festi', '', 'fête', 'Rue Docteur Serge Bazelaire', '', 'https://www.festi.fr', '+33 326871640', '', '', '', 4.0244167, 49.2902613996208
)

/* INSERT QUERY NO: 369 */
,
(
373, 'Terranimo', '', 'animaux', 'Rue Docteur Serge Bazelaire', '', 'http://terranimo.fr', '+33 326864839', '', '', '', 4.0258951, 49.2901647996208
)

/* INSERT QUERY NO: 370 */
,
(
374, 'Photo Phox', '', 'photo', '', '', '', '+33 3 26 02 25 79', '', '', '', 4.0305501, 49.2537035996297
)

/* INSERT QUERY NO: 371 */
,
(
375, 'Pixinium', '', 'photo', '', '', 'http://pixinum.com', '+33 326825130', '', '', '', 4.0376382, 49.2480983996311
)

/* INSERT QUERY NO: 372 */
,
(
376, 'Atelier Michel JOLYOT', '', 'photographes', '', '', '', '+33 3 26 47 44 12', '', '', '', 4.0100578, 49.2467731996314
)

/* INSERT QUERY NO: 375 */
,
(
379, 'Reims - Chatillons', 'La Poste', 'bureaux de poste', '', '', '', '3631', '', '', '', 4.0378308, 49.224237899637
)

/* INSERT QUERY NO: 376 */
,
(
380, 'Reims Wilson', 'La Poste', 'bureaux de poste', '', '', '', '', '', '', '', 4.0212208, 49.2388525996334
)

/* INSERT QUERY NO: 377 */
,
(
381, 'Relais La Poste', '', 'bureaux de poste', '', '', '', '', '', '', '', 4.0395516, 49.2663465996266
)

/* INSERT QUERY NO: 378 */
,
(
382, 'Relais Poste', 'La Poste', 'bureaux de poste', '', '', '', '', '', '', '', 4.0119529, 49.2480658996311
)

/* INSERT QUERY NO: 379 */
,
(
383, 'Reims - Pays de France', 'La Poste', 'bureaux de poste', '', '', '', '3631', '', '', '', 4.0062897, 49.2306688996354
)

/* INSERT QUERY NO: 380 */
,
(
384, 'Reims - Billard', 'La Poste', 'bureaux de poste', '', '', '', '3631', '', '', '', 4.006982, 49.2360873996341
)

/* INSERT QUERY NO: 381 */
,
(
385, 'Plate-forme Courrier de Reims', '', 'bureaux de poste', 'Rue René Francart', '', '', '', '', '', '', 4.0757279, 49.240329599633
)

/* INSERT QUERY NO: 382 */
,
(
386, 'Reims - Europe', '', 'bureaux de poste', '', '', '', '3631', '', '', '', 4.0603512, 49.2548794996294
)

/* INSERT QUERY NO: 383 */
,
(
387, 'Plate-forme Courrier de Reims', '', 'bureaux de poste', '', '', '', '', '', '', '', 4.07565694048693, 49.2400345789417
)

/* INSERT QUERY NO: 384 */
,
(
388, 'Reims Cérès', 'La Poste', 'bureaux de poste', '', '', '', '', '', '', '', 4.03498684972306, 49.255531579913
)

/* INSERT QUERY NO: 385 */
,
(
389, 'Relais Poste', 'La Poste', 'bureaux de poste', '', '', '', '', '', '', '', 4.0525162, 49.2508113996305
)

/* INSERT QUERY NO: 386 */
,
(
390, 'Reims Gambetta', 'La Poste', 'bureaux de poste', '', '', 'http://laposte.fr', '3631', '', '', '', 4.0388438, 49.2471227996314
)

/* INSERT QUERY NO: 388 */
,
(
392, 'The Glue Pot', '', 'pub', '', '', '', '', '', '', '', 4.0266761, 49.2554815996293
)

/* INSERT QUERY NO: 389 */
,
(
393, 'L''Antirouille', '', 'pub', '', '', '', '', '', '', '', 4.0259421, 49.2558491996292
)

/* INSERT QUERY NO: 390 */
,
(
394, 'Le Tizi', '', 'pub', '', '', '', '', '', '', '', 4.0068114, 49.236056799634
)

/* INSERT QUERY NO: 391 */
,
(
395, 'Mr Fogg''s', '', 'pub', '', '', 'https://www.mr-foggs.fr/', '', '', '', '', 4.02587185148546, 49.2563748416317
)

/* INSERT QUERY NO: 392 */
,
(
396, 'Au Torboyo', '', 'pub', '', '', '', '', '', '', '', 4.0261459, 49.2559226996292
)

/* INSERT QUERY NO: 393 */
,
(
397, 'Shamrock Pub', '', 'pub', '', '', '', '', '', '', '', 4.0226621372718, 49.252437300121
)

/* INSERT QUERY NO: 394 */
,
(
398, 'The George', '', 'pub', '', '', '', '', '', '', '', 4.0345717, 49.2570985996289
)

/* INSERT QUERY NO: 395 */
,
(
399, 'Le ciba', '', 'pub', '', '', '', '', '', '', '', 4.0252233, 49.2555830996293
)

/* INSERT QUERY NO: 399 */
,
(
403, 'Les Magasins Bric ada Brac', '', 'seconde main', 'Rue Docteur Robert Creusat', '', 'http://lesmagasinsbricadabrac.fr', '33980687923', '', '', '', 4.0217254, 49.2898515996209
)

/* INSERT QUERY NO: 400 */
,
(
404, 'La Maison du Tailleur', '', 'couture', '', '', '', '', '', '', '', 4.02886857948553, 49.2521253487039
)

/* INSERT QUERY NO: 401 */
,
(
405, 'Bout D''fil', '', 'couture', '', '', '', '', '', '', '', 4.0186534, 49.2499889996307
)

/* INSERT QUERY NO: 402 */
,
(
406, 'La Cordonnerie fantastique', '', 'cordonniers', '', '', '', '', '', '', '', 4.03076049464956, 49.2596225756473
)

/* INSERT QUERY NO: 403 */
,
(
407, 'Cordonnerie Retouche de la Vesle', '', 'cordonniers', '', '', '', '+33 3 26 48 84 12', '', '', '', 4.0246878, 49.2521223996301
)

/* INSERT QUERY NO: 404 */
,
(
408, 'Retouches Gambetta', '', 'cordonniers', '', '', '', '+33 3 26 82 51 59', '', '', '', 4.0385474, 49.2470338996314
)

/* INSERT QUERY NO: 405 */
,
(
409, 'Versus Custom Shop', '', 'cordonniers', '26 Avenue de Laon', '', '', '', '', '', '', 4.02746844758958, 49.264300441963
)

/* INSERT QUERY NO: 406 */
,
(
410, 'Chaussea', 'Chaussea', 'chaussures', 'Rue Docteur Serge Bazelaire', '', 'http://chaussea.com', '+33 326821007', '', '', '', 4.0266418, 49.2899812996208
)

/* INSERT QUERY NO: 407 */
,
(
411, 'Line CL', '', 'chaussures', '', '', '', '', '', '', '', 4.03369333091715, 49.2569517933122
)

/* INSERT QUERY NO: 408 */
,
(
412, 'Jules et Julies', '', 'chaussures', '', '', '', '', '', '', '', 4.0290396, 49.2539553996297
)

/* INSERT QUERY NO: 409 */
,
(
413, 'Éram', 'Éram', 'chaussures', '', '', '', '', '', '', '', 4.0297627, 49.2536932996297
)

/* INSERT QUERY NO: 410 */
,
(
414, 'Chauss & Art', '', 'chaussures', '', '', '', '+33 6 47 59 25 48', '', '', '', 4.0384993, 49.2508752996304
)

/* INSERT QUERY NO: 411 */
,
(
415, 'Foot Korner', '', 'chaussures', '', '', '', '', '', '', '', 4.0287193, 49.2562418996291
)

/* INSERT QUERY NO: 412 */
,
(
416, 'Chaussures Sabrina', '', 'chaussures', '', '', '', '', '', '', '', 4.029447, 49.2540728996296
)

/* INSERT QUERY NO: 413 */
,
(
417, '', '', 'chaussures', '', '', '', '', '', '', '', 4.0276777, 49.2553577996293
)

/* INSERT QUERY NO: 423 */
,
(
427, 'En Apart Thé', '', 'thé', '', '', '', '', '', '', '', 4.0318283, 49.25260939963
)

/* INSERT QUERY NO: 424 */
,
(
428, 'Palais des Thés', 'Palais des Thés', 'thé', '', '', '', '', '', '', '', 4.0282822, 49.2555660996293
)

/* INSERT QUERY NO: 425 */
,
(
429, 'Le cadre Noir', '', 'tabac', '', '', '', '', '', '', '', 4.0377808, 49.2422443996325
)

/* INSERT QUERY NO: 426 */
,
(
430, 'Le Joker', '', 'tabac', '', '', '', '', '', '', '', 4.0219896, 49.2245973996369
)

/* INSERT QUERY NO: 428 */
,
(
432, 'GAIGNER Nicolas', '', 'tabac', '', '', '', '', '', '', '', 4.0263574, 49.2134069996396
)

/* INSERT QUERY NO: 431 */
,
(
435, 'Le Végas', '', 'tabac', '', '', '', '', '', '', '', 4.0101661, 49.248419099631
)

/* INSERT QUERY NO: 433 */
,
(
437, 'WDK', '', 'jouets', '', '', 'https://www.wdkpartner.com/', '+33 3 26 50 32 32', '', '', '', 4.0822574, 49.2299765996356
)

/* INSERT QUERY NO: 434 */
,
(
438, 'Le Royaume du Jouet Franchisé Indépendant', '', 'jouets', '', '', '', '', '', '', '', 4.0297977, 49.2545204996295
)

/* INSERT QUERY NO: 438 */
,
(
442, 'Didier Lobry L''estampille', '', 'tapissiers', '', '', '', '', '', '', '', 4.04577283080674, 49.2573786295878
)

/* INSERT QUERY NO: 439 */
,
(
443, 'AT Oliveira Tapissier Décorateur', '', 'tapissiers', '', '', '', '+33 3 26 85 62 29', '', '', '', 4.0400219, 49.248680299631
)

/* INSERT QUERY NO: 445 */
,
(
449, 'La Cave Farman', '', 'vin', '', '', '', '', '', '', '', 4.05815706264235, 49.240552441041
)

/* INSERT QUERY NO: 446 */
,
(
450, 'Boutique Guy Degrenne', '', 'vin', '113 Rue de Vesle, 51100 Reims', '', 'http://guydegrenne.fr', '+33 3 26 06 86 39', '', '', '', 4.0261481, 49.2523205996301
)
,
(
451, 'Lacoste Reims centre-ville', '', 'vêtements', '31 Rue des Élus, 51100 Reims', '{"lundi": "14:00-19:00", "mardi": "10:00-19:00", "mercredi": "10:00-19:00", "jeudi": "10:00-19:00", "vendredi": "10:00-19:00", "samedi": "10:00-19:00", "dimanche": "fermé"}', 'https://www.lacoste.com/', '', '03.26.84.77.26', '', '', 4.0302512, 49.2549803
)
,
(
452, 'Eklips', '', 'vêtements', '7 Rue des Élus, 51100 Reims', '{"lundi": "fermé", "mardi": "10:00-19:00", "mercredi": "10:00-19:00", "jeudi": "10:00-19:00", "vendredi": "10:00-19:00", "samedi": "10:00-19:00", "dimanche": "fermé"}', 'https://www.eklips-shop.com/', '
contact.eklipsshop@gmail.com', '', 'https://www.facebook.com/Eklips-shop-108792324251747/', 'https://www.instagram.com/eklipsshop/', 4.031376838684082, 49.2554817199707
)
,
(
453, 'Galeries Lafayette Reims', '', 'vêtements', '33-45 Rue de Vesle, 51100 Reims', '', '', '', '', '', '', 4.0294103, 49.2536065
);


UPDATE shop SET type = REPLACE(type, '', null) WHERE type = '';
UPDATE shop SET brand = REPLACE(brand, '', null) WHERE brand = '';
UPDATE shop SET address = REPLACE(address, '', null) WHERE address = '';
UPDATE shop SET opening_hours = REPLACE(opening_hours, '', null);
UPDATE shop SET website = REPLACE(website, '', null) WHERE website = '';
UPDATE shop SET email = REPLACE(email, '', null) WHERE email = '';
UPDATE shop SET phone = REPLACE(phone, '', null) WHERE phone = '';
UPDATE shop SET fb_page = REPLACE(fb_page, '', null) WHERE fb_page = '';
UPDATE shop SET insta_page = REPLACE(insta_page, '', null) WHERE insta_page = '';
ALTER TABLE shop MODIFY COLUMN opening_hours json;
UPDATE shop SET opening_hours = '{"lundi": "14:00–19:00", "mardi": "10:00–19:00", "mercredi": "10:00–19:00", "jeudi": "10:00–19:00", "vendredi": "10:00–19:00", "samedi": "10:00–19:00", "dimanche": "fermé"}' where id=1;
ALTER TABLE shop ADD img_url VARCHAR(255);
UPDATE shop SET img_url = "https://www.fossier.fr/img/cms/magasins-min.png" WHERE id=1;
UPDATE shop SET img_url = "https://lh3.googleusercontent.com/p/AF1QipNkdrJowhQRCkixPry47Q-GzQ-PXpLnABHHASdh=w1080-h608-p-no-v0" WHERE id=4;
UPDATE shop SET img_url = "https://medias.nicolas.com/media/sys_master/images/h01/he9/9465104039966.png" WHERE id=5;



--
-- Index pour les tables exportées
--

--
-- Index pour la table `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `shop`
--
ALTER TABLE `shop`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=454;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `product`
--

INSERT INTO `product` (`id`, `name`, `brand`) VALUES
(1, "Biscuit Rose", "Maison Fossier"),
(2, "Risk", "Hasbro"),
(3, "Boots 1460", "Dr. Martens"),
(4, "Mitaines Manson", "Bellerose"),
(5, "Bougie parfumée rechargeable", "Esteban"),
(6, "Maillot Stade de Reims", "Umbro"),
(7, "Champagne Cordon Rouge", "Mumm"),
(8, "Montre Nautic", "Lip"),
(9, "Minecraft", "Microsoft"),
(10, "Uno", "Mattel"),
(11, "Blouson bomber", "Lacoste"),
(12, "Pantalon chino", "Carhartt WIP");

--
-- Index pour les tables exportées
--

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


-- --------------------------------------------------------

--
-- Structure de la table `keyword`
--

CREATE TABLE `keyword` (
  `id` int(11) UNSIGNED NOT NULL,
  `keyword_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `keyword`
--

INSERT INTO `keyword` (`id`, `keyword_name`) VALUES
(1, "biscuit"),
(2, "epicerie"),
(3, "rose"),
(4, "reims"),
(5, "fossier"),
(6, "champagne"),
(7, "artisanal"),
(8, "local"),
(9, "made in france"),
(10, "gateau"),
(11, "souvenir"),
(12, "cadeau"),
(13, "nourriture"),
(14, "specialite"),
(15, "cuisine"),
(16, "remois"),
(17, "adulte"),
(18, "enfant"),
(19, "carte"),
(20, "plateau"),
(21, "multijoueur"),
(22, "solo"),
(23, "duo"),
(24, "escape game"),
(25, "strategie"),
(26, "casse-tete"),
(27, "role"),
(28, "educatif"),
(29, "chaussure"),
(30, "vegan"),
(31, "cuir"),
(32, "ranger"),
(33, "doc martens"),
(34, "boot"),
(35, "punk"),
(36, "metal"),
(37, "angleterre"),
(38, "plateforme"),
(39, "homme"),
(40, "femme"),
(41, "vetement"),
(42, "laine"),
(43, "gant"),
(44, "moufle"),
(45, "accessoire"),
(46, "mode"),
(47, "hiver"),
(48, "chaud"),
(49, "cire"),
(50, "odeur"),
(51, "naturel"),
(52, "maison"),
(53, "candle"),
(54, "luxe"),
(55, "style"),
(56, "diptyque"),
(57, "football"),
(58, "sport"),
(59, "rouge"),
(60, "ligue 1"),
(61, "maillot"),
(62, "joueur"),
(63, "nike"),
(64, "alcool"),
(65, "spiritueux"),
(66, "veuve clicquot"),
(67, "boisson"),
(68, "bulles"),
(69, "bijou"),
(70, "bracelet"),
(71, "montre"),
(72, "acier"),
(73, "argent"),
(74, "automatique"),
(75, "video"),
(76, "nintendo"),
(77, "switch"),
(78, "xbox"),
(79, "ordinateur"),
(80, "pc"),
(81, "console"),
(82, "card"),
(83, "jeu"),
(84, "societe"),
(85, "manteau"),
(86, "coton"),
(87, "veste"),
(88, "jean"),
(89, "pantalon"),
(90, "levi's"),
(91, "t-shirt");

--
-- Index pour les tables exportées
--

--
-- Index pour la table `keyword`
--
ALTER TABLE `keyword`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `keyword`
--
ALTER TABLE `keyword`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

-- --------------------------------------------------------

--
-- Structure de la table `keyword_product`
--

CREATE TABLE `keyword_product` (
  `product_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_keyword_product_product
        FOREIGN KEY (product_id)
        REFERENCES product(id)
        ON DELETE CASCADE,
  `keyword_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_keyword_product_keyword
        FOREIGN KEY (keyword_id)
        REFERENCES keyword(id)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `keyword_product` 
--

INSERT INTO `keyword_product` (`product_id`, `keyword_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(2, 17),
(2, 18),
(2, 19),
(2, 20),
(2, 21),
(2, 23),
(2, 25),
(2, 27),
(2, 62),
(2, 83),
(2, 84),
(3, 29),
(3, 30),
(3, 31),
(3, 32),
(3, 33),
(3, 34),
(3, 35),
(3, 36),
(3, 37),
(3, 38),
(3, 39),
(3, 40),
(3, 17),
(3, 18),
(3, 46),
(3, 47),
(3, 48),
(3, 55),
(4, 12),
(4, 30),
(4, 40),
(4, 41),
(4, 42),
(4, 43),
(4, 44),
(4, 45),
(4, 46),
(4, 47),
(4, 48),
(4, 55),
(5, 9),
(5, 12),
(5, 45),
(5, 49),
(5, 50),
(5, 51),
(5, 52),
(5, 53),
(5, 54),
(5, 55),
(5, 56),
(6, 4),
(6, 8),
(6, 11),
(6, 12),
(6, 14),
(6, 16),
(6, 17),
(6, 18),
(6, 39),
(6, 40),
(6, 46),
(6, 57),
(6, 58),
(6, 59),
(6, 60),
(6, 61),
(6, 62),
(6, 63),
(6, 91),
(7, 2),
(7, 4),
(7, 6),
(7, 7),
(7, 8),
(7, 9),
(7, 11),
(7, 12),
(7, 14),
(7, 15),
(7, 16),
(7, 17),
(7, 54),
(7, 64),
(7, 65),
(7, 66),
(7, 67),
(7, 68),
(8, 12),
(8, 17),
(8, 31),
(8, 39),
(8, 45),
(8, 46),
(8, 54),
(8, 55),
(8, 69),
(8, 70),
(8, 71),
(8, 72),
(8, 73),
(8, 74),
(9, 17),
(9, 18),
(9, 21),
(9, 22),
(9, 25),
(9, 62),
(9, 75),
(9, 76),
(9, 77),
(9, 78),
(9, 79),
(9, 80),
(9, 81),
(9, 83),
(10, 17),
(10, 18),
(10, 19),
(10, 20),
(10, 21),
(10, 23),
(10, 25),
(10, 26),
(10, 28),
(10, 62),
(10, 82),
(10, 83),
(10, 84),
(11, 9),
(11, 12),
(11, 17),
(11, 30),
(11, 35),
(11, 36),
(11, 37),
(11, 39),
(11, 40),
(11, 41),
(11, 46),
(11, 54),
(11, 55),
(11, 85),
(11, 86),
(11, 87),
(12, 17),
(12, 18),
(12, 30),
(12, 35),
(12, 39),
(12, 40),
(12, 41),
(12, 42),
(12, 46),
(12, 47),
(12, 55),
(12, 86),
(12, 88),
(12, 89),
(12, 90);

-- --------------------------------------------------------

--
-- Structure de la table `product_shop`
--

CREATE TABLE `product_shop` (
  `shop_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_product_shop_shop
        FOREIGN KEY (shop_id)
        REFERENCES shop(id)
        ON DELETE CASCADE,
  `product_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_product_shop_product
        FOREIGN KEY (product_id)
        REFERENCES product(id)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `product_shop`
--

INSERT INTO `product_shop` (`shop_id`,`product_id`) VALUES
(1, 1),
(20, 1),
(22, 1),
(37, 1),
(39, 1),
(143, 1),
(200, 1),
(199, 1),
(453, 1),
(83, 2),
(280, 2),
(347, 2),
(348, 2),
(437, 2),
(438, 2),
(410, 3),
(411, 3),
(186, 3),
(4, 3),
(453, 3),
(186, 4),
(411, 4),
(191, 4),
(452, 4),
(453, 4),
(186, 5),
(232, 5),
(231, 5),
(234, 5),
(237, 5),
(365, 5),
(452, 5),
(453, 5),
(2, 6),
(3, 6),
(5, 7),
(8, 7),
(9, 7),
(10, 7),
(11, 7),
(13, 7),
(1, 7),
(449, 7),
(453, 7),
(320, 8),
(324, 8),
(325, 8),
(327, 8),
(328, 8),
(329, 8),
(453, 8),
(83, 9),
(347, 9),
(348, 9),
(437, 9),
(438, 9),
(82, 10),
(83, 10),
(280, 10),
(347, 10),
(348, 10),
(437, 10),
(438, 10),
(411, 11),
(186, 11),
(4, 11),
(451, 11),
(453, 11),
(186, 12),
(411, 12),
(4, 12),
(453, 12);



-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) UNSIGNED NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `birthdate` date NOT NULL,
  `gender` varchar(20) NOT NULL,
  `city` varchar(80),
  `zipcode` varchar(8),
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `savings` int(4) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `firstname`, `lastname`, `birthdate`, `gender`, `zipcode`, `city`, `email`, `password`, `savings`) VALUES
(1, "John", "Doe", "1990-01-01", "male", "51100", "Reims", "john.doe@shoparoundme.com", "$argon2id$v=19$m=65536,t=5,p=1$7mVgivYtWnsgElIicIfdaA$f+YO/xkVeN9RovS0G9tXoj3TE6kZToj3hz34lnK0Rbs", 500);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

-- --------------------------------------------------------

--
-- Structure de la table `shop_user`
--

CREATE TABLE `shop_user` (
  `shop_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_shop_user_shop
        FOREIGN KEY (shop_id)
        REFERENCES shop(id)
        ON DELETE CASCADE,
  `user_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_shop_user_user
        FOREIGN KEY (user_id)
        REFERENCES user(id)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `shop_user`
--

INSERT INTO `shop_user` (`shop_id`,`user_id`) VALUES
(1, 1),
(4, 1),
(5, 1);

-- --------------------------------------------------------


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


