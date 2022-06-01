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
-- Base de données :  `simple-mvc`
--

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `description` varchar(500)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `product`
--

INSERT INTO `product` (`id`, `name`, `brand`, `description`) VALUES
(1, "Biscuit Rose", "Maison Fossier", "Créé en 1691, le Biscuit Rose de Reims est un des fleurons de la Ville de Reims. Toujours associé au champagne autrefois, il est un symbole de la fête. Aujourd’hui, il est aussi utilisé dans de nombreuses recettes. Outre sa couleur rose, il est caractérisé par une texture craquante et fondante."),
(2, "Boots 1460", "Dr. Martens", "Nos boots Original ont été pensées pour les travailleurs. Mais dans les décennies qui ont suivies, elles ont été adoptées, réinventées et détournées par plusieurs contre-cultures. Et elles ont été portées de toutes les façons possibles. Mais rien n'a changé dans leur conception, pas même leurs fameuses surpiqûres jaunes. Nous fabriquons les 1460. Mais vous les rendez iconiques."),
(3, "Risk", "Hasbro", "Risk : le jeu de conquête stratégique ! Risk est un jeu de guerre et de stratégie qui est connu à travers le monde depuis de nombreuses années. Ce jeu de société vous placera à la tête d'une armée possédant une couleur et vous devrez réussir une mission que vous aurez tirée au sort au début de la partie. Mais, même si vous vous démontrez être un fin stratège, vos actions auront parfois de malheureuses répercussions pour la suite de la partie.Il vous faudra être patient, observateur et surtout posséder un bon esprit d'analyse.");

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

