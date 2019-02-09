IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'insertManufacturereValue')
BEGIN
	DROP PROC ì
END

GO
create proc insertManufacturereValue @string nvarchar(max)
as
begin
	EXECUTE sp_executesql @string
end 
