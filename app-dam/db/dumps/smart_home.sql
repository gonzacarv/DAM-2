-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql-server
-- Tiempo de generación: [Fecha de Hoy] a las [Hora Actual]
-- Versión del servidor: 5.7.27
-- Versión de PHP: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `DAM`
--
CREATE DATABASE IF NOT EXISTS `DAM` DEFAULT CHARACTER SET latin1 COLLATE utf8_general_ci;
USE `DAM`;

-- Eliminando tablas existentes
DROP TABLE IF EXISTS usuarios, consumos, grupos, grupos_consumos, programacion_horaria;

-- Creación de la tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);

-- Creación de la tabla de consumos
CREATE TABLE consumos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion VARCHAR(255),
    estado BOOLEAN,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Creación de la tabla de grupos
CREATE TABLE grupos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion VARCHAR(255)
);

-- Creación de la tabla de relaciones grupos_consumos
CREATE TABLE grupos_consumos (
    grupo_id INT,
    consumo_id INT,
    PRIMARY KEY (grupo_id, consumo_id),
    FOREIGN KEY (grupo_id) REFERENCES grupos(id),
    FOREIGN KEY (consumo_id) REFERENCES consumos(id)
);

-- Creación de la tabla de programación horaria
CREATE TABLE programacion_horaria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    consumo_id INT,
    inicio TIME,
    fin TIME,
    FOREIGN KEY (consumo_id) REFERENCES consumos(id)
);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

