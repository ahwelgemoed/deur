import { MainLayout } from '@deur/design-system';
import { DeviceSetupData, useDeviceState } from '@deur/shared-hooks';
import { useEffect, useState } from 'react';

import { trpcCloud } from '../../utils/trpc';

const SetUpDevice = () => {
  const deviceState = useDeviceState();

  const [device, setDevice] = useState<DeviceSetupData>({
    deviceId: Date.now().toString(),
    deviceTypeId: 0,
    countryId: '',
    locationId: '',
    friendlyName: '',
  });

  const { data: locations, refetch: fetchLocations } =
    trpcCloud.generatedRoutes.location.findManyLocation.useQuery(
      {
        where: {
          countryId: device.countryId,
        },
      },
      {
        enabled: false,
      }
    );

  const createDeviceMutation = trpcCloud.generatedRoutes.devices.createOneDevices.useMutation();

  const handleSave = async () => {
    createDeviceMutation.mutate({
      data: {
        lastOnline: new Date(),
        isOnline: true,
        deviceId: device.deviceId,
        name: device.friendlyName,
        locationId: device.locationId,
        deviceTypeId: device.deviceTypeId.toString(),
      },
    });
  };

  useEffect(() => {
    if (createDeviceMutation?.data) {
      deviceState.setState({ ...device });
    }
  }, [createDeviceMutation.data]);

  useEffect(() => {
    if (device.countryId) {
      console.log('fetching locations');
      fetchLocations();
    }
  }, [device.countryId, fetchLocations]);

  const { data: deviceTypes } = trpcCloud.generatedRoutes.devicetypes.findManyDeviceTypes.useQuery(
    {}
  );

  const { data: counties } = trpcCloud.generatedRoutes.country.findManyCountry.useQuery({});

  return (
    <div>
      <MainLayout
        bgColor="bg-dark"
        headerMainText="Setup New Device"
        headerSubText="Initial Device Setup for Kiosk Mode"
        body={
          <div className="flex justify-center flex-col w-full items-center pt-10">
            <select
              className="select w-full max-w-xs my-4"
              onChange={(e) => {
                setDevice({ ...device, countryId: e.target.value });
              }}
            >
              <option disabled selected>
                Select County
              </option>
              {counties?.map((county) => (
                <option key={county.id} value={county.id}>
                  {county.name}
                </option>
              ))}
            </select>
            <select
              className="select w-full max-w-xs my-4"
              onChange={(e) => {
                setDevice({ ...device, locationId: e.target.value });
              }}
            >
              <option disabled selected>
                Select Location
              </option>
              {locations?.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
            <select
              className="select w-full max-w-xs  my-4"
              onChange={(e) => {
                setDevice({ ...device, deviceTypeId: e.target.value as unknown as number });
              }}
            >
              <option disabled selected>
                Select Device Type
              </option>
              {deviceTypes?.map((deviceType) => (
                <option key={deviceType.id} value={deviceType.id}>
                  {deviceType.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Friendly Name"
              className="input w-full max-w-xs my-4"
              onChange={(e) => {
                setDevice({ ...device, friendlyName: e.target.value });
              }}
            />

            <button className="btn my-10" onClick={handleSave}>
              Save
            </button>

            <div className="bg-[#efefef] rounded p-10 max-w-lg">
              {JSON.stringify(device, null, 2)}
            </div>
          </div>
        }
      />
    </div>
  );
};

export default SetUpDevice;
