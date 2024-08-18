import { useUser } from "@clerk/clerk-expo";
import {
  FlatList,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RideCard from "@/components/RideCard";
import { Ride } from "@/types/type";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import GoogleTextInput from "@/components/GoogleTextInput";

const recentRides: Ride[] = [
  {
    ride_id: "1",
    user_email: "user1@example.com", // Added this field
    origin_address: "Kathmandu, Nepal",
    destination_address: "Pokhara, Nepal",
    origin_latitude: 27.717245,
    origin_longitude: 85.323961,
    destination_latitude: 28.209583,
    destination_longitude: 83.985567,
    ride_time: 391,
    fare_price: 19500.0,
    payment_status: "paid",
    driver_id: 2,
    created_at: "2024-08-12 05:19:20.620007",
    driver: {
      first_name: "David",
      last_name: "Brown",
      car_seats: 5,
    },
  },
  {
    ride_id: "2",
    user_email: "user1@example.com",
    origin_address: "Jalkot, MH",
    destination_address: "Pune, Maharashtra, India",
    origin_latitude: 18.609116,
    origin_longitude: 77.165873,
    destination_latitude: 18.52043,
    destination_longitude: 73.856744,
    ride_time: 491,
    fare_price: 24500.0,
    payment_status: "paid",
    driver_id: 1,
    created_at: "2024-08-12 06:12:17.683046",
    driver: {
      first_name: "James",
      last_name: "Wilson",
      car_seats: 4,
    },
  },
  {
    ride_id: "3",
    user_email: "user1@example.com",
    origin_address: "Zagreb, Croatia",
    destination_address: "Rijeka, Croatia",
    origin_latitude: 45.815011,
    origin_longitude: 15.981919,
    destination_latitude: 45.327063,
    destination_longitude: 14.442176,
    ride_time: 124,
    fare_price: 6200.0,
    payment_status: "paid",
    driver_id: 1,
    created_at: "2024-08-12 08:49:01.809053",
    driver: {
      first_name: "James",
      last_name: "Wilson",
      car_seats: 4,
    },
  },
  {
    ride_id: "4",
    user_email: "user1@example.com",
    origin_address: "Okayama, Japan",
    destination_address: "Osaka, Japan",
    origin_latitude: 34.655531,
    origin_longitude: 133.919795,
    destination_latitude: 34.693725,
    destination_longitude: 135.502254,
    ride_time: 159,
    fare_price: 7900.0,
    payment_status: "paid",
    driver_id: 3,
    created_at: "2024-08-12 18:43:54.297838",
    driver: {
      first_name: "Michael",
      last_name: "Johnson",
      car_seats: 4,
    },
  },
];

export default function Page() {
  const { user } = useUser();
  const [loading, setloading] = useState(true);

  const handleSignOut = () => {};

  const handleDestinationPress = () => {};

  return (
    <SafeAreaView className="bg-general-500 w-full h-full flex- justify-center items-center">
      <FlatList
        data={recentRides?.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: "100%",
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View className="flex flex-col items-center justify-center">
            {loading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <>
                <Image
                  source={images.noResult}
                  className="w-40 h-40"
                  alt="No rides found"
                  resizeMode="contain"
                />
                <Text className="text-xl font-bold text-center mt-5">
                  No recent rides found
                </Text>
              </>
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <View>
            <View className="py-5 flex flex-row justify-between items-center">
              <Text className="text-2xl font-JakartaExtraBold">
                Ryde
              </Text>
              <TouchableOpacity onPress={handleSignOut}>
                <Image source={icons.out} className="w-6 h-6" />
              </TouchableOpacity>
            </View>
            <GoogleTextInput
              icon={icons.search}
              containerStyle="bg-white shadow-md shadow-neutral-300"
              handlePress={handleDestinationPress}
            />
            <>
              <Text className="text-xl font-JakartaBold my-3">
                Your Current Location
              </Text>
              <View className="flex flex-row items-center bg-transparent h-[300px]">
                {/* Custom Map component here */}
              </View>
            </>
            <Text className="text-xl font-JakartaBold my-3">
               Recent Rides
              </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
