import moment from 'moment/moment';
import 'moment/locale/uk'; // without this line it didn't work
moment.locale('ukraine');
export const time = moment;
