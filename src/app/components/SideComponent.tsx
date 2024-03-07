import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const SideComponent = () => {
    return (
        <div>
            <Grid >
                <Grid item xs={12} md={4} >
                    <Stack direction="column" spacing={-1} sx={{ pl: 5 }}>
                        <Typography variant="h4" sx={{ marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>
                            Topics
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Parivāra Āṅgana
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Nāṭaka Mañca
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Gou Sevā
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Paśu Rakṣ
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Utsava Maṅḍalī
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Gou Sevā
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Nāṭaka Mañca
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Khela
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Yuvā Śakti
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Gurukula
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Śiśu Maṅgal
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Bāla Vikāsa
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Bālikā Praśikṣaṇa
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Nārī Utthāna
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            o Samiti
                        </Typography>
                        {/* Add more topics as needed */}
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default SideComponent
