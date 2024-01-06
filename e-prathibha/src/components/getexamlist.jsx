import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./getexamlist.css";
import Sidebar from './sidebar'; 
import { useNavigate } from 'react-router-dom';

function Getexamlist() {
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState([]);
  const [Id, setId] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  const id = sessionStorage.getItem("id");
  const server_key = "3w99V63pW7tJ7vavGXtCKo8cp";  
  const tokenu = sessionStorage.getItem("tokenu");

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      const apiUrl = 'https://e-prathibha.com/apis/test_free_exam';
      const headers = {
        'id': id,
        'server_key': server_key,
        'tokenu': tokenu
      };

      axios.post(apiUrl, {}, { headers })
        .then((response) => setResponseData(response.data))
        .catch((error) => {
          console.error("Error fetching exam data:", error);
        });
    }
  }, [id, server_key, tokenu, isMounted]);

  const Handlenavigateyear = (examId) => {
    setId(examId);
    sessionStorage.setItem("examId", examId);
    navigate(`/getquestionlist/${examId}`);
  };

  const RenderPapers = () => {
    if (responseData.status === 200) {
      return (
        <div className="exam-grid">
          {responseData.data.exams.map((exam, index) => {
            const className = Object.keys(exam)[0];
            const paperData = exam[className];

            return (
              <div key={index} className="exam-card" style={{ backgroundImage: `url(${paperData[0].Exam.background_image_url})` }}>
                <h4>{className}</h4>
                <span>{Id}</span>
                <ul>
                  {paperData.map((paper, paperIndex) => (
                    <li  key={paperIndex}>
                      <div className="card">
                        <div className="card-body" style={{ backgroundImage: `url(https://th.bing.com/th/id/OIP.xDUSmjxyAJ2k0yPKDA77cQHaEZ?w=261&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7)` }}>
                          <h5 className="card-title" style={{ color: "red", fontSize: "x-large" }}>{paper.Exam.name}</h5>
                          <button className="btn btn-primary" onClick={() => Handlenavigateyear(paper.Exam.id)}>
                            Start Exam
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      );
    }
  };

  const handleLogoClick = () => {
    console.log('Logo clicked');
  };

  return (
    <div className="main-container">
      <Sidebar onLogoClick={handleLogoClick} />

      <div className="content-container">
        {RenderPapers()}
      </div>
    </div>
  );
}
export default Getexamlist