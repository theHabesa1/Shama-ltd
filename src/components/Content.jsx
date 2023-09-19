import React from 'react'
import {  
    Grid, 
    Typography,
    IconButton,
    Card,
    CardContent,
} from "@mui/material";
// icons
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NewspaperIcon from '@mui/icons-material/Newspaper';
// components
import Title from './Title'
import Paragraph from './Paragraph'


const Content = () => {
  return (    
        <Grid container spacing={0}   
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            py: 10,
            px: 2,
        }}
        >
            <Grid item xs={12} sm={12} md={5}
            component = 'section'
            >
                <Title
                text={
                    'What we are offering?'
                }
                textAlign={'start'}
                />

                <Typography 
                variant='h6'
                component='h4' 
                sx = {{
                    fontWeight: '400',
                    paddingTop: 1,
                }}
                >
                    Property facilities
                </Typography>

                <Paragraph 
                text={
                    ' We work with more than 100+ clients\
                    and our customers trust on out quality\
                    product and trust own our product.'
                }
                maxWidth = {'75%'}
                mx={0}
                textAlign={'start'}
                />
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid #ccc',
                }}>
                    <CardContent>
                        <IconButton>
                            <MenuBookIcon 
                            fontSize="large"
                            color="primary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Digital menu
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc'
                }}>
                    <CardContent>
                        <IconButton>
                            <SettingsSystemDaydreamIcon 
                            fontSize="large"
                            color="primary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        ERP system
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={2}
            sx={{
                display: {xs: 'none', sm: 'block'},
            }}  
            >
                <Card 
                square={ true }
                sx={{ 
                    boxShadow: 'none',
                    minHeight: 180,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    <CardContent>
                        <ArrowCircleRightRoundedIcon
                        fontSize="large"
                        color="primary" />
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>    
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc'
                }}>
                    <CardContent>
                        <IconButton>
                            <NewspaperIcon
                            fontSize="large"
                            color="primary" />
                        </IconButton>
                        <a href="https://gazettaa.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
    <Typography 
        variant="h5" 
        component="p"
        sx={{
            fontWeight: 700,
            textTransform: 'capitalize',
        }}
    >
        Gazetta.com
    </Typography>
</a>

                    </CardContent>
                </Card>
            </Grid>

            {/* <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',                    
                    border: '1px solid #ccc',
                }}
                >
                    <CardContent>
                        <IconButton>
                            <PoolOutlinedIcon 
                            fontSize="large"
                            color="primary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        swimming pool
                        </Typography>
                    </CardContent>
                </Card>
            </Grid> */}

            {/* <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc',
                }}>
                    <CardContent>
                        <IconButton>
                            <WifiPasswordIcon
                            fontSize="large"
                            color="primary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Internet
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>  */}
        </Grid>
    );
}

export default Content