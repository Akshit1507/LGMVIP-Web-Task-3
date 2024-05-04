import React from "react";

const EnrolledStudentsTable = ({ enrolledStudents }) => {
  return (
    <div className="studentDetails">
      <center>
        <h2>Enrolled Students</h2>
      </center>
      <div className="studentsTable">
        <table className="table table-bordered">
          <thead style={{ backgroundColor: "#acd040" }}>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map((student) => {
              return (
                <tr key={student.studentEmail}>
                  <td>
                    <span className="studentName">{student.studentName}</span>
                    <br />
                    {student.studentGender}
                    <br />
                    {student.studentEmail}
                    <br />
                    {student.studentWebsite}
                    <br />
                    {student.studentSkills.map((skill) => {
                      return <span key={skill}>{skill} </span>;
                    })}
                  </td>
                  <td className="text-center">
                    <img src={student.studentImage} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledStudentsTable;
