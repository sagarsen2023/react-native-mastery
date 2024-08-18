import { Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = async() => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[300px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[300px]" />
          <Text className="absolute left-5 bottom-5 text-2xl text-black font-black">
           Welcome 👋
          </Text>
        </View>

        <View className="px-5">
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
            onPress={onSignInPress}
          />

         {/* OAuth Component */}
         <OAuth/>

          <Link href={"/(auth)/sign-up"} className="text-lg text-center text-general-200 mt-3">
            <Text>Don't have an account?</Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>

          {/* Verification Modal will be added here */}
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
