// import Head from 'next/head';
// import NextLink from 'next/link';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useRouter } from 'next/router';

const NotFound = () => (
    <>
        <header>
            <title>404 | WRAPPER NOT FOUND</title>
        </header>
        <Box
            component="main"
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexGrow: 1,
                minHeight: '100%'
            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Typography align="center" color="textPrimary" variant="h1">
                        404: The page you are looking for isn’t here
                    </Typography>
                    <Typography align="center" color="textPrimary" variant="subtitle2">
                        You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation
                    </Typography>
                    {/* <Box sx={{ textAlign: 'center' }}>
                        <img
                            alt="Under development"
                            src="/src/assets/images/undraw_page_not_found_su7k.svg"
                            style={{
                                marginTop: 50,
                                display: 'inline-block',
                                maxWidth: '100%',
                                width: 560
                            }}
                        />
                    </Box> */}
                          <Link to="/dashboard/default" className="btn btn-outline-primary">
                          Go back to dashboard
                            </Link>
                </Box>
            </Container>
        </Box>
    </>
);

export default NotFound;
