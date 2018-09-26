/*drop database STORE_3_1;*/
Create database STORE_3_1;
go 

USE STORE_3_1
go 

create table FURNITURE_STORE (
	idFURNITURE_STORE int not null identity(1,1),
	Region varchar(25),
	City varchar(25),
	Street varchar(25),
	Area int,
	Primary key (idFURNITURE_STORE),
	CreatedAt datetime DEFAULT GETDATE()
);
create table EMPLOYEES (
	idEMPLOYEES int not null identity(1,1),
	Name varchar(20),
	Surname varchar(25),
	Second_name varchar(25),
    Telephone_number int,
    Position varchar(25),
	Primary key (idEMPLOYEES),
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
create table PRODUCT (
	idPRODUCT int not null identity(1,1),
	Name varchar(20),
	Material varchar(25),
	Price int,
	Type varchar(25),
	Primary key (idPRODUCT),
	City varchar(25),
	CreatedAt datetime DEFAULT GETDATE()
);

create table FORM (
	    idFORM int not null identity(1,1),
		idCLIENTS int not null,
		idFURNITURE_STORE int not null,
        Date_order date,
		CreatedAt datetime DEFAULT GETDATE(),
	    Primary key (idFORM),
        
        constraint cat_idCLIENTS foreign key (idCLIENTS)
        references CLIENTS (idCLIENTS)
        on delete no action on update no action,
        
        constraint cat_idFURNITURE_STORE foreign key (idFURNITURE_STORE)
        references FURNITURE_STORE (idFURNITURE_STORE)
        on delete no action on update no action
);

create table FROM_PRODUCTS_LINK(
	    id int not null identity(1,1),
		idPRODUCT int not null foreign key references PRODUCT(idPRODUCT),
		idFORM int not null foreign key references FORM(idFORM),
)


create table FROM_EMPLOYEES_LINK(
	    id int not null identity(1,1),
		idEMPLOYEES int not null foreign key references EMPLOYEES(idEMPLOYEES),
		idFORM int not null foreign key references FORM(idFORM),
)

