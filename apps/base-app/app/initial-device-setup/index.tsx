import { View, Text, TextInput } from '@deur/design-system';
import { useDeviceState, DeviceSetupData } from '@deur/shared-hooks';
import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import MainLayout from '../../src/components/MainLayout';
import { cloudTrpcApi } from '../../src/contexts/trpc/trpc.provider';

const selectView = 'p-2 m-2 bg-[#0f0f0f] flex rounded-md border-2 border-white';

const InitialSetup = () => {
  const deviceState = useDeviceState();
  const [device, setDevice] = useState<DeviceSetupData>({
    deviceId: uuidv4(),
    deviceTypeId: 0,
    countryId: '',
    locationId: '',
    friendlyName: '',
  });

  const createDeviceMutation = cloudTrpcApi.generatedRoutes.devices.createOneDevices.useMutation();

  useEffect(() => {
    if (createDeviceMutation?.data) {
      deviceState.setState({ ...device, ...createDeviceMutation.data });
    }
  }, [createDeviceMutation.data]);

  const { data: deviceTypes, isLoading: deviceTypesLoading } =
    cloudTrpcApi.generatedRoutes.devicetypes.findManyDeviceTypes.useQuery({});
  const {
    data: counties,
    isLoading: countiesLoading,
    error: countriesError,
  } = cloudTrpcApi.generatedRoutes.country.findManyCountry.useQuery({});

  const { data: locations, isLoading: locationsLoading } =
    cloudTrpcApi.generatedRoutes.location.findManyLocation.useQuery({
      where: {
        countryId: device.countryId,
      },
    });

  const handleSave = async () => {
    createDeviceMutation.mutate({
      data: {
        deviceId: device.deviceId,
        name: device.friendlyName,
        locationId: device.locationId,
        deviceTypeId: device.deviceTypeId.toString(),
      },
    });
  };
  return (
    <MainLayout
      bgColor="#0f0f0f"
      headerMainText="Setup New Device"
      headerSubText="Initial Device Setup"
      body={
        <>
          <View
            className="p-20"
            style={{
              flex: 1,
            }}
          >
            <View className={selectView}>
              {countiesLoading || countriesError ? (
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
                    {counties?.map((country: any) => (
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
            <View className={selectView}>
              <Text className="uppercase font-text text-xl text-white pt-4 text-center">
                Chose a Location in {counties?.find((c: any) => c.id === device.countryId)?.name}
              </Text>
              {!locations ? (
                ''
              ) : locationsLoading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <>
                  <Picker
                    // @ts-ignore
                    className="p-0 m-0"
                    itemStyle={{ color: 'white' }}
                    selectedValue={device.locationId}
                    onValueChange={(itemValue, itemIndex) =>
                      setDevice({ ...device, locationId: itemValue as string })
                    }
                  >
                    <Picker.Item label={'Empty'} value={''} />
                    {locations?.map((location: any) => (
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
            <View className={selectView}>
              <Text className="uppercase font-text text-xl text-white pt-4 text-center">
                Choose a Device Type
              </Text>
              {deviceTypesLoading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <>
                  <Picker
                    // @ts-ignore
                    className="p-0 m-0"
                    itemStyle={{ color: 'white' }}
                    selectedValue={device.deviceTypeId}
                    onValueChange={(itemValue, itemIndex) =>
                      setDevice({ ...device, deviceTypeId: itemValue as unknown as number })
                    }
                  >
                    <Picker.Item label={'Empty'} value={''} />
                    {deviceTypes?.map((deviceType: any) => (
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
            <View className={selectView}>
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
        </>
      }
    />
  );
};

export default InitialSetup;
