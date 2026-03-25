import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskArea = () => {
  const [todayEarning, setTodayEarning] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [taskCount, setTaskCount] = useState(0);
  const [canDoTask, setCanDoTask] = useState(true);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  // 🔥 check task permission
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
  }, []);

  // 🔥 handle task click
  const handleTask = () => {
    if (!canDoTask) return;

    if (taskCount < 5) {
      setTaskCount(taskCount + 1);
      setTodayEarning(todayEarning + 5);
      setTotalBalance(totalBalance + 5);
    }
  };

  const progress = (taskCount / 5) * 100;

  return (
    <div className="p-4 text-white">

      {/* 🔥 Marquee Slider */}
      <div className="overflow-hidden whitespace-nowrap mb-6">
        <div className="animate-marquee flex gap-4">
          {[1,2,3,4,5,6].map((img) => (
            <img key={img} src={`/${img}.png`} className="h-32 rounded-lg" />
          ))}
        </div>
      </div>

      {/* 🔥 Earnings */}
      <div className="flex justify-between mb-6">
        <div>
          <h2>Today's Earnings</h2>
          <p>${todayEarning}</p>
        </div>

        <div>
          <h2>Total Balance</h2>
          <p>${totalBalance}</p>
        </div>
      </div>

      {/* 🔥 Task Box */}
      <div className="text-center bg-gray-800 p-6 rounded-xl">

        {/* ❌ expired হলে message */}
        {!canDoTask ? (
          <p className="text-red-400">{message}</p>
        ) : (
          <>
            <button
              onClick={handleTask}
              className="bg-green-500 px-6 py-2 rounded mb-4"
            >
              Start Task
            </button>

            {/* Progress bar */}
            <div className="w-full bg-gray-600 h-4 rounded">
              <div
                className="bg-green-500 h-4 rounded"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskArea;