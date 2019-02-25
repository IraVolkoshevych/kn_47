-- get courses info
SELECT 
	Subject.SubjectID,
	Course.Semestr,
	Subject.SubjectName,
	lecturer.TeacherFirstName AS LecturerFirstName,
	lecturer.TeacherLastName AS LecturerLastName,
	lecturer.Degree AS LecturerDegree,
	lecturer.AcademicStatus AS LecturerAcademicStatus,
	lecturer.Department  AS LecturerDepartment,
	assistant.TeacherFirstName AS AssistantFirstName,
	assistant.TeacherLastName AS AssistantLastName,
	assistant.Degree AS AssistantDegree,
	assistant.AcademicStatus AS AssistantAcademicStatus,
	assistant.Department  AS AssistantDepartment, 
	Course.CourseCredit, 
	Course.CourseWorkCredit,
	Course.IsOnlyPractice
FROM Course INNER JOIN Subject
ON Course.SubjectID = Subject.SubjectID
INNER JOIN Teacher lecturer
ON lecturer.TeacherID = Course.Lecturer
INNER JOIN Teacher assistant
ON assistant.TeacherID = Course.Assistant

--get course dependency info
SELECT 
	startSubject.SubjectName AS StartSubjectName,
	startCourse.Semestr AS StartSemestr,
	dependentSubject.SubjectName AS DependentSubjectName,
	dependentCourse.Semestr AS DependentSemestr
FROM
CourseDependency INNER JOIN Course startCourse
ON CourseDependency.StartCourseID = startCourse.CourseID
INNER JOIN Subject startSubject
ON startSubject.SubjectID = startCourse.SubjectID
INNER JOIN Course dependentCourse
ON CourseDependency.DependentCourseID = dependentCourse.CourseID
INNER JOIN Subject dependentSubject
ON dependentSubject.SubjectID = dependentCourse.SubjectID
--addition condition
WHERE StartCourseID = 16
	OR 
	DependentCourseID = 16;