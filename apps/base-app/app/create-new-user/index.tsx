import { MainLayout, View, Text } from '@deur/design-system';
import { faker } from '@faker-js/faker';
import { useNavigation, useRouter } from 'expo-router';
import React, { useEffect } from 'react';

import { mergedTrpcApi } from '../../src/contexts/trpc/trpc.provider';

const newMember = {
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  birthDay: faker.date.past(),
  email: faker.internet.email(),
  isAllowed: true,
};
const CreateNewUser = () => {
  const createUserMutation = mergedTrpcApi.local.createMemberRoute.createMember.useMutation();
  const router = useRouter();

  const createNewUser = async () => {
    try {
      createUserMutation.mutate({
        name: newMember.name,
        birthDay: newMember.birthDay,
        email: newMember.email,
        isAllowed: newMember.isAllowed,
      });
      // await repository?.save(createdEntity);
    } catch (error) {
      console.log('🚀error', error);
    }
  };

  useEffect(() => {
    if (createUserMutation.data?.success) {
      router.push({
        pathname: '/gate-actions/open-gate',
        params: { memberId: newMember.id, memberName: newMember.name },
      });
    }
  }, [createUserMutation]);

  return (
    <MainLayout
      useNavigationHook={useNavigation}
      bgColor="bg-yellow"
      showBackButton
      headerMainText="Create New User"
      headerSubText=""
      body={
        <View className="flex w-full h-full">
          <View className="flex flex-col justify-center items-center">
            <Text className="text-3xl uppercase font-text">👋 {newMember.name}</Text>
          </View>
          <View className="flex flex-row gap-2 justify-center">
            <Text className="text-md uppercase font-text">Email: {newMember.email}</Text>
            <Text className="text-md uppercase font-text ">
              BirthDay: {newMember.birthDay.toDateString()}
            </Text>
          </View>
          <View className="flex flex-row gap-2 justify-center mt-10 ">
            <Text className="py-4 px-6 font-text text-lg bg-primary" onPress={createNewUser}>
              Create Your Membership
            </Text>
          </View>
        </View>
      }
    />
  );
};

export default CreateNewUser;
