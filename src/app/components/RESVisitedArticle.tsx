import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const RESVisitedArticle = () => {
    return (
        <div>
            <Grid >
                <Grid item xs={12} md={8} sm={4}>
                    <Stack direction="column" gap={2}>
                        <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>
                            Recently visited
                        </Typography>
                        <Typography variant="body1" >
                            ● Been the industry's standard <br />
                            &nbsp;&nbsp;&nbsp;dummy text ever since the <br />
                            &nbsp;&nbsp;&nbsp;1500s,
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            ● when an unknown printer took <br />
                            &nbsp;&nbsp;&nbsp; galley of type and scrambled it <br /> 
                            &nbsp;&nbsp;&nbsp;to
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            ● make a type specimen book. It<br />
                            &nbsp;&nbsp;&nbsp; ha survived not only five<br />
                            &nbsp;&nbsp;&nbsp;centuries,
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            ● but also the leap into electronic<br />
                            &nbsp;&nbsp;&nbsp;typesetting, remaining
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            ● unchanged. It was popularised<br />
                            &nbsp;&nbsp;&nbsp;tessentially
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default RESVisitedArticle;
