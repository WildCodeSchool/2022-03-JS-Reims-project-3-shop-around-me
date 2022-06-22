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

INSERT INTO `shop` (`id`, `name`, `brand`, `type`, `address`, `opening_hours`, `website`, `email`, `phone`, `fb_page`, `insta_page`, `x`, `y`) VALUES
(1, "Magasin Fossier", "Maison Fossier", "Biscuit", "25 Cr Jean-Baptiste Langlet, 51100 Reims", "lundi, 14:00–19:00 / mardi, 10:00–19:00 / mercredi, 10:00–19:00 / jeudi, 10:00–19:00 / vendredi, 10:00–19:00 / samedi, 10:00–19:00 / dimanche, Fermé", "http://www.fossier.fr/", "fossier@fossier.fr", "0326475984", "https://www.facebook.com/biscuitsfossier", "https://www.instagram.com/biscuitsfossier/", "4.030856132507324", "49.25590515136719")

/* INSERT QUERY NO: 1 */
,
(
5, 'Nicolas', 'Nicolas', 'alcohol', '', '', '', '', '', '', '', 4.0282211, 49.2555462996293
)

/* INSERT QUERY NO: 2 */
,
(
6, 'Champagne Henri Abelé', '', 'alcohol', '', '', '', '', '', '', '', 4.0476558330436, 49.2488371319464
)

/* INSERT QUERY NO: 3 */
,
(
7, 'Maison de Champagne Louis Roderer', '', 'alcohol', '', '', '', '', '', '', '', 4.03553404856429, 49.2600001456078
)

/* INSERT QUERY NO: 4 */
,
(
8, 'Vin et Plaqomusophiles', '', 'alcohol', '', '', '', '08 99 86 54 45', '', '', '', 4.0362629, 49.248616299631
)

/* INSERT QUERY NO: 5 */
,
(
9, 'Cave des Sacres', '', 'alcohol', '', '', '', '', '', '', '', 4.0328038, 49.2529802996299
)

/* INSERT QUERY NO: 6 */
,
(
10, 'Cave Balourdet', '', 'alcohol', '', '', 'http://balourdet.fr', '+33 3 26 82 15 69', '', '', '', 4.0409329, 49.2512253996303
)

/* INSERT QUERY NO: 7 */
,
(
11, 'Le Parvis', '', 'alcohol', '', '', '', '', '', '', '', 4.0319395, 49.2532466996298
)

/* INSERT QUERY NO: 8 */
,
(
12, 'Champagne Lanson', '', 'alcohol', '', '', '', '', '', '', '', 4.01925654654676, 49.2428342760272
)

/* INSERT QUERY NO: 9 */
,
(
13, 'Les Délices Champenoises', '', 'alcohol', '', '', '', '', '', '', '', 4.0318606, 49.2531985996299
)

/* INSERT QUERY NO: 10 */
,
(
14, 'La Cave Colbery', '', 'alcohol', '', '', 'http://cave-colbert.com', '+33 326362116', '', '', '', 4.0329924, 49.256871599629
)

/* INSERT QUERY NO: 11 */
,
(
15, 'Pix''Hall', '', 'appliance', '', '', 'http://www.pixhall.fr/magasin-pixhall/reims.html', '+33 3 26 87 52 74', '', '', '', 4.00306042698135, 49.2740819314093
)

/* INSERT QUERY NO: 12 */
,
(
16, 'Europlex', '', 'appliance', '43 Avenue Nationale', '', 'http://www.europlex.fr', '', '', '', '', 4.0076906, 49.2865328996217
)

/* INSERT QUERY NO: 13 */
,
(
17, 'Le Jeune', '', 'bakery', '', '', '', '', '', '', '', 4.0149919, 49.2491013996309
)

/* INSERT QUERY NO: 14 */
,
(
18, 'Boulangerie des Lys', '', 'bakery', '', '', '', '+33 3 26 47 78 12', '', '', '', 4.02913267249238, 49.2518044828373
)

/* INSERT QUERY NO: 15 */
,
(
19, '', '', 'bakery', '', '', '', '', '', '', '', 4.0159376, 49.2359531996341
)

/* INSERT QUERY NO: 16 */
,
(
20, 'Le Fournil du Jard', '', 'bakery', '', '', '', '+33 3 26 35 85 55', '', '', '', 4.0308914, 49.2474971996313
)

/* INSERT QUERY NO: 17 */
,
(
21, 'La Mie Câline', 'La Mie Câline', 'bakery', '', '', '', '', '', '', '', 4.027943, 49.2539291996297
)

/* INSERT QUERY NO: 18 */
,
(
22, 'Le Four à Bois', '', 'bakery', '', '', 'http://zunic.fr', '+33 3 26 47 40 20', '', '', '', 4.02692754995335, 49.2529234388108
)

/* INSERT QUERY NO: 19 */
,
(
23, 'La Fournée Croquante', '', 'bakery', '', '', '', '+33 3 26 24 83 93', '', '', '', 4.0384706, 49.2471095996314
)

/* INSERT QUERY NO: 20 */
,
(
24, '', '', 'bakery', '', '', '', '', '', '', '', 4.03298427411872, 49.2690730644921
)

/* INSERT QUERY NO: 21 */
,
(
25, '', '', 'bakery', '', '', '', '', '', '', '', 4.0547903, 49.2553088996294
)

/* INSERT QUERY NO: 22 */
,
(
26, 'La Briocherie', '', 'bakery', '', '', '', '', '', '', '', 4.02637427863624, 49.2552248769132
)

/* INSERT QUERY NO: 23 */
,
(
27, 'Case à Pain Forum', '', 'bakery', '', '', 'https://case-a-pain.fr/nos-magasins/', '+33 3 26 84 92 93', '', '', '', 4.0327256, 49.2560311996292
)

/* INSERT QUERY NO: 24 */
,
(
28, 'Boulangerie Pâtisserie Amoud', '', 'bakery', '', '', '', '+33 3 26 85 05 84', '', '', '', 4.0229779, 49.2757896996243
)

/* INSERT QUERY NO: 25 */
,
(
29, '', '', 'bakery', '', '', '', '', '', '', '', 4.0510542, 49.2669470996265
)

/* INSERT QUERY NO: 26 */
,
(
30, 'Boulangerie L''Arbre à Pains', '', 'bakery', '43 Ter Avenue Nationale', '', '', '+33 3 26 09 26 98', '', '', '', 4.007484, 49.2867078996216
)

/* INSERT QUERY NO: 27 */
,
(
31, 'La Boîte à Pain', '', 'bakery', '', '', '', '', '', '', '', 4.0475671, 49.260593399628
)

/* INSERT QUERY NO: 28 */
,
(
32, 'L''Artisane', '', 'bakery', '', '', '', '+33 6 67 69 36 11', '', '', '', 4.0162059, 49.223947099637
)

/* INSERT QUERY NO: 29 */
,
(
33, 'Boulangerie Petit', '', 'bakery', '', '', '', '33326090917', '', '', '', 4.0254883, 49.2696819996258
)

/* INSERT QUERY NO: 30 */
,
(
34, 'Boulangerie Pâtisserie', '', 'bakery', '', '', '', '', '', '', '', 4.0542913, 49.2630154996274
)

/* INSERT QUERY NO: 31 */
,
(
35, 'La Flamande', '', 'bakery', '', '', '', '', '', '', '', 4.0426869, 49.2584513996286
)

/* INSERT QUERY NO: 32 */
,
(
36, 'La Gourmandise', '', 'bakery', '', '', '', '', '', '', '', 4.0218614, 49.2247895996368
)

/* INSERT QUERY NO: 33 */
,
(
37, 'Boulagerie Frédéric Hardy', '', 'bakery', '', '', 'https://www.boulangerie51.org/boulangerie-hardy-frederic-sarl-b-h-c-reims-163.html', '+33 3 26 47 68 81', 'frederichardy@neuf.fr', '', '', 4.0326377, 49.2577514996288
)

/* INSERT QUERY NO: 34 */
,
(
38, '', '', 'bakery', '', '', '', '', '', '', '', 4.0243023, 49.2589557996284
)

/* INSERT QUERY NO: 35 */
,
(
39, 'Boulangerie Patisserie Laurent Lamaix', '', 'bakery', '', '', '', '+33 3 26 47 03 06', '', '', '', 4.0264835, 49.264741799627
)

/* INSERT QUERY NO: 36 */
,
(
40, 'La Pétrisane', '', 'bakery', '', '', '', '+33 326400730', '', '', '', 4.0400999, 49.2575897996288
)

/* INSERT QUERY NO: 37 */
,
(
41, 'Aux Fruits de la Moisson', '', 'bakery', '', '', '', '', '', '', '', 4.0515378, 49.248496999631
)

/* INSERT QUERY NO: 38 */
,
(
42, 'Fisher', 'Fischer', 'bakery', '', '', 'https://fischer1913.com', '+333 26 23 33 76', '', '', '', 4.0202844, 49.2614135996278
)

/* INSERT QUERY NO: 39 */
,
(
43, '', '', 'bakery', '', '', '', '', '', '', '', 4.0244948, 49.2886724996211
)

/* INSERT QUERY NO: 40 */
,
(
44, 'Boulangerie Dufresne', '', 'bakery', '', '', '', '', '', '', '', 4.0459509, 49.2437416996322
)

/* INSERT QUERY NO: 41 */
,
(
45, 'Boulangerie des Halles', '', 'bakery', '', '', '', '', '', '', '', 4.0317037, 49.2593822996283
)

/* INSERT QUERY NO: 42 */
,
(
46, 'Boulangerie Louise', 'Boulangerie Louise', 'bakery', '', '', 'https://www.boulangerielouise.com', '', '', '', '', 4.0838624, 49.240180099633
)

/* INSERT QUERY NO: 43 */
,
(
47, 'La Huche à Pain', '', 'bakery', '', '', '', '+33 326478727', '', '', '', 4.0348863, 49.2508265996305
)

/* INSERT QUERY NO: 44 */
,
(
48, 'La Fournée d''Hugo', '', 'bakery', '', '', '', '', '', '', '', 4.0266022, 49.2134283996396
)

/* INSERT QUERY NO: 45 */
,
(
49, '', '', 'bakery', '', '', '', '', '', '', '', 4.0160005, 49.236141199634
)

/* INSERT QUERY NO: 46 */
,
(
50, 'Case à Pain', '', 'bakery', '', '', '', '', '', '', '', 4.0622305, 49.2462057996316
)

/* INSERT QUERY NO: 47 */
,
(
51, 'Les gourmandises de Marido', '', 'bakery', '', '', '', '+33 3 26 40 54 69', '', '', '', 4.0291187, 49.2538631996297
)

/* INSERT QUERY NO: 48 */
,
(
52, 'Espace Aubade', '', 'bathroom_furnishing', '', '', 'https://www.espace-aubade.fr/magasins/reims-42.html', '', '', '', '', 4.06654750418496, 49.2687639422001
)

/* INSERT QUERY NO: 49 */
,
(
53, 'Brossette Salles de bains', '', 'bathroom_furnishing', '', '', '', '', '', '', '', 4.00317637674252, 49.2760290646182
)

/* INSERT QUERY NO: 50 */
,
(
54, 'CEDEO', '', 'bathroom_furnishing', '', '', '', '', '', '', '', 4.06926078772219, 49.2699267850511
)

/* INSERT QUERY NO: 51 */
,
(
55, 'Norgil Institut d''Expertise Capillaire', '', 'beauty', '', '', '', '', '', '', '', 4.0485813, 49.2581207996287
)

/* INSERT QUERY NO: 52 */
,
(
56, 'Meggan', '', 'beauty', '', '', '', '', '', '', '', 4.030358, 49.2535870996298
)

