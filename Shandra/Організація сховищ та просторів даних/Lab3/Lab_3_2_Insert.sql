USE TAXI_3_2;
GO

insert into clients	values
('Vadym','Ivanov','Boghdanovych','0986436379','small-boy2312@ukr.net', GETDATE()),
('Olga','Manelyuk','Ivanivna','0962370969','olgaAAA@ukr.net', GETDATE()),
('Oleg','Shndra','Stepanovych','0676971315','oleghsandra@mail.ru', GETDATE()),
('Ivan','Tuz','Perovych','0686291950','nice_girl@ukr.net', GETDATE()),
('Olena','Tuz','Igorivna','0965680969','olenAAA@ukr.net', GETDATE()),
('Maria','Shunderuk','Ivanivna','0506971315','mashka@mail.ru', GETDATE()),
('Taras','Petov','Grygorovych','0964575321','tarik@ukr.net', GETDATE()),
('Orest','Sydorov','Stepanovych','0505237895','orest99@mail.ru', GETDATE()),
('Inna','Tckach','Pavlivna','0935982130','one_love55@ukr.net', GETDATE()),
('Vadsyl','Ivanov','Boghdanovych','0986436379','small@ukr.net', GETDATE()),
('Oleg','Manelyuk','Ivanovych','0962370969','olkaAAA@ukr.net', GETDATE()),
('Oleg','Ivanov','Ivanovych','0676971315','olegyck@mail.ru', GETDATE()),
('Ivanna','Tuz','Petrivna','0686291950','nice_girl123@ukr.net', GETDATE()),
('Olena','Zhuk','Igorivna','0965680969','olenAAAaaaa@ukr.net', GETDATE()),
('Maryna','Shunderuk','Ivanivna','0506971315','marynka@mail.ru', GETDATE()),
('Teofil','Petov','Grygorovych','0964575321','teofilllll@ukr.net', GETDATE()),
('Oleh','Sydorov','Stepanovych','0505237895','orest9@mail.ru', GETDATE()),
('Irynaa','Tckach','Pavlivna','0935982130','one_love5@ukr.net', GETDATE()),
('Varfolomiy','Ivanencko','Boghdanovych','0986126379','mister@ukr.net', GETDATE()),
('Oleksiy','Manelyuk','Ivanovych','0968570969','lehaA@ukr.net', GETDATE()),
('Oleksa','Shandra','Petrovych','0679801315','oleksayu@mail.ru', GETDATE()),
('Vasyl','Chepil','Perovych','0686291950','vahac@ukr.net', GETDATE()),
('Oleh','Tuzov','Igorivna','0965680969','olehh@ukr.net', GETDATE()),
('Marian','Shunderuk','Ivanivnovych','0562971315','mariancko@mail.ru', GETDATE()),
('Taras','Petruck','Grygorovych','0964575321','tarikPPP@ukr.net', GETDATE()),
('Anton','Sydorov','Stepanovych','0520137895','antoha@mail.ru', GETDATE()),
('Ilona','Tolych','Pavlivna','0935982130','one_love55@ukr.net', GETDATE()),
('Vasyl','Ivanovenko','Boghdanovych','0986436379','scypa234@ukr.net', GETDATE()),
('Pylyp','Manelyuk','Ivanovych','0962370969','pylypuyty@ukr.net', GETDATE()),
('Viktor','Koval','Ivanovych','0676971315','vitiaa@mail.ru', GETDATE()),
('Ivanna','Soliar','Petrivna','0686291950','ivanna@ukr.net', GETDATE()),
('Olha','Petriv','Igorivna','0965680969','petriv@ukr.net', GETDATE()),
('Myron','Shunderuk','Sepanovych','0506971315','myronko@mail.ru', GETDATE()),
('Stanis','Baratheon','Grygorovych','0964575321','stanisstanisukr.net', GETDATE()),
('Serseia','Sydorova','Stepanovych','0505237895','inininin@mail.ru', GETDATE()),
('Tirion','Tckach','Pavlivna','0935982130','lanister@ukr.net', GETDATE());

insert into manufacturer values
('Kyiv', 'Kyiv', 'Budivelnykiv, 8', 'realf@mail.ru', '0956436312', GETDATE()),
('Lviv', 'Lvivv', 'Bandery, 15', 'creative m@mail.ru', '0982631248', GETDATE()),
('Rivne', 'Rivne', 'Lukasha, 5', 'niceMf@mail.ru', '0503567842', GETDATE()),
('Ternopil', 'Ternopil', 'Boguna, 82', 'bestOfTheBest@mail.ru', '0675235972', GETDATE()),
('Odessa', 'Odessa', 'Ivanova, 23', 'coolM@mail.ru', '0965823648', GETDATE());

