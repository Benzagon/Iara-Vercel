import React from "react";
import { useEffect, useContext, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useImages } from "./hooks/useImages";
import DeleteIcon from '@mui/icons-material/Delete';
import './components/AllPatients.css';
import SearchIcon from '@mui/icons-material/Search';


const AllPatients = () => {
  const [active, setActive] = useState(false)
  const navigate = useNavigate();
  const { loadPatients, deletePatient, patients, createPatient, getPatientsBySearch } = useImages()
  useEffect(() => {
    loadPatients();
  }, []);

  /*const [search, setSearch] = useState('');

  const SearchPatient = () => {
    if(search.trim()){
      console.log(search)
      getPatientsBySearch(search)
    }
  }
  */

  console.log(patients);
  if (patients.length === 0)
    return (
      <div className="main_container">
      <Navbar active={active} current="Pacientes"/>
      <div className="primary_container">
        <div
          className="banner"
          onClick={(e) => {
            setActive(!active);
          }}
        >
          <h1>Bienvenido Dr. Rizzo</h1>
          <p>Nuestra mision es ayudarte</p>
        </div>
        <h1>Todavía no hay paciente subidos</h1>
        </div>
      </div>
    );
  return (
    <div className="main_container">
      <Navbar active={active} current="Pacientes"/>
      <div className="primary_container">
      <div
          className="banner"
          onClick={(e) => {
            setActive(!active);
          }}
        >
          <h1>Bienvenido Dr. Rizzo</h1>
          <p>Nuestra mision es ayudarte</p>
        </div>
      <h2>Todos los pacientes</h2>
      {/* <input type="text" onChange={(e) => setSearch(e.target.value)}/> */}
      {/* <SearchIcon className="btn_search" onClick={SearchPatient}></SearchIcon> */}
      <div className="tablaWrapper">
        <div className="table-wrapper">
      <table className="tabla">
        <thead>
          <tr>
            <th>DNI</th>
            <th>Ultima Modificacion</th>
          </tr>
        </thead>
        {patients.map((patient) => (
          <tr key={patient.id}>
            <td><a href={"/AddRadiography/" + patient.id }>{patient.DNI}</a></td>
            <td><a href={"/AddRadiography/" + patient.id }>{patient.createdAt} </a></td>
            <td><DeleteIcon onClick={() => deletePatient(patient.id)} className="btn_delete" >Delete</DeleteIcon></td>
          </tr>

))}
      </table>
      </div>
      <div className="formik_wrapper">
      <Formik
        initialValues={{
          DNI: "",
        }}
        validationSchema={Yup.object({
          DNI: Yup.number().required("El dni es requerido"),
        })}
        onSubmit={(values, actions) => {
          console.log(values);
          createPatient(values);
        }}
        >
        {({ handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <label>DNI</label>
            <Field name="DNI" placeholder="dni"></Field>
            <ErrorMessage name="DNI" />
            <button type="submit">Guardar</button>
          </Form>
        )}
      </Formik>
        </div>

      </div>
        </div>
    </div>
  );
};

export default AllPatients;
