import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const PendingWithdraw = () => {
  const [requests, setRequests] = useState([]);

  const fetchPending = async () => {
    const res = await axios.get("http://localhost:3000/withdrawal/pending");
    setRequests(res.data);
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const handleConfirm = async (id) => {
    try {
      const res = await axios.post(`http://localhost:3000/withdrawal/confirm/${id}`);
      Swal.fire("Success", res.data.message, "success");
      fetchPending(); // refresh list
    } catch (err) {
      Swal.fire("Error", err.response?.data?.message || err.message, "error");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Pending Withdrawals</h1>
      {requests.length === 0 ? (
        <p>No pending requests</p>
      ) : (
        <div className="space-y-3">
          {requests.map((req) => (
            <div key={req._id} className="bg-white p-3 rounded shadow flex justify-between items-center">
              <div>
                <p>User: {req.userId}</p>
                <p>Amount: {req.amount}</p>
              </div>
              <button
                onClick={() => handleConfirm(req._id)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Confirm
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PendingWithdraw;