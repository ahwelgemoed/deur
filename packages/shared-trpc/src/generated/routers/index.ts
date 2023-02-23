import { t } from './helpers/createRouter';
import { countriesRouter } from './Country.router';
import { usersRouter } from './User.router';
import { visitstolocationsRouter } from './VisitsToLocation.router';
import { locationsRouter } from './Location.router';
import { devicesRouter } from './Devices.router';
import { devicetypesRouter } from './DeviceTypes.router';

export const appRouter = t.router({
  country: countriesRouter,
  user: usersRouter,
  visitstolocation: visitstolocationsRouter,
  location: locationsRouter,
  devices: devicesRouter,
  devicetypes: devicetypesRouter,
});
