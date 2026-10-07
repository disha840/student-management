
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { users } from "./UserSlics";

const Users = () => {
  const { loading, data, error } = useSelector((state) => state.users);

  const [sorted, setSorted] = useState(false);
  const [array, setArray] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(users());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white px-8 py-6 rounded-xl shadow-md">
          <p className="text-indigo-600 font-semibold text-lg">
            Loading users...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white px-8 py-6 rounded-xl shadow-md">
          <p className="text-red-500 font-semibold">
            {error}
          </p>
        </div>
      </div>
    );
  }

  function sortData() {
    const arr = [...data].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setArray(arr);
    setSorted(true);
  }

  const usersData = sorted ? array : data;

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Users
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              List of all registered users
            </p>
          </div>

          <button
            onClick={sortData}
            className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-sm"
          >
            Sort A-Z
          </button>

        </div>

        {/* Users Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          {/* Table Header */}
          <div className="bg-slate-800 px-6 py-4">
            <h2 className="text-white font-semibold">
              User List
            </h2>
          </div>

          {/* Users */}
          <div className="divide-y divide-slate-200">

            {usersData.length > 0 ? (
              usersData.map((val) => (
                <div
                  key={val.id}
                  className="flex items-center px-6 py-4 hover:bg-slate-50 transition"
                >

                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold mr-4">
                    {val.name?.charAt(0).toUpperCase()}
                  </div>

                  {/* Name */}
                  <div>
                    <p className="font-medium text-slate-800">
                      {val.name}
                    </p>

                    <p className="text-sm text-slate-500">
                      User ID: {val.id}
                    </p>
                  </div>

                </div>
              ))
            ) : (
              <div className="text-center py-10 text-slate-500">
                No users found
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Users;

