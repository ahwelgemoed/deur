import { Header } from '@deur/design-system';
import { useDeviceState } from '@deur/shared-hooks';

const SetupDevice = () => {
  const t = useDeviceState();

  return (
    <div>
      <Header classNames="" isBig={true}>
        Setup Device
      </Header>
    </div>
  );
};

export default SetupDevice;
