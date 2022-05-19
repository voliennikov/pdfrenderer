
import { Text, View, StyleSheet } from '@react-pdf/renderer';


// Create styles
const styles = StyleSheet.create({

  comments: {
      fontSize: '10px',
      color:'#737373'
    }
});


export default function PatientInfoView(session) {

return (
        <View>
          <Text>Patient Name: John Doe</Text>
          <Text>Patient ID: 1331</Text>
          <Text>Start Time: 28/04/2022 01:42 AM</Text>
          <Text>End Time: 28/04/2022 01:43 AM</Text>
          <Text style={styles.comments} >** All times are displayed in a 24-hour clock format (hh:mm)</Text>
        </View>
);

};





