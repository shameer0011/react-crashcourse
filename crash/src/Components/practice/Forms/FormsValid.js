import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid, Input, makeStyles, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { add_Forms } from "../Redux/Action/FormAction";
export const FormsValid = () => {
  const SelectForm = useSelector((state) => state.form_store.forms);
  console.log(SelectForm, "hooi");
  const useClass = makeStyles({
    root: {
      marginTop: 10,
      flexGrow: 1,
    },
  });
  const dispatch = useDispatch();
  const classes = useClass();
  const [image, setImage] = useState(null);

  const { handleSubmit, register, errors } = useForm();
  const [allValues, setallValues] = useState({});

  const onSubmit = (values) => {
    console.log(values, "haii");
    dispatch(add_Forms(values));
    setallValues(values);
    console.log("all values", allValues);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs sm={2} />
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              inputRef={register({ required: true })}
              error={errors.name ? true : false}
              size="medium"
              name="name"
              label="Name"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              inputRef={register({ required: true })}
              error={errors.place ? true : false}
              size="medium"
              name="place"
              label="place"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs sm={2} />
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              inputRef={register({ required: true })}
              error={errors.state ? true : false}
              size="medium"
              name="state"
              label="State"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              inputRef={register({ required: true })}
              error={errors.city ? true : false}
              size="medium"
              name="city"
              label="City"
              variant="outlined"
            />
          </Grid>
          <Grid item xs sm={2} />
          <Grid item xs={12} sm={4}>
            <input
              ref={register}
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              variant="contained"
              color="primary"
            />
          </Grid>
          <Button fullWidth type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Grid>
      </form>
    </div>
  );
};
