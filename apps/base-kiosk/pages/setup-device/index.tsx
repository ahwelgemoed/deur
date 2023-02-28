import { trpc, trpcLocal } from '../../utlis/trpc';

const SetUpDevice = () => {
  const y = trpc.generatedRoutes.devicetypes.findManyDeviceTypes.useQuery({});

  console.log('y', y.data);

  return <div>SetUpDevice</div>;
};

export default SetUpDevice;
