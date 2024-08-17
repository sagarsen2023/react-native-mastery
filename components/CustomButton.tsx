import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { ButtonProps } from "@/types/type";

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconRight,
  IconLeft,
  className,
  ...props
}: ButtonProps) => {
  const getBgVariantByStyle = (variant: ButtonProps["bgVariant"]) => {

    switch (variant) {
      case "primary":
        return "bg-primary-500 hover:bg-primary-600";
      case "secondary":
        return "bg-neutral-300 hover:bg-neutral-400";
      case "danger":
        return "bg-red-500 hover:bg-red-600";
      case "outline":
        return "text-neutral-700 hover:text-primary-500";
      case "success":
        return "bg-green-500 hover:bg-green-600";
      default:
        return "bg-neutral-300 hover:bg-neutral-400";
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
      className={`w-full rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 p-3 ${className} ${getBgVariantByStyle(bgVariant)}`}
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
