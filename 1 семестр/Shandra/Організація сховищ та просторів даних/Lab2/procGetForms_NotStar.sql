IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'GETFORMS')
BEGIN
	DROP PROC GETFORMS
END

GO
create procedure GETFORMS
as
select	*
from TRANSPORTATION 
INNER JOIN CLIENTS on TRANSPORTATION.IDCLIENTS = CLIENTS.IDCLIENTS
INNER JOIN WATER on TRANSPORTATION.IDWATER = WATER.idWATER
INNER JOIN CAR on TRANSPORTATION.IDCAR = CAR.IDCAR
INNER JOIN ROUTE on TRANSPORTATION.IDROUTE = ROUTE.IDROUTE
INNER JOIN MANUFACTURER on MANUFACTURER.IDMANUFACTURER = CAR.IDMANUFACTURER
