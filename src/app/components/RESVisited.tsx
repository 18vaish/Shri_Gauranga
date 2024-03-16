import { Grid, Stack, Typography, Link } from '@mui/material';
import React from 'react';

const RESVisitedArticle = () => {
    return (
        <div>
            <Grid>
                <Grid item xs={12} md={8} sm={4}>
                    <Stack direction="column" gap={2} sx={{}}>
                        <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>
                            Recently visited
                        </Typography>
                        <Typography variant="body1">
                            ● <Link href="your-link-url" sx={{ textDecoration: 'none', color: 'black' }}>
                                Been the industry standard<br />
                                &nbsp;&nbsp;&nbsp;dummy text ever since the<br />
                                &nbsp;&nbsp;&nbsp;1500s,
                            </Link>
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            ● <Link href="your-link-url" sx={{ textDecoration: 'none', color: 'black' }}>
                                when an unknown printer took<br />
                                &nbsp;&nbsp;&nbsp; galley of type and scrambled it <br />
                                &nbsp;&nbsp;&nbsp;to
                            </Link>
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            ● <Link href="your-link-url" sx={{ textDecoration: 'none', color: 'black' }}>
                                make a type specimen book. It<br />
                                &nbsp;&nbsp;&nbsp; ha survived not only five<br />
                                &nbsp;&nbsp;&nbsp;centuries,
                            </Link>
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            ● <Link href="your-link-url" sx={{ textDecoration: 'none', color: 'black' }}>
                                but also the leap into electronic<br />
                                &nbsp;&nbsp;&nbsp;typesetting, remaining
                            </Link>
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            ● <Link href="your-link-url" sx={{ textDecoration: 'none', color: 'black' }}>
                                unchanged. It was popularised<br />
                                &nbsp;&nbsp;&nbsp;tessentially
                            </Link>
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
};

export default RESVisitedArticle;
