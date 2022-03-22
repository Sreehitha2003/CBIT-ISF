import React from "react";
import "./mid.css";
import Cards from "./cards";
import Navbar from "./Navbar";

const Middle = () => {
    return(
    <>
    <Navbar/>
    <div class="Whole">
        <h1 class="about" >About</h1>
        <div class="colour">
        <h2 class="heading ">IETE</h2>
        <p class="para ">The Institution of Electronics and Telecommunication Engineers (IETE) is India's leading recognized professional society devoted to the advancement of Science and Technology of Electronics, Telecommunication and IT. Founded in 1953. The IETE is the National Apex Professional body of Electronics and Telecommunication, Computer Science and IT Professionals. It serves more than 1,25,000 members (including Corporate, Student and ISF members) through various 63 Centres, spread all over India and abroad. The Institution provides leadership in Scientific and Technical areas of direct importance to the national development and economy. Government of India has recognised IETE as a <a href="https://www.iete.org/Recognition%20SIRO.pdf">Scientific and Industrial Research Organization (SIRO)</a> and also notified as an educational Institution of national eminence. The objectives of IETE focus on advancing electro-technology. The IETE conducts and sponsors technical meetings, conferences, symposia, and exhibitions all over India, publishes technical journals and provides continuing education as well as career advancement opportunities to its members.</p>
        </div>
        <h2 class="heading">ISF</h2>
        <p class="para">The Institution of Electronics and Telecommunication Engineers (IETE) founded in 1953 is one of the leading Professional Society in India. With the great vision of founder and subsequent forefathers and stalwarts who were leading light of the Institution IETE, have been devoting and contributing for the advancement of Science and Technology in the fields of Electronics, Communication Engineering, Computer Science, Information Technology and other related subjects. The major focus of IETE is to provide engineering education i.e. Degree and Diploma level certifications to younger generation at affordable cost who can not afford it through regular & private engineering institutions at exorbitant cost. IETE has got two streams of Student base. First wing is the students of alma-mater , IETE , viz, the pass outs of DIPIETE , AMIETE and ALCCS students . For them we have an Alumni Association formed in 2013 and the Second one is the Engineering students studying in Engineering Colleges and Polytechnics across the Country. This wing is the ISF ( IETE Students Forum ). More than 550 live ISFs are functioning in India today with a student membership of more than 60,000.</p>
    <div class="points">
        <h3 class="heading">Objectives</h3>
        <Cards/>
    </div>
        <h3 class="heading">Activities</h3>
        <ul class="p-4 list">
            <li>To plan, organize Technical Programs, Special Lectures, Workshops, Seminars Symposia, exhibitions for the benefit of students.</li>
            <li>To provide common platform for students to exchange of ideas in technical topics of interest, e.g., curriculum, employment, higher educational opportunities, emerging trends, etc.</li>
            <li>To facilitate technical visits, project works, employment, contact with industries and academic institutions.</li>
            <li>Encourage team spirit and self reliance among student members.</li>
            <li>ISFs should be a catalyst for the overall growth in technical and professional skills in young students. </li>
        </ul>
        <div class="enroll">
        <h4 >Enroll here</h4>
        <p class="px-4 m-1">Pay the enrollment fee</p>
        <button class="button">Pay here</button>
        <p class="p-1 m-1">Fill the application form along with Fee Payment Receipt</p>
        <button class="button" href="https://docs.google.com/forms/d/e/1FAIpQLSf8MttmmA0JwrKYx-_wMJEDA3OF6nLF0AoexJBJ8GMTkLfjYw/closedform">Apply here</button>
        </div>
    </div>
        </>
    );  
};

export default Middle;