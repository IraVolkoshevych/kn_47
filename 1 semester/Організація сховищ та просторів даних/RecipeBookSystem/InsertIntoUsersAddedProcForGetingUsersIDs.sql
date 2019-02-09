CREATE PROCEDURE spGetAllUsersIDs
AS
  SELECT UserId FROM Users;
GO

DELETE FROM UsersDishes;

INSERT INTO Users VALUES('Vadym', 'vad@i.ua', '84fa9dd1a6b338c8347573ee76a16caf');-- password - qwQW12!@
INSERT INTO Users VALUES('Mishutka', 'selian@gmail.com', '202cb962ac59075b964b07152d234b70');-- password - 123
INSERT INTO Users VALUES('Taras', 'taras@ukr.net', '827ccb0eea8a706c4c34a16891f84e7b');-- password - 12345
INSERT INTO Users VALUES('Natalia', 'nata@ukr.net', '827ccb0eea8a706c4c34a16891f84e7b')-- password - 12345
INSERT INTO Users VALUES('Oleh', 'oleh@gmail.com', '202cb962ac59075b964b07152d234b70');-- password - 123