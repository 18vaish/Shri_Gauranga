import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const TopicOne = () => {
    return (
        <div>
            <Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="column" spacing={-0.5} sx={{ pl: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontFamily: "cursive" }}>
                            Authors
                        </Typography>
                        <Typography variant="body1" >
                            o Srila Bhaktisiddhanta
                        </Typography>
                        <Typography variant="body1"  >
                            o A.C. Bhaktivedanta Swami
                        </Typography>
                        <Typography variant="body1"  >
                            o  Srila B.R. Sridhara Deva
                        </Typography>
                        <Typography variant="body1" >
                            o Srila B.P. Puri Mahārāja
                        </Typography>
                        <Typography variant="body1"  >
                            o Srila B.G. Narasingha
                        </Typography>
                        <Typography variant="body1" >
                            o Srila Bhakti Kiśora Aranya
                        </Typography>
                        <Typography variant="body1" >
                            o Dhiralalita Dasi
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default TopicOne
