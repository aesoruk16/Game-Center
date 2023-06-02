// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  observable,
  action,
  makeObservable,
  computed,
  toJS,
  makeAutoObservable,
} from 'mobx';
import {Command} from './index';
import Config from 'react-native-config';
import Log from '../Helper/log';
import LogModel from '../Helper/logModel';
import baseVariables from '../Variable/Base';

export interface GetGameParams {
  platform: string;
  category: string;
  sortBy: string;
}

export class GetGameCommand implements Command<GetGameParams> {
  public pending: boolean = false;
  public selectedPlatform: string = '';
  public error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public async execute(params?: GetGameParams): Promise<void> {
    if (params) {
      this.pending = true;
      baseVariables.isLoadingChange(true);
      try {
        const response = await fetch(
          Config.API_URL +
            `games?platform=${params.platform}&sort-by=${params.sortBy}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        switch (response.status) {
          case 200:
            const data = await response.json();
            baseVariables.platformPickerModalChange(false);
            baseVariables.selectedPlatformChange(params.platform);
            baseVariables.gameListChange(data);
            Log.Logger({
              method: 'GetGame',
              type: LogModel.SUCCESS,
              data: response,
            });
            break;
          case 404:
            Log.Logger({
              method: 'GetGame',
              type: LogModel.ERROR,
              data: response,
            });
            break;
          case 500:
            Log.Logger({
              method: 'GetGame',
              type: LogModel.ERROR,
              data: response,
            });
            break;

          default:
            Log.Logger({
              method: 'GetGame',
              type: LogModel.ERROR,
              data: response,
            });
            baseVariables.modalVisibleChange(true);
            baseVariables.modalDataChange({
              title: 'ERROR',
              content: 'Custom error message code : ' + response.status,
            });
            break;
        }
      } catch (error) {
      } finally {
        this.pending = false;
        baseVariables.isLoadingChange(false);
      }
    }
  }
  public canExecute(params?: GetGameParams): boolean {
    if (params) {
      if (!params.platform) {
        return false;
      }
    }
    return !this.pending;
  }
}
