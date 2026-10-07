
import React from "react";
import { useSelector } from "react-redux";

const ShowStudent = () => {
  const stud = useSelector((state) => state.students.stud);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">

          <div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-3xl font-bold">
            {stud?.name?.charAt(0).toUpperCase()}
          </div>

          <h1 className="text-2xl font-bold text-slate-800 mt-4">
            {stud?.name}
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Student Details
          </p>

        </div>

        {/* Details */}
        <div className="space-y-4">

          <div className="flex justify-between items-center bg-slate-50 rounded-lg px-4 py-3">
            <span className="text-sm font-medium text-slate-500">
              Email
            </span>

            <span className="text-sm font-semibold text-slate-800">
              {stud?.email}
            </span>
          </div>

          <div className="flex justify-between items-center bg-slate-50 rounded-lg px-4 py-3">
            <span className="text-sm font-medium text-slate-500">
              Course
            </span>

            <span className="text-sm font-semibold text-slate-800">
              {stud?.cource}
            </span>
          </div>

          <div className="flex justify-between items-center bg-slate-50 rounded-lg px-4 py-3">
            <span className="text-sm font-medium text-slate-500">
              Marks
            </span>

            <span className="text-sm font-semibold text-slate-800">
              {stud?.marks}
            </span>
          </div>

          <div className="flex justify-between items-center bg-slate-50 rounded-lg px-4 py-3">
            <span className="text-sm font-medium text-slate-500">
              Attendance
            </span>

            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${
                stud?.attaindence === true
                  ? "bg-green-100 text-green-700"
                  : stud?.attaindence === false
                  ? "bg-red-100 text-red-700"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              {stud?.attaindence === true
                ? "Present"
                : stud?.attaindence === false
                ? "Absent"
                : "Not Marked"}
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ShowStudent;

