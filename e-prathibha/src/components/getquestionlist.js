import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const QuestionsList = () => {
  const navigate = useNavigate();  
  const [questionsdata, setQuestionsData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(7200); // 7200 seconds = 120 minutes

  const id = sessionStorage.getItem("id");
  const server_key = sessionStorage.getItem("server_key");
  const tokenu = sessionStorage.getItem("tokenu");
  const examId = sessionStorage.getItem("examId");

  const headers = {
    'id': id,
    'server_key': server_key,
    'tokenu': tokenu,
  }
  const apiUrl = `https://e-prathibha.com/apis/start_exam?examId=${examId}`;

  useEffect(() => {
    if (examId && questionsdata.length === 0) {
      axios.get(apiUrl, { headers })
        .then((response) => {
          if (response.data.status === 200) {
            setQuestionsData(response.data.data.exam);
          }
        })
        .catch((error) => {
          console.error("Error fetching exam data:", error);
        });
    }
  }, [apiUrl, examId, headers, questionsdata]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(timerId);
          navigate("/finishexam");
          alert("Time's up! Exam submitted.");
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [navigate]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsdata.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinishExam = () => {
    navigate("/finishexam");
    alert("Are You Sure To Submit the Exam");
  };

  return (
    <div style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.3_Wib9alfZRud8lnb_ifYgHaFc?w=279&h=205&c=7&r=0&o=5&dpr=1.1&pid=1.7')`, backgroundSize: 'cover', minHeight: '100vh', position: 'relative' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, background: '#fff', padding: '10px', textAlign: 'center', zIndex: 1 }}>
        <h4>Time Left: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</h4>
      </div>
      {questionsdata.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '70%', padding: '20px', overflowY: 'auto' }}>
            {questionsdata[currentQuestionIndex].Question.question.above}
            {questionsdata[currentQuestionIndex].Question.Subject.explanation}
            <hr />
            <label>
              <input type="radio" name="options" id="option1" />
              {questionsdata[currentQuestionIndex].Question.option1}
            </label>
            <br />
            <label>
              <input type="radio" name="options" id="option2" />
              {questionsdata[currentQuestionIndex].Question.option2}
            </label>
            <br />
            <label>
              
              <input type="radio" name="options" id="option3" />
              {questionsdata[currentQuestionIndex].Question.option3}
            </label>
            <br />
            <label>
              <input type="radio" name="options" id="option4" />
              {questionsdata[currentQuestionIndex].Question.option4}
            </label>
            <hr />
          </div>
          <div style={{ width: '30%', overflowX: 'auto', padding: '10px', maxHeight: 'calc(100vh - 60px)' }}>
            <ol style={{ listStyleType: 'none', display: "flex", flexWrap: "wrap", alignItems: "center", padding: 10, margin: 0 }}>
              {questionsdata.map((_, index) => (
                <li key={index} style={{ marginRight: '10px', marginBottom: '10px', width: '15%' }}>
                  <button className={`btn btn-outline-info ${index === currentQuestionIndex ? 'active' : ''}`} onClick={() => setCurrentQuestionIndex(index)}>
                    {index + 1}
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <div style={{ width: '20%', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button className="btn btn-info btn-lg" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
              Previous Question
            </button>
            <button className="btn btn-info btn-lg" onClick={handleNextQuestion} disabled={currentQuestionIndex === questionsdata.length - 1}>
              Next Question
            </button>
            <button className="btn btn-info btn-lg" onClick={handleFinishExam} style={{ marginTop: '20px' }}>
              Finish Exam
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionsList;
