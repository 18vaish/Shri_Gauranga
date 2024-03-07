import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const RESVisited = () => {
    return (
        <div>
            <Grid >
                <Grid item xs={12} md={8} sm={4} ml={5}>
                    <Stack direction="column">
                        <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Times New Roman', marginLeft: '20px' }}>
                            Recently visited
                        </Typography>
                        <Typography variant="body1" >
                            <ul>
                                <li>
                                    Bhagvad Gita-As it is By Srila <br /> Prabhupad
                                </li>
                            </ul>
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            <ul>
                                <li>
                                    Bhagvad Gita-As it is By Srila <br /> Prabhupad
                                </li>
                            </ul>
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            <ul>
                                <li>
                                    Bhagvad Gita-As it is By Srila <br /> Prabhupad
                                </li>
                            </ul>
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            <ul>
                                <li>
                                    Bhagvad Gita-As it is By Srila <br /> Prabhupad
                                </li>
                            </ul>
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            <ul>
                                <li>
                                    Bhagvad Gita-As it is By Srila <br /> Prabhupad
                                </li>
                            </ul>
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default RESVisited
