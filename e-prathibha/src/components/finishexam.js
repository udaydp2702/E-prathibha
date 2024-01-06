import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const FinishExams = () => {
  const examid = sessionStorage.getItem("examId");
  const UserId = sessionStorage.getItem("Id");
  const tokenu = sessionStorage.getItem("tokenu");
  const body = {
    examId: examid,
    qno: 100,
  };

  const finishExam = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://e-prathibha.com/apis/finishExam",
        body,
        {
          headers: {
            Authorization: `Bearer ${tokenu}`,
            Id: UserId,
            server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
          },
        }
      );

      if (response.data.status === 200) {
        alert("Exam Finished");
      } else {
        alert("Successfully logout!");
      }
    } catch (error) {
      console.error("Error during exam finishing:", error);
    }
  };

  return (
    <div>
      <center>
        <div className="finalizeExam">
          <h1>Finalize Exam</h1>
          <h4>Do you wish to submit and close the Exam?</h4>
          <br />
          <div className="finishresultbtns">
            <Link to={"/login"}>
              <button id="finishbtn">Finish Exam</button>
            </Link>

            <Link to={"/getexamlist"}>
              <button id="cancelbtn">Cancel</button>
            </Link>
          </div>
        </div>
      </center>
    </div>
  );
};

export default FinishExams;
