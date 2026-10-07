
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  madeAttaindence,
  deleteStudent,
  viewStudent,
} from "./StudentSlice";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const [state, setState] = useState("");
  const [searched, setSearched] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.students.array);

  function handleAttaindence(id, attaindence) {
    dispatch(
      madeAttaindence({
        id,
        attaindence,
      })
    );
  }

  function deleteST(id) {
    dispatch(deleteStudent(id));
  }

  function viewpage(id) {
    dispatch(viewStudent(id));
    navigate("/showstudent");
  }

  function searching(e) {
    e.preventDefault();

    const stud = selector.filter(
      (st) => st.name.toLowerCase() === state.toLowerCase()
    );

    setSearched(stud);
  }

  const students = searched !== null ? searched : selector;

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10">

      {/* Header */}
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Students
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Manage student details and attendance
            </p>
          </div>

          {/* Search */}
          <form
            onSubmit={searching}
            className="flex w-full md:w-auto"
          >
            <input
              type="text"
              placeholder="Search student..."
              onChange={(e) => setState(e.target.value)}
              className="w-full md:w-64 px-4 py-2.5 bg-white border border-slate-300 rounded-l-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />

            <button
              type="submit"
              className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-r-lg hover:bg-indigo-700 transition"
            >
              Search
            </button>
          </form>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              {/* Table Head */}
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold">
                    Name
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold">
                    Email
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold">
                    Course
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold">
                    Marks
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold">
                    Attendance
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-200">

                {students.length > 0 ? (
                  students.map((val) => (
                    <tr
                      key={val.id}
                      className="hover:bg-slate-50 transition"
                    >

                      {/* Name */}
                      <td className="px-6 py-4 font-medium text-slate-800">
                        {val.name}
                      </td>

                      {/* Email */}
                      <td className="px-6 py-4 text-slate-600">
                        {val.email}
                      </td>

                      {/* Course */}
                      <td className="px-6 py-4 text-slate-600">
                        {val.cource}
                      </td>

                      {/* Marks */}
                      <td className="px-6 py-4 text-slate-600">
                        {val.marks}
                      </td>

                      {/* Attendance */}
                      <td className="px-6 py-4">

                        <div className="flex gap-2">

                          <button
                            onClick={() =>
                              handleAttaindence(val.id, true)
                            }
                            className="px-3 py-1.5 text-sm font-medium text-green-700 bg-green-100 rounded-md hover:bg-green-200 transition"
                          >
                            Present
                          </button>

                          <button
                            onClick={() =>
                              handleAttaindence(val.id, false)
                            }
                            className="px-3 py-1.5 text-sm font-medium text-red-700 bg-red-100 rounded-md hover:bg-red-200 transition"
                          >
                            Absent
                          </button>

                        </div>

                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">

                        <div className="flex gap-2">

                          <button
                            onClick={() => viewpage(val.id)}
                            className="px-3 py-1.5 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-md hover:bg-indigo-200 transition"
                          >
                            View
                          </button>

                          <button
                            className="px-3 py-1.5 text-sm font-medium text-amber-700 bg-amber-100 rounded-md hover:bg-amber-200 transition"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => deleteST(val.id)}
                            className="px-3 py-1.5 text-sm font-medium text-red-700 bg-red-100 rounded-md hover:bg-red-200 transition"
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>
                  ))
                ) : (

                  <tr>
                    <td
                      colSpan="6"
                      className="text-center py-10 text-slate-500"
                    >
                      No students found
                    </td>
                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Students