/* INSERT QUERY NO: 53 */
,
(
57, 'Marie LaurEsthétisur', '', 'beauty', '', '', '', '+33 3 26 87 66 60', '', '', '', 4.0339235, 49.244599299632
)

/* INSERT QUERY NO: 54 */
,
(
58, 'Ongle Beauté', '', 'beauty', '', '', '', '+33 3 26 05 79 80', '', '', '', 4.0375343, 49.2482180996311
)

/* INSERT QUERY NO: 55 */
,
(
59, 'Institut Oran’g', '', 'beauty', '', '', 'http://institut-Orange.com', '+33 3 26 82 85 82', '', '', '', 4.0402118, 49.248494499631
)

/* INSERT QUERY NO: 56 */
,
(
60, 'Guinot', '', 'beauty', '', '', '', '', '', '', '', 4.0336031, 49.256886099629
)

/* INSERT QUERY NO: 57 */
,
(
61, 'Yves Rocher', 'Yves Rocher', 'beauty', '', '', '', '', '', '', '', 4.0281848, 49.2534053996298
)

/* INSERT QUERY NO: 58 */
,
(
62, 'L''Onglerie', '', 'beauty', '', '', '', '', '', '', '', 4.0469023, 49.2599267996282
)

/* INSERT QUERY NO: 59 */
,
(
63, 'Coco Nails & Beauty', '', 'beauty', '', '', 'https://dreambodyinstitut.wixsite.com/dreambodyreims', '+33 3 26 03 66 07', '', '', '', 4.0467524, 49.2571446996289
)

/* INSERT QUERY NO: 60 */
,
(
64, 'Instant de Sérénité', '', 'beauty', '', '', 'http://instantdeserenite-reims.fr/', '', '', '', '', 4.0382368, 49.2422823996325
)

/* INSERT QUERY NO: 61 */
,
(
65, 'Stylforme', '', 'beauty', '', '', 'http://stylforme.com', '+33 326402394', '', '', '', 4.0273092, 49.2523243996301
)

/* INSERT QUERY NO: 62 */
,
(
66, 'Pb CosmeticS', '', 'beauty', '', '', '', '', '', '', '', 4.0292713, 49.2543102996296
)

/* INSERT QUERY NO: 63 */
,
(
67, 'Parashop', '', 'beauty', '', '', '', '', '', '', '', 4.0264053060672, 49.2550754106135
)

/* INSERT QUERY NO: 64 */
,
(
68, 'Natur’Elles', '', 'beauty', '', '', '', '', '', '', '', 4.0443444, 49.2634396996273
)

/* INSERT QUERY NO: 65 */
,
(
69, 'Les 2 font la Paire', '', 'beauty', '', '', '', '', '', '', '', 4.0331967, 49.256716699629
)

/* INSERT QUERY NO: 66 */
,
(
70, 'Influences d''Orient', '', 'beauty', '', '', 'http://www.influencedorient.fr/', '33326770390', '', '', '', 4.01896593194016, 49.2619039964511
)

/* INSERT QUERY NO: 67 */
,
(
71, 'L & LUI Minceur', '', 'beauty', '', '', '', '', '', '', '', 4.0337705, 49.2512690996303
)

/* INSERT QUERY NO: 68 */
,
(
72, 'Les Soins de Pauline', '', 'beauty', '', '', '', '+33 326868186', '', '', '', 4.0356439, 49.2542016996296
)

/* INSERT QUERY NO: 69 */
,
(
73, 'Ma Boîte à Beauté', '', 'beauty', '', '', 'http://maboitameabeauté.fr', '+33 3 51 42 18 97', '', '', '', 4.0438162, 49.2429269996324
)

/* INSERT QUERY NO: 70 */
,
(
74, 'Les Loges du Regard', '', 'beauty', '', '', '', '', '', '', '', 4.03109613218508, 49.2476203804547
)

/* INSERT QUERY NO: 71 */
,
(
75, 'L’Institut de l’Ongle', '', 'beauty', '', '', '', '+33 326471863', '', '', '', 4.0248318, 49.2522932996301
)

/* INSERT QUERY NO: 72 */
,
(
76, 'Clair de Femme', '', 'beauty', '', '', '', '', '', '', '', 4.021369, 49.2579427996287
)

/* INSERT QUERY NO: 73 */
,
(
77, 'Cycles Hubert', '', 'bicycle', '', '', 'https://www.hubert-cycles.com/', '+33 3 26 09 16 93', 'info@hubert-cycles.com', '', '', 4.0273719, 49.2783271996237
)

/* INSERT QUERY NO: 74 */
,
(
78, 'Vél''Oxygène', '', 'bicycle', '', '', 'http://reims.fubicy.org', '', 'reims@fubicy.org', '', '', 4.0348953, 49.2264258996364
)

/* INSERT QUERY NO: 75 */
,
(
79, 'France Loisir', '', 'books', '', '', '', '', '', '', '', 4.0300556, 49.2547250996295
)

/* INSERT QUERY NO: 76 */
,
(
80, 'Échoppe de Relieur d''Art (Yves Laporte)', '', 'books', '', '', '', '', '', '', '', 4.0264971, 49.2676551996263
)

/* INSERT QUERY NO: 77 */
,
(
81, 'La Procure', 'La Procure', 'books', '', '', '', '', '', '', '', 4.0331659, 49.2550215996294
)

/* INSERT QUERY NO: 78 */
,
(
82, 'Amory', '', 'books', '', '', '', '+33 326474621', '', '', '', 4.042117, 49.2582322996286
)

/* INSERT QUERY NO: 79 */
,
(
83, 'Fnac', 'Fnac', 'books', '', '', 'http://fnac.com/', '', '', '', '', 4.02581951537573, 49.2550049796707
)

/* INSERT QUERY NO: 80 */
,
(
84, 'Bibliotheme', '', 'books', '', '', '', '+33 326884342', '', '', '', 4.033831, 49.2560095996292
)

/* INSERT QUERY NO: 81 */
,
(
85, 'Le Bouquiniste', '', 'books', '', '', '', '', '', '', '', 4.028887, 49.2550248996294
)

/* INSERT QUERY NO: 82 */
,
(
86, 'Bazarine', '', 'books', '', '', '', '', '', '', '', 4.0340091, 49.2500735996306
)

/* INSERT QUERY NO: 83 */
,
(
87, 'Senses Brewing', '', 'brewery', '', '', 'https://www.sensesbrewing.com', '', '', 'https://www.facebook.com/SensesBrewing/', '', 4.0409294, 49.2666856996265
)

/* INSERT QUERY NO: 84 */
,
(
88, 'Change Or Reims', '', 'bureau_de_change', '', '', '', '', '', '', '', 4.0324729, 49.2518331996302
)

/* INSERT QUERY NO: 85 */
,
(
89, 'Boucherie  Hippodrome', '', 'butcher', '', '', '', '', '', '', '', 4.0045289, 49.2373608996337
)

/* INSERT QUERY NO: 86 */
,
(
90, 'Le Comptoir des Viandes', '', 'butcher', '', '', '', '', '', '', '', 4.0461993, 49.2600501996282
)

/* INSERT QUERY NO: 87 */
,
(
91, 'Maison Audinot', '', 'butcher', '', '', 'http://maisonaudinot.fr', '970355064', 'contact@maisonaudinot.fr', '', '', 4.0125542, 49.2439862996321
)

/* INSERT QUERY NO: 88 */
,
(
92, 'Boucherie Thierry Brezillon', '', 'butcher', '', '', '', '', '', '', '', 4.0317312, 49.2593190996284
)

/* INSERT QUERY NO: 89 */
,
(
93, 'Pâté Croute Piquet''s', '', 'butcher', '67 Avenue Nationale', '', '', '', '', '', '', 4.0045991, 49.2896213996209
)

/* INSERT QUERY NO: 90 */
,
(
94, 'Ets Denis & Cie', '', 'butcher', '', '', 'http://denis.fr', '+33 326400752', '', '', '', 4.0312502, 49.2596195996283
)

/* INSERT QUERY NO: 91 */
,
(
95, 'Au Gourmet des Halles', '', 'butcher', '', '', '', '', '', '', '', 4.0314341, 49.2592954996284
)

/* INSERT QUERY NO: 92 */
,
(
96, '', '', 'butcher', '', '', '', '', '', '', '', 4.0247104, 49.2886863996211
)

/* INSERT QUERY NO: 93 */
,
(
97, 'Pâté Croûte Piquet''S', '', 'butcher', '', '', 'https://patecroutepiquets.fr/', '+33 3 26 84 93 20', '', '', '', 4.0489412, 49.260693599628
)

/* INSERT QUERY NO: 94 */
,
(
98, '', '', 'butcher', '', '', '', '', '', '', '', 4.0201991, 49.2721147996252
)

/* INSERT QUERY NO: 95 */
,
(
99, 'François Léau', '', 'butcher', '', '', '', '+33 3 26 05 23 46', '', '', '', 4.0366445, 49.25256839963
)

/* INSERT QUERY NO: 96 */
,
(
100, 'Peugeot', 'Peugeot', 'car', '', '', '', '', '', '', '', 4.02331894204486, 49.2928254903332
)

/* INSERT QUERY NO: 97 */
,
(
101, 'Auto City', '', 'car', '', '', 'https://www.autocity.fr/', '+33 3 26 88 04 44', '', '', '', 4.0840247, 49.2347671996344
)

/* INSERT QUERY NO: 98 */
,
(
102, 'Reims Champagne Auto', 'Škoda Auto', 'car', '', '', 'https://www.skoda-reims.fr/', '+33 3 64 00 94 78', '', '', '', 4.0835774, 49.2367530996339
)

/* INSERT QUERY NO: 99 */
,
(
103, 'Liana Auto', '', 'car', '', '', '', '', '', '', '', 4.006168, 49.2707411996256
)

/* INSERT QUERY NO: 100 */
,
(
104, 'DG Prestige Automobile', '', 'car', '', '', '', '+33 699133535', '', '', '', 4.0166746, 49.2880034996213
)

/* INSERT QUERY NO: 101 */
,
(
105, 'Transit Auto', '', 'car', '49 Avenue Nationale', '', '', '+33 3 26 40 29 29', '', '', '', 4.006548, 49.2870752996215
)

/* INSERT QUERY NO: 102 */
,
(
106, 'BMW', 'BMW', 'car', '', '', 'https://emond-bmw-reims.espacevo.fr', '', '', '', '', 4.0825903, 49.2373317996338
)

/* INSERT QUERY NO: 103 */
,
(
107, 'Rectification Rémoise', '', 'car', '', '', '', '+33 326870939', '', '', '', 4.0158429, 49.2899731996208
)

/* INSERT QUERY NO: 104 */
,
(
108, 'PH Auto Net', '', 'car', '', '', '', '', '', '', '', 4.0746988, 49.2371303996338
)

/* INSERT QUERY NO: 105 */
,
(
109, 'Compil'' Auto', '', 'car', '', '', '', '', '', '', '', 4.00868941172698, 49.2864808568598
)

/* INSERT QUERY NO: 106 */
,
(
110, 'Delhorbe Automobile Volvo Hyundai', '', 'car', '', '', '', '', '', '', '', 4.08444206656635, 49.2363923676556
)

/* INSERT QUERY NO: 107 */
,
(
111, '', '', 'car', '', '', '', '', '', '', '', 4.08325656485263, 49.2354584540996
)

/* INSERT QUERY NO: 108 */
,
(
112, 'Renault', 'Renault', 'car', '', '', '', '+33 326506070', '', '', '', 4.0795247, 49.2381014996336
)

/* INSERT QUERY NO: 109 */
,
(
113, 'Carter-Cash', '', 'car_parts', '1 Avenue Benoît Frachon', '', 'https://www.carter-cash.com/magasin/reims-51100-M028', '', '', '', '', 4.0156275832488, 49.284413325661
)

