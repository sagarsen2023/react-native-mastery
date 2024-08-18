import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { ButtonProps } from "@/types/type";

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "primary",
  IconRight,
  IconLeft,
  classNames,
  ...props
}: ButtonProps) => {
  const getBgVariantByStyle = (variant: ButtonProps["bgVariant"]) => {

    switch (variant) {
      case "primary":
        return "bg-primary-500 hover:bg-primary-600 shadow-md";
      case "secondary":
        return "bg-neutral-300 hover:bg-neutral-400 shadow-md";
      case "danger":
        return "bg-red-500 hover:bg-red-600";
      case "outline":
        return "border border-";
      case "success":
        return "bg-green-500 hover:bg-green-600 shadow-md";
      default:
        return "bg-neutral-300 hover:bg-neutral-400 shadow-md";
    }
  };

  const getTextVariantByStyle = (textVariant: ButtonProps["textVariant"]) => {
    switch (textVariant) {
      case "primary":
        return "text-white";
      case "default":
        return "text-neutral-700";
      case "secondary":
        return "text-neutral-600";
      case "danger":
        return "text-red-500";
      case "success":
        return "text-green-500";
      default:
        return "text-neutral-700";
    }
  };

  return (
    <TouchableOpacity
      className={` ${classNames} w-full rounded-full flex flex-row justify-center items-center shadow-neutral-400/70 p-3 ${getBgVariantByStyle(bgVariant)}`}
      onPress={onPress}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={`text-lg font-bold ${getTextVariantByStyle(textVariant)}`}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
