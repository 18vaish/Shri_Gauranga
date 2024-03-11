"use client"
import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const SideComponent = () => {
    return (
        <div>
            <Grid >
                <Grid item xs={12} md={4} >
                    <Stack direction="column" spacing={-0.5} sx={{ pl: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontFamily: "cursive", }}>
                            Topics
                        </Typography>
                        <Typography variant="body1" >
                            o Parivāra Āṅgana
                        </Typography>
                        <Typography variant="body1"  >
                            o Nāṭaka Mañca
                        </Typography>
                        <Typography variant="body1"  >
                            o Gou Sevā
                        </Typography>
                        <Typography variant="body1" >
                            o Paśu Rakṣ
                        </Typography>
                        <Typography variant="body1"  >
                            o Utsava Maṅḍalī
                        </Typography>
                        <Typography variant="body1" >
                            o Gou Sevā
                        </Typography>
                        <Typography variant="body1" >
                            o Nāṭaka Mañca
                        </Typography>
                        <Typography variant="body1" >
                            o Khela
                        </Typography>
                        <Typography variant="body1" >
                            o Yuvā Śakti
                        </Typography>
                        <Typography variant="body1" >
                            o Gurukula
                        </Typography>
                        <Typography variant="body1" >
                            o Śiśu Maṅgal
                        </Typography>
                        <Typography variant="body1" >
                            o Bāla Vikāsa
                        </Typography>
                        <Typography variant="body1" >
                            o Bālikā Praśikṣaṇa
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default SideComponent

