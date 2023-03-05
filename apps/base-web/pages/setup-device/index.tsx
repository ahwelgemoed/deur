import { Header } from '@deur/design-system';
import { useDeviceState } from '@deur/shared-hooks';

const SetupDevice = () => {
  const t = useDeviceState();
  console.log('t', t);

  return (
    <div>
      <Header classNames="" isBig={true}>
        Setup Devicesadasd
      </Header>
    </div>
  );
};

export default SetupDevice;
