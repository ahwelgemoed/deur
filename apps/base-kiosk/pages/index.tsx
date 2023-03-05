import { MainLayout } from '@deur/design-system';

export default function Web() {
  return (
    <MainLayout
      bgColor="bg-dark"
      headerMainText="Welcome to Location"
      headerSubText="Initial Device Setup for Kiosk Mode"
      body={<>welcome</>}
    />
  );
}
