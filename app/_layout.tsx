import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.qrSection}>
        <Text style={styles.heading}>SCAN THIS QR CODE</Text>
        <Image source={require('../assets/images/qr.jpg')} style={styles.qrCodeImage} />
        <Text style={styles.subHeading}>YOUR NAME</Text>
        <Text style={styles.email}>your-email@email.com</Text>
      </View>
      <View style={styles.barcodeFooterContainer}>
        <View style={styles.barcodeSectionWithWhiteBg}>
          <Text style={styles.barcodeText}>Try BARCODE</Text>
          <Image source={require('../assets/images/barcode.jpg')} style={styles.barcodeImage} />
          <Text style={styles.helperText}>
            Can't scan the QR Code?{"\n"}Try <Text style={styles.linkText}>Bank Account</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003366", 
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    position: "relative",
    overflow: "hidden",
  },

  qrSection: {
    alignItems: "center",
    marginTop: 40,
  },
  heading: {
    fontSize: 16,
    fontWeight: "400", 
    marginBottom: 10,
    color: "#fff",
  },
  qrCodeImage: {
    width: 160,
    height: 160,
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: "400",
    color: "#fff",
  },
  email: {
    fontSize: 12,
    color: "#ddd", 
    marginTop: 5,
  },
  barcodeFooterContainer: {
    width: "200%", 
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginTop: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  barcodeSectionWithWhiteBg: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20, 
  },
  barcodeText: {
    fontSize: 14,
    marginBottom: 5,
    color:  "#333333"

  },
  barcodeImage: {
    width: 160,
    height: 40,
    marginBottom: 60,
  },
  helperText: {
    fontSize: 12,
    textAlign: "center",
    color: "#333333",
  },
  linkText: {
    color: "#007bff", 
    textDecorationLine: "underline",
  },
});
