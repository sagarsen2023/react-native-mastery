import { Text, View, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import ReactNativeModal from "react-native-modal";

const SignUp = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerification({ ...verification, state: "pending" });
    } catch (err: any) {
      Alert.alert(err.message);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      if (completeSignUp.status === "complete") {
        // TODO: A databse will be created for the users
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({ ...verification, state: "success" });
      } else {
        setVerification({
          ...verification,
          state: "failed",
          error: "Verification failed",
        });
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setVerification({
        ...verification,
        state: "failed",
        error: err.message
      });
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[300px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[300px]" />
          <Text className="absolute left-5 bottom-5 text-2xl text-black font-black">
            Create your account
          </Text>
        </View>

        <View className="px-5">
          <InputField
            label="Name"
            labelStyle=""
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(val) => setform({ ...form, name: val })}
          />
          <InputField
            label="Email"
            labelStyle=""
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(val) => setform({ ...form, email: val })}
          />
          <InputField
            label="Password"
            labelStyle=""
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(val) => setform({ ...form, password: val })}
          />

          <CustomButton
            title="Sign Up"
            classNames="mt-6"
            onPress={onSignUpPress}
          />

          {/* OAuth Component */}
          <OAuth />

          <Link
            href={"/(auth)/sign-in"}
            className="text-lg text-center text-general-200 mt-3"
          >
            <Text>Already have an account?</Text>
            <Text className="text-primary-500">Sign In</Text>
          </Link>

          <ReactNativeModal
            isVisible={verification.state === "pending"}
            onModalHide={() => {
              if (verification.state === "success") setShowSuccessModal(true);
            }}
          >
            <View className="px-7 py-9 bg-white rounded-2xl min-h-[300px]">
              <Text className="text-3xl font-JakartaBold mb-3">
                Verification
              </Text>

              <Text className="font-Jakarta mb-5">
                We have send a verification code to {form.email}
              </Text>

              <InputField
                label="Code"
                icon={icons.lock}
                placeholder="12345"
                keyboardType="number-pad"
                onChangeText={(val) => {
                  setVerification({ ...verification, code: val });
                }}
              />

              {verification.state === "pending" && (
                <Text className="text-red-500 text-sm mt-2">
                  {verification.error}
                </Text>
              )}

              <CustomButton
                title="Verify"
                onPress={onPressVerify}
                bgVariant="success"
              />
            </View>
          </ReactNativeModal>

          <ReactNativeModal isVisible={showSuccessModal}>
            <View className="px-7 py-9 bg-white rounded-2xl min-h-[300px]">
              <Image
                source={images.check}
                className="w-[110px] h-[110px] mx-auto my-5"
              />
              <Text className="text-3xl font-JakartaBold text-center">
                Verifued
              </Text>

              <Text className="text-gray-600 font-Jakarta mt-2 text-center text-lg">
                Your account has been verified successfully
              </Text>

              <CustomButton
                classNames="mt-5"
                title="Go to Home"
                onPress={() => {
                  setShowSuccessModal(false);
                  router.replace("/(root)/(tabs)/home");
                }}
              />
            </View>
          </ReactNativeModal>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
