"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { format, subYears } from "date-fns";
import Styles from "../AddStudent/AddStudent.module.css";
import Aleart from "../../Aleart/Aleart";

type Prop = {
  data: {
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
  onClose: ()=>void;
  onUpdate: ()=>void;
};

const EditStuden = ({ data, onClose, onUpdate }: Prop) => {
  const currentDate = new Date();
  const maxDate = subYears(currentDate, 15);
  const formattedMaxDate = format(maxDate, "yyyy-MM-dd");

  const standerdDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [name, setName] = useState(data.name);
  const [mobile, setMobile] = useState(data.mobile);
  const [email, setEmail] = useState(data.email);
  const [dob, setDob] = useState(standerdDate(data.dob));
  const [gender, setGender] = useState(data.gender);
  const [street, setStreet] = useState(data.street);
  const [city, setCity] = useState(data.city);
  const [state, setState] = useState(data.state);
  const [pincode, setPincode] = useState(data.pincode);
  const [course, setCourse] = useState(data.course);
  const [aleartContainerVisblity, setAleartContainerVisblity] = useState(false);
  const [aleartMessage, setAleartMessage] = useState("");
  const [aleartColor, setAleartColor] = useState("");

  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      (elem as HTMLElement).blur();
    }
  };

  const handelNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    const nameRegex = /^[A-Za-z\s.'-]+$/;
    if (!nameRegex.test(value)) event.target.classList.add("input-error");
    else event.target.classList.remove("input-error");
    setName(value);
  };

  const handelMobileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(value)) event.target.classList.add("input-error");
    else event.target.classList.remove("input-error");
    setMobile(parseInt(value));
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(value)) event.target.classList.add("input-error");
    else event.target.classList.remove("input-error");
    setEmail(value);
  };

  const handelPincodeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    const pincodeRegex = /^\d{6}$/;
    if (!pincodeRegex.test(value)) event.target.classList.add("input-error");
    else event.target.classList.remove("input-error");
    const pin = parseInt(value);
    setPincode(pin);
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const submitButton = form.querySelector(".submit-btn") as HTMLButtonElement;
    console.log(submitButton);
    submitButton.disabled = true;
    submitButton.innerHTML = "Submitting...";

    const studentData = {
      _id: data._id,
      name: name,
      mobile: mobile,
      email: email,
      dob: new Date(dob),
      gender: gender,
      street: street,
      city: city,
      state: state,
      pincode: pincode,
      course: course,
      submitDate: data.submitDate,
    };

    try {
      const strData = JSON.stringify(studentData);
      // console.log(strData)
      const response = await fetch("/api/updatestudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: strData, // Convert the data to JSON
      });

      if (response.ok) {
        // Handle a successful response, if needed
        onUpdate();
        const result = await response.json();
        console.log(result);
        setAleartColor("success");
        setAleartMessage("Student Updated");
        setAleartContainerVisblity(true);
      } else {
        console.error("Failed to insert data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    submitButton.disabled = false;
    submitButton.innerHTML = "Submit";
  }
  return (
    <>
      <div className="relative">
      <div className="text-center  py-2">
            <button onClick={onClose} className="btn btn-circle btn-outline text-white hover:text-rose-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        <form className="card-body pt-0" onSubmit={onSubmit}>
          <div className="flex justify-between gap-6">
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Full Name*"
                className="input"
                value={name}
                onChange={handelNameChange}
                required
              />
            </div>
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Mobile Number"
                className="input input-bordered"
                value={mobile}
                onChange={handelMobileChange}
                required
              />
            </div>
          </div>
          <div className="form-control mt-2">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="flex justify-between gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white font-semibold">
                  Date of Birth
                </span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                max={formattedMaxDate}
                value={dob}
                onChange={(event) => {
                  setDob(event.target.value);
                }}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold">
                  Gender
                </span>
              </label>
              <div className="flex gap-6">
                <label className="label cursor-pointer">
                  <span className="label-text text-white me-4">Male</span>
                  <input
                    type="radio"
                    name="gender"
                    className="radio bg-white"
                    value="male"
                    checked={gender === "male"}
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  />
                </label>
                <label className="label text-white cursor-pointer">
                  <span className="label-text text-white me-4">Female</span>
                  <input
                    type="radio"
                    name="gender"
                    className="radio bg-white"
                    value="female"
                    checked={gender === "female"}
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-semibold">
                Address
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Street"
              value={street}
              onChange={(event) => setStreet(event.target.value)}
            ></textarea>
            <div className="flex justify-between gap-6">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                className="input mt-4 w-full"
              />
              <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(event) => setState(event.target.value)}
                className="input mt-4 w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Pincode"
              value={pincode}
              onChange={handelPincodeChange}
              required
              className="input mt-4"
            />
          </div>
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text text-white font-semibold">
                Course
              </span>
            </label>
            <div className="dropdown">
              <label
                id="dropdownCourse"
                tabIndex={0}
                className="btn bg-white w-full justify-start m-1"
              >
                {course}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] w-full menu p-2 shadow bg-base-100 rounded-box translate-x-1"
              >
                <li onClick={handleClick}>
                  <input
                    readOnly
                    onClick={(event) =>
                      setCourse((event.target as HTMLInputElement).value)
                    }
                    value="B.Tech(Computer Science and Engineering)"
                  />
                </li>
                <li onClick={handleClick}>
                  <input
                    readOnly
                    onClick={(event) =>
                      setCourse((event.target as HTMLInputElement).value)
                    }
                    value="B.Tech(Aeronautical Engineering)"
                  />
                </li>
                <li onClick={handleClick}>
                  <input
                    readOnly
                    onClick={(event) =>
                      setCourse((event.target as HTMLInputElement).value)
                    }
                    value="B.Tech(Aeronautical Engineering)"
                  />
                </li>
                <li onClick={handleClick}>
                  <input
                    readOnly
                    onClick={(event) =>
                      setCourse((event.target as HTMLInputElement).value)
                    }
                    value="B.Tech(Automobile Engineering)"
                  />
                </li>
                <li onClick={handleClick}>
                  <input
                    readOnly
                    onClick={(event) =>
                      setCourse((event.target as HTMLInputElement).value)
                    }
                    value="B.Tech(Biotechnology)"
                  />
                </li>
                <li onClick={handleClick}>
                  <input
                    readOnly
                    onClick={(event) =>
                      setCourse((event.target as HTMLInputElement).value)
                    }
                    value="B.Tech(Civil Engineering)"
                  />
                </li>
                <li onClick={handleClick}>
                  <input
                    readOnly
                    onClick={(event) =>
                      setCourse((event.target as HTMLInputElement).value)
                    }
                    value="B.Tech(Electrical and Electronics Engineering)"
                  />
                </li>
                <li onClick={handleClick}>
                  <input
                    readOnly
                    onClick={(event) =>
                      setCourse((event.target as HTMLInputElement).value)
                    }
                    value="B.Tech(Mechanical Engineering)"
                  />
                </li>
                <li onClick={handleClick}>
                  <input
                    readOnly
                    onClick={(event) =>
                      setCourse((event.target as HTMLInputElement).value)
                    }
                    value="B.Tech(Electronics & Communication)"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="submit-btn btn">Update Student</button>
          </div>
        </form>
        {aleartContainerVisblity && (
          <div
            id="aleartContainer"
            className={
              "absolute inset-0 justify-center items-start py-5 px-5 flex " +
              Styles.bgBlur
            }
          >
            <Aleart
              color={aleartColor}
              onClose={onClose}
            >
              {aleartMessage}
            </Aleart>
          </div>
        )}
      </div>
    </>
  );
};

export default EditStuden;
