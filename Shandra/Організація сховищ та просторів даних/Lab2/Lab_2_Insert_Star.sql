USE TAXI_STAR;
GO

insert into clients	values
('Vadym','Ivanov','Boghdanovych','0986436379','small-boy2312@ukr.net'),
('Olga','Manelyuk','Ivanivna','0962370969','olgaAAA@ukr.net'),
('Oleg','Shndra','Stepanovych','0676971315','oleghsandra@mail.ru'),
('Ivan','Tuz','Perovych','0686291950','nice_girl@ukr.net'),
('Olena','Tuz','Igorivna','0965680969','olenAAA@ukr.net'),
('Maria','Shunderuk','Ivanivna','0506971315','mashka@mail.ru'),
('Taras','Petov','Grygorovych','0964575321','tarik@ukr.net'),
('Orest','Sydorov','Stepanovych','0505237895','orest99@mail.ru'),
('Inna','Tckach','Pavlivna','0935982130','one_love55@ukr.net'),
('Vadsyl','Ivanov','Boghdanovych','0986436379','small@ukr.net'),
('Oleg','Manelyuk','Ivanovych','0962370969','olkaAAA@ukr.net'),
('Oleg','Ivanov','Ivanovych','0676971315','olegyck@mail.ru'),
('Ivanna','Tuz','Petrivna','0686291950','nice_girl123@ukr.net'),
('Olena','Zhuk','Igorivna','0965680969','olenAAAaaaa@ukr.net'),
('Maryna','Shunderuk','Ivanivna','0506971315','marynka@mail.ru'),
('Teofil','Petov','Grygorovych','0964575321','teofilllll@ukr.net'),
('Oleh','Sydorov','Stepanovych','0505237895','orest9@mail.ru'),
('Irynaa','Tckach','Pavlivna','0935982130','one_love5@ukr.net'),
('Varfolomiy','Ivanencko','Boghdanovych','0986126379','mister@ukr.net'),
('Oleksiy','Manelyuk','Ivanovych','0968570969','lehaA@ukr.net'),
('Oleksa','Shandra','Petrovych','0679801315','oleksayu@mail.ru'),
('Vasyl','Chepil','Perovych','0686291950','vahac@ukr.net'),
('Oleh','Tuzov','Igorivna','0965680969','olehh@ukr.net'),
('Marian','Shunderuk','Ivanivnovych','0562971315','mariancko@mail.ru'),
('Taras','Petruck','Grygorovych','0964575321','tarikPPP@ukr.net'),
('Anton','Sydorov','Stepanovych','0520137895','antoha@mail.ru'),
('Ilona','Tolych','Pavlivna','0935982130','one_love55@ukr.net'),
('Vasyl','Ivanovenko','Boghdanovych','0986436379','scypa234@ukr.net'),
('Pylyp','Manelyuk','Ivanovych','0962370969','pylypuyty@ukr.net'),
('Viktor','Koval','Ivanovych','0676971315','vitiaa@mail.ru'),
('Ivanna','Soliar','Petrivna','0686291950','ivanna@ukr.net'),
('Olha','Petriv','Igorivna','0965680969','petriv@ukr.net'),
('Myron','Shunderuk','Sepanovych','0506971315','myronko@mail.ru'),
('Stanis','Baratheon','Grygorovych','0964575321','stanisstanisukr.net'),
('Serseia','Sydorova','Stepanovych','0505237895','inininin@mail.ru'),
('Tirion','Tckach','Pavlivna','0935982130','lanister@ukr.net');

insert into CAR values
('BMV',		399000,  'Kyiv'),
('Audi',	51690, 'Kyiv'),
('Bentley',	456000, 'Lviv'),
('Bugatti', 1890000,  'Lviv'),
('Ford',	1230000, 'Lviv'),
('Fiat',	158000, 'Rivne'),
('BMV',		985400, 'Rivne'),
('Audi',	795400, 'Ternopil'),
('Bentley',	912000, 'Odessa'),
('Bugatti', 485000, 'Odessa'),
('Ford',	5985, 'Rivne'),
('Fiat',	658000, 'Rivne'),
('Honda',	201000, 'Ternopil'),
('Bentley',	112000, 'Odessa'),
('Bugatti', 149000, 'Ternopil'),
('Ford',	950000, 'Kyiv'),
('Fiat',	799900, 'Lviv'),
('Honda',	930000, 'Lviv'),--
('Bentley',	320000, 'Rivne'),
('Bugatti', 350000, 'Rivne'),
('Ford',	120000, 'Odessa'),
('Audi',	256000, 'Kyiv'),
('Bentley',	1360000, 'Rivne'),
('Bugatti', 250000, 'Odessa'),
('Ford',	100200, 'Ternopil'),
('Fiat',	8100000, 'Rivne'),
('Honda',	716000, 'Odessa'),
('Bentley',	452000, 'Ternopil'),
('Bugatti', 5790000, 'Lviv'),
('Bentley',	690000, 'Odessa'),
('Honda',	220000, 'Ternopil'),
('Ford',	1290000, 'Lviv'),
('Audi',	1650000, 'Odessa'),
('Honda',	950000, 'Rivne'),
('Bugatti',	762000, 'Kyiv'),
('Honda',	939000, 'Odessa');

insert into ROUTE values('Lviv', 'Lviv', 'Lukasha, 48', '13');
insert into ROUTE values('Kyiv', 'Kyiv', 'Lukasha, 4', '3');
insert into ROUTE values('Odessa', 'Odess', 'Lukasha, 20', '8');
insert into ROUTE values('Ternopil', 'Gusiatyn', 'Lukasha, 8', '9');
insert into ROUTE values('Lviv', 'Lviv', 'Lukasha, 8', '13');

insert into WATER values
('Taras', 'Shyntuck', 'Ivanovych', '0936538597', 'manager'),--1
('Igor', 'Shvartz',	'Adolfovych','0965425298', 'manager'),--2
('Ivan', 'Atonovych', 'Vadymovych', '0509845327',	'cleaner'),
('Nazar', 'Zvarych', 'Stepanovych', '0985162007', 'director'),
('Olena', 'Shyntuck', 'Ivanivna', '0936538598', 'manager'),--5
('Vasyl', 'Shvartz',	'Adolfovych','0965423298', 'manager'),--6
('Tymofiy', 'Atonovych', 'Vadymovych', '0509845927',	'cleaner'),
('Natan', 'Zvarych', 'Stepanovych', '0945692007', 'cleaner'),
('Tetiana', 'Usyk', 'Semenivna', '0900038597', 'manager'),--9
('Inna', 'Shumova',	'Antonivna','0965980298', 'manager'),--10
('Ivanna', 'Zinchuck', 'Vadymivna', '0500025327',	'cleaner'),
('Nazar', 'Zvarych', 'Stepanovych', '0985232007', 'director');

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
					insert into TRANSPORTATION values (@idCAR, @idClient, @idWATER, @idROUTE, '2018-10-28');
					SET @idCAR = @idCAR - 1
				END
				SET @idROUTE = @idROUTE - 1
			END
			SET @idWATER = @idWATER - 1
		END
		SET @idClient = @idClient - 1
	END;
-- select * from TRANSPORTATION