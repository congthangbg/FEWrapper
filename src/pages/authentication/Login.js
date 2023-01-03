import {Link} from "react-router-dom";

// material-ui
import {Grid, Stack, Typography} from "@mui/material";

// project import
import AuthLogin from "./auth-forms/AuthLogin";
import AuthWrapper from "./AuthWrapper";
import Loading from "components/Loading/index";
import {useSelector} from "react-redux";

// ================================|| LOGIN ||================================ //

// const Login = () =>
//     {loginStore.loading == true ? <Loading/>  :
//      (
//         <AuthWrapper>
//         <Grid container spacing={3}>
//             <Grid item xs={12}>
//                 <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
//                     <Typography variant="h3">Login</Typography>
//                     <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
//                         Don&apos;t have an account?
//                     </Typography>
//                 </Stack>
//             </Grid>
//             <Grid item xs={12}>
//                 <AuthLogin />
//             </Grid>
//         </Grid>
//     </AuthWrapper>
// )
// }
// ;

// export default Login;
export default function Login(props) {
  const loginStore = useSelector((state) => state.loginReducer);
  return (
    <div>
      <AuthWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          {loginStore.loading == true ? (
                <Loading />
              ) : (
                <>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              sx={{mb: {xs: -0.5, sm: 0.5}}}
            >
                  <Typography variant="h3">Login</Typography>
                  <Typography
                    component={Link}
                    to="/register"
                    variant="body1"
                    sx={{textDecoration: "none"}}
                    color="primary"
                  >
                    Don&apos;t have an account?
                  </Typography>
              
            </Stack>
              </>
              )}
          </Grid>
          <Grid item xs={12}>
            <AuthLogin />
          </Grid>
        </Grid>
      </AuthWrapper>
    </div>
  );
}
