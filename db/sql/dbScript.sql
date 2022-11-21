
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
('Avena', 'Avena sativa', 'La avena es un cultivo versátil y de multiuso; se utiliza como suplemento para producir forraje verde en periodos críticos para alimentación del ganado, especialmente en otoño e invierno. Los granos cubiertos con cascara, y los granos pelados y desnudos, sin cáscara, son Importantes tanto en alimentación animal como en alimentar animal y salud humana.'),
('Trigo', 'Triticum spp', 'El trigo es una planta gramínea anual con espigas. Es decir, se trata de una especie de pasto. Su altura es variable, va desde treinta centímetros hasta un metro y medio de largo.' )

-- Enfermedades
insert into `Enfermedades` (`nombre`, `descripcion`, `sintomas`, `medidas_preventivas`, `control_quimico`, `Cultivo_id_cultivo`) values
('Tizón tardío de la papa.','El tizón tardío causado por el hongo Phytophthora infestan, es una de las enfermedades más importantes del cultivo de la papa a nivel mundial. Está presente en casi todas las áreas donde se cultiva en el mundo, provocando mayores pérdidas en zonas templadas y húmedas, ya que puede matar una plantación en 7 - 10 días.', 'Afecta las hojas, los tallos y los tubérculos y puede destruir un campo de papas en pocos días. Los primeros síntomas aparecen en los bordes de las hojas inferiores, como pequeñas manchas de color verde oscuro de aspecto “acuoso” (sensación húmeda al tacto).', 'semilla libre de enfermedades. El uso de semilla no infectada es una condición básica para la producción de papa, puesto que elimina del campo una fuente primaria de infección. 
Procedimiento de siembra. Donde las temporadas de lluvia sean definidas, la severidad de la enfermedad puede reducirse mediante un cambio en momento
Resistencia. Deben utilizarse variedades con mayor resistencia siempre y cuando tengan aceptación comercial.
', 'Manzate, Dithane, Mancozeb.', '1'),
('Tizón temprano de la papa (Alternaria).','El tizón temprano es causado por el hongo Alternaria solani, que se ha constituido como un problema serio debido a la cantidad de pérdidas en un 20 y 30% del rendimiento y en algunas ocasiones extremas, más del 50%.', 'En las hojas se desarrollan lesiones más o menos circulares, de color marrón oscuro, con anillos dispuestos concéntricamente semejando un tablero de tiro al blanco; primero se desarrollan en las hojas inferiores, más viejas.', 'Post-cosecha: todos los residuos infectados deben sacarse del campo después de la cosecha.
Riego: riego adecuado y aplicación de fertilizantes (de acuerdo con las recomendaciones).', 'Manzate, Dithane, Mancozeb', '1'),
('Botrytis.','La pudrición gris es una enfermedad ocasionada por el hongo Botrytis cinerea, generalmente es de poca importancia económica. Los síntomas se hacen evidentes en el follaje hacia el final del período del cultivo afectando principalmente a plantas estresadas.', 'Inicialmente afecta las flores, las cuales se pudren y muestran una esporulación de color grisáceo. Posteriormente, el tejido infectado cae sobre las hojas, iniciando la infección del follaje, donde se presentan lesiones inicialmente cafés bronceado, húmeda en su inicio y delimitada por las venas.', 'Pulverización: Las pulverizaciones con productos preventivos pueden ser de utilidad, siempre que el follaje no esté recibiendo demasiada sombra.', 'Botrilex', '1'),
('Roya o polvillo de la hoja.','Esta enfermedad no ha sido normalmente un problema de importancia para la producción de avena, dado que suele presentarse tarde en la temporada producto de las temperaturas relativamente bajas de la primavera.', 'Los síntomas del polvillo de la hoja se reconocen por la presencia de pústulas de aspecto pulverulento, anaranjado, principalmente en la lámina foliar. Infecciones más severas pueden atacar la vaina foliar y las espiguillas de la panoja.', 'Siembra; siembra de variedades resistentes o tolerantes. 
Fertilización: Debe evitarse el exceso de fertilización nitrogenada, lo cual favorece una mayor severidad del ataque.', 'Orkestra Ultra.', '2'),
('Septoriosis o mancha de la hoja.','Es causarla por el hongo deuteromicete Esla enfermedad está descrita como una de las patologías importantes la cual se puede detectar desde fiñes de invierno en hojas básales y luego en hojas superiores, en la medida que existan altas precipitaciones primaverales.', 'Los síntomas se caracterizan por la presencia de manchas necróticas en las láminas foliares, de color café oscuro, en su mayoría avaladas, de 2 a 8 m.m aproximadamente, rodeadas de un halo clorótico. También pueden presentarse en las vainas tobares que rodean el tallo.', 'Rotación de cultivos y el atraso en la época de siembra, en especial cuando el destino del cultivo es el corte para ensilaje.', 'Artea 330 EC', '2'),
('Oidio.','Es causado por el hongo Blumeria graminis. Está asociada principalmente a condiciones de alta humedad relativa y temperaturas medias a altas.
La severidad de esta patología, avenas cultivadas bajo condiciones de riego generan un ambiente altamente favorable a la presencia de la enfermedad.', 'El síntoma más característico del oidio, es la aparición de lo que asemeja pequeñas motas de algodón sobre las hojas, y que corresponden al micelio y las esporas del hongo. Estas estructuras pueden recubrir parcial o totalmente las láminas y vainas foliares, afectando la fotosíntesis.', 'Variedades: empleo de variedades resistentes o tolerantes al agente causal. 
Fertilización: evitar exceso de fertilización nitrogenada 
Plantación: regular la población de plantas.', 'Nabac 25 Wp', '2'),
('Mal del pie.','La enfermedad radicular llamada comúnmente "mal del pie" que ataca a algunos cereales como el trigo y la cebada, tiene gran importancia económica.', 'Emergencia de plantas desuniformes, plantas cloróticas, raíces necróticas, espigas decoloradas, vanas.', 'Planificar una estrategia de rotación de cultivos y manejo de rastrojos permite disminuir el riesgo de ataque y diseminación de numerosas enfermedades y plagas, cuyos agentes causales sobreviven en residuos de cultivo y en el suelo.', 'Point benomyl 50 p', '3'),
('Septoriosis foliar.','La septoriosis es una enfermedad que afecta principalmente al cultivo del trigo, (tanto blando como duro) puede afectar al cultivo en cualquier fase de desarrollo, siendo el momento de afección más crítico el que va desde el final de ahijado hasta la maduración del grano.', 'Manchas cloróticas que necrosan en el centro y presentan puntos negros.', 'Uso de variedades resistentes a determinadas enfermedades, INIA ha incorporado esta resistencia varietal a las variedades de candeales, lo que permite disminuir considerablemente las aplicaciones de fungicidas y en muchos casos no usar fungicidas foliares.', 'Point benomyl 50 p', '3'),
('Roya del tallo.','La roya del tallo (Puccinia graminis) es un hongo que produce una enfermedad que afecta al trigo generando una gran pérdida en el cultivo si no se trata a tiempo.', 'Aparición de lesiones generalmente ovales, de color café rojizas, principalmente en tallo. También se presentan en hojas, vainas foliares y espigas.', 'Identificación de los estados de desarrollo del trigo permitirá a los agricultores llevar un manejo y control eficiente. De esta manera, si se presenta la enfermedad, se podrá controlar en su estado inicial.', 'Point benomyl 50 p', '3');

-- Plagas
insert into `Plagas` (`nombre`, `descripcion`, `sintomas`, `medidas_preventivas`, `control_quimico`, `Cultivo_id_cultivo`) values
('Nemátodo dorado', 'Corresponde al nematodo Globodera rostochiensis, gusanito microscópico que produce significativas reducciones de rendimiento cuando existe una alta densidad poblacional.', 'La plaga causa síntomas aéreos poco diferenciables, excepto por una leve amarillez, menor vigor, escaso crecimiento y una senescencia anticipada. Las plantas evidencian hojas que toman un color verde pálido o amarillo que se marchita cuando el clima es cálido, presentan poco desarrollo y se ven descoloridas.', 'Semilla libre de enfermedades. El uso de semilla no infectada es una condición básica para la producción de papa, puesto que elimina del campo una fuente primaria de infección. 
Resistencia. Deben utilizarse variedades con mayor resistencia siempre y cuando tengan aceptación comercial.', 'Tervigo', '1'),
('Nemátodo de la pudrición seca ', 'Corresponde a Ditylenchus destructor, nemátodos polífago que ataca alrededor de 70 especies de cultivos y malezas y también a algunos hongos.', 'El síntoma típico del ataque de D. destructor es la pudrición seca del tubérculo. Ingresa al tubérculo a través de las lenticelas y una vez dentro del tejido forma colonias de individuos en todos los estados de desarrollo.', 'Resistencia. Deben utilizarse variedades con mayor resistencia siempre y cuando tengan aceptación comercial.', 'Aldicarb, sin embargo, ante los escases del producto y su impacto en el medio ambiente es preferible realizar rotación de cultivos como método de control.', '1'),
('Gúsanos blancos', 'Es una especie de coleóptero conocido comúnmente como pololo café, pololo verde o San Juan, el cual destaca por ser una especie presente en el sur de Chile, siendo muy agresivo en nuestros jardines cuando se encuentra en un número de individuos capaces de alimentarse de las raíces.', 'Amarillamiento del follaje, perdida de sujeción de las plantas y finalmente la muerte de estas.', 'Laboreo de suelo. Invertir la capa de suelo los primeros 5 cm de modo que los gusanos queden expuestos a la luz y sean devorados por sus depredares naturales.
Muestreo de suelo. Tomar muestras de suelo para determinar la cantidad de gusanos promedios encontrados.', 'Entre los principales agentes de control natural encontrados más comúnmente destacan las aves silvestres diurnas como la bandurria y tiuque, y aves nocturnas como el pequén. Sin embargo, son los insectos depredadores y parasitoides, y los hongos entomopatógenos, los que aparecen regularmente en la revisión de las muestras de suelo y, por ende, necesarios de reconocer y evaluar.', '2'),
('Gusanos cortadores', 'son conocidas como gusanos cortadores. Permanecen enterradas en el suelo y sólo salen a la superficie para alimentarse, generalmente en la oscuridad. Son de colores grises oscuros, semejantes al medio en que se ocultan. Son del tipo eruciforme, es decir, que poseen 3 pares de patas', 'En estado de plántula corta a nivel del cuello y ocasionalmente asciende al follaje para alimentarse de las hojas basales.', 'Control cultural: el control de malezas es importante para reducir los ataques de cortadores, porque allí invernan las larvas, así como la preparación del suelo para destruir las larvas con rastras.', 'Control biológico: en Chile se presentan parasitoides de larvas, tales como himenópteros del género Apanteles y dípteros de la familia Tachinidae. También puede haber control natural por microavispillas del género Trichogramma.
Control químico: Pyrinex 48 E', '2'),
('Trips', 'Los trips adultos son insectos pequeños, alargados con unas características alas de aspecto plumoso. Miden alrededor de 1mm y tienen un color negro.', 'Comúnmente se les encuentra bajo la vaina de la hoja bandera, alimentándose del tallo. No obstante, también pueden atacar las hojas, tallos y espigas. Las formas adultas y las ninfas producen daños y, cuando su número es grande, hacen que el tejido del cual se alimentan tome una coloración gris plateada.', 'Monitoreo de las condiciones climáticas los patógenos se ven favorecidos bajo ciertas condiciones climáticas, altas temperaturas combinadas con alta humedad durante el ciclo de cultivo, puede ser un factor determinante para el desarrollo de enfermedades foliares y radiculares.', 'Thripex', '3'),
('Babosas, caracoles|', 'Las babosas son moluscos gasterópodos terrestres sin caparazón que cubra el sistema digestivo, mientras que los caracoles moluscos con caparazón que provee de protección al sistema digestivo.', 'Síntomas: Las babosas y caracoles se alimentan del endospermo de las semillas en germinación, cortan las plántulas a ras del suelo y mordisquean las plantas más grandes, dejando franjas longitudinales en las hojas.', 'Monitoreo: importante monitorizar nuestras cosechas para detectar su aparición lo antes posible.', 'Toximol', '3');

-- Usuario

insert into `Usuario` (`nombre`, `apellido`, `email`) values
('Juan', 'Castillo', 'emailJuan@email.com'),
('Macarena', 'Vidal', 'emailMacarena@email.com'),
('Diego', 'Obando', 'miEmail@email.com');

-- 
