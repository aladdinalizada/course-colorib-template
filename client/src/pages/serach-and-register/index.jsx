import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SearchRegister = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div>
      <div className="searchRegister">
        <div className="container">
          <div className="left">
            <div className="context">
              <h3>
                Register now and get a discount <span>50%</span> discount until
                1 January
              </h3>
              <p>
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante
                nisl fermentum nulla, vitae tempo.
              </p>
              <button>
                <Link>REGISTER NOW</Link>
              </button>
            </div>
          </div>
          <div className="right">
            <div className="context">
              <div className="search">
                <h4>Search for your course</h4>
                <Formik
                  initialValues={{
                    firstName: "Aladdin Alizada",
                    lastName: "Cyber Security",
                    email: "Bachelor Degree",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Field name="firstName" defaultValue="Course Name" />
                      {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                      ) : null}
                      <Field name="lastName" />
                      {errors.lastName && touched.lastName ? (
                        <div>{errors.lastName}</div>
                      ) : null}
                      <Field name="email" type="email" />
                      {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                      ) : null}
                      <button type="submit">Submit</button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //  <input
    //           type="text"
    //           placeholder="Course Name"
    //           value="Aladdin Alizada"
    //         />
    //         <input
    //           type="text"
    //           placeholder="Category"
    //           value="Cyber Security"
    //         />
    //         <input
    //           type="text"
    //           placeholder="Degree"
    //           value="Bachelor Degree"
    //         />
    //         <button>
    //           <Link>SEARCH COURSE</Link>
    //         </button>
  );
};

export default SearchRegister;
