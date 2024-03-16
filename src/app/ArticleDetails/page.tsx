"use client"
import React, { useState } from 'react';
import { TextField, Container, Grid, Typography, InputAdornment, Box, IconButton, useMediaQuery, Link, Modal } from '@mui/material';
import { FileDownload, Search, UploadFile } from '@mui/icons-material';
import { Card, CardContent, CardMedia } from '@mui/material';

import ShareIcon from '@mui/icons-material/Share';
import CardSlider from '../components/CardSlider';
import SubscribeModelBox from '../components/SubscribeModelBox';
import DownloadIcon from '@mui/icons-material/Download';
import Image from 'next/image';
import TextEditor from '../components/texteditor';
import router, { useRouter } from 'next/navigation';


function ArticlesPage() {
    const router = useRouter(); // Properly import and use useRouter


    const matches = useMediaQuery("(min-width:600px)");
 
        const [searchQuery, setSearchQuery] = useState('');
   const [isEditorOpen, setEditorOpen] = useState(false);
   const [editorContent, setEditorContent] = useState(""); 

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const openEditor = () => {
        setEditorOpen(true);
    };

    const closeEditor = () => {
        setEditorOpen(false);
    };

    const saveContentAndNavigate = () => {
      
        closeEditor(); 
    };
    

    return (
        <div>
            <Box bgcolor={"#FEFCEA"}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={2}>
                    <Typography variant='h6' fontSize={'small'}>
                        <b> Home / Articles /</b> RadhaKrishna are two bodies and One Soul!
                    </Typography>
                    <TextField
                        size='small'
                        placeholder="Search"
                        sx={{ borderRadius: 3, border: "1px solid" }}
                        variant="outlined"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton>
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Box>
                <Container sx={{ minHeight: '100vh' }}>
                    <Grid container justifyContent={"flex-end"} alignItems={"center"} spacing={2}>
                        {/* <Grid item xs={12} md={6} lg={6}>
                    </Grid> */}
                        <Grid item xs={12}>
                            <Box sx={{ backgroundColor: '#F5F5F5', p: 2, textAlign: 'center', borderRadius: 5}}>
                                <Typography variant="h4" mt={2} mb={2}>RadhaKrishna are two bodies and<br /> One Soul!</Typography>
                                <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                                    <Box display={"flex"} justifyContent={"space-between"} mt={2}gap={!matches ? 0 : 77}>
                                        <Typography sx={{ fontSize: 'small' }}>Related Tags: Love, Bhakti Sastra, Parivāra Āṅgana</Typography>
                                        <Box sx={{ color: '#555555', display: "flex", alignItems: "center" }}>
                                         
                                           
                                        <Link href="#" onClick={openEditor}><UploadFile/></Link>

                                            <FileDownload />
                                            <ShareIcon />
                                        </Box>
                                    </Box>
                                    <Image src="/radha krishna.jpg" priority alt="RadhaKrishna" width={!matches ? 250 : 1000} height={!matches ? 200 : 300} style={{ borderRadius: '10px' }} />
                                </Box>
                                <Box sx={{ paddingLeft: '5%', paddingRight: '5%', marginBottom:5 }}>
                                    <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'start' }}>
                                        1. nyonyacittavidusau nu parasparatmanityasthiteriti <br />
                                        nrsu prathitau yadavam <br />
                                        taccaupacarikamaho dvitayatvam eva <br />
                                        naikasya sambhavati karhicidatmano nau
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'start' }}>
                                        Sri Radhika says to sakhi: “Common people say, ‘Radha and Krsna are eternally present in each others’ hearts, and that is why They know each others’ minds.’ Factually, the real truth is this: We are one soul. It is not possible for one soul to become two.
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'start' }}>
                                        2. ekatmaniha rasapurnatame ’tyagadheekasusangrathitam eva tanudvayam nau<br />
                                        kasyimscidekasarasiva cakasadekanalo tthamabjayugalamkhalu nilapitam<br />
                                        taccaupacarikamaho dvitayatvam eva <br />
                                        naikasya sambhavati karhicidatmano nau
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'start' }}>
                                        “In a lake, two lotuses – one blue and one yellow – may bloom from a single stem. In the same way, Our two bodies, one blue and one yellow, are connected as one life. They are one supremely profound soul composed of topmost rasa. As bodies We are separate, but by nature We are one. Krsna is by nature blissful (ananda) and I by nature am joyful (hladini). Just as fire and its burning potency are one, there is no difference between the potency (sakti) and the possessor of the potency (saktiman). We cannot be distinguished from each other when seen as a person and the person’s potency, but for the sake of rasa, We manifest in separate forms as Radha and Krsna. Without pastimes,We cannot relish each other; and without form, We cannot perform pastimes
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'start' }}>
                                        3. yat snehapurabhrta bhajanarajitaikavarttyagr avarttyamaladipayugamcakasti<br />taccetaretaratamo ’panudat paroksamananday edakhilaparsvagatahsadalih
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'start' }}>
                                        4. ekatmaniha rasapurnatame ’tyagadheekasusangrathitam eva tanudvayam nau<br />
                                        kasyimscidekasarasiva cakasadekanalotth amabjayugalamkhalu nilapitam<br />
                                        taccaupacarikamaho dvitayatvam eva <br />
                                        naikasya sambhavati karhicidatmano nau
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'start' }}>
                                        “In a lake, two lotuses – one blue and one yellow – may bloom from a single stem. In the same way, Our two bodies, one blue and one yellow, are connected as one life. They are one supremely profound soul composed of topmost rasa. As bodies We are separate, but by nature We are one. Krsna is by nature blissful (ananda) and I by nature am joyful (hladini). Just as fire and its burning potency are one, there is no difference between the potency (sakti) and the possessor of the potency (saktiman). We cannot be distinguished from each other when seen as a person and the person’s potency, but for the sake of rasa, We manifest in separate forms as Radha and Krsna. Without pastimes,We cannot relish each other; and without form, We cannot perform pastimes
                                    </Typography>
                                </Box>

                            </Box>
                            <Box>
                                <SubscribeModelBox />
                            </Box>
                            <CardSlider />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Modal open={isEditorOpen} onClose={closeEditor}>
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: 12,        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
}}>
        <TextEditor value={editorContent} onChange={(value: string) => setEditorContent(value)} />
        {/* Save and Close button */}
       
    </Box>
</Modal>

        </div>
    );
}

export default ArticlesPage;
function setEditorOpen(arg0: boolean) {
    throw new Error('Function not implemented.');
}

