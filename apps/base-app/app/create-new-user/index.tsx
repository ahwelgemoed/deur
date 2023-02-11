import { faker } from '@faker-js/faker';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import MainLayout from '../../src/components/MainLayout';
import { Member } from '../../src/localDB/entities/members';
import { useLocalSource } from '../../src/localDB/useLocalDatabase';

const newMember = {
  name: faker.name.firstName(),
  birthDay: faker.date.past(),
  clubId: faker.datatype.number({ min: 1, max: 5000 }),
  email: faker.internet.email(),
  isAllowed: true,
};
const CreateNewUser = () => {
  const [repository, createdEntity] = useLocalSource(Member);
  const router = useRouter();

  useEffect(() => {
    async function init() {
      const authors = await repository?.find();
      console.log('authors', authors);
    }
    init();
  }, [repository]);

  const createNewUser = async () => {
    createdEntity.name = newMember.name;
    createdEntity.birthDay = newMember.birthDay.toISOString();
    createdEntity.clubId = String(newMember.clubId);
    createdEntity.email = newMember.email;
    createdEntity.isAllowed = newMember.isAllowed;
    try {
      await repository?.save(createdEntity);
    } catch (error) {
      console.log('🚀error', error);
    }

    const justCreatedPerson = await repository?.findOne({
      where: {
        name: newMember.name,
      },
    });
    // TODO MACH THIS MORE GENERIC
    if (justCreatedPerson?.id) {
      router.push({
        pathname: '/gate-actions/open-gate',
        params: { memberId: justCreatedPerson.id, memberName: justCreatedPerson.name },
      });
    }
  };

  return (
    <MainLayout
      showBackButton
      headerMainText="Create New User"
      headerSubText=""
      body={
        <View className="flex w-full h-full">
          <View className="flex flex-col justify-center items-center">
            <Text className="text-3xl uppercase font-text text-white">👋 {newMember.name}</Text>
          </View>
          <View className="flex flex-row gap-2 justify-center">
            <Text className="text-md uppercase font-tex text-white">Email: {newMember.email}</Text>
            <Text className="text-md uppercase font-text text-white">
              BirthDay: {newMember.birthDay.toDateString()}
            </Text>
          </View>
          <View className="flex flex-row gap-2 justify-center mt-10">
            <Text
              className=" text-white py-4 px-6  font-text text-lg bg-slate-800"
              onPress={createNewUser}
            >
              Create Your Membership
            </Text>
          </View>
        </View>
      }
    />
  );
};

export default CreateNewUser;
