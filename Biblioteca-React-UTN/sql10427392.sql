-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Servidor: sql10.freemysqlhosting.net
-- Tiempo de generación: 02-08-2021 a las 03:55:03
-- Versión del servidor: 5.5.62-0ubuntu0.14.04.1
-- Versión de PHP: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sql10427392`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `ID` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`ID`, `nombre`) VALUES
(49, 'FSFSFS'),
(50, 'TERROR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro`
--

CREATE TABLE `libro` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `categoriaid` int(11) NOT NULL,
  `personaid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `libro`
--

INSERT INTO `libro` (`id`, `nombre`, `descripcion`, `categoriaid`, `personaid`) VALUES
(61, 'UN LIBROASDF', 'UN LIBRO MAS', 1, 33),
(63, 'TEST6', 'D', 29, 0),
(64, 'LIBRO', '1 1', 31, 0),
(67, 'SDADSA6666', 'SADASD', 33, 0),
(68, 'ASDASDASD', '', 0, 0),
(69, 'DSDSDS', 'SDSDSDSDS', 39, 25),
(70, 'EL LIBRO 1 1 1', 'AS AS AS A S', 40, NULL),
(71, 'EL LIBRO 2', 'ASD ASD', 40, NULL),
(75, '11111111111', 'SFAFSAFS', 39, 14),
(78, 'SFAFSAF', 'F SF SF S', 38, 12),
(79, 'AFSFS', 'FSFSFSFS', 38, 12),
(82, 'FSFS', 'FSFSFS', 38, NULL),
(83, 'FSFSFSFS', 'FSFSFS', 38, 12),
(85, 'AGREGANDO UN LIBRO 5252', '525252', 38, 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `ID` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `alias` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`ID`, `nombre`, `apellido`, `email`, `alias`) VALUES
(33, 'AAAAA', 'AAAAAAA', 'AAAAAAAAA', '1111111'),
(34, 'ASDASD4444', 'SADASDA', 'SADADAS', '23'),
(38, 'SADASDASD', 'SADSADSADD', 'ASDASDSADASDDSADAS', 'DSADSAD'),
(39, 'SFAFSA', 'FSFSFS', 'FSFSFS 66666', '66666666'),
(40, 'FASFA6', 'AFSAFAS', 'FASFASFA', 'ASFASF000000005'),
(43, 'ASDASDSAD', 'SADASDADASD', 'SADASDASDASD@HOTMAIL.CO', 'SADSADSADSAD');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- AUTO_INCREMENT de la tabla `libro`
--
ALTER TABLE `libro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;
--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
