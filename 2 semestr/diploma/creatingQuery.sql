--drop database studyPlanSystem;
create database studyPlanSystem;

GO

use studyPlanSystem;

create table Subject(
SubjectID int identity(1,1) primary key not null,
SubjectName nvarchar(50),
SubjectType nvarchar(15));

create table Speciality(
SpecialityID int identity(1,1) primary key not null,
SpecialityName nvarchar(35),
StartYear date);

create table Teacher(
TeacherID int identity(0,1) primary key not null,
TeacherFirstName nvarchar(30),
TeacherLastName nvarchar(30),
Degree nvarchar(35),
AcademicStatus nvarchar(15),
Department nvarchar(10));

create table Course(
CourseID int identity(1,1) primary key not null,
SubjectID int foreign key references Subject(SubjectID),
SpecialityID int foreign key references Speciality(SpecialityID),
Lecturer int foreign key references Teacher(TeacherID),
Assistant int foreign key references Teacher(TeacherID),
CourseCredit float,
CourseWorkCredit float default(0),
IsOnlyPractice bit, 
Semestr int);

create table CourseDependency(
CourseDependencyID int identity(1,1) primary key not null,
StartCourseID int foreign key references Course(CourseID),
DependentSourseID int foreign key references Course(CourseID));
