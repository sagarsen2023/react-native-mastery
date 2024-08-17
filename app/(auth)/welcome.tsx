import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isLastIndex = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex justify-between items-center w-full h-full p-4">
      {/* Our skip button here */}
      <TouchableOpacity
        className="w-full items-end justify-end  pr-4"
        onPress={() => {
          router.push("/(auth)/sign-up");
        }}
      >
        <Text className="font-JakartaBold py-2 text-lg">Skip</Text>
      </TouchableOpacity>

      {/* The Swiper to swipe pages */}
      {/* NOTE: Swiper takes the full height of it parent */}
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="px-2 py-1 w-[32px] mx-1 rounded-lg bg-gray-200" />
        }
        activeDot={
          <View className="px-2 py-1 w-[32px] mx-1 rounded-lg bg-primary-500" />
        }
        onIndexChanged={(index) => {
          setActiveIndex(index);
        }}
      >
        {onboarding.map((elem) => (
          <View key={elem.id} className="flex items-center justify-center p-5">
            {/* Initially the image is not being displayed we have to give the resize */}
            <Image
              source={elem.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />

            {/* Name is rendered here */}
            <View className="flex flex-row justify-center items-center mt-10 w-full">
              <Text className="mx-5 text-center text-3xl font-black">
                {elem.title}
              </Text>
            </View>

            {/* Description is rendered here */}
            <Text className="mx-7 mt-3 text-center text-lg font-JakartaSemiBold">
              {elem.description}
            </Text>
          </View>
        ))}
      </Swiper>
      {/* Our first custom component */}
      <CustomButton
        title={`${isLastIndex ? "Get Started" : "Next"}`}
        textVariant="primary"
        className="w-11/12 mt-10"
        onPress={() => {
          isLastIndex
            ? router.push("/(auth)/sign-in")
            : swiperRef.current?.scrollBy(1);
        }}
      />
    </SafeAreaView>
  );
};

export default Welcome;
