import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import getTheme from '../../Theme';

import { useFormik } from 'formik';

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

const ContactForm = ({ darkState }) => {

  const [formVisible, setFormVisibility] = useState(true)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: values => {
      setFormVisibility(false)
      const res = postData(process.env.REACT_APP_AWS_GATEWAY_URL, values)
        if (res.status === 200) {
          setFormVisibility(false)
          return res
        } else {
          return res
        }
      },
    })

  const paletteType = darkState ? 'dark' : 'light';
  const theme = getTheme(paletteType, 'default');
  let backgroundColor = darkState ? theme.palette.primary.dark : theme.palette.primary.light;

  return (
    <Fade in={true}>
      <Box sx={{
          flexGrow: 1,
          textAlign: 'center',
          marginTop: {
            xs: '10vh',
            sm: '20vh',
          },
        }}
      >
        {formVisible &&
        <div> 
          <form
            onSubmit={formik.handleSubmit}
            noValidate
            autoComplete="off"
          >
            <Grid
              container
              direction="row"
              alignItems="center"
            >
              <Grid item xs={12}>
                <TextField
                  id="name"
                  sx={{
                    width: {
                      xs: '50%',
                      sm: '75%',
                    },
                    marginBottom: {
                      xs: theme.spacing(2),
                      sm: theme.spacing(5),
                    },
                  }}
                  variant="filled"
                  label="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : <div><p></p></div>}
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    sx={{
                      width: {
                        xs: '50%',
                        sm: '75%',
                      },
                      marginBottom: {
                        xs: theme.spacing(2),
                        sm: theme.spacing(5),
                      },
                    }}
                    variant="filled"
                    label="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : <div><p></p></div>}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={12}>
                <TextField
                  id="message"
                  sx={{
                    marginBottom: {
                      xs: 5,
                      sm: 15,
                    },
                    width: {
                      xs: '50%',
                      sm: '75%',
                    },
                  }}
                  label="Message"
                  variant="filled"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  multiline
                  rows={2}
                />
              {formik.touched.message && formik.errors.message ? (<div>{formik.errors.message}</div>) : <div><p></p></div>}
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item xs={6}>
                <div sx={{
                    marginBottom: {
                      xs: 3,
                    }
                  }}
                >
                  <Button
                    type="submit"
                    variant="outlined"
                    color="secondary"
                    size="medium"
                  >
                    <Typography
                      sx={{
                        fontSize: 12,
                        padding: 0.5,
                      }}
                      color="textSecondary"
                    >
                      Send
                    </Typography>
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
        }
        {!formVisible &&
        <Grid
          sx={{
            marginTop: {
              xs: '30vh',
            },
            marginBottom: '30vh',
          }}
          container
          direction="column"
        >
          <Grid item>
            <Typography
            sx={{
              marginTop: {
                xs: '30vh',
              },
              marginBottom: '30vh',
            }}
              color="textSecondary"
              variant="h5"
            >
              Message Sent!
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{padding: 5}}
              color="textSecondary"
              variant="body1">
                Thank you! I will get back to you as soon as possible.
            </Typography>
          </Grid>
        </Grid>
        }
      </Box>
    </Fade>
  );
};

export default ContactForm;