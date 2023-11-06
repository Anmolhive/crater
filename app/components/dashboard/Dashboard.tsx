import React, { ReactNode } from "react";
import Styles from "./Dashboard.module.css";
import AddStudent from "./AddStudent";
import Link from "next/link";

type Prop = {
  children: ReactNode;
  active: 'addStudent' | 'viewStudents';
}

const Dashboard = ({children, active}: Prop) => {
  let addStudentActive = '';
  let viewStudentActive = '';
  active === 'addStudent' ? addStudentActive = Styles.buttonActive : viewStudentActive = Styles.buttonActive;
  return (
    <section className="h-screen bg-neutral-300">
      <div className="flex gap-1 py-8 px-5 h-full">
        <div
          className={
            "sidebar p-5 bg-black flex flex-col gap-4 rounded-lg " +
            Styles.expandSidebar
          }
        >
          <Link href='/addstudent'>
          <button
            className={
              "flex gap-5 " +addStudentActive+ " " + Styles.sidebarBtn
            }
          >
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  fill="#fff"
                  d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"
                />
              </svg>
            </div>
            <div className={"button-text text-white " + Styles.buttonText}>
              Add Student
            </div>
          </button>
          </Link>
            <Link href='/viewstudents'>
            <button
           className={"flex gap-5 " + viewStudentActive +" " + Styles.sidebarBtn}>
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  fill="#fff"
                  d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"
                />
              </svg>
            </div>
            <div className={"button-text text-white " + Styles.buttonText}>
              View Students
            </div>
          </button>
            </Link>
        </div>
        <div className={"mai bg-neutral-50 w-full rounded-lg overflow-auto flex items-center justify-center  " + Styles.customScrollBar}>
          <div className="flex justify-center w-full h-full">
            <div className="pt-6 w-full px-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