/* INSERT QUERY NO: 110 */
,
(
114, 'API Reims', '', 'car_parts', 'Rue Docteur Serge Bazelaire', '', 'http://api-france.com', '+33 326874804', '', '', '', 4.0258798, 49.2899786996208
)

/* INSERT QUERY NO: 111 */
,
(
115, 'Vatat Carrosserie industrielle', '', 'car_parts', '10 Avenue Benoît Frachon', '', 'http://www.vatat.fr/', '', '', '', '', 4.01690135664413, 49.28620406722
)

/* INSERT QUERY NO: 112 */
,
(
116, 'Rent A Car (RentACar)', '', 'car_rental', '', '', '', '', '', '', '', 4.0251729, 49.2591860996284
)

/* INSERT QUERY NO: 113 */
,
(
117, 'Europcar', 'Europcar', 'car_rental', '', '', '', '', '', '', '', 4.0316942, 49.2614227996278
)

/* INSERT QUERY NO: 114 */
,
(
118, 'Alamo', 'Alamo', 'car_rental', '', '', '', '', '', '', '', 4.02581, 49.2593357996284
)

/* INSERT QUERY NO: 115 */
,
(
119, 'Garage Pommery AD', '', 'car_repair', '', '', '', '', '', '', '', 4.0408139, 49.2396068996332
)

/* INSERT QUERY NO: 116 */
,
(
120, 'Reanault Garage Carteret', '', 'car_repair', 'Boulevard Carteret', '', '', '', '', '', '', 4.0481669, 49.2584123996286
)

/* INSERT QUERY NO: 117 */
,
(
121, 'Garage Jamin Peugeot', '', 'car_repair', '', '', 'http://garagejamin-Peugeot-reims.fr', '+33 3326072158', '', '', '', 4.04647255621075, 49.2617317481116
)

/* INSERT QUERY NO: 118 */
,
(
122, 'Planète Auto Reims', '', 'car_repair', '', '', '', '', '', '', '', 4.00211456863514, 49.2754195856542
)

/* INSERT QUERY NO: 119 */
,
(
123, 'Carglass', 'Carglass', 'car_repair', '', '', '', '', '', '', '', 4.059932, 49.264698599627
)

/* INSERT QUERY NO: 120 */
,
(
124, 'Garage Berganzoni', '', 'car_repair', '', '', 'https://www.carrosserie-berganzoni-reims.fr/garage-automobile', '', '', '', '', 4.06669826513016, 49.2704152581202
)

/* INSERT QUERY NO: 121 */
,
(
125, 'Garage Team TH', '', 'car_repair', '', '', '', '+33 326868220', '', '', '', 4.0224768, 49.2926947996202
)

/* INSERT QUERY NO: 122 */
,
(
126, 'Ford', 'Ford', 'car_repair', '', '', 'https://www.groupesaintchristophe.fr/EmplacementConcession/1189', '+33 3 26 85 72 80', '', '', '', 4.0862917, 49.2356785996342
)

/* INSERT QUERY NO: 123 */
,
(
127, 'Europarts Pare-brise', '', 'car_repair', '', '', 'http://windscreen.net', '+33 326403840', '', '', '', 4.015476, 49.2921554996203
)

/* INSERT QUERY NO: 124 */
,
(
128, '', '', 'car_repair', '', '', '', '', '', '', '', 4.0539297, 49.2535169996298
)

/* INSERT QUERY NO: 125 */
,
(
129, 'Speedy', 'Speedy', 'car_repair', '', '', '', '', '', '', '', 4.06355124830266, 49.2591471319626
)

/* INSERT QUERY NO: 126 */
,
(
130, 'Norauto', 'Norauto', 'car_repair', 'Rue Joanne Broche', '', 'http://centres.norauto.fr', '+33 326778262', '', '', '', 4.0236800286701, 49.2890396965326
)

/* INSERT QUERY NO: 127 */
,
(
131, 'Garage Malin', '', 'car_repair', '', '', '', '', '', '', '', 4.0237054, 49.2176800996386
)

/* INSERT QUERY NO: 128 */
,
(
132, 'Garage Guiardel', '', 'car_repair', '', '', 'http://www.garage-guiardel-reims.com/', '33326474781', '', '', '', 4.0368675, 49.2677551996263
)

/* INSERT QUERY NO: 129 */
,
(
133, 'Garage Nachate', '', 'car_repair', '', '', 'https://www.carrosserie-nachate.fr/', '+33 3 26 88 73 81', '', '', '', 4.04995531491047, 49.2552399371893
)

/* INSERT QUERY NO: 130 */
,
(
134, 'Garage Eugène Jeep Parts', '', 'car_repair', '', '', 'https://www.eugene-jeep-parts.fr/fr/', '+33 3 26 35 63 22', 'eugenejeep.rs@gmail.com', '', '', 4.010888, 49.2611955996279
)

/* INSERT QUERY NO: 131 */
,
(
135, 'Garage Guiardel - Renault', 'Renault', 'car_repair', '', '', '', '', '', '', '', 4.03714648751114, 49.2681498998517
)

/* INSERT QUERY NO: 132 */
,
(
136, 'Garage DM', '', 'car_repair', '', '', '', '+33 6 56 66 07 28', '', '', '', 4.022799, 49.2776574996239
)

/* INSERT QUERY NO: 133 */
,
(
137, 'Renault Garage Carteret', 'Renault', 'car_repair', '', '', '', '+33 3 26 85 27 26', '', '', '', 4.0338909, 49.2472338996313
)

/* INSERT QUERY NO: 134 */
,
(
138, 'Euromaster', 'Euromaster', 'car_repair', '', '', 'http://centres.euromaster.fr', '+33 351308130', '', '', '', 4.0662521, 49.2293489996357
)

/* INSERT QUERY NO: 135 */
,
(
139, 'Garage BEYA PRO', '', 'car_repair', '', '', 'https://www.beyapro-reims.fr/', '+33 3 59 28 31 44', '', '', '', 4.0312852, 49.2469353996314
)

/* INSERT QUERY NO: 136 */
,
(
140, 'Ébéniste', '', 'carpenter', '', '', '', '+33 6 82 03 64 46', '', '', '', 4.0400812, 49.248614699631
)

/* INSERT QUERY NO: 137 */
,
(
141, '', '', 'caterer', '', '', '', '', '', '', '', 4.0532287, 49.2626257996275
)

/* INSERT QUERY NO: 138 */
,
(
142, 'Symbiose', '', 'chemist', '', '', 'http://www.symbiose-reims.com', '', '', 'https://www.facebook.com/symbiosereims/', '', 4.0318116, 49.2591710996284
)

/* INSERT QUERY NO: 139 */
,
(
143, 'Maison Dallet', '', 'chocolate', '47 Cours Jean-Baptiste Langlet', '', '', '', '', '', '', 4.02973336615391, 49.2571007956441
)

/* INSERT QUERY NO: 140 */
,
(
144, 'Petits-fils Reims Courmeaux', '', 'cleaning', '', '', 'https://www.petits-fils.com/nos-agences/agence-aide-a-domicile-reims-courmeaux/', '+33 352626321', '', '', '', 4.0374066, 49.2581117996287
)

/* INSERT QUERY NO: 141 */
,
(
145, 'Amaelles (Ex : Aradopa)', '', 'cleaning', '', '', 'https://www.aradopa.fr/', '+33 3 26 79 30 40', '', '', '', 4.0385543, 49.2502445996306
)

/* INSERT QUERY NO: 142 */
,
(
146, 'Princesse tam.tam', 'Princesse tam.tam', 'clothes', '', '', '', '', '', '', '', 4.0299491, 49.2537603996297
)

/* INSERT QUERY NO: 143 */
,
(
147, 'Outlet', '', 'clothes', '', '', '', '', '', '', '', 4.029494, 49.2541834996296
)

/* INSERT QUERY NO: 144 */
,
(
148, 'K-Way', 'K-Way', 'clothes', '', '', '', '', '', '', '', 4.0290294, 49.2557984996292
)

/* INSERT QUERY NO: 145 */
,
(
149, 'Parano', '', 'clothes', '', '', '', '', '', '', '', 4.0272459, 49.25272549963
)

/* INSERT QUERY NO: 146 */
,
(
150, '1 2 3', '', 'clothes', '', '', '', '', '', '', '', 4.0279999, 49.2530021996299
)

/* INSERT QUERY NO: 147 */
,
(
151, 'Desigual', 'Desigual', 'clothes', '', '', '', '', '', '', '', 4.0289227, 49.2533518996298
)

/* INSERT QUERY NO: 148 */
,
(
152, 'Celio', 'Celio', 'clothes', '', '', '', '', '', '', '', 4.02577333823231, 49.2552018244568
)

/* INSERT QUERY NO: 149 */
,
(
153, 'Magnum', '', 'clothes', '', '', '', '', '', '', '', 4.0288282, 49.2546997996295
)

/* INSERT QUERY NO: 150 */
,
(
154, 'Fashion', '', 'clothes', '', '', '', '', '', '', '', 4.0301755, 49.2536223996298
)

/* INSERT QUERY NO: 151 */
,
(
155, 'À l’Entrechat', '', 'clothes', '', '', '', '', '', '', '', 4.0314781, 49.2588828996285
)

/* INSERT QUERY NO: 152 */
,
(
156, 'Casting', '', 'clothes', '', '', '', '+33 326899179', '', '', '', 4.0314846, 49.2565139996291
)

/* INSERT QUERY NO: 153 */
,
(
157, 'IKKS Junior', '', 'clothes', 'Passage Subé', '', '', '', '', '', '', 4.0282988, 49.2546380996295
)

/* INSERT QUERY NO: 154 */
,
(
158, 'A louer (Ex : C Collection)', '', 'clothes', '', '', '', '', '', '', '', 4.0303848, 49.2535518996298
)

/* INSERT QUERY NO: 155 */
,
(
159, 'Seen', '', 'clothes', '', '', '', '', '', '', '', 4.0329055, 49.256608899629
)

/* INSERT QUERY NO: 156 */
,
(
160, 'Brice', 'Brice', 'clothes', '', '', '', '', '', '', '', 4.02627017525768, 49.2555237102394
)

/* INSERT QUERY NO: 157 */
,
(
161, 'W-boutique', '', 'clothes', '', '', 'https://www.wboutique-saintjames.com/', '+33 3 26 88 40 33', '', '', '', 4.0314989, 49.2557131996292
)

/* INSERT QUERY NO: 158 */
,
(
162, '', '', 'clothes', '', '', '', '', '', '', '', 4.04444127372286, 49.2594051544454
)

/* INSERT QUERY NO: 159 */
,
(
163, 'Camaïeu', 'Camaïeu', 'clothes', '', '', '', '', '', '', '', 4.0291049, 49.2537422996297
)

/* INSERT QUERY NO: 160 */
,
(
164, 'Ivana', '', 'clothes', '', '', '', '', '', '', '', 4.0284714, 49.2560076996292
)

/* INSERT QUERY NO: 161 */
,
(
165, 'Etam', 'Etam', 'clothes', '', '', '', '', '', '', '', 4.0298531, 49.2537238996297
)

/* INSERT QUERY NO: 162 */
,
(
166, 'Jules', 'Jules', 'clothes', '', '', '', '', '', '', '', 4.0283899, 49.2534818996298
)

/* INSERT QUERY NO: 163 */
,
(
167, 'Sergent Major', 'Sergent Major', 'clothes', '', '', '', '', '', '', '', 4.0263498143331, 49.2552297175195
)

/* INSERT QUERY NO: 164 */
,
(
168, 'Cotélac', 'Cotélac', 'clothes', '', '', '', '', '', '', '', 4.02669, 49.2538342996297
)

/* INSERT QUERY NO: 165 */
,
(
169, 'La Bobida', '', 'clothes', '', '', 'http://labovida.com', '+33 3 26 40 58 01', '', '', '', 4.0256274, 49.2521510996301
)

