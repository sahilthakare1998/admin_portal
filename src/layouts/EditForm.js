import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import { useState } from 'react';

const EditForm = (props) => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required').default('John Doe'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    // console.log(JSON.stringify(data, null, 2));
    props.editDetails(data)
  };

  useState(()=>{
    console.log(props.dataList)
  },[])
  return (
    <Fragment>

      <Paper>
        <Box px={5} py={3}>
          <Typography variant="h6" align="center" margin="dense">
            Edit Employee Details
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                id="fullname"
                name="fullname"
                label="Full Name"
                fullWidth
                margin="dense"
                {...register('fullname')}
                error={errors.fullname ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.fullname?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="username"
                name="username"
                label="Username"
                fullWidth
                margin="dense"
                {...register('username')}
                error={errors.username ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.username?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                name="email"
                label="Email"
                fullWidth
                margin="dense"
                {...register('email')}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
              role="button"
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
};

export default EditForm;
