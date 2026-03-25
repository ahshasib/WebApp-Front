import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskArea = () => {
  const [earnings, setEarnings] = useState({
    today: 0,
    yesterday: 0,
    week: 0,
    month: 0,
    total: 0,
  });

  const [taskCount, setTaskCount] = useState(0);
  const [canDoTask, setCanDoTask] = useState(true);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  // 🔥 fetch earnings
  const fetchEarnings = () => {
    axios
      .get("http://localhost:3000/api/earnings", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setEarnings(res.data))
      .catch((err) => console.log(err));
  };

  // 🔥 fetch task count
  const fetchTaskCount = () => {
    axios
      .get("http://localhost:3000/api/task-count", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTaskCount(res.data.count))
      .catch((err) => console.log(err));
  };

  // 🔥 initial load
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/task-status", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCanDoTask(res.data.canDoTask);
        setMessage(res.data.message || "");
      })
      .catch((err) => console.log(err));

    fetchEarnings();
    fetchTaskCount();
  }, [token]);

  // 🔥 auto refresh every 10 sec (optional pro feature)
  useEffect(() => {
    const interval = setInterval(() => {
      fetchEarnings();
      fetchTaskCount();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 handle task
  const handleTask = () => {
    if (!canDoTask || loading || taskCount >= 5) return;

    setLoading(true);

    axios
      .post(
        "http://localhost:3000/api/do-task",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setTaskCount(res.data.taskCount);
        setEarnings(res.data.earnings);
      })
      .catch((err) => {
        console.log(err.response?.data);
        if (err.response?.data?.message) {
          setMessage(err.response.data.message);
        }
      })
      .finally(() => setLoading(false));
  };

  const progress = (taskCount / 5) * 100;

  return (
    <div className="p-4 text-white">

      {/* 🔥 Slider */}
      <div className="overflow-hidden whitespace-nowrap mb-6">
        <div className="animate-marquee flex gap-4">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <img
              key={img}
              src={`/${img}.png`}
              className="h-32 rounded-lg"
              alt=""
            />
          ))}
        </div>
      </div>

      {/* 🔥 Earnings Section */}
      <div className="grid grid-cols-2 gap-4 mb-6 text-center">

        <div>
          <h3>Today</h3>
          <p>${earnings.today}</p>
        </div>

        <div>
          <h3>Yesterday</h3>
          <p>${earnings.yesterday}</p>
        </div>

        <div>
          <h3>This Week</h3>
          <p>${earnings.week}</p>
        </div>

        <div>
          <h3>This Month</h3>
          <p>${earnings.month}</p>
        </div>

        <div className="col-span-2">
          <h3>Total Revenue</h3>
          <p>${earnings.total}</p>
        </div>

      </div>

      {/* 🔥 Task Box */}
      <div className="text-center bg-gray-800 p-6 rounded-xl">

        {!canDoTask ? (
          <p className="text-red-400">{message}</p>
        ) : (
          <>
            <button
              onClick={handleTask}
              disabled={loading || taskCount >= 5}
              className="bg-green-500 px-6 py-2 rounded mb-4 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Start Task"}
            </button>

            {/* 🔥 Progress Bar */}
            <div className="w-full bg-gray-600 h-4 rounded">
              <div
                className="bg-green-500 h-4 rounded transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* 🔥 Task Count */}
            <p className="mt-2 text-sm text-gray-300">
              {taskCount} / 5 tasks completed
            </p>

            {/* 🔥 Limit Message */}
            {taskCount >= 5 && (
              <p className="text-yellow-400 mt-2">
                Daily limit reached (5 tasks)
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TaskArea;