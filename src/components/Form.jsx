import React from "react";
import { useState } from "react";

const Form = ({ students, setStudents }) => {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentWebsite, setStudentWebsite] = useState("");
  const [studentImage, setStudentImage] = useState("");
  const [studentGender, setStudentGender] = useState("");
  let studentSkills = [];
  const clearForm = () => {
    setStudentName("");
    setStudentEmail("");
    setStudentWebsite("");
    setStudentImage("");
    studentSkills = [];
    let radio1 = document.getElementById("flexRadioDefault1");
    radio1.checked = false;
    let radio2 = document.getElementById("flexRadioDefault2");
    radio2.checked = false;
    let checkbox1 = document.getElementById("inlineCheckbox1");
    let checkbox2 = document.getElementById("inlineCheckbox2");
    let checkbox3 = document.getElementById("inlineCheckbox3");
    checkbox1.checked = checkbox2.checked = checkbox3.checked = false;
  };
  const enrollStudent = () => {
    let checkbox1 = document.getElementById("inlineCheckbox1");
    let checkbox2 = document.getElementById("inlineCheckbox2");
    let checkbox3 = document.getElementById("inlineCheckbox3");
    if (checkbox1.checked === true) {
      studentSkills.push(checkbox1.value);
    }
    if (checkbox2.checked === true) {
      studentSkills.push(checkbox2.value);
    }
    if (checkbox3.checked === true) {
      studentSkills.push(checkbox3.value);
    }
    const student = {
      studentName,
      studentEmail,
      studentWebsite,
      studentImage,
      studentGender,
      studentSkills,
    };
    setStudents((prev) => [...prev, student]);
    clearForm();
  };
  return (
    <div className="form text-center">
      <div className="row my-row">
        <div className="col-3">
          <label className="form-label">Name</label>
        </div>
        <div className="col-4">
          <input
            type="text"
            id="studentName"
            value={studentName}
            className="form-control"
            onChange={(e) => {
              setStudentName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="row my-row">
        <div className="col-3">
          <label className="form-label">Email</label>
        </div>
        <div className="col-4">
          <input
            type="email"
            id="studentEmail"
            className="form-control"
            value={studentEmail}
            onChange={(e) => {
              setStudentEmail(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="row my-row">
        <div className="col-3">
          <label className="form-label">Website</label>
        </div>
        <div className="col-4">
          <input
            type="text"
            id="studentWebsite"
            className="form-control"
            value={studentWebsite}
            onChange={(e) => {
              setStudentWebsite(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="row my-row">
        <div className="col-3">
          <label className="form-label">Image Link</label>
        </div>
        <div className="col-4">
          <input
            type="text"
            id="studentImage"
            className="form-control"
            value={studentImage}
            onChange={(e) => {
              setStudentImage(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="row my-row">
        <div className="col-3">
          <label className="form-label">Gender</label>
        </div>
        <div className="col-4" style={{ textAlign: "left" }}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="Male"
              onChange={(e) => {
                setStudentGender(e.target.value);
              }}
            />
            <label
              className="form-check-label"
              htmlFor="flexRadioDefault1"
              style={{ marginLeft: "20px" }}
            >
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="Female"
              onChange={(e) => {
                setStudentGender(e.target.value);
              }}
            />
            <label
              className="form-check-label"
              htmlFor="flexRadioDefault2"
              style={{ marginLeft: "20px" }}
            >
              Female
            </label>
          </div>
        </div>
      </div>
      <div className="row my-row">
        <div className="col-3">
          <label className="form-label">Skills</label>
        </div>
        <div className="col-4">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="Java"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Java
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="HTML"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              HTML
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="CSS"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox3">
              CSS
            </label>
          </div>
        </div>
      </div>
      <div className="row my-row">
        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              enrollStudent();
            }}
          >
            Enroll Student
          </button>
        </div>
        <div className="col-4">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              clearForm();
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
