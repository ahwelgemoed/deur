import { Header } from '@deur/design-system';
import { useDeviceState } from '@deur/shared-hooks';

const SetupDevice = () => {
  const t = useDeviceState();

  return (
    <div>
      SET UP DEVICE
      <Header classNames="bg-red-500">Hello</Header>
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
