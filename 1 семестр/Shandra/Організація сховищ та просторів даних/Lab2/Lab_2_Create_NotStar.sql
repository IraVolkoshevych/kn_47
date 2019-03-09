--drop database TAXI;
Create database TAXI;
GO 

USE TAXI;
GO

create table ROUTE (
	idROUTE int not null identity(1,1),
	Region varchar(25),
	City varchar(25),
	Street varchar(25),
	Area int,
	Primary key (idROUTE)
);
create table WATER (
	idWATER int not null identity(1,1),
	Name varchar(20),
	Surname varchar(25),
	Second_name varchar(25),
    Telephone_number int,
    Position varchar(25),
	Primary key (idWATER)
);
create table CLIENTS (
	idCLIENTS int not null identity(1,1),
	Name varchar(20),
	Surname varchar(25),
	Second_name varchar(25),
    Telephone_number int,
    Email varchar(25),
	Primary key (idCLIENTS)
);
create table MANUFACTURER (
	idMANUFACTURER int not null identity(1,1),
	Region varchar(25),
	City varchar(25),
	Street varchar(25),
    Email varchar(25),
    Telephone_number int,
	Primary key (idMANUFACTURER)
);
create table CAR (
	idCAR int not null identity(1,1),
	brand varchar(20),
	Price int,
	Primary key (idCAR),
	idMANUFACTURER int not null,
	foreign key (idMANUFACTURER)
        references MANUFACTURER (idMANUFACTURER)
        on delete no action on update no action
);
create table TRANSPORTATION (
	    idTRANSPORTATION int not null identity(1,1),
        idCAR int not null,
		idCLIENTS int not null,
		idWATER int not null,
		idROUTE int not null,
        Date date,
	    Primary key (idTRANSPORTATION),
        constraint cat_idPRODUCT foreign key (idCAR)
        references CAR (idCAR)
        on delete no action on update no action,
        
         constraint cat_idCLIENTS foreign key (idCLIENTS)
        references CLIENTS (idCLIENTS)
        on delete no action on update no action,
        
       constraint cat_idWATER foreign key (idWATER )
        references WATER  (idWATER )
        on delete no action on update no action,
        
        constraint cat_idROUTE foreign key (idROUTE)
        references ROUTE (idROUTE)
        on delete no action on update no action
);
