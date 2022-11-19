
-- Path: dbScript.sql

-- Create database
create database if not exists `agrodb`;

-- Use database
use `agrodb`;

-- Create tables
create table if not exists `Cultivo` (
    `id_cultivo` int not null auto_increment,
    `nombre_comun` varchar(100) not null,
    `nombre_cientifico` varchar(100) not null,
    `descripcion` varchar(700) not null,
);

create table if not exists `Enfermedades` (
    `id_enfermedad` int not null auto_increment,
    `nombre` varchar(100) not null,
    `descripcion` varchar(700),
    `sintomas` varchar(700),
    `medidas_preventivas` varchar(700),
    `control_quimico` varchar(700),
    primary key (`id_enfermedad`)
    `Cultivo_id_cultivo` int,
    foreign key (`Cultivo_id_cultivo`) references `Cultivo`(`id_cultivo`)
);

create table if not exists `Plagas` (
    `id_plaga` int not null auto_increment,
    `nombre` varchar(100) not null,
    `descripcion` varchar(700),
    `sintomas` varchar(700),
    `medidas_preventivas` varchar(700),
    `control_quimico` varchar(700),
    primary key (`id_plaga`)
    `Cultivo_id_cultivo` int,
    foreign key (`Cultivo_id_cultivo`) references `Cultivo`(`id_cultivo`)
);

create table if not exists `Usuario` (
    `id_usuario` int auto_increment,
    `nombre` varchar(100),
    `apellido` varchar(100),
    `email` varchar(100),
    primary key (`id_usuario`)
);

-- Seed database

-- Cultivo
insert into `Cultivo` (`nombre_comun`, `nombre_cientifico`, `descripcion`) values
('Papa', 'Solanum tuberosum', 'Planta perteneciente a la familia de las solanáceas, originaria de Sudamérica y cultivada por todo el mundo por sus tubérculos comestibles.'),
('avena', 'Avena sativa', 'La avena es un cultivo versátil y de multiuso; se utiliza como suplemento para producir forraje verde en periodos críticos para alimentación del ganado, especialmente en otoño e invierno. Los granos cubiertos con cascara, y los granos pelados y desnudos, sin cáscara, son Importantes tanto en alimentación animal como en alimentar animal y salud humana.'),
('Trigo', 'Triticum spp', 'El trigo es una planta gramínea anual con espigas. Es decir, se trata de una especie de pasto. Su altura es variable, va desde treinta centímetros hasta un metro y medio de largo.' )

-- Enfermedades
insert into `Enfermedades` (`nombre`, `descripcion`, `sintomas`, `medidas_preventivas`, `control_quimico`, `Cultivo_id_cultivo`) values
('','', '', '', '', '1'),
('','', '', '', '', '1'),
('','', '', '', '', '1'),
('','', '', '', '', '2'),
('','', '', '', '', '2'),
('','', '', '', '', '2'),
('','', '', '', '', '3'),
('','', '', '', '', '3'),
('','', '', '', '', '3');

-- Plagas
insert into `Plagas` (`nombre`, `descripcion`, `sintomas`, `medidas_preventivas`, `control_quimico`, `Cultivo_id_cultivo`) values
('', '', '', '', '', '1'),
('', '', '', '', '', '1'),
('', '', '', '', '', '2'),
('', '', '', '', '', '2'),
('', '', '', '', '', '3'),
('', '', '', '', '', '3');

-- Usuario

insert into `Usuario` (`nombre`, `apellido`, `email`) values
('Juan', 'Castillo', 'emailJuan@email.com'),
('Macarena', 'Vidal', 'emailMacarena@email.com'),
('Diego', 'Obando', 'miEmail@email.com');
