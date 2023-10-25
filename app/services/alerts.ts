import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export const alertService = {
  onAlert,
  success,
  error,
  info,
  warn,
  alert,
  clear,
};

export const AlertType = {
  Success: 'Success',
  Error: 'Error',
  Info: 'Info',
  Warning: 'Warning',
} as const;

type AlertType = typeof AlertType[keyof typeof AlertType];

interface Alert {
  id?: string;
  type: AlertType;
  message: string;
  autoClose?: boolean;
}

const alertSubject = new Subject<Alert>();
const defaultId = 'default-alert';


function onAlert(id: string = defaultId): Observable<Alert> {
  return alertSubject.asObservable().pipe(filter((x) => x && x.id === id));
}


function success(message: string, options?: Partial<Alert>): void {
  alert({ ...options, type: AlertType.Success, message });
}

function error(message: string, options?: Partial<Alert>): void {
  alert({ ...options, type: AlertType.Error, message });
}

function info(message: string, options?: Partial<Alert>): void {
  alert({ ...options, type: AlertType.Info, message });
}

function warn(message: string, options?: Partial<Alert>): void {
  alert({ ...options, type: AlertType.Warning, message });
}

function alert(alert: Alert): void {
  alert.id = alert.id || defaultId;
  alert.autoClose = alert.autoClose === undefined ? true : alert.autoClose;
  alertSubject.next(alert);
}


function clear(id: string = defaultId): void {
  alertSubject.next({
      id,
      type: 'Success',
      message: ''
  });
}
