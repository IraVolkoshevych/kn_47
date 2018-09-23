/*drop database store;*/
Create database STORE;
create table FURNITURE_STORE (
	idFURNITURE_STORE int not null identity(1,1),
	Region varchar(25),
	City varchar(25),
	Street varchar(25),
	Area int,
	Primary key (idFURNITURE_STORE)
);
create table EMPLOYEES (
	idEMPLOYEES int not null identity(1,1),
	Name varchar(20),
	Surname varchar(25),
	Second_name varchar(25),
    Telephone_number int,
    Position varchar(25),
	Primary key (idEMPLOYEES)
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
create table PRODUCT (
	idPRODUCT int not null identity(1,1),
	Name varchar(20),
	Material varchar(25),
	Price int,
	Type varchar(25),
	Primary key (idPRODUCT),
	idMANUFACTURER int not null,
	foreign key (idMANUFACTURER)
        references MANUFACTURER (idMANUFACTURER)
        on delete no action on update no action
);
create table FORM (
	    idFORM int not null identity(1,1),
        idPRODUCT int not null,
		idCLIENTS int not null,
		idEMPLOYEES int not null,
		idFURNITURE_STORE int not null,
        Date_order date,
	    Primary key (idFORM),
        constraint cat_idPRODUCT foreign key (idPRODUCT)
        references PRODUCT (idPRODUCT)
        on delete no action on update no action,
        
         constraint cat_idCLIENTS foreign key (idCLIENTS)
        references CLIENTS (idCLIENTS)
        on delete no action on update no action,
        
       constraint cat_idEMPLOYEES foreign key (idEMPLOYEES )
        references EMPLOYEES  (idEMPLOYEES )
        on delete no action on update no action,
        
        constraint cat_idFURNITURE_STORE foreign key (idFURNITURE_STORE)
        references FURNITURE_STORE (idFURNITURE_STORE)
        on delete no action on update no action
);