/* INSERT QUERY NO: 166 */
,
(
170, 'Liu Jo', 'Liu Jo', 'clothes', '', '', 'http://luiront.com', '+33 326063828', '', '', '', 4.0318425, 49.256597899629
)

/* INSERT QUERY NO: 167 */
,
(
171, 'Orchestra', 'Orchestra', 'clothes', 'Rue Docteur Serge Bazelaire', '', '', '+33 326091144', '', '', '', 4.0264275, 49.2899661996208
)

/* INSERT QUERY NO: 168 */
,
(
172, 'Armand Thiery', 'Armand Thiery', 'clothes', '', '', '', '', '', '', '', 4.0301123, 49.2541191996296
)

/* INSERT QUERY NO: 169 */
,
(
173, 'The North Face', 'The North Face', 'clothes', '', '', '', '', '', '', '', 4.0299424, 49.2550964996294
)

/* INSERT QUERY NO: 170 */
,
(
174, 'Kiabi', 'Kiabi', 'clothes', 'Rue Docteur Serge Bazelaire', '', 'http://liane.com', '+33 326369800', '', '', '', 4.02719679997793, 49.2893508497737
)

/* INSERT QUERY NO: 171 */
,
(
175, 'Cop.Copine', '', 'clothes', '', '', 'https://www.cop-copine.com/boutiques/cop-copine-reims', '+33 326616595', '', '', '', 4.0289967, 49.2549708996294
)

/* INSERT QUERY NO: 172 */
,
(
176, 'Caviar', '', 'clothes', '', '', '', '', '', '', '', 4.0297553, 49.2560232996292
)

/* INSERT QUERY NO: 173 */
,
(
177, 'IKKS Women', '', 'clothes', '', '', '', '+33 326257931', '', '', '', 4.0294053, 49.2545976996295
)

/* INSERT QUERY NO: 174 */
,
(
178, 'Izac', '', 'clothes', '', '', 'https://boutiques.izac.fr/costume-chemise/boutique-izac-reims-2675/', '', '', '', '', 4.02934571487363, 49.2559474803035
)

/* INSERT QUERY NO: 175 */
,
(
179, 'Wazabi', '', 'clothes', '', '', 'http://WAZABI-Shop.com', '+33 326860941', '', '', '', 4.026214, 49.2908671996206
)

/* INSERT QUERY NO: 176 */
,
(
180, 'Cyrillus', 'Cyrillus', 'clothes', '', '', '', '', '', '', '', 4.0303102, 49.2562262996291
)

/* INSERT QUERY NO: 177 */
,
(
181, 'Couture by SH', '', 'clothes', '', '', 'http://www.couturebysh.com', '', '', '', '', 4.03642545664549, 49.2255526272561
)

/* INSERT QUERY NO: 178 */
,
(
182, 'Christel VI', '', 'clothes', '', '', '', '', '', '', '', 4.0262064, 49.2901754996208
)

/* INSERT QUERY NO: 179 */
,
(
183, 'Marie Alice Création', '', 'clothes', '', '', '', '', '', '', '', 4.0444448, 49.2593566996283
)

/* INSERT QUERY NO: 180 */
,
(
184, 'La Femme s''entête', '', 'clothes', '', '', 'https://www.lafemmesentete.fr/', '+33 3 10 16 58 17', '', '', '', 4.0368374, 49.25251459963
)

/* INSERT QUERY NO: 181 */
,
(
185, 'Moto Expert', '', 'clothes', '', '', 'http://Dady-moto.com', '+33 326086400', '', '', '', 4.02492969999365, 49.2915984497087
)

/* INSERT QUERY NO: 182 */
,
(
186, 'Nokomis', '', 'clothes', '', '', '', '', '', '', '', 4.0332217, 49.256774899629
)

/* INSERT QUERY NO: 183 */
,
(
187, 'Damart', 'Damart', 'clothes', '', '', 'http://damart.fr', '+33 3 26 40 43 67', '', '', '', 4.0264322, 49.2524310996301
)

/* INSERT QUERY NO: 184 */
,
(
188, 'Mim', '', 'clothes', '', '', '', '', '', '', '', 4.02569726100785, 49.2551086664611
)

/* INSERT QUERY NO: 185 */
,
(
189, 'Le Jour J', '', 'clothes', '12 Avenue Léon Blum', '', '', '', '', '', '', 4.0103462, 49.2260946996365
)

/* INSERT QUERY NO: 186 */
,
(
190, 'Mille et Une Excuses', '', 'clothes', '', '', '', '', '', '', '', 4.02458559129959, 49.252623574675
)

/* INSERT QUERY NO: 187 */
,
(
191, 'Comptoir des Cotonniers', 'Comptoir des Cotonniers', 'clothes', '', '', '', '', '', '', '', 4.02866952707646, 49.2554547959272
)

/* INSERT QUERY NO: 188 */
,
(
192, 'Ding Fring', '', 'clothes', '', '', 'https://www.dingfring-nordest-iledefrance.fr', '+33 3 23 53 43 72', '', '', '', 4.0227375, 49.2179010996385
)

/* INSERT QUERY NO: 189 */
,
(
193, 'Mise au Green', 'Mise au Green', 'clothes', 'Passage Saint-Jacques', '', '', '', '', '', '', 4.0289559, 49.2542660996296
)

/* INSERT QUERY NO: 190 */
,
(
194, 'Petit Bateau', 'Petit Bateau', 'clothes', '', '', '', '', '', '', '', 4.0282682, 49.2544706996295
)

/* INSERT QUERY NO: 191 */
,
(
195, 'L''Échoppe magique', '', 'collector', '', '', '', '', '', '', '', 4.02235294302742, 49.2513240386918
)

/* INSERT QUERY NO: 192 */
,
(
196, 'Service 2i Informatique et Internet', '', 'computer', '', '', 'http://service2i.fr', '+33 7 60 25 06 05', '', '', '', 4.0441287, 49.2462824996316
)

/* INSERT QUERY NO: 193 */
,
(
197, 'Mapuceps2', '', 'computer', '', '', 'http://mapuceps2.com', '996272701', '', '', '', 4.038585, 49.2531819996298
)

/* INSERT QUERY NO: 194 */
,
(
198, 'Billiotte Biscuits', '', 'confectionery', '', '', '', '', '', '', '', 4.038898, 49.2422112996326
)

/* INSERT QUERY NO: 195 */
,
(
199, 'La petite Friande', '', 'confectionery', '', '', '', '+33 324485772', '', '', '', 4.0398143, 49.2574881996288
)

/* INSERT QUERY NO: 196 */
,
(
200, 'Biscuits Fossier', '', 'confectionery', '', '', 'http://dossier.fr', '+33 3 26 40 67 67', '', '', '', 4.01596559996519, 49.2932507913632
)

/* INSERT QUERY NO: 197 */
,
(
201, '', '', 'confectionery', '', '', '', '', '', '', '', 4.03891785264673, 49.2422213341461
)

/* INSERT QUERY NO: 198 */
,
(
202, 'Maison Caffet', '', 'confectionery', '', '', 'https://www.maison-caffet.com/maison-caffet-reims', '+33 3 26 49 05 75', 'reims@maison-caffet.com', '', '', 4.0316897, 49.2594578996283
)

/* INSERT QUERY NO: 199 */
,
(
203, 'Shakestar', '', 'confectionery', '', '', '', '', '', '', '', 4.02643880506177, 49.2554476755935
)

/* INSERT QUERY NO: 200 */
,
(
204, 'Casino Shop', 'Casino Shop', 'convenience', '', '', '', '', '', '', '', 4.0290894330798, 49.2516925836769
)

/* INSERT QUERY NO: 201 */
,
(
205, 'CocciMarket', 'CocciMarket', 'convenience', '', '', 'http://www.coccinelle.fr/', '', '', '', '', 4.0264216, 49.2140046996395
)

/* INSERT QUERY NO: 202 */
,
(
206, 'Épicerie de Quartier', '', 'convenience', '', '', '', '', '', '', '', 4.0265132, 49.2683652996261
)

/* INSERT QUERY NO: 203 */
,
(
207, 'La Fine Épicerie', '', 'convenience', '', '', '', '', '', '', '', 4.0348724, 49.256831299629
)

/* INSERT QUERY NO: 204 */
,
(
208, 'Carrefour Express', 'Carrefour Express', 'convenience', '', '', 'http://carrefour.fr', '+33 326062048', '', '', '', 4.0374546, 49.2569041996289
)

/* INSERT QUERY NO: 205 */
,
(
209, 'Thiriet', '', 'convenience', '', '', '', '', '', '', '', 4.0211291, 49.2189810996383
)

/* INSERT QUERY NO: 206 */
,
(
210, 'Épicerie du Monde', '', 'convenience', '', '', '', '', '', '', '', 4.0046362, 49.2372470996338
)

/* INSERT QUERY NO: 207 */
,
(
211, 'Leclerc Relais Drive Reims Elus', 'E. Leclerc Drive', 'convenience', '', '', 'http://leclercdrive.fr', '', '', '', '', 4.0310141, 49.2552165996294
)

/* INSERT QUERY NO: 208 */
,
(
212, 'Dinar Abdelilah', '', 'convenience', '', '', '', '+33 3 26 47 75 55', '', '', '', 4.0379898, 49.2510586996304
)

/* INSERT QUERY NO: 209 */
,
(
213, 'CocciMarket', 'CocciMarket', 'convenience', '', '', '', '+33 3 26 03 41 83', '', '', '', 4.0555003, 49.2634596996273
)

/* INSERT QUERY NO: 210 */
,
(
214, 'ALI BAKASSOU', '', 'convenience', '', '', '', '+33 3 26 04 65 11', '', '', '', 4.045199, 49.2593981996283
)

/* INSERT QUERY NO: 211 */
,
(
215, 'Le Marché Franprix', '', 'convenience', '', '', '', '', '', '', '', 4.0387403, 49.2426192996325
)

/* INSERT QUERY NO: 212 */
,
(
216, 'CocciMarket', 'CocciMarket', 'convenience', '', '', '', '', '', '', '', 4.0339427, 49.2511989996304
)

/* INSERT QUERY NO: 213 */
,
(
217, 'Akshayah Mini Market', '', 'convenience', '', '', '', '+33 3 26 87 08 85', '', '', '', 4.0346921, 49.2518406996302
)

/* INSERT QUERY NO: 214 */
,
(
218, 'Proxi', 'Proxi', 'convenience', '', '', '', '', '', '', '', 4.0445513, 49.2653646996269
)

/* INSERT QUERY NO: 215 */
,
(
219, 'Proxi', 'Proxi', 'convenience', '', '', '', '', '', '', '', 4.0496911, 49.2574097996288
)

/* INSERT QUERY NO: 216 */
,
(
220, 'Day by Day', 'Day by Day', 'convenience', '', '', 'http://daybyday-shop.com/magasin/reims', '33326799650', '', '', '', 4.04195543305903, 49.2582228078005
)

/* INSERT QUERY NO: 217 */
,
(
221, 'Timothée Alimentatio', '', 'convenience', '', '', '', '+33 326851907', '', '', '', 4.043966, 49.2432783996323
)

/* INSERT QUERY NO: 218 */
,
(
222, 'Monop''', 'Monop''', 'convenience', 'Rue du Docteur Jacquin', '', 'https://www.monoprix.fr/monop-rue-jacquin-reims-reims-51100-s', '', '', '', '', 4.0317574, 49.2569516996289
)

/* INSERT QUERY NO: 219 */
,
(
223, 'Votre Marché', '', 'convenience', '', '', '', '+33 3 26 86 47 11', '', '', '', 4.0215779, 49.2249095996368
)

/* INSERT QUERY NO: 220 */
,
(
224, 'Il Fanano', '', 'convenience', '', '', '', '', '', '', '', 4.03507, 49.2568834996289
)

