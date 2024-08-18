import { Text, View, Image } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleSignIn = async() => {
    // Google OAuth Implementation
  };

  return (
    <View>
      <View className="mt-4 flex flex-row justify-center items-center gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>

      <CustomButton
        title="Log in with Google"
        classNames="mt-2"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="h-5 w-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="default"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
