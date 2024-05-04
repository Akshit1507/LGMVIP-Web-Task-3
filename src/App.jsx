import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./index.css";
import Form from "./components/Form";
import EnrolledStudentsTable from "./components/EnrolledStudentsTable";
import { useState } from "react";
function App() {
  let [students, setStudents] = useState([]);
  return (
    <div>
      <Header />
      <div className="row my-row">
        <div className="col-7">
          <Form students={students} setStudents={setStudents} />
        </div>
        <div className="col-5">
          {students.length === 0 ? (
            <center>
              <h2>No Erolled Students</h2>
            </center>
          ) : (
            <EnrolledStudentsTable enrolledStudents={students} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