/* INSERT QUERY NO: 221 */
,
(
225, 'Proximité Store', '', 'convenience', '', '', '', '+33 326473843', '', '', '', 4.0300889, 49.2483282996311
)

/* INSERT QUERY NO: 222 */
,
(
226, 'Laiterie Gilbert', '', 'convenience', '', '', 'https://www.laiterie-gilbert.fr', '+33 3 26 61 35 70', '', '', '', 4.0560812, 49.2594347996283
)

/* INSERT QUERY NO: 223 */
,
(
227, 'B-Side', '', 'copyshop', '', '', 'http://www.bside-printshop.com/', '', '', '', '', 4.02318008828491, 49.2530687591668
)

/* INSERT QUERY NO: 224 */
,
(
228, 'Brochage Routage Champagne (BRC)', '', 'copyshop', '', '', 'https://www.brc51.fr/', '+33 3 26 85 70 25', 'brc51@orange.fr', '', '', 4.0848773, 49.2300359996355
)

/* INSERT QUERY NO: 225 */
,
(
229, 'Bureautype Copies', '', 'copyshop', '', '', 'http://burotypecopies.fr/', '+33 3 26 50 13 58', 'contact@burotypecopies.fr', '', '', 4.0389983, 49.2422448996325
)

/* INSERT QUERY NO: 226 */
,
(
230, 'Imprimerie Reprocolor', '', 'copyshop', '6 ter Rue André F.J. Rieg', '', 'https://www.reprocolor.fr', '+33 3 20 29 87 87', 'reprolille@reprocolor.fr', '', '', 4.0794355, 49.2313733996352
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

/* INSERT QUERY NO: 234 */
,
(
238, 'Crématorium de reims', '', 'crematorium', '40 Avenue Maurice Plongeron', '', '', '', '', '', '', 4.0126637, 49.2921065996203
)

/* INSERT QUERY NO: 235 */
,
(
239, 'Épicerie Orientale', '', 'deli', '', '', '', '', '', '', '', 4.0269145, 49.2738403996248
)

/* INSERT QUERY NO: 236 */
,
(
240, 'Anna-S La Boutique', '', 'deli', '', '', 'http://annas-latableamoureuse.com/-La-Boutique-', '', '', '', '', 4.03515492771262, 49.2507201224413
)

/* INSERT QUERY NO: 237 */
,
(
241, 'Leroy Merlin', 'Leroy Merlin', 'doityourself', 'Rue Docteur Robert Creusat', '', 'https://www.leroymerlin.fr/', '33326778282', '', '', '', 4.02116399488809, 49.2887440393445
)

/* INSERT QUERY NO: 238 */
,
(
242, 'Brico Dépôt', 'Brico Dépôt', 'doityourself', '', '', 'https://www.bricodepot.fr/reims/depot/reims/1701/', '', '', '', '', 4.07117646526567, 49.2702027383646
)

/* INSERT QUERY NO: 239 */
,
(
243, 'Brico Dépôt', 'Brico Dépôt', 'doityourself', 'Rue William Shakespeare', '', 'http://www.bricodepot.fr', '', '', '', '', 4.0178906858511, 49.2132899059594
)

/* INSERT QUERY NO: 240 */
,
(
244, 'Lapeyre', 'Lapeyre', 'doityourself', '', '', '', '', '', '', '', 4.0211438, 49.2184578996384
)

/* INSERT QUERY NO: 241 */
,
(
245, 'Pillaud Matériaux', '', 'doityourself', 'Rue William Whakespeare', '', '', '', '', '', '', 4.01853226208368, 49.2150331568538
)

/* INSERT QUERY NO: 242 */
,
(
246, 'Plus + Retouches', '', 'dressmaker', '', '', '', '+33 3 26 88 67 23', '', '', '', 4.0288338, 49.25253669963
)

/* INSERT QUERY NO: 243 */
,
(
247, '', '', 'dry_cleaning', '', '', '', '', '', '', '', 4.0072434, 49.2358550996341
)

/* INSERT QUERY NO: 244 */
,
(
248, 'Presse 9', '', 'dry_cleaning', '', '', '', '', '', '', '', 4.0668277, 49.260913099628
)

/* INSERT QUERY NO: 245 */
,
(
249, '', '', 'dry_cleaning', '', '', '', '', '', '', '', 4.0395019206608, 49.2467657970979
)

/* INSERT QUERY NO: 246 */
,
(
250, 'VAPOA', '', 'e-cigarette', '', '', '', '', '', '', '', 4.0290283, 49.2541878996296
)

/* INSERT QUERY NO: 247 */
,
(
251, 'Yesss Électrique', 'Yesss Électrique', 'electrical', '', '', 'https://www.yesss-fr.com/', '', '', '', '', 4.01502496110457, 49.2842669004969
)

/* INSERT QUERY NO: 248 */
,
(
252, 'ARES', '', 'electrician', '5 Rue Rosa Luxemburg', '', 'http://www.ares-reims.fr/', '', '', '', '', 4.01789611273503, 49.2858163192545
)

/* INSERT QUERY NO: 249 */
,
(
253, 'Electro Dépôt', '', 'electronics', 'Rue Joanne Broche', '', 'http://electrodepot.fr', '+33 326867430', '', '', '', 4.02463772104111, 49.2894691448624
)

/* INSERT QUERY NO: 250 */
,
(
254, 'Ordi-Service', '', 'electronics_repair', '', '', '', '', '', '', '', 4.0243175, 49.2721425996252
)

/* INSERT QUERY NO: 251 */
,
(
255, 'Clinique de la machine à coudre', '', 'electronics_repair', '', '', 'http://machineacoudre-nordest.fr', '+33 3 26 82 55 31', '', '', '', 4.0408797, 49.2480943996311
)

/* INSERT QUERY NO: 252 */
,
(
256, 'Tendance Liège', '', 'fashion_accessories', '', '', 'https://liege-et-passion.fr/', '+33 9 86 46 65 86', 'contact@liege-et-passion.fr', '', '', 4.0284287, 49.2529526996299
)

/* INSERT QUERY NO: 253 */
,
(
257, '', '', 'floorer', '', '', '', '', '', '', '', 4.06573942515613, 49.2698651557445
)

/* INSERT QUERY NO: 254 */
,
(
258, 'Centaurea', '', 'florist', '', '', '', '', '', '', '', 4.0334455, 49.256840699629
)

/* INSERT QUERY NO: 255 */
,
(
259, 'Fleur de Sel', '', 'florist', '', '', '', '', '', '', '', 4.0253793, 49.2660693996267
)

/* INSERT QUERY NO: 256 */
,
(
260, '', '', 'florist', '', '', '', '', '', '', '', 4.0365297, 49.2269620996363
)

/* INSERT QUERY NO: 257 */
,
(
261, 'Osiris', '', 'florist', '', '', '', '', '', '', '', 4.0314307, 49.2589414996284
)

/* INSERT QUERY NO: 258 */
,
(
262, 'Only Fleurs', '', 'florist', '', '', '', '', '', '', '', 4.0506372, 49.2612732996279
)

/* INSERT QUERY NO: 259 */
,
(
263, 'Rapid Flore', '', 'florist', '', '', 'http://www.rapidflore.com/', '', '', '', '', 4.0454407, 49.2421040996326
)

/* INSERT QUERY NO: 260 */
,
(
264, 'Opuscule', '', 'florist', '', '', '', '+33 6 41 70 95 44', '', '', '', 4.030319, 49.2536267996297
)

/* INSERT QUERY NO: 261 */
,
(
265, 'Cafèt', '', 'food_court', '', '', '', '', '', '', '', 4.06259833408737, 49.24395499755
)

/* INSERT QUERY NO: 262 */
,
(
266, 'Caféteria', '', 'food_court', '', '', '', '', '', '', '', 4.0620086, 49.2406895996329
)

/* INSERT QUERY NO: 263 */
,
(
267, 'Roc Eclerc', 'Roc-Eclerc', 'funeral_directors', '', '', 'http://groupe-roc-eclerc.com', '', '', '', '', 4.0143879, 49.2923146996203
)

/* INSERT QUERY NO: 264 */
,
(
268, 'Maliterie Reimd', '', 'furniture', '', '', 'http://maliterie.com', '+33 326851011', '', '', '', 4.0200722, 49.2910237996206
)

/* INSERT QUERY NO: 265 */
,
(
269, 'Roche Bobois', 'Roche Bobois', 'furniture', '', '', '', '', '', '', '', 4.01918727606082, 49.2165822396104
)

/* INSERT QUERY NO: 266 */
,
(
270, 'Ambiance Tables et Chaises', '', 'furniture', '', '', '', '', '', '', '', 4.0240513, 49.2181369996385
)

/* INSERT QUERY NO: 267 */
,
(
271, 'DPStyle', '', 'furniture', '', '', 'http://dpstyle.fr', '+33 3 26 35 87 91', '', '', '', 4.0295957, 49.2578524996287
)

/* INSERT QUERY NO: 268 */
,
(
272, 'SARL Saine', '', 'furniture', '', '', 'https://menuiseriesaine.fr/', '+33 3 26 09 42 15', '', '', '', 4.0169954, 49.2885476996212
)

/* INSERT QUERY NO: 269 */
,
(
273, 'Petitcolin', '', 'furniture', 'Rue Edmond Rostand', '', '', '', '', '', '', 4.02001065728453, 49.2175023122515
)

/* INSERT QUERY NO: 270 */
,
(
274, 'A&M décoration', '', 'furniture', '', '', 'http://amdecoration.fr', '+33 3 26 47 45 27', '', '', '', 4.0370761, 49.25267909963
)

/* INSERT QUERY NO: 271 */
,
(
275, 'Canap''Affaires', '', 'furniture', '', '', '', '', '', '', '', 4.002607, 49.2702494996257
)

/* INSERT QUERY NO: 272 */
,
(
276, 'Le Chaisier', '', 'furniture', '', '', 'https://www.lechaisier.fr', '+33 3 26 85 06 35', '', '', '', 4.0410031, 49.2475628996312
)

/* INSERT QUERY NO: 273 */
,
(
277, 'Château d’Ax', '', 'furniture', 'Rue Docteur Robert Creusat', '', 'http://chateatdax-reims.fr', '+33 326099454', '', '', '', 4.0237277, 49.289315799621
)

/* INSERT QUERY NO: 274 */
,
(
278, 'Phybris Spa', '', 'furniture', '', '', 'http://phybis-spa.com', '+33 326614990', '', '', '', 4.0314109, 49.2465113996315
)

/* INSERT QUERY NO: 275 */
,
(
279, 'Agencia', '', 'furniture', '', '', 'http://agencia-design.com', '967769218', '', '', '', 4.0337367, 49.2557345996292
)

/* INSERT QUERY NO: 276 */
,
(
280, 'La Petite Malle d''Apolline', '', 'games', '', '', '', '', '', '', '', 4.0249669, 49.2547674996295
)

/* INSERT QUERY NO: 277 */
,
(
281, 'MisterMenuiserie Reims', '', 'gates', '', '', '', '+33 3 26 23 60 95', '', '', '', 4.0221761344669, 49.2911815611981
)

/* INSERT QUERY NO: 278 */
,
(
282, 'Mini...KAL', '', 'gift', '', '', '', '', '', '', '', 4.0291753, 49.2543959996296
)

/* INSERT QUERY NO: 279 */
,
(
283, 'Le Clos Simon', '', 'greengrocer', '', '', '', '', '', '', '', 4.015903, 49.2764679996242
)

/* INSERT QUERY NO: 280 */
,
(
284, 'Au Temps des Cerises', '', 'greengrocer', '', '', 'https://www.vitrinesdereims.com/', '+33 3 26 40 46 06', '', '', '', 4.0342764, 49.2563054996291
)

/* INSERT QUERY NO: 281 */
,
(
285, 'Signorini Tartufi', '', 'grocery', '', '', '', '+33 3 26 97 42 99', '', '', '', 4.0280901, 49.2538026996297
)

/* INSERT QUERY NO: 282 */
,
(
286, 'Würth', 'Würth', 'hardware', '', '', 'http://magasins.wurth.fr', '+33 326828105', '', '', '', 4.0276253, 49.2928281996201
)

/* INSERT QUERY NO: 283 */
,
(
287, 'Audition Conseil', 'Audition Conseil', 'hearing_aids', '', '', 'http://auditionconseil-lefebvre.fr', '+33 3 26 88 92 40', '', '', '', 4.033205, 49.2518354996302
)

/* INSERT QUERY NO: 284 */
,
(
288, 'Audilab', '', 'hearing_aids', '', '', '', '+33 326405804', '', '', '', 4.0326295, 49.2614226996278
)

/* INSERT QUERY NO: 285 */
,
(
289, 'Cham Mulot', '', 'heating_engineer', '', '', 'https://www.groupecham.com/agences/reims/', '', '', '', '', 4.06868041436989, 49.2708679874044
)

/* INSERT QUERY NO: 286 */
,
(
290, '', '', 'hifi', '', '', '', '', '', '', '', 4.0284736, 49.2553958996293
)

/* INSERT QUERY NO: 287 */
,
(
291, 'Linvosges', 'Linvosges', 'household_linen', '', '', 'https://www.linvosges.com/fr/nos-magasins/reims/', '+33 3 26 87 57 93', '', '', '', 4.0289864, 49.2559053996292
)

/* INSERT QUERY NO: 288 */
,
(
292, 'Lydia SAS', '', 'houseware', '', '', '', '', '', '', '', 4.0347572, 49.256537199629
)

/* INSERT QUERY NO: 289 */
,
(
293, '', '', 'hvac', '', '', '', '', '', '', '', 4.06444124057372, 49.2709393347556
)

/* INSERT QUERY NO: 290 */
,
(
294, 'AXA', 'AXA', 'insurance', '', '', 'http://agenceaxa.fr', '+33 326472038', '', '', '', 4.0381837, 49.2571888996289
)

/* INSERT QUERY NO: 291 */
,
(
295, 'Cabinet Mougeot', '', 'insurance', '', '', '', '', '', '', '', 4.0365517, 49.2575044996288
)

/* INSERT QUERY NO: 292 */
,
(
296, 'Advantis Assurances', '', 'insurance', '', '', '', '', '', '', '', 4.02683452275648, 49.2655871536442
)

/* INSERT QUERY NO: 293 */
,
(
297, 'Transports Sogny', '', 'insurance', '', '', '', '+33 326496016', '', '', '', 4.0161402, 49.289168099621
)

/* INSERT QUERY NO: 294 */
,
(
298, 'Allianz', 'Allianz', 'insurance', '', '', '', '', '', '', '', 4.0423167, 49.2586400996285
)

/* INSERT QUERY NO: 295 */
,
(
299, 'Mutuelle Just', '', 'insurance', '', '', '', '', '', '', '', 4.0360127, 49.2504236996305
)

/* INSERT QUERY NO: 296 */
,
(
300, 'Allianz', 'Allianz', 'insurance', '', '', 'http://allianz.fr', '+33 3 26 40 28 49', 'colin.reims@allianz.fr', '', '', 4.0441156, 49.2431176996323
)

/* INSERT QUERY NO: 297 */
,
(
301, 'Assu 2000', 'Assu 2000', 'insurance', '8 Rue Émile Zola', '', '', '', '', '', '', 4.02667121315512, 49.2653754785528
)

/* INSERT QUERY NO: 298 */
,
(
302, 'MAPA', '', 'insurance', '', '', 'http://papa-assurance.fr', '+33 3 26 85 12 85', '', '', '', 4.0439807, 49.2427250996324
)

/* INSERT QUERY NO: 299 */
,
(
303, 'TCA', '', 'insurance', '', '', '', '+33 323277777', '', '', '', 4.0355055, 49.2552109996294
)

/* INSERT QUERY NO: 300 */
,
(
304, 'Retraite Patrimoine (RP)', '', 'insurance', '', '', '', '', '', '', '', 4.0716236, 49.2372174996338
)

/* INSERT QUERY NO: 301 */
,
(
305, 'Aviva', 'Aviva', 'insurance', '', '', '', '', '', '', '', 4.0358495, 49.2569360996289
)

/* INSERT QUERY NO: 302 */
,
(
306, 'Maif Reims', 'Maif', 'insurance', '', '', '', '+33 3 26773360', '', '', '', 4.0448873, 49.2449353996319
)

/* INSERT QUERY NO: 303 */
,
(
307, 'MMA Reims Promenades', 'MMA', 'insurance', '', '', 'https://agence.mma.fr/reims-promenades/agence.html', '+33 3 26 47 30 42', '', '', '', 4.02276968157091, 49.2545524204702
)

/* INSERT QUERY NO: 304 */
,
(
308, 'Assurances CSF', '', 'insurance', '', '', '', '', '', '', '', 4.0213254, 49.2579952996287
)

/* INSERT QUERY NO: 305 */
,
(
309, 'AXA', 'AXA', 'insurance', '', '', '', '', '', '', '', 4.0375654, 49.2580607996287
)

/* INSERT QUERY NO: 306 */
,
(
310, 'Carac', '', 'insurance', '', '', 'http://carac.fr', '', '', '', '', 4.0323047, 49.2522498996301
)

/* INSERT QUERY NO: 307 */
,
(
311, 'BHô', '', 'interior_decoration', '', '', '', '', '', '', '', 4.03120967118, 49.2564607666863
)

/* INSERT QUERY NO: 308 */
,
(
312, 'Atelier Francony', '', 'interior_decoration', '', '', 'https://www.daniellefancony.com/', '+33 3 26 40 42 81', '', '', '', 4.0362897, 49.2536234996298
)

/* INSERT QUERY NO: 309 */
,
(
313, '4 murs - La Neuvilette', '', 'interior_decoration', 'Rue Docteur Robert Creusat', '', 'http://4murd.com', '+33 326356966', '', '', '', 4.0225856, 49.2902551996208
)

/* INSERT QUERY NO: 310 */
,
(
314, 'ABC.DER', '', 'interior_decoration', '', '', 'https://www.abcder-duret.fr/', '+33 3 23 08 62 36', '', '', '', 4.0398407, 49.2493748996308
)

/* INSERT QUERY NO: 311 */
,
(
315, 'Intemporel M', '', 'interior_decoration', '', '', '', '', '', '', '', 4.0287892, 49.2548993996295
)

/* INSERT QUERY NO: 312 */
,
(
316, 'Bull', '', 'interior_decoration', '', '', '', '', '', '', '', 4.0288767, 49.2549264996294
)

/* INSERT QUERY NO: 313 */
,
(
317, 'Centrakor', 'Centrakor', 'interior_decoration', '', '', '', '', '', '', '', 4.0210926, 49.2170803996387
)

/* INSERT QUERY NO: 314 */
,
(
318, 'Squirrel', '', 'it', '', '', 'https://www.squirrel.fr/', '972369949', 'contact@squirrel.fr', '', '', 4.0719814, 49.2368499996339
)

/* INSERT QUERY NO: 315 */
,
(
319, 'ASGA', '', 'it', '', '', 'http://asga.fr/', '', '', '', '', 4.0379903789542, 49.2704759074748
)

/* INSERT QUERY NO: 316 */
,
(
320, 'Montblanc', '', 'jewelry', '', '', '', '', '', '', '', 4.02949469087188, 49.2546264040203
)

/* INSERT QUERY NO: 317 */
,
(
321, 'Guilde des Orfèvres - Reims', '', 'jewelry', '', '', 'https://guildedesorfevres.fr/bijouterie/reims-1321M', '+33 3 26 47 22 75', 'bijouteriepierremarechal@orange.fr', '', '', 4.0287063, 49.2548730996294
)

/* INSERT QUERY NO: 318 */
,
(
322, 'Poret Michel', '', 'jewelry', '', '', '', '+33 3 26 86 62 84', '', '', '', 4.0382866, 49.2473355996313
)

/* INSERT QUERY NO: 319 */
,
(
323, 'Mélinda ZAND', '', 'jewelry', '', '', 'https://www.bijouterie-melindazand.fr/', '+33 3 26 02 19 74', '', '', '', 4.0288794, 49.2543497996296
)

/* INSERT QUERY NO: 320 */
,
(
324, 'Bijouterie Fleau', '', 'jewelry', '', '', '', '+33 3 26472476', '', '', '', 4.0277698, 49.2553850996293
)

/* INSERT QUERY NO: 321 */
,
(
325, 'Tresor', '', 'jewelry', '', '', '', '', '', '', '', 4.02611964812923, 49.2553359809642
)

/* INSERT QUERY NO: 322 */
,
(
326, 'Babouchka', '', 'jewelry', '', '', '', '', '', '', '', 4.029054, 49.2549893996294
)

/* INSERT QUERY NO: 323 */
,
(
327, 'Julien d''Orcel', 'Julien d''Orcel', 'jewelry', '', '', 'http://www.bijouterie-reims.com', '+33 9 61 34 69 16', '', '', '', 4.065451, 49.260659299628
)

/* INSERT QUERY NO: 324 */
,
(
328, 'Le Nid de Pie', '', 'jewelry', '', '', '', '+33 326886149', '', '', '', 4.0272114, 49.2524504996301
)

/* INSERT QUERY NO: 325 */
,
(
329, 'Tempka', '', 'jewelry', '', '', '', '', '', '', '', 4.02660686804635, 49.2555070359179
)

/* INSERT QUERY NO: 326 */
,
(
330, 'CEDEA', '', 'joiner', '', '', '', '', '', '', '', 4.0861767, 49.2307613996354
)

/* INSERT QUERY NO: 327 */
,
(
331, 'Quénot', '', 'joiner', '', '', '', '+33 3 26 82 84 61', '', '', '', 4.0952294, 49.224190599637
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

/* INSERT QUERY NO: 331 */
,
(
335, 'Cuisinella', 'Cuisinella', 'kitchen', '', '', '', '', '', '', '', 4.0237068, 49.289466299621
)

/* INSERT QUERY NO: 332 */
,
(
336, 'Inova', '', 'kitchen', '', '', '', '', '', '', '', 4.0288716, 49.25247269963
)

/* INSERT QUERY NO: 333 */
,
(
337, 'Bruschi', '', 'kitchen', '', '', '', '', '', '', '', 4.01962509954459, 49.2171660501324
)

/* INSERT QUERY NO: 334 */
,
(
338, 'Laverie Libre-service', '', 'laundry', '', '', '', '', '', '', '', 4.0254447, 49.2657151996268
)

/* INSERT QUERY NO: 335 */
,
(
339, 'Lavomatique', '', 'laundry', '', '', '', '+33 3 26 86 19 06', '', '', '', 4.037064, 49.2494421996308
)

/* INSERT QUERY NO: 336 */
,
(
340, 'Laverie Speed Queen Reims St Remi', '', 'laundry', '', '', 'https://laverie-reims.com', '', 'contact-adulie@laverie-reims.com', '', '', 4.0395151, 49.2423321996325
)

/* INSERT QUERY NO: 337 */
,
(
341, 'Le Lavoir', '', 'laundry', '', '', '', '', '', '', '', 4.0503768, 49.2611943996279
)

/* INSERT QUERY NO: 338 */
,
(
342, 'L.R Blanchisserie Chzmpenoise', '', 'laundry', '', '', 'http://le-blanchisserie-champenoise.fr', '+33 326779510', '', '', '', 4.0183761, 49.2923881996202
)

/* INSERT QUERY NO: 339 */
,
(
343, 'Laverie', '', 'laundry', '', '', '', '', '', '', '', 4.0334365, 49.2517351996302
)

/* INSERT QUERY NO: 340 */
,
(
344, '', '', 'laundry', '', '', '', '', '', '', '', 4.0259931, 49.2490280996309
)

/* INSERT QUERY NO: 341 */
,
(
345, 'CORDEUIL Davis', '', 'locksmith', '', '', '', '326', '', '', '', 4.0423607, 49.2709922996255
)

/* INSERT QUERY NO: 342 */
,
(
346, '', '', 'mall', '', '', '', '', '', '', '', 4.08414782425987, 49.2421047768034
)

/* INSERT QUERY NO: 343 */
,
(
347, 'Centre commercial Cernay', '', 'mall', '', '', '', '', '', '', '', 4.06519465795947, 49.2604766839177
)

/* INSERT QUERY NO: 344 */
,
(
348, 'Centre Commercial de l''Hippodrome', '', 'mall', '', '', '', '', '', '', '', 4.00759429608512, 49.2358237562144
)

/* INSERT QUERY NO: 345 */
,
(
349, 'Flora Mei', '', 'massage', '', '', 'http://www.floramei.com', '', '', '', '', 4.03740524049667, 49.2483723352612
)

/* INSERT QUERY NO: 346 */
,
(
350, 'Andi''Med Santé', '', 'medical_supply', '', '', 'https://www.cap-vital-sante.com/reims', '', '', '', '', 4.07288723003436, 49.2703180283441
)

/* INSERT QUERY NO: 347 */
,
(
351, 'LVL Médical Est', '', 'medical_supply', '', '', 'https://www.lvlmedical.com/', '+33 3 26 35 24 20', '', '', '', 4.0866756, 49.2306124996354
)

/* INSERT QUERY NO: 348 */
,
(
352, '', 'ORKYN', 'medical_supply', '', '', '', '33326771076', '', '', '', 4.0816366, 49.2306981996354
)

/* INSERT QUERY NO: 349 */
,
(
353, 'SMH', '', 'metal_construction', '', '', '', '+33 3 26 02 60 55', '', '', '', 4.0364522, 49.2684023996261
)

/* INSERT QUERY NO: 350 */
,
(
354, 'MSK', '', 'metal_construction', '', '', '', '', '', '', '', 4.0572227, 49.2409760996329
)

/* INSERT QUERY NO: 351 */
,
(
355, 'MRI Industrie', '', 'metalworking', '', '', 'https://www.mri-industrie.com/', '', '', '', '', 4.07257106839163, 49.2714752757297
)

/* INSERT QUERY NO: 352 */
,
(
356, 'Oh m’y Phone', '', 'mobile_phone', '', '', '', '+33 9 52 01 52 79', '', '', '', 4.0362117, 49.248586499631
)

/* INSERT QUERY NO: 353 */
,
(
357, 'Free', '', 'mobile_phone', '', '', '', '', '', '', '', 4.0283602, 49.2545312996295
)

/* INSERT QUERY NO: 354 */
,
(
358, 'Orange', 'Orange', 'mobile_phone', '', '', '', '', '', '', '', 4.0299345, 49.2540137996297
)

/* INSERT QUERY NO: 355 */
,
(
359, 'SFR', 'SFR', 'mobile_phone', '', '', 'http://boutique.sfr.fr', '+33 310571800', '', '', '', 4.0221877, 49.2905821996207
)

/* INSERT QUERY NO: 356 */
,
(
360, 'L’Atelier', '', 'mobile_phone', '', '', '', '+33 9 72 87 57 15', '', '', '', 4.0359493, 49.2504821996305
)

/* INSERT QUERY NO: 357 */
,
(
361, 'L’Accord Parfait', '', 'musical_instrument', '', '', '', '+33 3 26 47 33 68', '', '', '', 4.0356358, 49.2506781996305
)

/* INSERT QUERY NO: 358 */
,
(
362, 'Le Saint-André', '', 'newsagent', '', '', '', '+33 326851468', '', '', '', 4.0426159, 49.2584091996286
)

/* INSERT QUERY NO: 359 */
,
(
363, 'La Régence', '', 'newsagent', '', '', 'http://régence-Reims.com', '+33 326474979', '', '', '', 4.0272996, 49.2555649996293
)

/* INSERT QUERY NO: 360 */
,
(
364, '', '', 'newsagent', '', '', '', '', '', '', '', 4.0141083, 49.2297525996356
)

/* INSERT QUERY NO: 361 */
,
(
365, 'Nature et Découvertes', 'Nature et Découvertes', 'outdoor', '', '', 'https://www.natureetdecouvertes.com/magasins/marne/reims', '+33 3 26 36 92 00', '', '', '', 4.0271633, 49.2558332996292
)

/* INSERT QUERY NO: 362 */
,
(
366, '', '', 'paint', '', '', '', '', '', '', '', 4.0250111, 49.2886863996211
)

/* INSERT QUERY NO: 363 */
,
(
367, 'Déhée Bonnabaud', '', 'paint', '', '', '', '', '', '', '', 4.0005269, 49.2697920996258
)

/* INSERT QUERY NO: 364 */
,
(
368, 'Nicoletta FANTONI', '', 'paint', '5 Rue André F.J. Rieg', '', 'http://www.nicoletta.fr/', '+33 3 26 85 45 49', '', '', '', 4.0800639, 49.2297972996356
)

/* INSERT QUERY NO: 365 */
,
(
369, 'Les Compagnons Peintres Champenois', '', 'painter', '', '', 'http://www.compagnons-peintres.fr/', '', '', '', '', 4.07107393285616, 49.2714780401946
)

/* INSERT QUERY NO: 366 */
,
(
370, '', '', 'painter', '', '', '', '', '', '', '', 4.0573469, 49.2409501996329
)

/* INSERT QUERY NO: 367 */
,
(
371, 'Festi', '', 'party', 'Rue Docteur Serge Bazelaire', '', 'https://www.festi.fr', '+33 326871640', '', '', '', 4.0244167, 49.2902613996208
)

/* INSERT QUERY NO: 368 */
,
(
372, 'Waïda et Fils', '', 'pastry', '', '', '', '', '', '', '', 4.02742013674158, 49.2541459330816
)

/* INSERT QUERY NO: 369 */
,
(
373, 'Terranimo', '', 'pet', 'Rue Docteur Serge Bazelaire', '', 'http://terranimo.fr', '+33 326864839', '', '', '', 4.0258951, 49.2901647996208
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
376, 'Atelier Michel JOLYOT', '', 'photographer', '', '', '', '+33 3 26 47 44 12', '', '', '', 4.0100578, 49.2467731996314
)

/* INSERT QUERY NO: 373 */
,
(
377, 'Mathieu Entreprise', '', 'plumber', '', '', 'http://www.mathieu-entreprise.fr', '+33 326471740', 'contact@mathieu-entreprise.com', '', '', 4.0400965, 49.2578810996287
)

/* INSERT QUERY NO: 374 */
,
(
378, 'Jacob Delafon', '', 'plumbing', '2 Avenue Benoît Frachon', '', '', '', '', '', '', 4.01658832733213, 49.2848332990893
)

/* INSERT QUERY NO: 375 */
,
(
379, 'Reims - Chatillons', 'La Poste', 'post_office', '', '', '', '3631', '', '', '', 4.0378308, 49.224237899637
)

/* INSERT QUERY NO: 376 */
,
(
380, 'Reims Wilson', 'La Poste', 'post_office', '', '', '', '', '', '', '', 4.0212208, 49.2388525996334
)

/* INSERT QUERY NO: 377 */
,
(
381, 'Relais La Poste', '', 'post_office', '', '', '', '', '', '', '', 4.0395516, 49.2663465996266
)

/* INSERT QUERY NO: 378 */
,
(
382, 'Relais Poste', 'La Poste', 'post_office', '', '', '', '', '', '', '', 4.0119529, 49.2480658996311
)

/* INSERT QUERY NO: 379 */
,
(
383, 'Reims - Pays de France', 'La Poste', 'post_office', '', '', '', '3631', '', '', '', 4.0062897, 49.2306688996354
)

/* INSERT QUERY NO: 380 */
,
(
384, 'Reims - Billard', 'La Poste', 'post_office', '', '', '', '3631', '', '', '', 4.006982, 49.2360873996341
)

/* INSERT QUERY NO: 381 */
,
(
385, 'Plate-forme Courrier de Reims', '', 'post_office', 'Rue René Francart', '', '', '', '', '', '', 4.0757279, 49.240329599633
)

/* INSERT QUERY NO: 382 */
,
(
386, 'Reims - Europe', '', 'post_office', '', '', '', '3631', '', '', '', 4.0603512, 49.2548794996294
)

/* INSERT QUERY NO: 383 */
,
(
387, 'Plate-forme Courrier de Reims', '', 'post_office', '', '', '', '', '', '', '', 4.07565694048693, 49.2400345789417
)

/* INSERT QUERY NO: 384 */
,
(
388, 'Reims Cérès', 'La Poste', 'post_office', '', '', '', '', '', '', '', 4.03498684972306, 49.255531579913
)

/* INSERT QUERY NO: 385 */
,
(
389, 'Relais Poste', 'La Poste', 'post_office', '', '', '', '', '', '', '', 4.0525162, 49.2508113996305
)

/* INSERT QUERY NO: 386 */
,
(
390, 'Reims Gambetta', 'La Poste', 'post_office', '', '', 'http://laposte.fr', '3631', '', '', '', 4.0388438, 49.2471227996314
)

/* INSERT QUERY NO: 387 */
,
(
391, 'Cabinet Car', '', 'private_investigator', '', '', '', '+33 3 26 88 20 51', '', '', '', 4.0434386, 49.2513766996303
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

/* INSERT QUERY NO: 396 */
,
(
400, 'Autosur', 'Autosur', 'roadworthiness', '', '', 'https://controle-technique.autosur.fr/31072-autosur-reims-epinettes', '', '', '', '', 4.06890464042139, 49.2705273461553
)

/* INSERT QUERY NO: 397 */
,
(
401, 'SCHANUS', '', 'roofer', '4 Rue André F.J. Rieg', '', '', '', '', '', '', 4.0811044, 49.2309496996353
)

/* INSERT QUERY NO: 398 */
,
(
402, '', '', 'roofer', '', '', '', '', '', '', '', 4.06427449771433, 49.2708410738714
)

/* INSERT QUERY NO: 399 */
,
(
403, 'Les Magasins Bric ada Brac', '', 'second_hand', 'Rue Docteur Robert Creusat', '', 'http://lesmagasinsbricadabrac.fr', '33980687923', '', '', '', 4.0217254, 49.2898515996209
)

/* INSERT QUERY NO: 400 */
,
(
404, 'La Maison du Tailleur', '', 'sewing', '', '', '', '', '', '', '', 4.02886857948553, 49.2521253487039
)

/* INSERT QUERY NO: 401 */
,
(
405, 'Bout D''fil', '', 'sewing', '', '', '', '', '', '', '', 4.0186534, 49.2499889996307
)

/* INSERT QUERY NO: 402 */
,
(
406, 'La Cordonnerie fantastique', '', 'shoemaker', '', '', '', '', '', '', '', 4.03076049464956, 49.2596225756473
)

/* INSERT QUERY NO: 403 */
,
(
407, 'Cordonnerie Retouche de la Vesle', '', 'shoemaker', '', '', '', '+33 3 26 48 84 12', '', '', '', 4.0246878, 49.2521223996301
)

/* INSERT QUERY NO: 404 */
,
(
408, 'Retouches Gambetta', '', 'shoemaker', '', '', '', '+33 3 26 82 51 59', '', '', '', 4.0385474, 49.2470338996314
)

/* INSERT QUERY NO: 405 */
,
(
409, 'Versus Custom Shop', '', 'shoemaker', '26 Avenue de Laon', '', '', '', '', '', '', 4.02746844758958, 49.264300441963
)

/* INSERT QUERY NO: 406 */
,
(
410, 'Chaussea', 'Chaussea', 'shoes', 'Rue Docteur Serge Bazelaire', '', 'http://chaussea.com', '+33 326821007', '', '', '', 4.0266418, 49.2899812996208
)

/* INSERT QUERY NO: 407 */
,
(
411, 'Line''CL', '', 'shoes', '', '', '', '', '', '', '', 4.03369333091715, 49.2569517933122
)

/* INSERT QUERY NO: 408 */
,
(
412, 'Jules et Julies', '', 'shoes', '', '', '', '', '', '', '', 4.0290396, 49.2539553996297
)

/* INSERT QUERY NO: 409 */
,
(
413, 'Éram', 'Éram', 'shoes', '', '', '', '', '', '', '', 4.0297627, 49.2536932996297
)

/* INSERT QUERY NO: 410 */
,
(
414, 'Chauss & Art', '', 'shoes', '', '', '', '+33 6 47 59 25 48', '', '', '', 4.0384993, 49.2508752996304
)

/* INSERT QUERY NO: 411 */
,
(
415, 'Foot Korner', '', 'shoes', '', '', '', '', '', '', '', 4.0287193, 49.2562418996291
)

/* INSERT QUERY NO: 412 */
,
(
416, 'Chaussures Sabrina', '', 'shoes', '', '', '', '', '', '', '', 4.029447, 49.2540728996296
)

/* INSERT QUERY NO: 413 */
,
(
417, '', '', 'shoes', '', '', '', '', '', '', '', 4.0276777, 49.2553577996293
)

/* INSERT QUERY NO: 414 */
,
(
418, 'Champagne Sonorisation', '', 'sound_system', '', '', 'https://www.champagnesonorisation.fr/', '', '', '', '', 4.07158311319678, 49.2716701500433
)

/* INSERT QUERY NO: 415 */
,
(
419, 'Footing+', '', 'sports', '', '', 'http://footingplus.fR', '+33 3 26 47 04 86', '', '', '', 4.0348056, 49.2508579996304
)

/* INSERT QUERY NO: 416 */
,
(
420, 'Decathlon', 'Decathlon', 'sports', 'Rue André Chaillot', '', 'https://www.decathlon.fr/', '+33 3 26 35 03 30', '', '', '', 4.0270868952706, 49.2884598667034
)

/* INSERT QUERY NO: 417 */
,
(
421, 'Stade Reims boutique officielle', '', 'sports', '', '', '', '', '', '', '', 4.0306677, 49.2539701996297
)

/* INSERT QUERY NO: 418 */
,
(
422, 'Stardec', '', 'stand_builder', '', '', 'https://www.stardec.fr/', '', '', '', '', 4.07000364477808, 49.2719971032141
)

/* INSERT QUERY NO: 419 */
,
(
423, 'Mail Box ETC.', '', 'stationery', '', '', '', '', '', '', '', 4.0336921, 49.2513369996303
)

/* INSERT QUERY NO: 420 */
,
(
424, 'HomeBox', '', 'storage_rental', 'Rue William Shakespeare', '', '', '', '', '', '', 4.018515, 49.2154604996391
)

/* INSERT QUERY NO: 421 */
,
(
425, 'Gezing Tatouage', '', 'tattoo', '', '', '', '', '', '', '', 4.0159396, 49.2239132996371
)

/* INSERT QUERY NO: 422 */
,
(
426, '', '', 'tattoo', '', '', '', '', '', '', '', 4.0370211, 49.2258823996366
)

/* INSERT QUERY NO: 423 */
,
(
427, 'En Apart Thé', '', 'tea', '', '', '', '', '', '', '', 4.0318283, 49.25260939963
)

/* INSERT QUERY NO: 424 */
,
(
428, 'Palais des Thés', 'Palais des Thés', 'tea', '', '', '', '', '', '', '', 4.0282822, 49.2555660996293
)

/* INSERT QUERY NO: 425 */
,
(
429, 'Le cadre Noir', '', 'tobacco', '', '', '', '', '', '', '', 4.0377808, 49.2422443996325
)

/* INSERT QUERY NO: 426 */
,
(
430, 'Le Joker', '', 'tobacco', '', '', '', '', '', '', '', 4.0219896, 49.2245973996369
)

/* INSERT QUERY NO: 427 */
,
(
431, '', '', 'tobacco', '', '', '', '', '', '', '', 4.0326241, 49.2331391996348
)

/* INSERT QUERY NO: 428 */
,
(
432, 'GAIGNER Nicolas', '', 'tobacco', '', '', '', '', '', '', '', 4.0263574, 49.2134069996396
)

/* INSERT QUERY NO: 429 */
,
(
433, '', '', 'tobacco', '', '', '', '', '', '', '', 4.0163314, 49.236449799634
)

/* INSERT QUERY NO: 430 */
,
(
434, '', '', 'tobacco', '', '', '', '', '', '', '', 4.037698, 49.2480314996311
)

/* INSERT QUERY NO: 431 */
,
(
435, 'Le Végas', '', 'tobacco', '', '', '', '', '', '', '', 4.0101661, 49.248419099631
)

/* INSERT QUERY NO: 432 */
,
(
436, 'LOXAM Reims Ouest', '', 'tool_hire', '', '', '', '+33 3 26 86 50 70', '', '', '', 4.001929, 49.2683652996261
)

/* INSERT QUERY NO: 433 */
,
(
437, 'WDK', '', 'toys', '', '', 'https://www.wdkpartner.com/', '+33 3 26 50 32 32', '', '', '', 4.0822574, 49.2299765996356
)

/* INSERT QUERY NO: 434 */
,
(
438, 'Le Royaume du Jouet Franchisé Indépendant', '', 'toys', '', '', '', '', '', '', '', 4.0297977, 49.2545204996295
)

/* INSERT QUERY NO: 435 */
,
(
439, 'Fixation Location Service', '', 'trade', '10 Rue Rosa Luxemburg', '', '', '', '', '', '', 4.01908084912312, 49.2849985261101
)

/* INSERT QUERY NO: 436 */
,
(
440, 'Distrilab Hatry', '', 'trade', '', '', '', '', '', '', '', 4.00115615285718, 49.2705365760101
)

/* INSERT QUERY NO: 437 */
,
(
441, 'Déhée Bonnabaud', '', 'trade', '', '', '', '', '', '', '', 4.00043304363177, 49.2697410521832
)

/* INSERT QUERY NO: 438 */
,
(
442, 'Didier Lobry L''estampille', '', 'upholsterer', '', '', '', '', '', '', '', 4.04577283080674, 49.2573786295878
)

/* INSERT QUERY NO: 439 */
,
(
443, 'AT Oliveira Tapissier Décorateur', '', 'upholsterer', '', '', '', '+33 3 26 85 62 29', '', '', '', 4.0400219, 49.248680299631
)

/* INSERT QUERY NO: 440 */
,
(
444, 'GiFi', 'GiFi', 'variety_store', '', '', 'https://magasins.gifi.fr/decoration/reims/0000010926', '', '', '', '', 4.02700429448422, 49.2879483136895
)

/* INSERT QUERY NO: 441 */
,
(
445, 'Phildar', '', 'variety_store', '', '', 'http://phildar.fr', '+33 3 26 61 29 53', '', '', '', 4.0271425, 49.25269609963
)

/* INSERT QUERY NO: 442 */
,
(
446, 'DEKRA', 'DEKRA', 'vehicle_inspection', '', '', '', '', '', '', '', 4.05960480547237, 49.2651984540963
)

/* INSERT QUERY NO: 443 */
,
(
447, 'METRO', 'METRO', 'wholesale', '', '', '', '', '', '', '', 4.0120245, 49.2618050996277
)

/* INSERT QUERY NO: 444 */
,
(
448, 'K par K', 'K par K', 'window_construction', '', '', '', '', '', '', '', 4.0804557, 49.2296361996356
)

/* INSERT QUERY NO: 445 */
,
(
449, 'La Cave Farman', '', 'wine', '', '', '', '', '', '', '', 4.05815706264235, 49.240552441041
)

/* INSERT QUERY NO: 446 */
,
(
450, 'Boutique Guy Degrenne', '', 'wine', '', '', 'http://guydegrenne.fr', '+33 3 26 06 86 39', '', '', '', 4.0261481, 49.2523205996301
)

/* INSERT QUERY NO: 447 */
,
(
451, 'France VET à l''Ouvrier bleu', '', 'workwear', '', '', 'http://www.alouvrierbleu.com/', '', '', '', '', 4.07270148694727, 49.27024928796
)

/* INSERT QUERY NO: 448 */
,
(
452, 'Photomaton', '', 'yes', '', '', '', '', '', '', '', 4.02584183824707, 49.2548156689198
)

/* INSERT QUERY NO: 449 */
,
(
453, 'Cyclovac Kinetico Technologis 51', '', 'yes', '', '', 'https://technologis51.business.site/', '', '', '', '', 4.07210967803453, 49.2713011056539
)

/* INSERT QUERY NO: 450 */
,
(
454, 'Photostation', '', 'yes', '', '', '', '', '', '', '', 4.0257461862311, 49.2548608632389
)

/* INSERT QUERY NO: 451 */
,
(
455, '', '', 'yes', '', '', '', '', '', '', '', 4.02629783047739, 49.2554123570176
)

/* INSERT QUERY NO: 452 */
,
(
456, 'PLANET CASH', '', 'yes', '', '', '', '+33 3 26 02 18 57', '', '', '', 4.0257982, 49.25251469963
)

/* INSERT QUERY NO: 453 */
,
(
457, 'Station Multi-Services', '', 'yes', '', '', '', '', '', '', '', 4.0377586, 49.2576049996288
)

/* INSERT QUERY NO: 454 */
,
(
458, 'Mistigriff', '', 'yes', '', '', '', '', '', '', '', 4.0316205, 49.2570832996289
);

UPDATE shop SET type = REPLACE(type, '', null) WHERE type = '';
UPDATE shop SET brand = REPLACE(brand, '', null) WHERE brand = '';
UPDATE shop SET address = REPLACE(address, '', null) WHERE address = '';
UPDATE shop SET opening_hours = REPLACE(opening_hours, '', null) WHERE opening_hours = '';
UPDATE shop SET website = REPLACE(website, '', null) WHERE website = '';
UPDATE shop SET email = REPLACE(email, '', null) WHERE email = '';
UPDATE shop SET phone = REPLACE(phone, '', null) WHERE phone = '';
UPDATE shop SET fb_page = REPLACE(fb_page, '', null) WHERE fb_page = '';
UPDATE shop SET insta_page = REPLACE(insta_page, '', null) WHERE insta_page = '';

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
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
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
        REFERENCES product(id),
  `keyword_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_keyword_product_keyword
        FOREIGN KEY (keyword_id)
        REFERENCES keyword(id)
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
(1, 6),
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
(7, 1),
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
        REFERENCES shop(id),
  `product_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_product_shop_product
        FOREIGN KEY (product_id)
        REFERENCES product(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `product_shop`
--

INSERT INTO `product_shop` (`shop_id`,`product_id`) VALUES
(1, 1),
(1, 2);

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
  `zipcode` varchar(8),
  `city` varchar(80),
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `firstname`, `lastname`, `birthdate`, `gender`, `zipcode`, `city`, `email`, `password`) VALUES
(1, "Nibor", "Valjen", "1995-03-14", "male", "51100", "Reims", "nibor@wild.com", "$argon2id$v=19$m=65536,t=5,p=1$kyt4+/e/n/CfttAPLi0Fqw$axBWlUeK/GKrTE5tXYY5mgT20+KxGklsKudf3F7qGFg");

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
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;