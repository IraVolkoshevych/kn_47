--drop database TAXI_3_1;
Create database TAXI_3_1;
GO 

USE TAXI_3_1;
GO

create table ROUTE (
	idROUTE int not null identity(1,1),
	Region varchar(25),
	City varchar(25),
	Street varchar(25),
	Area int,
	Primary key (idROUTE),
	CreatedAt datetime DEFAULT GETDATE()
);
create table WATER (
	idWATER int not null identity(1,1),
	Name varchar(20),
	Surname varchar(25),
	Second_name varchar(25),
    Telephone_number int,
    Position varchar(25),
	Primary key (idWATER),
	CreatedAt datetime DEFAULT GETDATE()
);
create table CLIENTS (
	idCLIENTS int not null identity(1,1),
	Name varchar(20),
	Surname varchar(25),
	Second_name varchar(25),
    Telephone_number int,
    Email varchar(25),
	Primary key (idCLIENTS),
	CreatedAt datetime DEFAULT GETDATE()
);
create table CAR (
	idCAR int not null identity(1,1),
	brand varchar(20),
	Price int,
	City varchar(25),
	Primary key (idCAR),
	CreatedAt datetime DEFAULT GETDATE()
);
create table TRANSPORTATION (
	    idTRANSPORTATION int not null identity(1,1),
		idCLIENTS int not null,
		idROUTE int not null,
        Date date,
		CreatedAt datetime DEFAULT GETDATE(),
	    Primary key (idTRANSPORTATION),
        
         constraint cat_idCLIENTS foreign key (idCLIENTS)
        references CLIENTS (idCLIENTS)
        on delete no action on update no action,
        
        constraint cat_idROUTE foreign key (idROUTE)
        references ROUTE (idROUTE)
        on delete no action on update no action
);


create table TRANSPORTATION_CAR_LINK(
	    id int not null identity(1,1),
		idCAR int not null foreign key references CAR(idCAR),
		idTRANSPORTATION int not null foreign key references TRANSPORTATION(idTRANSPORTATION),
)


create table TRANSPORTATION_WATER_LINK(
	    id int not null identity(1,1),
		idWATER int not null foreign key references WATER(idWATER),
		idTRANSPORTATION int not null foreign key references TRANSPORTATION(idTRANSPORTATION),
)

--SELECT * FROM TRANSPORTATION