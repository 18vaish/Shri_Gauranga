import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const TopicOne = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={8} sm={4} >
                    <Stack direction="column" sx={{}}>
                        <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Times New Roman', marginLeft: '20px' }}>
                            Authors
                        </Typography>
                        <Typography variant="body1" >
                            Srila Bhaktisiddhanta
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            A.C. Bhaktivedanta
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            S Srila B.R. Sridhara Deva
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            Srila B.G. Narasingha
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            Srila Bhakti Kiśora A
                            Dhiralalita Dasi
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            Dhiralalita Dasi
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default TopicOne
