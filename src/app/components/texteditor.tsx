"use client"
import { useState } from "react";
import ReactQuill from "react-quill";
import { Box, Button } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import router from "next/navigation";


interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
  const [editorValue, setEditorValue] = useState<string>(value);

  const handleEditorChange = (value: string) => {
    setEditorValue(value);
    onChange(value);
  };

  const onSave = () => {
    console.log(editorValue); 
    
    router.push({
      pathname: '/ArticleDetails',
      query: { content: editorValue }
  });
  };

  return (
    <Box sx={{ width: 800, height: "500px" }}>
      <ReactQuill
        value={editorValue}
        onChange={handleEditorChange}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "code-block"],
          ],
        }}
        style={{ height: "100%" }} // Set background color to transparent
      />
      <Box sx={{ textAlign: 'center', marginTop: 7 }}>
        <Button onClick={onSave} color="primary" variant="contained">Save</Button>
      </Box>
    </Box>
  );
};

export default TextEditor;
