import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/roundtables-1.gif'

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '65vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),  
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: '#fff',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Typography
  variant='h2'
  component='h1'
  sx={{
    fontWeight: 700,
    color: '#233982',
  }}
>
  The past<br />
  The present<br />
  The future!
</Typography>


                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#233982',
                }}
                >
                    We have 9000 more review and our customers
                    trust on out property and quality products.
                </Typography>

                <Box>
                    <Button 
                    variant='contained'
                    component={Link} 
                    to={'/about'}
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#14192d',
                        color: '#fff',
                        backgroundColor: '#233982',
                        "&&:hover": {
                            backgroundColor: "#343a55"
                        },
                        "&&:focus": {
                            backgroundColor: "#343a55"
                        }
                    }}
                    >
                        Explore !
                    </Button>
                    <Button 
                    component={Link} 
                    to={'/about'}
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        color: '#233982',
                        backgroundColor: 'transparent',
                        borderColor: '#233982',
                        "&&:hover": {
                            color: '#233982',
                            borderColor: '#233982',
                        },
                        "&&:focus": {
                            color: '#343a55',
                            borderColor: '#233982',
                        }
                    }}
                    >
                        Lets Talk !
                    </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '10px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                src={headerImg}
                alt="headerImg"
                style={{ 
                    width: "90%", 
    
                    paddingLeft:"100px",
                    paddingTop:"-150px",
                    marginTop:"-1000000px"

                }}
                />
            </Box>

        </CustomBox>
    )
}

export default Header