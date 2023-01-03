import React, { useEffect } from "react";
import {Link as RouterLink} from "react-router-dom";

// material-ui
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

// third party
import {Formik} from "formik";
import * as Yup from "yup";

// project import
import AnimateButton from "components/@extended/AnimateButton";

// assets
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import {connect, useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {CallLogin, cleanMessage, login} from "./reducer/loginReducer";
import toastifyAlert from './../../../components/SnackBar/toastifyAlert';
import { compose } from "../../../../node_modules/@reduxjs/toolkit/dist/index";
import { MESSAGE } from "utils/constants";
import Loading from "components/Loading/index";

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = (props) => {
    const {onCleanup,onLogin} = props;
  // const dispatch = useDispatch();
  const loginStore = useSelector((state) => state.loginReducer);
  const [checked, setChecked] = React.useState(false);
  let navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

      console.log(loginStore);
  useEffect(() => {
    if(loginStore.isSuccess){
        toastifyAlert.success(MESSAGE.SUCCES)
        onCleanup();
         navigate("/dashboard/default");
    }else if(loginStore.isSuccess == false){
        // const errMess = loginStore.message.error_description
        toastifyAlert.error(MESSAGE.ERROR)
        onCleanup();
    }
  },[loginStore.isSuccess])

  return (
    <>
      <Formik
        initialValues={{
          username: "CMT_0123456789",
          password: "client_secret",
          client_secret: "client_secret",
          client_id: "023",
          profile_id: "adss:ras:profile:001",
          // submit: null
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().max(255).required("Username is required"),
          password: Yup.string().max(255).required("Password is required"),
        })}
        onSubmit={async (values, {setErrors, setStatus, setSubmitting}) => {
          try {
            const valuesSub = {
              user_id: values.username,
              client_secret: values.password,
              client_id: values.client_id,
              profile_id: values.profile_id,
            };
            onLogin(valuesSub);
           
            // setStatus({success: true});
            // setSubmitting(true);
        } catch (err) {
            console.log("err",err);
            // setStatus({success: false});
            // setErrors({submit: err.message});
            // setSubmitting(false);
        }
       
          // window.location.href = `/dashboard/default`;
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-login">Username</InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="text"
                    value={values.username}
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter username"
                    fullWidth
                    error={Boolean(touched.username && errors.username)}
                  />
                  {touched.username && errors.username && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-email-login"
                    >
                      {errors.username}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? (
                            <EyeOutlined />
                          ) : (
                            <EyeInvisibleOutlined />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter password"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} sx={{mt: -1}}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={
                      <Typography variant="h6">Keep me sign in</Typography>
                    }
                  />
                  <Link
                    variant="h6"
                    component={RouterLink}
                    to=""
                    color="text.primary"
                  >
                    Forgot Password?
                  </Link>
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={loginStore.loading}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Login
                  </Button>
                </AnimateButton>
              </Grid>
              {/* <Grid item xs={12}>
                                <Divider>
                                    <Typography variant="caption"> Login with</Typography>
                                </Divider>
                            </Grid>
                            <Grid item xs={12}>
                                <FirebaseSocial />
                            </Grid> */}
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};


function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      onCleanup: () => dispatch(cleanMessage()),
      onLogin: (data) => dispatch(login(data))
    };
  }

const withConnect = connect(
    null,
    mapDispatchToProps,
  );

export default compose(withConnect)(AuthLogin);
