"use client";
import React, { useEffect, useState } from "react";
import EditStuden from "./EditStuden";
import Styles from "./ViewStudents.module.css";
import Aleart from "../aleart/Aleart";

const ViewStudents = () => {
  type Value = {
    _id: string;
    name: string;
    mobile: number;
    email: string;
    dob: string;
    gender: string;
    street: string;
    city: string;
    state: string;
    pincode: number;
    course: string;
    submitDate: string;
  };
  const [students, setStudents] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editForm, setEditForm] = useState({
    _id: "",
    name: "",
    mobile: 0,
    email: "",
    dob: "",
    gender: "",
    street: "",
    city: "",
    state: "",
    pincode: 0,
    course: "",
    submitDate: "",
  });
  const [deletAleart, setDeleteAleart] = useState(false);
  const [deleteId, setDeleteID] = useState("");
  const [aleartColor, setAleartColor] = useState('');

  const handelEdit = (id: string) => {
    const data = students.filter((studen: Value) => studen._id === id);
    setEditForm(data[0]);
    setEdit(true);
  };

  const handelDelet = async (id: string = "") => {
    if (deletAleart) {
      const studentData = {
        _id: deleteId,
      };
      try {
        const strData = JSON.stringify(studentData);
        const response = await fetch("/api/deletestudent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: strData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          fetchData();
          setDeleteAleart(false);
          setDeleteID('');
        } else {
          console.error("Failed to insert data");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
      console.log("id", id);
      console.log("delete ID", deleteId);
    } else {
      setAleartColor('warning');
      setDeleteAleart(true);
      if (id !== "") {
        setDeleteID(id);
      }
    }
  };

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/api/getstudents");
      if (response.ok) {
        const jsonData = await response.json();
        setStudents(jsonData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const standerdDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  return (
    <section className="py-5 px-5 w-full relative">
      <div className="flex flex-col gap-5">
        {Object.values(students).map((value: Value) => (
          <div
            key={value._id}
            className="collapse collapse-arrow bg-slate-950 text-white w-full shadow-lg"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title flex justify-between px-5">
              <p className="font-medium">{value.name}</p>
              <p className="pe-10">{value.course}</p>
            </div>
            <div className="collapse-content px-5">
              <div className="flex flex-col gap-6 2xl:flex-row">
                <div className="flex gap-2">
                  <label className="Mobile">Mobile:</label>
                  <p className="font-bold">{value.mobile}</p>
                </div>
                <div className="flex gap-2">
                  <label className="Mobile">Email:</label>
                  <p className="font-bold">{value.email}</p>
                </div>
                <div className="flex gap-2">
                  <label className="Mobile">DOB:</label>
                  <p className="font-bold">{standerdDate(value.dob)}</p>
                </div>
                <div className="flex gap-2">
                  <label className="Mobile">Gender:</label>
                  <p className="font-bold">{value.gender}</p>
                </div>
                <div className="flex gap-2">
                  <label className="Mobile">Adress</label>
                  <div className="flex gap-2">
                    <label className="Mobile">Street:</label>
                    <p className="font-bold">{value.street}</p>
                  </div>
                  <div className="flex gap-2">
                    <label className="Mobile">City:</label>
                    <p className="font-bold">{value.city}</p>
                  </div>
                  <div className="flex gap-2">
                    <label className="Mobile">State:</label>
                    <p className="font-bold">{value.state}</p>
                  </div>
                  <div className="flex gap-2">
                    <label className="Mobile">Pincode:</label>
                    <p className="font-bold">{value.pincode}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <label className="Mobile">Enroll Date:</label>
                  <p className="font-bold">{standerdDate(value.submitDate)}</p>
                </div>
              </div>
              <div className="flex justify-between py-5">
                <button
                  value={value._id}
                  onClick={(event) => {
                    handelEdit((event.target as HTMLButtonElement).value);
                  }}
                  className="btn bg-sky-700 hover:bg-sky-500 text-white border-0"
                >
                  Edit
                </button>
                <button
                  value={value._id}
                  onClick={(event) =>
                    handelDelet((event.target as HTMLButtonElement).value)
                  }
                  className="btn bg-rose-500 hover:bg-rose-200 text-white hover:text-black border-0"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {edit && (
        <div
          className={"top-0 fixed rounded-lg shadow-2xl z-50 " + Styles.bgForm}
        >
          <EditStuden
            onClose={() => setEdit(false)}
            data={editForm}
            onUpdate={() => {
              fetchData();
            }}
          />
        </div>
      )}

      {deletAleart && (
        <div
          className={"top-0 fixed rounded-lg shadow-2xl z-50 " + Styles.bgForm}
        >
          <Aleart color={aleartColor} onClose={handelDelet}>
            Conform Delete
          </Aleart>
        </div>
      )}
    </section>
  );
};

export default ViewStudents;
