import React from "react";
import key from "./key.png";
import free from "./free.png";
import { Button } from "react-bootstrap";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate("");

  return (
    <div>
      <nav className="navbar">
        <div className="background-image">
          <h1>
            Start with Fundamentals. Attempt, Practice, Review and Improve.
          </h1>
          <p>Civil Services/CDS/CISF/CAPF/NDA and other Competitive Exams.</p>
          <Button
            classname="btn"
            variant="Danger"
            onClick={() => navigate("/")}
          >
            Get Started Free
          </Button>
        </div>
      </nav>
      <h1 className="key">KEY FEATURES</h1>
      <center>
        
        <img src={key} alt="brand logo" height="700" width="700" />
      </center>
      <ol className="ul">
        <p>
          A. Civil Services or for that matter any competitive exam tests the
          fundamentals more than anything else.
        </p>
        <p>
          B. NCERT develops subject understanding in a systematic way. On the
          way many facts and data are presented.
        </p>
        <p>
          C. UPSC in its notification stresses a general understanding of the
          subjects. Fundamentals/Basics are important.
        </p>
        <p>
          D. The shifting emphasis on the depth of basics/subjects can be
          understood from past question papers.
        </p>
        <p>
          E. Learning through questions has been Indian way since vedic times as
          seen in Prashnopanishad. It reflects an interactive style where the
          student has worked out the question for himself before he is provided
          an answer.
        </p>
      </ol>
      <p className="para">
        <b> Dwell with me a year,</b>

        <p>
          <b>with Tapas, with Brahmacharya, with Sraddha (faith),</b>
        </p>
        <p>
          <b>Then ask what questions you will,</b>
        </p>
        <p>
          <b>If we know, we will tell you all</b>
        </p>
      </p>
      <div className="ul">
        <p>
          F. We have compiled an exhaustive question bank of all the subjects
          from 6th – 10th class NCERT. Almost 95% is covered.
        </p>
        <p>
          G. We have also Compiled 26 Years old question papers of Civil
          services Prelims exam and 6 Years old objective question papers of
          Engineering services exam, CDS, NDA, CAPF, CISF, Geo-Scientist (pre)
          and SO ( Departmental).
        </p>
        <p>
          H. Together these 16 thousand odd questions shall provide a solid
          understanding of basics.
        </p>
        <p>
          I. The interactive style is captured in the software, with the scope
          to book mark questions for later review and deeper contemplation. The
          time spent on each question is captured, that will give inputs to
          modify the preparation strategy.
        </p>
        <p>
          J. Focus: With book marking of questions, the time required for
          revision can be compressed to manageable levels. Time saved is time
          earned.
        </p>
      </div>
      <div class="cont">
        <img src={free} alt="webp" height={"300px"} className="img" />
        <div class="text">
          <h2>Free</h2>
          <p>
            UPSC is Unpredictable. But we can help you in a very small way to
            prepare smart!
          </p>
          <p>
            Get a sense of UPSC examination by practising previous years
            question papers and analyse your performance.
          </p>
          <p>
            .Get your papers evaluated and see where you stand in your journey
            for cracking UPSC examination this year
          </p>
          <p>A. 3 Years Old Question Paper Civil services (Prelims)</p>
          <p>
            B. Limited UPSC Old Question Papers ( CDS, Geo Scientists(Pre),
            CISF, CAPF, NDA, Engineering Services (Pre) and SO)
          </p>
          <p>
            C. Limited questions from Basics of School NCERT ( 6th to 10th
            Class)
          </p>
          <Button class="btnn" variant="Danger"  onClick={() => navigate("/login")}>
            SHOW PACKAGE
          </Button>
          &nbsp; &nbsp;
          <br />

        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
