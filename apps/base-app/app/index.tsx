import { Link } from 'expo-router';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { SharedElement, SharedElementTransition, nodeFromRef } from 'react-native-shared-element';

// import MainLayout from '../src/components/MainLayout';

let startAncestor;
let startNode;
let endAncestor;
let endNode;

export default function Page() {
  const [showIdlePage, setShowIdlePage] = useState(true);

  if (showIdlePage) {
    return (
      <View
        ref={(ref) => (startAncestor = nodeFromRef(ref))}
        className="bg-black w-full h-full flex justify-center p-4"
      >
        <SharedElement onNode={(node) => (startNode = node)}>
          <Text className="text-white font-body text-[100px]">Welcome</Text>
        </SharedElement>
        <View className="text-center flex content-center">
          <Text className="text-[#DDDDE1] font-text text-[40px]">
            Press to Interact
            <View className="flex flex-row gap-2">
              <View className="bg-[#73EFFC] w-10 h-10 rounded-full"></View>
              <View className="bg-[#701BDC] w-10 h-10 rounded-full"></View>
              <View className="bg-[#F5C045] w-10 h-10 rounded-full"></View>
              <View className="bg-[#EA3877] w-10 h-10 rounded-full"></View>
            </View>
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View ref={(ref) => (endAncestor = nodeFromRef(ref))} className="bg-black w-full h-full flex ">
      <SharedElement onNode={(node) => (endNode = node)}>
        <Text className="text-white font-body text-[100px]">Welcome</Text>
      </SharedElement>
      <Text className="text-[#DDDDE1] font-text text-[40px]"></Text>
      <View className="w-full flex justify-center items-center h-full">
        <View className="bg-white flex h-full rounded-tl-3xl rounded-tr-3xl p-10 m-10">
          <View className="flex flex-row w-full justify-center gap-2  items-center m-2">
            <View className="rounded-2xl bg-[#EFEFF5] flex justify-center h-[200px] flex-[50%] p-4">
              <Link href="/create-new-user" className="m-2 h-full w-full">
                <View className="bg-[#73EFFC] w-10 h-10 rounded-full"></View>
                <Text className={'text-black font-body text-[40px] uppercase w-[80%]'}>
                  Create Account
                </Text>
              </Link>
            </View>
            <View className="rounded-2xl bg-[#EFEFF5] flex justify-center h-[200px] flex-[50%] p-4 items-center">
              <Link href="/create-new-user" className="m-2 h-full w-full items-center">
                <View className="bg-[#701BDC] w-10 h-10 rounded-full"></View>
                <Text className={'text-black font-body text-[40px] uppercase w-[80%]'}>
                  Gate Sent Me
                </Text>
              </Link>
            </View>
          </View>
          <View className="flex flex-row w-full justify-center gap-2  items-center m-2">
            <View className="rounded-2xl bg-[#EFEFF5] flex justify-center h-[200px] flex-[50%] p-4">
              <Link href="/create-new-user" className="m-2 h-full w-full">
                <View className="bg-[#F5C045] w-10 h-10 rounded-full"></View>
                <Text className={'text-black font-body text-[40px] uppercase w-[80%]'}>
                  Forgot Card
                </Text>
              </Link>
            </View>
            <View className="rounded-2xl bg-[#EFEFF5] flex justify-center h-[200px] flex-[50%] p-4 items-center">
              <Link href="/create-new-user" className="m-2 h-full w-full items-center">
                <View className="bg-[#EA3877] w-10 h-10 rounded-full"></View>
                <Text className={'text-black font-body text-[40px] uppercase w-[80%]'}>
                  Gate Sent Me
                </Text>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
