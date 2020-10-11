import React, { useState } from "react"
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'

const useStyles = makeStyles((theme) => ({
  textFieldLayout: {
    marginLeft: theme.spacing(1),
  },
  textFieldFullWidthLayout: {
    width: '60%',
    marginLeft: '20%',
    marginRight: '20%',
  },
  submitButtonContainer: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
  },
  submitButton: {
    marginLeft: theme.spacing(60),
  }
}));

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length > 500) {
    errors.message = 'Must be 500 characters or less';
  }

  return errors;
};

const postData = async (url, data = {}) => {

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  return response.json();
}

const ContactForm = () => {
  const classes = useStyles()
  const [formVisible, setFormVisibility] = useState(true)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: values => {
      const res = postData(process.env.REACT_APP_AWS_GATEWAY_URL, values)
        if (res.status === 200) { // or whatever this needs to be
          setFormVisibility(false)
          return 'Success'
        } else {
          return 'Error'
        }
      },
    })

  return (
    <div>
    {formVisible ?
    <form
      onSubmit={formik.handleSubmit}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TextField
            id="name"
            className={classes.textFieldLayout}
            label="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            margin="normal"
          />
          {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : <div><p></p></div>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            className={classes.textFieldLayout}
            label="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            margin="normal"
          />
          {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : <div><p></p></div>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="message"
            className={classes.textFieldFullWidthLayout}
            label="Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            margin="normal"
            multiline
          />
        {formik.touched.message && formik.errors.message ? (<div>{formik.errors.message}</div>) : <div><p></p></div>}
        </Grid>
      </Grid>
      <div className={classes.submitButtonContainer}>
        <Button className={classes.submitButton} type="submit" variant="outlined" >Submit</Button>
      </div>
    </form>
    : <h3>Message Sent</h3> }
    </div>
  );
};

export default ContactForm;