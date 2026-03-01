import React, { useState } from "react";
import { View, ActivityIndicator, StyleSheet, Image } from "react-native";
import { Button, Screen, Text, TextField } from "../../../Components";
import { AppStackScreenProps } from "../../../utils/interfaces";
import { colors, spacing } from "../../../theme";
import { useToast } from "react-native-toast-notifications";
import { WithLocalSvg } from "react-native-svg/css";
import { Images } from "../../../assets/Images";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface PaymentScreenProps extends AppStackScreenProps<"Payment"> {}
// Validation schema
const paymentSchema = yup.object().shape({
  cardName: yup.string().required("Card name is required"),
  cardNumber: yup
    .string()
    .matches(/^\d{16}$/, "Card number must be 16 digits")
    .required("Card number is required"),
  expiry: yup
    .string()
    .matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{2})$/,
      "Expiry must be MM/DD/YY "
    )
    .required("Expiry date is required"),
  cvv: yup
    .string()
    .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits")
    .required("CVV is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

function formatExpiry(input: string) {
  // Only allow digits and /
  let digits = input.replace(/[^\d]/g, "");
  if (digits.length > 6) digits = digits.slice(0, 6);

  // Month correction
  if (digits.length >= 2) {
    let month = digits.slice(0, 2);
    if (month === "00") month = "01";
    if (parseInt(month, 10) > 12) month = "12";
    digits = month + digits.slice(2);
  }

  // Date correction (if user types MMDDYY)
  if (digits.length >= 4) {
    let day = digits.slice(2, 4);
    if (day === "00") day = "01";
    if (parseInt(day, 10) > 31) day = "31";
    digits = digits.slice(0, 2) + day + digits.slice(4);
  }

  if (digits.length > 4)
    return digits
      .replace(/(\d{2})(\d{2})(\d{0,2})/, "$1/$2/$3")
      .replace(/\/$/, "");
  if (digits.length > 2) return digits.replace(/(\d{2})(\d{0,2})/, "$1/$2");
  return digits;
}

export function Payment(props: PaymentScreenProps) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(paymentSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
      email: "",
    },
  });

  const onSubmit: SubmitHandler<any> = async (formData) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.navigation.goBack();
    }, 1500);
  };

  return (
    <>
      <Screen
        preset="auto"
        contentContainerStyle={styles.screenContentContainer}
        // safeAreaEdges={["bottom"]}
      >
        <View style={styles.logoview}>
          <Image
            source={Images.card}
            style={{ width: 360, resizeMode: "contain" }}
          />
        </View>
        <View style={styles._divider} />

        <View style={styles.innerview}>
          <Text weight="bold" text="Card Name" style={styles.label} />
          <Controller
            control={control}
            name="cardName"
            render={({ field: { onChange, value, onBlur } }) => (
              <TextField
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Card Name"
                helper={errors.cardName?.message}
                status={errors.cardName ? "error" : undefined}
              />
            )}
          />

          <Text weight="bold" text="Card Number" style={styles.label} />
          <Controller
            control={control}
            name="cardNumber"
            render={({ field: { onChange, value, onBlur } }) => (
              <TextField
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Card Number"
                helper={errors.cardNumber?.message}
                status={errors.cardNumber ? "error" : undefined}
                keyboardType="number-pad"
              />
            )}
          />

          <View style={styles._row}>
            <View style={styles._col}>
              <Text weight="bold" text="Expiry Date" style={styles.label} />
              <Controller
                control={control}
                name="expiry"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextField
                    value={value}
                    onChangeText={(val) => onChange(formatExpiry(val))}
                    onBlur={onBlur}
                    placeholder="MM/YY/YY"
                    helper={errors.expiry?.message}
                    status={errors.expiry ? "error" : undefined}
                    keyboardType="number-pad"
                    RightAccessory={() => (
                      <WithLocalSvg
                        asset={Images.calendar}
                        style={{ marginRight: 10 }}
                      />
                    )}
                  />
                )}
              />
            </View>

            <View style={styles._col}>
              <Text weight="bold" text="CVV" style={styles.label} />

              <Controller
                control={control}
                name="cvv"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextField
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="CVV"
                    helper={errors.cvv?.message}
                    status={errors.cvv ? "error" : undefined}
                    keyboardType="number-pad"
                  />
                )}
              />
            </View>
          </View>
        </View>
        <View style={styles._btnview}>
          <Button
            testID="forgot-button"
            text="Add"
            preset="reversed"
            onPress={onSubmit}
            style={[isValid && styles.tapButton]}
            textStyle={{
              color: colors.white,
              fontFamily: "bold",
            }}
            RightAccessory={() =>
              loading ? (
                <ActivityIndicator
                  style={{ position: "absolute", right: 20 }}
                  color={colors.white}
                />
              ) : null
            }
          />
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screenContentContainer: {
    paddingVertical: spacing.md,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  tapButton: {
    marginBottom: spacing.lg,
    // marginTop: ,
  },

  innerview: {
    flex: 1,
  },

  desc: {
    marginVertical: spacing.md,
    fontSize: 18,
  },

  logoview: {
    paddingHorizontal: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },

  _title: {
    fontSize: 20,
    paddingLeft: spacing.xs,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 55,
    marginBottom: spacing.md,
  },
  disabledButton: {
    backgroundColor: colors.diabled,
    marginTop: 20,
  },
  _divider: {
    borderWidth: 1,
    marginTop: spacing.lg,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  _col: {
    flex: 1,
  },
  label: {},
  _btnview: {
    marginTop: "10%",
  },
});
