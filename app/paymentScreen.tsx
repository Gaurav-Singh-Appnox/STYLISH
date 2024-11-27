import { useState } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Button from "../components/common/Button";

const PaymentScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handlePayment = () => {
    setModalVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <ImageBackground
                  style={styles.successIcon}
                  source={require("../assets/images/Star 1.png")}
                >
                  <Image source={require("../assets/images/Vector 5.png")} />
                </ImageBackground>
                <Text style={styles.modalText}>Payment done successfully.</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={styles.orderDetailContainer}>
        <View style={styles.orderDetailText}>
          <Text style={[styles.fadeText, styles.text]}>Order</Text>
          <Text style={[styles.fadeText, styles.text]}>7000</Text>
        </View>
        <View style={styles.orderDetailText}>
          <Text style={[styles.fadeText, styles.text]}>Shipping</Text>
          <Text style={[styles.fadeText, styles.text]}>30</Text>
        </View>
        <View style={styles.orderDetailText}>
          <Text style={styles.text}>7030</Text>
          <Text style={styles.text}>Total</Text>
        </View>
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.paymentOption}>
        <Text>Payment</Text>
        <View style={styles.paymentCardContainer}>
          <View style={styles.paymentCard}>
            <Image source={require("../assets/images/visa 1.png")} />
            <Text>********2109</Text>
          </View>
          <View style={styles.paymentCard}>
            <Image source={require("../assets/images/paypal 1.png")} />
            <Text>********2109</Text>
          </View>
          <View style={styles.paymentCard}>
            <Image source={require("../assets/images/maestro 1.png")} />
            <Text>********2109</Text>
          </View>
          <View style={styles.paymentCard}>
            <Image
              source={require("../assets/images/Sign in with Apple (Logo-only).png")}
            />
            <Text>********2109</Text>
          </View>
        </View>
      </View>
      <Button title={"Continue"} onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 17,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
  },
  fadeText: {
    color: "#A8A8A9",
  },
  orderDetailText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderDetailContainer: {
    gap: 10,
    paddingHorizontal: 1,
  },
  paymentCardContainer: {
    gap: 25,
  },
  paymentOption: {
    gap: 10,
    marginVertical: 28,
  },
  paymentCard: {
    paddingHorizontal: 17,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    backgroundColor: "#F4F4F4",
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#C4C4C4",
    marginTop: 22,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 6,
    paddingVertical: 35,
    paddingHorizontal: 60,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  successIcon: {
    width: 91,
    height: 91,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
  },
});

export default PaymentScreen;
