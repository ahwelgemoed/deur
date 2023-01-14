import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Text, ScrollView, ActivityIndicator, TextInput, View, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import MainLayout from '../../src/components/MainLayout';
import {
  DEVICE_STORAGE_ID,
  TDeviceSetupData,
  useDeviceSetupState,
} from '../../src/contexts/SetupDevice.Context';
import { createDevice } from '../../src/utils/mutations/device-mutations';
import { getAllCountries } from '../../src/utils/queries/country-queries';
import { getAllDeviceTypes } from '../../src/utils/queries/device-queries';
import { getLocationByCountry } from '../../src/utils/queries/location-queries';

const InitialSetup = () => {
  const [device, setDevice] = useState<TDeviceSetupData>({
    deviceId: uuidv4(),
    deviceTypeId: 0,
    countryId: '',
    locationId: '',
    gps: {
      lat: 0,
      long: 0,
    },
    friendlyName: '',
  });

  const mutation = useMutation({
    mutationFn: () => {
      return createDevice(device);
    },
  });

  useEffect(() => {
    if (mutation?.data?.data) {
      AsyncStorage.setItem(DEVICE_STORAGE_ID, JSON.stringify(mutation.data.data));
      getDeviceSetupData();
    }
  }, [mutation.data]);

  const { getDeviceSetupData } = useDeviceSetupState();
  const { data: deviceTypes, isLoading: deviceTypesLoading } = useQuery({
    queryKey: ['getDeviceTypes'],
    queryFn: () => {
      const restDAta = getAllDeviceTypes();
      return restDAta;
    },
  });
  const { data: counties, isLoading: countiesLoading } = useQuery({
    queryKey: ['getCountry'],
    queryFn: () => {
      const restDAta = getAllCountries();
      return restDAta;
    },
  });
  const { data: locations, isLoading: locationsLoading } = useQuery({
    queryKey: ['getLocation'],
    queryFn: () => {
      const restDAta = getLocationByCountry(device.countryId);
      return restDAta;
    },
    enabled: !!device.countryId,
  });

  const handleSave = async () => {
    mutation.mutate();
  };
  return (
    <MainLayout
      headerMainText={`Setup New Device`}
      headerSubText="Initial Device Setup"
      body={
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View className="w-[80%]">
            <Text className="uppercase font-body text-xl text-white">
              Here Is the reason we could not let you in today...
            </Text>
            <View className="p-2 m-2 bg-[#0f0f0f] flex  rounded-md">
              {countiesLoading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <>
                  <Text className="uppercase font-text text-xl text-white pt-4 text-center">
                    Chose a country
                  </Text>
                  <Picker
                    itemStyle={{ color: 'white' }}
                    selectedValue={device.countryId}
                    onValueChange={(itemValue, itemIndex) => {
                      setDevice({ ...device, countryId: itemValue as string, locationId: '' });
                    }}
                  >
                    <Picker.Item label={'Empty'} value={''} />
                    {counties?.counties?.map((country: any) => (
                      <Picker.Item
                        key={country.id}
                        label={`${country.name} (${country.code})`}
                        value={country.id}
                      />
                    ))}
                  </Picker>
                </>
              )}
            </View>
            <View className="p-2 m-2 bg-[#0f0f0f] flex rounded-md">
              <Text className="uppercase font-text text-xl text-white pt-4 text-center">
                Chose a Location in{' '}
                {counties?.counties?.find((c: any) => c.id === device.countryId)?.name}
              </Text>
              {!locations ? (
                ''
              ) : locationsLoading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <>
                  <Picker
                    className="p-0 m-0"
                    itemStyle={{ color: 'white' }}
                    selectedValue={device.locationId}
                    onValueChange={(itemValue, itemIndex) =>
                      setDevice({ ...device, locationId: itemValue as string })
                    }
                  >
                    <Picker.Item label={'Empty'} value={''} />
                    {locations?.locations?.map((location: any) => (
                      <Picker.Item
                        key={location.id}
                        label={`${location.name}`}
                        value={location.id}
                      />
                    ))}
                  </Picker>
                </>
              )}
            </View>
            <View className="p-2 m-2 bg-[#0f0f0f] flex rounded-md">
              <Text className="uppercase font-text text-xl text-white pt-4 text-center">
                Choose a Device Type
              </Text>
              {deviceTypesLoading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <>
                  <Picker
                    className="p-0 m-0"
                    itemStyle={{ color: 'white' }}
                    selectedValue={device.deviceTypeId}
                    onValueChange={(itemValue, itemIndex) =>
                      setDevice({ ...device, deviceTypeId: itemValue as unknown as number })
                    }
                  >
                    <Picker.Item label={'Empty'} value={''} />
                    {deviceTypes?.deviceTypes?.map((deviceType: any) => (
                      <Picker.Item
                        key={deviceType.id}
                        label={`${deviceType.name}`}
                        value={deviceType.id}
                      />
                    ))}
                  </Picker>
                </>
              )}
            </View>
            <View className="p-2 m-2 bg-[#0f0f0f] flex ">
              <Text className="uppercase font-text text-xl text-white pt-4 text-center">
                Friendly Name
              </Text>
              <TextInput
                className=" text-white border-neutral-800 rounded-md p-2"
                style={{ height: 40, borderWidth: 1, color: 'white' }}
                placeholder="Friendly Name"
                onChangeText={(newText) => setDevice({ ...device, friendlyName: newText })}
                defaultValue={device.friendlyName}
              />
            </View>
          </View>
          <View className="p-2 m-2 bg-[#0f0f0f] flex justify-center items-center">
            <Button title="Save Device Settings" onPress={handleSave} />
          </View>

          <View className="p-2 m-2 bg-[#0f0f0f] h-[250px]">
            <Text className="text-white p-2">{JSON.stringify(device, null, 2)}</Text>
          </View>
        </ScrollView>
      }
    />
  );
};

export default InitialSetup;
