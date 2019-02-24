--drop database SystemOfCurricula;
create database SystemOfCurricula;

GO

use SystemOfCurricula;

create table Subject(
SubjectID int identity(1,1) primary key not null,
SubjectName nvarchar(50) not null,
SubjectType nvarchar(15) not null);

create table Speciality(
SpecialityID int identity(1,1) primary key not null,
SpecialityName nvarchar(35) not null,
StartYear date not null);

create table Teacher(
TeacherID int identity(0,1) primary key not null,
TeacherFirstName nvarchar(30) not null,
TeacherLastName nvarchar(30) not null,
Degree nvarchar(35) not null,
AcademicStatus nvarchar(15) not null,
Department nvarchar(10) not null);

create table Course(
CourseID int identity(1,1) primary key not null,
SubjectID int foreign key references Subject(SubjectID) not null,
SpecialityID int foreign key references Speciality(SpecialityID) not null,
Lecturer int foreign key references Teacher(TeacherID) not null,
Assistant int foreign key references Teacher(TeacherID) not null,
CourseCredit float not null,
CourseWorkCredit float default(0) not null,
IsOnlyPractice bit not null, 
Semestr int not null);

create table CourseDependency(
CourseDependencyID int identity(1,1) primary key not null,
StartCourseID int foreign key references Course(CourseID) not null,
DependentCourseID int foreign key references Course(CourseID) not null);
