import { Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignUp = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async() => {};

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
         <OAuth/>

          <Link href={"/(auth)/sign-in"} className="text-lg text-center text-general-200 mt-3">
            <Text>Already have an account?</Text>
            <Text className="text-primary-500">Sign In</Text>
          </Link>

          {/* Verification Modal will be added here */}
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
