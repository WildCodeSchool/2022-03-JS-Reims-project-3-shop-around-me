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
