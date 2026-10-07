
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "./StudentSlice";
import { useNavigate } from "react-router-dom";

const Addstudent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    id: Date.now(),
    attaindence: null,
  });

  function changeHandle(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function submitForm(e) {
    e.preventDefault();

    dispatch(addStudent(form));
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <form
        onSubmit={submitForm}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
      >
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Add Student
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            Enter the student details below
          </p>
        </div>

        {/* Name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Student Name
          </label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter student name"
            onChange={changeHandle}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Email
          </label>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter student email"
            onChange={changeHandle}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          />
        </div>

        {/* Course */}
        <div className="mb-5">
          <label
            htmlFor="cource"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Course
          </label>

          <select
            name="cource"
            id="cource"
            onChange={changeHandle}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          >
            <option value="react">React</option>
            <option value="next-js">Next.js</option>
            <option value="monglodb">MongoDB</option>
          </select>
        </div>

        {/* Marks */}
        <div className="mb-7">
          <label
            htmlFor="marks"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Marks
          </label>

          <input
            type="text"
            name="marks"
            id="marks"
            placeholder="Enter marks"
            onChange={changeHandle}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="w-1/2 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-1/2 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addstudent
