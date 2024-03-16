import React from 'react';
import { Grid, Stack, Typography, Link } from '@mui/material';

const topics = [
    'Srila Bhaktisiddhanta',
    'A.C. Bhaktivedanta Swami',
    'Srila B.R. Sridhara Deva ',
    'Sila B.P. Puri Mahārāja', 
    'Srila B.G. Narasingha ',
    'Sril Bhakti Kiśora Aranya', 
    'Diralalita Dasi'
];

const SideComponentTwo = () => {
    return (
        <div>
            <Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="column" spacing={0} sx={{ pl: 2, mt: -2 }}>
                        <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>
                        Authors
                        </Typography>
                        {topics.map((topic, index) => (
                            <Typography key={index}>
                                <Link href={`#${topic}`} sx={{ textDecoration: 'none', color: 'black',fontWeight: 'bold' }}>
                                    { 'o '}
                                    {topic}
                                </Link> 
                            </Typography>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
};

export default SideComponentTwo;
