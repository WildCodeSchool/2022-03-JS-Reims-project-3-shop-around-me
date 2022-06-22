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
  `brand` varchar(50) NOT NULL,
  `type` varchar(50),
  `adress` varchar(100) NOT NULL,
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

INSERT INTO `shop` (`id`, `name`, `brand`, `type`, `adress`, `opening_hours`, `website`, `email`, `phone`, `fb_page`, `insta_page`, `x`, `y`) VALUES
(1, "Magasin Fossier", "Maison Fossier", "Biscuit", "25 Cr Jean-Baptiste Langlet, 51100 Reims", "lundi, 14:00–19:00 / mardi, 10:00–19:00 / mercredi, 10:00–19:00 / jeudi, 10:00–19:00 / vendredi, 10:00–19:00 / samedi, 10:00–19:00 / dimanche, Fermé", "http://www.fossier.fr/", "fossier@fossier.fr", "0326475984", "https://www.facebook.com/biscuitsfossier", "https://www.instagram.com/biscuitsfossier/", "4.030856132507324", "49.25590515136719");

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
-- Structure de la table `pk_affiliation` (p pour product, k pour keyword)
--

CREATE TABLE `pk_affiliation` (
  `product_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_pk_affiliation_product
        FOREIGN KEY (product_id)
        REFERENCES product(id),
  `keyword_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_pk_affiliation_keyword
        FOREIGN KEY (keyword_id)
        REFERENCES keyword(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pk_affiliation` 
--

INSERT INTO `pk_affiliation` (`product_id`, `keyword_id`) VALUES
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
-- Structure de la table `sp_affiliation` (s pour shop, p pour product)
--

CREATE TABLE `sp_affiliation` (
  `shop_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_sp_affiliation_shop
        FOREIGN KEY (shop_id)
        REFERENCES shop(id),
  `product_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_sp_affiliation_product
        FOREIGN KEY (product_id)
        REFERENCES product(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `sp_affiliation`
--

INSERT INTO `sp_affiliation` (`shop_id`,`product_id`) VALUES
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