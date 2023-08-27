import configEndpoint from 'src/api/configEndpoint';
import { Config } from 'src/model/backend/model/Config';
import { dispatch } from 'src/redux/store';
import { finishWaiting, startWaiting } from 'src/redux/uiSlice';

export const getConfig = async () => {
  try {
    dispatch(startWaiting());
    const res = await configEndpoint.getConfig();

    return res.data;
  } finally {
    dispatch(finishWaiting());
  }
};

export const setConfig = async (data: Config) => {
  try {
    dispatch(startWaiting());
    await configEndpoint.putConfig(data);
  } finally {
    dispatch(finishWaiting());
  }
};
