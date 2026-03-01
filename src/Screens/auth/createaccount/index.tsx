import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, Text, TextField, Screen } from "../../../Components";
import {
  AppStackScreenProps,
  AppStackParamList,
} from "../../../utils/interfaces";
import { colors, spacing } from "../../../theme";
import Toast from "react-native-toast-message";
import { Images } from "../../../assets/Images";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { WithLocalSvg } from "react-native-svg/css";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { authService } from "../../../services/auth.service";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image } from "react-native";
// Define validation schema for signup
const signupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultValues: SignUpFormData = {
  email: "test@gmail.com",
  password: "11223344",
  confirmPassword: "11223344",
};

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

interface CreateAccountProps extends AppStackScreenProps<"CreateAccount"> {}

export function CreateAccount({ navigation }: CreateAccountProps) {
  const [loading, setLoading] = useState(false);
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);
  const [checked, setChecked] = useState(false);

  // No need for useToast hook with react-native-toast-message
  const nav = useNavigation<NavigationProp>();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<SignUpFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(signupValidationSchema),
    defaultValues,
  });

  const [email, password, confirmPassword] = watch([
    "email",
    "password",
    "confirmPassword",
  ]);
  const isFormValid = Boolean(email && password && confirmPassword && isValid);

  const signup: SubmitHandler<SignUpFormData> = async (formData) => {
   navigation.navigate("Main")
  };

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={styles.screenContentContainer}
    >
      <ImageBackground source={Images.bg} style={styles.imageBackground}>
        <ScrollView>
          <View style={styles._logoview}>
            <Image
              source={Images.logo2}
              style={{ height: 150, width: 200 }}
              resizeMode="contain"
            />
          </View>
          <Text
            text="Create New Account"
            style={styles._heading}
            weight="semiBold"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                value={value}
                onChangeText={onChange}
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
                containerStyle={styles.textField}
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect={false}
                secureTextEntry={isAuthPasswordHidden}
                placeholder="Password"
                helper={errors.password?.message}
                status={errors.password ? "error" : undefined}
                LeftAccessory={() => (
                  <WithLocalSvg
                    style={{ marginLeft: 10 }}
                    asset={Images.password}
                  />
                )}
                RightAccessory={() => (
                  <TouchableOpacity
                    onPress={() =>
                      setIsAuthPasswordHidden(!isAuthPasswordHidden)
                    }
                    style={{ marginRight: 10 }}
                  >
                    {isAuthPasswordHidden ? (
                      <Feather name="eye" size={20} color="#212121" />
                    ) : (
                      <Feather name="eye-off" size={20} color="#212121" />
                    )}
                  </TouchableOpacity>
                )}
                containerStyle={styles.textField}
              />
            )}
            name="password"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect={false}
                secureTextEntry={isConfirmPasswordHidden}
                placeholder="Confirm Password"
                helper={errors.confirmPassword?.message}
                status={errors.confirmPassword ? "error" : undefined}
                LeftAccessory={() => (
                  <WithLocalSvg
                    style={{ marginLeft: 10 }}
                    asset={Images.password}
                  />
                )}
                RightAccessory={() => (
                  <TouchableOpacity
                    onPress={() =>
                      setIsConfirmPasswordHidden(!isConfirmPasswordHidden)
                    }
                    style={{ marginRight: 10 }}
                  >
                    {isConfirmPasswordHidden ? (
                      <Feather name="eye" size={20} color="black" />
                    ) : (
                      <Feather name="eye-off" size={20} color="black" />
                    )}
                    {/* <Image
                      source={
                        isConfirmPasswordHidden ? Images.hide : Images.show
                      }
                    /> */}
                  </TouchableOpacity>
                )}
                containerStyle={styles.textField}
              />
            )}
            name="confirmPassword"
          />
          <View style={styles.termsRow}>
            <TouchableOpacity
              onPress={() => setChecked(!checked)}
              style={[
                styles.checkbox,
                { backgroundColor: checked ? colors.primary : colors.white },
              ]}
            >
              {checked && (
                <Entypo name="check" size={18} color={colors.white} />
              )}
            </TouchableOpacity>
            <Text
              text="I agree to"
              weight="semiBold"
              size="sm"
              style={{ color: colors.palette.grey100 }}
            />
            <Text
              text="Terms & Risk Disclosure"
              weight="bold"
              size="sm"
              style={{ color: colors.primary }}
              onPress={() => nav.navigate("Terms")}
            />
          </View>

          {/* <Button
            onPress={handleSubmit(signup)}
            disabled={!isFormValid || loading}
            style={[
              styles.submitButton,
              (!isFormValid || loading) && { opacity: 0.7 },
            ]}
            textStyle={{ color: colors.white }}
          >
            {loading ? (
              <ActivityIndicator color={colors.white} />
            ) : (
              <Text style={{ color: colors.white, fontWeight: "600" }}>
                Create Account
              </Text>
            )}
          </Button> */}
          <Button
            testID="login-button"
            text="Login"
            style={[!isFormValid && styles.disabledButton]}
            preset="reversed"
            gradient={isFormValid}
            onPress={handleSubmit(signup)}
            textStyle={{ color: colors.white, fontFamily: "bold" }}
            disabled={!isFormValid || loading}
            RightAccessory={() =>
              loading ? (
                <ActivityIndicator
                  style={{ position: "absolute", right: 20 }}
                  color={colors.white}
                />
              ) : null
            }
          />

          <View style={[styles.footer, { marginTop: 20 }]}>
            <Text
              text="Already have an account? "
              weight="semiBold"
              size="sm"
              style={{ color: colors.palette.grey100 }}
            />
            <Text
              testID="login-heading"
              text="Login"
              weight="bold"
              size="sm"
              style={{ color: colors.primary }}
              onPress={() => nav.navigate("Login")}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  // Layout
  screenContentContainer: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    paddingHorizontal: 16,
  },

  // Header
  _logoview: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  _heading: {
    textAlign: "center",
    marginVertical: 24,
    fontSize: 28,
    lineHeight: 32,
    fontWeight: "600",
  },

  // Form
  textField: {
    marginBottom: 16,
  },
  termsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primary,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  // Buttons
  submitButton: {
    marginTop: 10,
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },

  // Footer
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  // Text
  info: {
    marginTop: 8,
    textAlign: "center",
    lineHeight: 18,
  },
  disabledButton: {
    backgroundColor: colors.diabled,
  },
});
