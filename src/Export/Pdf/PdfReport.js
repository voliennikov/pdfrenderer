import PatientInfoView from "./PatientInfoView";
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


// Create styles
const styles = StyleSheet.create({
 
    page: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
        fontSize: '12px'
      },

    caption: {
        paddingTop: '10px',
        paddingBottom: '10px',
        fontSize: '14px'
      }

  });


export default function PdfReport(session) {

    return (
        <Document>
        <Page size='A4' style={styles.page}>
          <Text style={styles.caption}>Summary Report</Text>
          <PatientInfoView />
        </Page>
        </Document>
    );
};
    

