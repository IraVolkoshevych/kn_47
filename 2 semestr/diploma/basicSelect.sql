SELECT 
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