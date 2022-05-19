
import './App.css';
import React from 'react';
import Stack from '@mui/material/Stack';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfReport from './Export/Pdf/PdfReport';




function App() {

  return (
  <Stack spacing={2} direction="row">
    <PDFDownloadLink document={<PdfReport />} fileName="pdfreport.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download Pdf')}
    </PDFDownloadLink>
  </Stack>
  );
}

export default App;
