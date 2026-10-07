
import React from "react";
import Present from "./Present";
import Absent from "./Absent";
import TotalStudent from "./TotalStudent";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white min-h-screen p-5">

        <h1 className="text-2xl font-bold mb-2">
          Student Management
        </h1>

        <p className="text-slate-400 text-sm mb-10">
          Admin Panel
        </p>

        <div className="flex flex-col gap-2">

          <button
            className="text-left px-4 py-3 rounded-lg bg-indigo-600 font-medium"
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/student")}
            className="text-left px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            Students
          </button>

          <button
            onClick={() => navigate("/addstudent")}
            className="text-left px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            Add Student
          </button>

          <button
            onClick={() => navigate("/users")}
            className="text-left px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            User API
          </button>

        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <div className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Student Dashboard
            </h2>

            <p className="text-sm text-slate-500">
              Manage your students and attendance
            </p>
          </div>

          <button
            className="px-5 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition"
          >
            Logout
          </button>

        </div>

        {/* Dashboard */}
        <div className="p-8">

          <h3 className="text-xl font-semibold text-slate-800 mb-6">
            Overview
          </h3>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-6">

            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-sm text-slate-500 mb-3">
                Total Students
              </p>

              <div className="text-3xl font-bold text-indigo-600">
                <TotalStudent />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-sm text-slate-500 mb-3">
                Present Students
              </p>

              <div className="text-3xl font-bold text-green-600">
                <Present />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-sm text-slate-500 mb-3">
                Absent Students
              </p>

              <div className="text-3xl font-bold text-red-600">
                <Absent />
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;