insert into CAR values
('BMV',		399000,  1),
('Audi',	51690,	 1),
('Bentley',	456000,	 2),
('Bugatti', 1890000, 2),
('Ford',	1230000, 2),
('Fiat',	158000,  3),
('BMV',		985400,  3),
('Audi',	795400,  4),
('Bentley',	912000,  5),
('Bugatti', 485000,  5),
('Ford',	5985,    3),
('Fiat',	658000,  3),
('Honda',	201000,  4),
('Bentley',	112000,  5),
('Bugatti', 149000,  4),
('Ford',	950000,  1),
('Fiat',	799900,  2),
('Honda',	930000,  2),--
('Bentley',	320000,  3),
('Bugatti', 350000,  3),
('Ford',	120000,  5),
('Audi',	256000,  1),
('Bentley',	1360000, 3),
('Bugatti', 250000,  5),
('Ford',	100200,  4),
('Fiat',	8100000, 3),
('Honda',	716000,  5),
('Bentley',	452000,  4),
('Bugatti', 5790000, 2),
('Bentley',	690000,  5),
('Honda',	220000,  4),
('Ford',	1290000, 2),
('Audi',	1650000, 5),
('Honda',	950000,  3),
('Bugatti',	762000,  1),
('Honda',	939000,  5);

insert into ROUTE values('Lviv', 'Lviv', 'Lukasha, 48', '13', GETDATE());
insert into ROUTE values('Kyiv', 'Kyiv', 'Lukasha, 4', '3', GETDATE());
insert into ROUTE values('Odessa', 'Odess', 'Lukasha, 20', '8', GETDATE());
insert into ROUTE values('Ternopil', 'Gusiatyn', 'Lukasha, 8', '9', GETDATE());
insert into ROUTE values('Lviv', 'Lviv', 'Lukasha, 8', '13', GETDATE());

insert into WATER values
('Taras', 'Shyntuck', 'Ivanovych', '0936538597', 'manager', GETDATE()),--1
('Igor', 'Shvartz',	'Adolfovych','0965425298', 'manager', GETDATE()),--2
('Ivan', 'Atonovych', 'Vadymovych', '0509845327',	'cleaner', GETDATE()),
('Nazar', 'Zvarych', 'Stepanovych', '0985162007', 'director', GETDATE()),
('Olena', 'Shyntuck', 'Ivanivna', '0936538598', 'manager', GETDATE()),--5
('Vasyl', 'Shvartz',	'Adolfovych','0965423298', 'manager', GETDATE()),--6
('Tymofiy', 'Atonovych', 'Vadymovych', '0509845927',	'cleaner', GETDATE()),
('Natan', 'Zvarych', 'Stepanovych', '0945692007', 'cleaner', GETDATE()),
('Tetiana', 'Usyk', 'Semenivna', '0900038597', 'manager', GETDATE()),--9
('Inna', 'Shumova',	'Antonivna','0965980298', 'manager', GETDATE()),--10
('Ivanna', 'Zinchuck', 'Vadymivna', '0500025327',	'cleaner', GETDATE()),
('Nazar', 'Zvarych', 'Stepanovych', '0985232007', 'director', GETDATE());

DECLARE @idClient int; 
SET @idClient = 36; 
print @idClient


WHILE @idClient > 0
	BEGIN
		DECLARE @idWATER int; 
		SET @idWATER = 12;

		WHILE @idWATER > 0
		BEGIN
			DECLARE @idROUTE int; 
			SET @idROUTE = 5; 

			WHILE @idROUTE > 0
			BEGIN
				DECLARE @idCAR int; 
				SET @idCAR = 36;

				WHILE @idCAR > 0
				BEGIN
					insert into TRANSPORTATION values (@idClient, @idROUTE, '2018-10-28', GETDATE());

					DECLARE @idTRANSPORTATION int; 
					SET @idTRANSPORTATION = SCOPE_IDENTITY();

					insert into TRANSPORTATION_CAR_LINK values (@idCAR, @idTRANSPORTATION);
					insert into TRANSPORTATION_WATER_LINK values (@idWATER, @idTRANSPORTATION);

					SET @idCAR = @idCAR - 1
				END
				SET @idROUTE = @idROUTE - 1
			END
			SET @idWATER = @idWATER - 1
		END
		SET @idClient = @idClient - 1
	END;
--SELECT * FROM TRANSPORTATION
--SELECT * FROM TRANSPORTATION_CAR_LINK
--SELECT * FROM TRANSPORTATION_WATER_LINK
