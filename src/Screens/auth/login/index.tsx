import React, { useRef, useState, useContext, useEffect } from "react";
import { BullwiseTipsModal } from "../../../Components/BullwiseTipsModal";
import {
  TextInput,
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Button, Screen, Text, TextField } from "../../../Components";
import { AppStackScreenProps } from "../../../utils/interfaces";
import { colors, spacing, typography } from "../../../theme";
import { Images } from "../../../assets/Images";
import { loginValidations } from "../../../validations/auth";
import { ILogin } from "../../../types/app.types";
import { authService } from "../../../services/auth.service";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../../context/UserContext";
import Toast from "react-native-toast-message";
import { WithLocalSvg } from "react-native-svg/css";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePushNotifications } from "../../../context/usePushNotifications";

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}
export function LoginScreen(props: LoginScreenProps) {
  const authPasswordInput = useRef<TextInput>();
  const { expoPushToken, notification, sendPushNotification } =
    usePushNotifications();

  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true);
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  // No need for useToast hook with react-native-toast-message
  const [showTipsModal, setShowTipsModal] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    watch,
  } = useForm<ILogin>({
    resolver: yupResolver(loginValidations),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [email, password] = watch(["email", "password"]);
  const isFormValid = Boolean(email && password && isValid);
  const [user, setuser] = useState<any>(null);

  const login: SubmitHandler<ILogin> = async (formData: ILogin) => {
    setLoading(true);

    try {
      const { user, error } = await authService.signIn(
        formData.email,
        formData.password
      );

      if (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : typeof error === "string"
            ? error
            : "An error occurred during login";

        Toast.show({
          type: "error",
          text1: "Login Failed",
          text2: errorMessage,
          position: "top",
        });
        return;
      }

      if (user) {
        setShowTipsModal(true);
        setuser(user);
      }
    } catch (error) {
      console.error("Unexpected login error:", error);
      // Extract error message from the error object
      const errorMessage =
        error instanceof Error
          ? error.message
          : typeof error === "string"
          ? error
          : "An unexpected error occurred. Please try again.";
      // Show error toast with the extracted message
      Toast.show({
        type: "error",
        text1: "Error",
        text2: errorMessage,
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowTipsModal(true);
    }, 2000);
  }, []);
  return (
    <>
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
              />
            </View>
            <Text
              text="Login to Your Account"
              style={styles._heading}
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
                  onSubmitEditing={() => authPasswordInput.current?.focus()}
                  containerStyle={[
                    styles.textField,

                    // emailFocused ? { borderColor: colors.primary } : null, // Apply border color if focused
                  ]}
                />
              )}
              name="email"
              rules={{ required: true }}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({ field: { onChange, value, onBlur } }) => (
                <TextField
                  value={value}
                  onChangeText={(value) => onChange(value)}
                  onBlur={onBlur}
                  autoCapitalize="none"
                  autoComplete="password"
                  autoCorrect={false}
                  secureTextEntry={isAuthPasswordHidden}
                  placeholder="Password"
                  containerStyle={styles.textField}
                  helper={errors.password?.message}
                  status={errors.password ? "error" : undefined}
                  LeftAccessory={() => (
                    <WithLocalSvg
                      style={{ marginLeft: 10 }}
                      asset={Images.password}
                    />
                  )}
                />
              )}
              name="password"
              rules={{ required: true }}
              defaultValue=""
            />

            <TouchableOpacity
              onPress={() => props.navigation.navigate("ForgotPassword")}
              style={{ alignSelf: "center" }}
            >
              <Text
                testID="login-heading"
                text="Forgot Your Password?"
                preset="formHelper"
                weight="semiBold"
                style={styles.enterDetails}
              />
            </TouchableOpacity>

            <Button
              testID="login-button"
              text="Login"
              style={[!isFormValid && styles.disabledButton]}
              preset="reversed"
              gradient={isFormValid}
              onPress={handleSubmit(login)}
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

            {/* <View style={styles._orview}>
              <Text
                weight="medium"
                text="or continue with"
                style={styles._ortext}
              />
            </View> */}
            {/* <Button
              text="Continue With Google"
              onPress={() => authService.signInWithGoogle()}
              LeftAccessory={() => (
                <WithLocalSvg
                  style={{ marginLeft: 10 }}
                  asset={Images.google}
                />
              )}
              style={styles.tapButton}
              textStyle={styles._tabbttext}
            /> */}

            <View style={styles.footerstyle}>
              <Text
                testID="login-heading"
                text="Don’t have an account?"
                preset="formHelper"
                weight="semiBold"
                size="sm"
                style={{ color: colors.palette.grey100 }}
              />
              <Text
                testID="login-heading"
                text="Sign up"
                preset="formHelper"
                weight="semiBold"
                size="sm"
                style={styles.signuptext}
                onPress={() => props.navigation.navigate("CreateAccount")}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </Screen>
      {/* Bullwise Tips Modal */}
      <BullwiseTipsModal
        visible={showTipsModal}
        onClose={async () => {
          setShowTipsModal(false);
          const dummyUser = {
            user_id: "suneel123",
            email: "suneel@gmail.com",
            first_name: "Suneel",
            last_name: "Kumar",
            userName: "suneelkumar",
          };

          // Save user to AsyncStorage
          // await AsyncStorage.setItem("user", JSON.stringify(dummyUser));
          // props.navigation.navigate("Home");
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingTop: 100,
  },
  disabledButton: {
    backgroundColor: colors.diabled,
  },
  _heading: {
    textAlign: "center",
    marginVertical: spacing.lg,
    fontSize: 24,
    lineHeight: 32,
  },
  signuptext: {
    color: colors.primary,
    marginLeft: spacing.xs,
  },
  footerstyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.lg,
    flexDirection: "row",
    marginBottom: spacing.md,
  },
  textField: {
    marginBottom: spacing.md,
  },

  enterDetails: {
    marginBottom: spacing.lg,
    textAlign: "right",
    // fontSize: 14,
    // color: colors.primary,
    // fontFamily: typography.fonts.poppins.semiBold,
  },
  screenContentContainer: {
    flex: 1,
  },
  _logoview: {
    alignSelf: "center",
  },
  info: {
    textAlign: "center",
    lineHeight: 18,
  },
  _orview: {
    borderTopWidth: 1,
    borderColor: colors.palette.neutral400,
    alignItems: "center",
    marginTop: 35,
  },
  _ortext: {
    fontSize: 16,
    // lineHeight: 14,
    // paddingVertical: spacing.md,
    marginTop: -14,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.sm,
  },
  tapButton: {
    borderRadius: 16,
    marginVertical: spacing.lg,
  },
  _tabbttext: {
    fontFamily: "semiBold",
    fontSize: 16,
    paddingLeft: spacing.sm,
  },
});
