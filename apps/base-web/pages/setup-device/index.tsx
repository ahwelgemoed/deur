import { useDeviceState } from '@deur/shared-hooks';

const SetupDevice = () => {
  const t = useDeviceState();

  return (
    <div>
      SET UP DEVICE
      <button
        onClick={() => {
          t.setState({
            deviceId: Math.random().toString(),
          });
        }}
      >
        Press
      </button>
    </div>
  );
};

export default SetupDevice;
