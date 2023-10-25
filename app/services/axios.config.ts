import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { msg } from '../utils/http-messages';
import { alertService } from '.';

const BASE_URL = process.env.base_url;


export class API {
  aService: AxiosInstance;

    constructor() {
    const service = axios.create();
    service.interceptors.request.use(
      (config: AxiosRequestConfig | any) => {
        config.headers['Content-Type'] = 'application/json; charset=utf-8';
        config.headers['Access-Control-Allow-Origin'] = '*';
        config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS';
        config.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, X-Auth-Token, Accept, Authorization';
        config.headers['Accept'] = 'application/json';
        config.headers['Cache-Control'] = 'max-age=31536000';

        return config;
      },
      (error) => Promise.reject(error),
    );
    service.interceptors.response.use(
      this.handleSuccessResponse,
      this.handleErrorResponse,
    );

    this.aService = service;
  }

  handleSuccessResponse(
    response: Record<string, any>,
  ): any {
    switch (response.data.status) {
      case 201:
        alertService.success(response.data.message);
        break;
      case 200:
        return response;
      default:
        alertService.success(`${response.data.status}: ${response.data.message}`);
        break;
    }
    return Promise.resolve(response);
  }

  handleErrorResponse = (error: Record<string, any>): Promise<void> => {
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          alertService.error(
            `${
              error.response.data.message || msg.ACTION_UNAUTHORIZED
            }`,
          );
              window.location.href = '/';
          break;
        case 403:
          alertService.error(
            `${
              error.response.data.message || msg.ACTION_UNAUTHORIZED
            }`,
          );
          window.location.href = '/';
          break;
        case 404:
          alertService.error(
            ` ${
              error.response.data.message || msg.ACTION_NOT_FOUND
            }`,
          );
          break;
        case 408:
          alertService.error(
            `${msg.ACTION_REQUEST_TIMED_OUT}`,
          );
          break;
        case 409:
          alertService.warn(
            `${error.response.data.message}`,
          );
          break;
        case 500:
          alertService.error(
            `${
              error.response.data.message || msg.ACTION_INTERNAL_SERVER
            }`,
          );
          break;
        case 502:
          alertService.warn(`${msg.ACTION_BAD_GATEWAY}`);
          break;
        case 503:
          alertService.warn(
            `${msg.ACTION_SERVICE_UNAVAILABLE}`,
          );
          break;
        case 507:
          alertService.warn(
            `${msg.ACTION_INSUFFICIENT_STORAGE}`,
          );
          break;
        case 400:
          alertService.error(
            `${error.response.data.message}`,
          );
          break;
        default:
          alertService.error(`${error.response.statusText}`);
          break;
      }
    }
    return Promise.reject(error);
  };

  get(
    path: string,
    callback: (args: Array<Record<string, any>> | []) => void,
  ): Promise<any> {
    return this.aService
      .request({
        method: 'GET',
        url: `${BASE_URL}${path}`,
        responseType: 'json',
      })
      .then((response: Record<string, any>) => callback(response.data));
  }

  patch(
    path: string,
    payload: Record<string, any>,
    callback: (args: Record<string, any>) => void,
  ): Promise<any> {
    return this.aService
      .request({
        method: 'PATCH',
        url: `${BASE_URL}${path}`,
        responseType: 'json',
        data: payload,
      })
      .then((response: Record<string, any>) => callback(response.data));
  }

  post(
    path: string,
    payload: Record<string, any>,
    callback: (args: Record<string, any>) => void,
  ): Promise<any> {
    return this.aService
      .request({
        method: 'POST',
        url: `${BASE_URL}${path}`,
        responseType: 'json',
        data: payload,
      })
      .then((response: Record<string, any>) => callback(response.data));
  }

  put(
    path: string,
    payload: Record<string, any>,
    callback: (args: Record<string, any>) => void,
  ): Promise<any> {
    return this.aService
      .request({
        method: 'PUT',
        url: `${BASE_URL}${path}`,
        responseType: 'json',
        data: payload,
      })
      .then((response: Record<string, any>) => callback(response.data));
  }
}
