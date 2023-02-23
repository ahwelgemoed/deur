import { Header } from '@deur/design-system';
import { useDeviceState } from '@deur/shared-hooks';

const SetupDevice = () => {
  const t = useDeviceState();

  return (
    <div>
      <Header classNames="" isBig={true}>
        Welcome to @deur
      </Header>
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
