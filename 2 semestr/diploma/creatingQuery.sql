--drop database studyPlanSystem;
create database studyPlanSystem;

GO

use studyPlanSystem;

create table Subject(
SubjectID int identity(1,1) primary key not null,
SubjectName nvarchar(30));

create table Speciality(
SpecialityID int identity(1,1) primary key not null,
SpecialityName nvarchar(30),
StartYear date);

create table Teacher(
TeacherID int identity(1,1) primary key not null,
TeacherFirstName nvarchar(30),
TeacherLastName nvarchar(30),
Degree nvarchar(20),
AcademicStatus nvarchar(20));

create table Course(
CourseID int identity(1,1) primary key not null,
SubjectID int foreign key references Subject(SubjectID),
SpecialityID int foreign key references Speciality(SpecialityID),
Teacher int foreign key references Teacher(TeacherID),
Credit float);

create table CourseDependency(
CourseDependencyID int identity(1,1) primary key not null,
StartCourseID int foreign key references Course(CourseID),
DependentSourseID int foreign key references Course(CourseID));
