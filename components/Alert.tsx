'use client'

import { NextPage } from 'next';
import { alertService, AlertType } from '../app/services';
import React from 'react'

interface Alert {
    id?: string;
    type: typeof AlertType;
    message: string;
    autoClose?: boolean;
    itemId?: number;
    keepAfterRouteChange?: boolean;
}

interface Props {
    id?: string;
    fade?: boolean;
}

const Alerts: NextPage<Props> = ({ id = 'default-alert', fade = true }) => {
    const mounted = React.useRef<boolean>(false);
    const [alerts, setAlerts] = React.useState<Alert[]>([]);

    React.useEffect(() => {
        mounted.current = true;

        const subscription = alertService.onAlert(id).subscribe((alert: any) => {
            if (!alert.message) {
                setAlerts((prevAlerts) => {
                    const filteredAlerts = prevAlerts.filter((x) => x.keepAfterRouteChange);
                    return omit(filteredAlerts, 'keepAfterRouteChange');
                });
            } else {
                alert.itemId = Math.random();
                setAlerts((prevAlerts) => [...prevAlerts, alert]);

                if (alert.autoClose) {
                    setTimeout(() => removeAlert(alert), 3000);
                }
            }
        });

        const clearAlerts = () => alertService.clear(id);
        clearAlerts();

        return () => {
            mounted.current = false;
            subscription.unsubscribe();
            clearAlerts();
        };
    }, [id]);

    function omit(arr: Alert[], key: string) {
        return arr.map((obj: any) => {
            const { [key]: omitted, ...rest } = obj;
            return rest;
        });
    }


    function removeAlert(alert: Alert) {
        if (!mounted.current) return;

        if (fade) {
            setAlerts((prevAlerts) =>
                prevAlerts.map((x) =>
                    x.itemId === alert.itemId ? { ...x, fade: true } : x
                )
            );

            setTimeout(() => {
                setAlerts((prevAlerts) =>
                    prevAlerts.filter((x) => x.itemId !== alert.itemId)
                );
            }, 250);
        } else {
            setAlerts((prevAlerts) =>
                prevAlerts.filter((x) => x.itemId !== alert.itemId)
            );
        }
    }

    function alertStyle(alert: Alert): string {
        if (!alert) return '';

        const alertTypeClass: Record<string, any> = {
            [AlertType.Success]: 'bg-green-100 border-l-4 border-green-500 text-green-700',
            [AlertType.Error]: 'bg-red-100 border-l-4 border-red-500 text-red-700',
            [AlertType.Info]: 'bg-blue-100 border-l-4 border-blue-500 text-blue-700',
            [AlertType.Warning]: 'bg-orange-100 border-l-4 border-orange-500 text-orange-700',
        };

        return alertTypeClass[typeof alert.type] || '';
    }

    if (!alerts.length) return null;

    return (
        <div>
            {alerts.map((alert, index) => (
                <div
                    key={index}
                    className={`p-4 ${alertStyle(alert)} w-full h-[100px] absolute top-4 left-4`}
                    role="alert"
                >
                    {alert.type && (
                        <p className="font-bold">{typeof alert.type}</p>
                    )}
                    <p dangerouslySetInnerHTML={{ __html: alert.message }}></p>
                    <a className="close" onClick={() => removeAlert(alert)}>
                        &times;
                    </a>
                    Yayyyyy
                </div>
            ))}
        </div>
    );
};

export default Alerts;
