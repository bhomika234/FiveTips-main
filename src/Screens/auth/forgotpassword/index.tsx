import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Button, Screen, Text, TextField } from "../../../Components";
import { AppStackScreenProps } from "../../../utils/interfaces";
import { colors, spacing, typography } from "../../../theme";
import { WithLocalSvg } from "react-native-svg/css";
import { Images } from "../../../assets/Images";
import { authService } from "../../../services/auth.service";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordValidations } from "../../../validations/auth";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
interface ForgotPasswordScreenProps
  extends AppStackScreenProps<"ForgotPassword"> {}

export function ForgotPassword(props: ForgotPasswordScreenProps) {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(forgotPasswordValidations),
    defaultValues: {
      email: "",
    },
  });

  const email = watch("email");

  const resetPassword: SubmitHandler<{ email: string }> = async (formData: {
    email: string;
  }) => {
    try {
      setLoading(true);
      const { success, error } = await authService.resetPassword(
        formData.email
      );

      if (success) {
        // Show success message
        if (Toast) {
          Toast.show({
            type: "success",
            text1: "Password reset link has been sent to your email address",
            position: "top",
          });
        }

        // Navigate back to login after a short delay
        setTimeout(() => {
          props.navigation.navigate("Login");
        }, 1500);
      } else {
        // Show error message
        if (Toast) {
          Toast.show({
            type: "error",
            position: "top",
            text1:
              error?.message || "Failed to send reset email. Please try again.",
          });
        }
      }
    } catch (error: any) {
      console.error("Password reset error:", error);

      if (Toast) {
        Toast.show({
          type: "error",
          text1: "An unexpected error occurred. Please try again.",
          position: "top",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = Boolean(email && isValid);

  return (
    <>
      <Screen
        preset="fixed"
        contentContainerStyle={styles.screenContentContainer}
      >
        <ImageBackground source={Images.bg} style={styles.imageBackground}>
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => props.navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} />
            </TouchableOpacity>
            <Text
              weight="semiBold"
              text="Forgot password"
              style={styles._title}
            />
          </View>
          <View style={styles.logoview}>
            <WithLocalSvg asset={Images.forgotbg} />
          </View>

          <View style={styles.innerview}>
            <Text
              text="Please enter your email associated wit your account."
              style={styles.desc}
              weight="semiBold"
            />

            <Controller
              control={control}
              render={({ field: { onChange, value, onBlur } }) => (
                <TextField
                  value={value}
                  onChangeText={(value) => onChange(value)}
                  onBlur={onBlur}
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect={false}
                  keyboardType="email-address"
                  placeholder="Email"
                  helper={errors.email?.message}
                  status={errors.email ? "error" : undefined}
                  LeftAccessory={() => (
                    <WithLocalSvg
                      style={{ marginLeft: 10 }}
                      asset={Images.email}
                    />
                  )}
                />
              )}
              name="email"
            />
            <Button
              testID="forgot-button"
              text="Send Reset Link"
              // style={loading ? styles.tapButton : styles.tapButton}
              style={[!isFormValid && styles.disabledButton]}
              preset="reversed"
              onPress={handleSubmit(resetPassword)}
              textStyle={{
                color: colors.white,
                fontFamily: "bold",
              }}
              disabled={!isValid || !email || loading}
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
        </ImageBackground>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screenContentContainer: {
    flex: 1,
  },

  tapButton: {
    marginBottom: spacing.lg,
    marginTop: spacing.lg,
  },

  innerview: {
    marginLeft: spacing.xs,
    flex: 1,
  },

  desc: {
    marginVertical: spacing.md,
    fontSize: 18,
  },

  logoview: {
    alignSelf: "center",
  },

  imageBackground: {
    flex: 1,
    padding: spacing.md,
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
  },
});
