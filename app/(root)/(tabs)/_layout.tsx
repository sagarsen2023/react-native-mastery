import { icons, images } from "@/constants";
import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";

const TabIcon = ({
  focused,
  icon,
}: {
  focused: boolean;
  icon: ImageSourcePropType;
}) => {
  return (
    <View
      className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-general-300" : ""}`}
    >
      <View
        className={`rounded-full w-14 h-14 items-center justify-center ${focused ? "bg-general-400" : ""}`}
      >
        <Image source={icon} tintColor={"while"} resizeMode="contain" className="w-7 h-7"/>
      </View>
    </View>
  );
};

export default function Layout() {
  return (
    <Tabs initialRouteName="home" screenOptions={{
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "white",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#333333",
        borderRadius: 50,
        paddingHorizontal: 2,
        marginHorizontal: 22,
        marginBottom:20,
        height: 78,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute"
      }
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.list} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.chat} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.profile} />
          ),
        }}
      />
    </Tabs>
  );
}
