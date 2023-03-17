import React, { useState } from 'react';
// import { Router } from 'react-router-dom'
import { Route, HashRouter } from 'react-router-dom';

import Landing from '../Landing';
import Aadmin from '../Admin';
// import Password from "../password"
import CheckRuslt from '../CheckRuslt';
// import Landing from "../Landing"
import ShowData from '../ShowData';
import Record from '../Record';
import NameId from '../NameId';

function Rounting() {
  // Password-page
  const [inputvalue, setpass] = useState('');

  const inputval = (e) => {
    setpass(e.target.value);
  };
  console.log(inputvalue);

  // NameId Page
  const [studentR, setstr] = useState('');

  const StudentRollNumber = (e) => {
    setstr(e.target.value);
  };
  console.log(studentR);
  //  St Roll
  const [studentR2, setstr2] = useState('');

  const StudentRollNumber2 = (e) => {
    setstr2(e.target.value);
  };
  console.log(studentR2);
  //  Push Data Student Name and id

  const [mian_obj, setobj] = useState([]);
  const BtnClick = () => {
    alert('Hii!');
    let NewArr = mian_obj;
    let obj = { Student: studentR, StudentId: studentR2 };
    NewArr.push(obj);
    setobj(NewArr);
  };
  console.log(mian_obj);
  //  record Marks-Shett

  const [English, setEnglish] = useState('');
  const inpt1 = (e) => {
    setEnglish(e.target.value);
  };
  console.log(English);

  const [Urdu, setUrdu] = useState('');
  const inpt2 = (e) => {
    setUrdu(e.target.value);
  };
  console.log(Urdu);

  const [Math, setMath] = useState('');
  const inpt3 = (e) => {
    setMath(e.target.value);
  };

  console.log(Math);

  const [Pak, setPak] = useState('');
  const inpt4 = (e) => {
    setPak(e.target.value);
  };

  console.log(Pak);

  const [Com, setCom] = useState('');
  const inpt5 = (e) => {
    setCom(e.target.value);
  };
  console.log(Com);

  const save = () => {
    alert('Hii!');
    //  console.log(save);
    let NewArr = mian_obj;
    let obj = NewArr.pop();
    //  console.log(obj,"poded")
    obj = { ...obj, English, Urdu, Math, Pak, Com };

    console.log(obj);
    NewArr.push(obj);
    setobj(NewArr);

    console.log(NewArr, 'update');
  };

  // CheckRuslt
  const [Roll, setRoll] = useState('');
  const EnterVal = (e) => {
    setRoll(e.target.value);
  };
  console.log(Roll);

  // button func

  const btn = () => {
    // alert("Hii!")
    let filterData = mian_obj.filter((obj) => {
      return obj.StudentId.includes(Roll);
    });
    console.log(filterData);
  };

  return (
    <HashRouter basename="/">
      <div>
        <Route exact path="/" component={Landing}></Route>

        {/* Password-page */}
        <Route path="/adminpage">
          <Aadmin Adfuc={inputval} a={inputvalue} />
        </Route>
        {/* StudentRollNumber */}

        <Route path="/NameId">
          <NameId
            stN={StudentRollNumber}
            stN2={StudentRollNumber2}
            BntAlrt={BtnClick}
          />
        </Route>
        {/* Record */}
        <Route path="/Record">
          <Record
            eng={inpt1}
            urd={inpt2}
            math={inpt3}
            pak={inpt4}
            com={inpt5}
            b={save}
          />
        </Route>

        <Route path="/CheckRuslt">
          <CheckRuslt chec={EnterVal} ba={btn} />
        </Route>
        <Route path="/ShowData" component={ShowData}></Route>
      </div>
    </HashRouter>
  );
}

export default Rounting;
