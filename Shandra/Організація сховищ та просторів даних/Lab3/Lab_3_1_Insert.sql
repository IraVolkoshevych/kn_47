USE TAXI_3_1;
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

insert into CAR values
('BMV',		399000,  'Kyiv', GETDATE()),
('Audi',	51690, 'Kyiv', GETDATE()),
('Bentley',	456000, 'Lviv', GETDATE()),
('Bugatti', 1890000,  'Lviv', GETDATE()),
('Ford',	1230000, 'Lviv', GETDATE()),
('Fiat',	158000, 'Rivne', GETDATE()),
('BMV',		985400, 'Rivne', GETDATE()),
('Audi',	795400, 'Ternopil', GETDATE()),
('Bentley',	912000, 'Odessa', GETDATE()),
('Bugatti', 485000, 'Odessa', GETDATE()),
('Ford',	5985, 'Rivne', GETDATE()),
('Fiat',	658000, 'Rivne', GETDATE()),
('Honda',	201000, 'Ternopil', GETDATE()),
('Bentley',	112000, 'Odessa', GETDATE()),
('Bugatti', 149000, 'Ternopil', GETDATE()),
('Ford',	950000, 'Kyiv', GETDATE()),
('Fiat',	799900, 'Lviv', GETDATE()),
('Honda',	930000, 'Lviv', GETDATE()),--
('Bentley',	320000, 'Rivne', GETDATE()),
('Bugatti', 350000, 'Rivne', GETDATE()),
('Ford',	120000, 'Odessa', GETDATE()),
('Audi',	256000, 'Kyiv', GETDATE()),
('Bentley',	1360000, 'Rivne', GETDATE()),
('Bugatti', 250000, 'Odessa', GETDATE()),
('Ford',	100200, 'Ternopil', GETDATE()),
('Fiat',	8100000, 'Rivne', GETDATE()),
('Honda',	716000, 'Odessa', GETDATE()),
('Bentley',	452000, 'Ternopil', GETDATE()),
('Bugatti', 5790000, 'Lviv', GETDATE()),
('Bentley',	690000, 'Odessa', GETDATE()),
('Honda',	220000, 'Ternopil', GETDATE()),
('Ford',	1290000, 'Lviv', GETDATE()),
('Audi',	1650000, 'Odessa', GETDATE()),
('Honda',	950000, 'Rivne', GETDATE()),
('Bugatti',	762000, 'Kyiv', GETDATE()),
('Honda',	939000, 'Odessa', GETDATE());

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
