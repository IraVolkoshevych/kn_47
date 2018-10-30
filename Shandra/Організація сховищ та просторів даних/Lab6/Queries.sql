Select * from clients where Name like 'Ol%'
Select * from CAR where [brand] = 'Ford'
Select * from CLIENTS where Name = 'Oleg'
Select * from WATER where Telephone_number = '0509845927'

--Вивести номера форм замовлених для "Vadym"
--та номер меблевого магазину = 5
Select FORM.idFORM from CLIENTS
inner join FORM
on FORM.idCLIENTS = CLIENTS.idCLIENTS
where CLIENTS.Name = 'Vadym' and idFURNITURE_STORE = 5

--Вивести інформацію про форми датою замовлення більшою за вказану
--та продуки тип яких "quad"
select * from FORM 
INNER JOIN FROM_PRODUCTS_LINK on FORM.idFORM = FROM_PRODUCTS_LINK.idFORM
INNER JOIN PRODUCT on FROM_PRODUCTS_LINK.idPRODUCT = PRODUCT.idPRODUCT
where PRODUCT.[Type] = 'quad' and FORM.Date_order > '2010/11/11'

--Кількість продуктів по типу
Select [Type], Count(*) from PRODUCT
Group by [Type]

--Кількість працівників за професіями
Select Position, Count(*) from EMPLOYEES
Group by Position

--Кількість магазинів по містах 
Select City, Count(*) from FURNITURE_STORE
Group by City

--Вивсети суму товару за типом купленого клієнтом 'Vadym'
select PRODUCT.idPRODUCT, (COUNT(*) * Max(PRODUCT.Price)) as Total from FORM 
INNER JOIN CLIENTS on FORM.IDCLIENTS = CLIENTS.IDCLIENTS
INNER JOIN FROM_PRODUCTS_LINK on FORM.idFORM = FROM_PRODUCTS_LINK.idFORM
INNER JOIN PRODUCT on FROM_PRODUCTS_LINK.idPRODUCT = PRODUCT.idPRODUCT
where CLIENTS.Name = 'Vadym'
Group by PRODUCT.idPRODUCT

--Вивсети продавця що продав найбільше товару тип яких "quad"
select TOP 1 MAX(EMPLOYEES.Name) as employee, Count(*) as [count] from FORM 
INNER JOIN FROM_EMPLOYEES_LINK on FORM.idFORM = FROM_EMPLOYEES_LINK.idFORM
INNER JOIN EMPLOYEES on FROM_EMPLOYEES_LINK.IDEMPLOYEES = EMPLOYEES.IDEMPLOYEES
INNER JOIN FROM_PRODUCTS_LINK on FORM.idFORM = FROM_PRODUCTS_LINK.idFORM
INNER JOIN PRODUCT on FROM_PRODUCTS_LINK.idPRODUCT = PRODUCT.idPRODUCT
where PRODUCT.[Type] = 'quad'
Group by EMPLOYEES.IDEMPLOYEES
order by Count(*) desc