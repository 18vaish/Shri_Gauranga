import React from 'react';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

function BookCard() {
    const router = useRouter();

    const handleClickBookDetails = () => {
        router.push('/BookDetails');
    };
    return (
      <Box sx={{ width: "230px" }}>
          <Card
              onClick={handleClickBookDetails}
              sx={{ maxWidth: '300px', mb: 2, backgroundColor: '#FCDFA0', alignItems: 'center', borderRadius: '15px', border: "1px solid" }}
          >
              <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "white" }}>
                  <CardMedia
                      loading="lazy"
                      component="img"
                      image="/book2.jpg"
                      sx={{ backgroundColor: "white", height: "140px", width: "50%" }}
                      alt="Shrimad Bhaghwatgita"
                  />
              </Box>
              <CardContent>
                  <Typography sx={{ fontWeight: "bold", justifyContent: 'flex-start', ml: -1 }}>
                      Bhagvad Gita-As it is
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "10px", color: "gray", ml: -1 }}>
                      By Srila Prabhupad
                  </Typography>
              </CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-end" p={1} mt={-3}>
                  <Typography variant="h6" sx={{ fontSize: "10px", color: "gray" }}>
                      12 Jan 2024
                  </Typography>
                  <Button
                      onClick={handleClickBookDetails}
                      sx={{
                          fontWeight: "bold",
                          border: "1px solid black",
                          color: "white",
                          fontSize: "10px",
                          backgroundColor: "#81311A",
                          borderRadius: 10,
                          height: "25px",
                          cursor: "pointer",
                      }}
                  >
                      Buy
                  </Button>
              </Stack>
          </Card>
      </Box>
  );
};

export default BookCard;

