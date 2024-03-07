import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const TopicTwo = () => {
    return (
        <div>
            <Grid >
                <Grid item xs={12} md={8} sm={4} >
                    <Stack direction="column" sx={{}}>
                        <Typography variant="h6" sx={{ marginLeft: '20px', marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>
                            Similar Topics
                        </Typography>
                        <Typography variant="body1" >
                                    Been the industry's standard <br />
                                    dummy text ever since the 1500s,
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                                    when an unknown printer took <br /> galley of type and scrambled it to
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                                    make a type specimen book. It<br /> ha survived not only five centuries,
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                                    but also the leap into electronic<br />  typesetting, remaining
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                                    unchanged. It was popularised<br />  tessentially
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default TopicTwo
