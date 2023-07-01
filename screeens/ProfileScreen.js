import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { auth } from "../firebase";
import { signOut } from 'firebase/auth';

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();
  const signOutUser = () => {
    signOut(auth).then(() => {
        navigation.replace("Login");
    }).catch(err => {
        console.log(err);
    })
}
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Pressable style={{ marginVertical: 10 }}>
        <Text>Welcome {user.email}</Text>
      </Pressable>
      <Pressable onPress={signOutUser}>
        <Text>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;
