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
(3, "Boots 1460", "Dr. Martens");

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
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
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
(27, "jeu de role"),
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
(40, "femme");

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
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


-- --------------------------------------------------------

--
-- Structure de la table `affiliation`
--

CREATE TABLE `affiliation` (
  `product_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_affiliation_product
        FOREIGN KEY (product_id)
        REFERENCES product(id),
  `keyword_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_affiliation_keyword
        FOREIGN KEY (keyword_id)
        REFERENCES keyword(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `affiliation`
--

INSERT INTO `affiliation` (`product_id`, `keyword_id`) VALUES
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
(3, 18);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) UNSIGNED NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `birthDate` date NOT NULL,
  `gender` varchar(20) NOT NULL,
  `city`varchar(80),
  `zipcode`varchar(8),
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`) VALUES
(1, "nibor@wild.com", "$argon2id$v=19$m=65536,t=5,p=1$kyt4+/e/n/CfttAPLi0Fqw$axBWlUeK/GKrTE5tXYY5mgT20+KxGklsKudf3F7qGFg");

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