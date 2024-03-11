import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const ReleatedBooksTopics = () => {
    return (
        <div>
            <Grid >
                <Grid item xs={12} md={8} sm={4} >
                    <Stack direction="column" gap={2}>
                        <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>
                            Related Books
                        </Typography>
                        <Typography variant="body1" >
                            ● Bhagvad Gita-As it is By Srila<br />
                            &nbsp;&nbsp;&nbsp;Prabhupad
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                        ● Bhagvad Gita-As it is By Srila<br />
                            &nbsp;&nbsp;&nbsp;Prabhupad
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                        ● Bhagvad Gita-As it is By Srila<br />
                            &nbsp;&nbsp;&nbsp;Prabhupad
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                        ● Bhagvad Gita-As it is By Srila<br />
                            &nbsp;&nbsp;&nbsp;Prabhupad
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                        ● Bhagvad Gita-As it is By Srila<br />
                            &nbsp;&nbsp;&nbsp;Prabhupad
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default ReleatedBooksTopics
