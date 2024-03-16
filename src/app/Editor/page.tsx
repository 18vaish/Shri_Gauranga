
"use client"
import { Container } from "@mui/material";
import TextEditor from "../components/texteditor";
import { useState } from "react";

const MyPage: React.FC = () => {
  const [content, setContent] = useState<string>("");

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  return (
    <Container maxWidth="md">
    
      <TextEditor value={content} onChange={handleContentChange} />
    </Container>
  );
};

export default MyPage;
