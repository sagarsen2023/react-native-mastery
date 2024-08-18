import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { InputFieldProps } from "@/types/type";

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaBold mb-3 ${labelStyle}`}>
            {label}
          </Text>

          <View
            className={`flex flex-row justify-start rounded-full items-center relative border border-neutral-300 focus:border-primary-500 ${containerStyle}`}
          >
            {icon && (
              <Image className={`w-6 h-6 ml-4 ${iconStyle}`} source={icon} />
            )}
            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold  text-[15px] flex-1 text-left ${inputStyle}`}
              secureTextEntry={secureTextEntry}
              placeholder={props?.placeholder}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
