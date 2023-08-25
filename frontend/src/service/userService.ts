import chatEndpoint from 'src/api/chatEndpoint';
import userEndpoint from 'src/api/userEndpoint';
import { GetLogParams } from 'src/model/backend/model/api';
import { dispatch } from 'src/redux/store';
import { finishWaiting, startWaiting } from 'src/redux/uiSlice';

export const getUser = async () => {
  try {
    dispatch(startWaiting());
    const res = await userEndpoint.getUser();

    return res.data;
  } finally {
    dispatch(finishWaiting());
  }
};

export const getLog = async (params: GetLogParams) => {
  try {
    dispatch(startWaiting());
    const res = await chatEndpoint.getLog({
      ...params,
      userId: params.userId === '' ? undefined : params.userId,
    });

    return { log: res.data, count: Number(res.headers['x-pagination-count']) };
  } finally {
    dispatch(finishWaiting());
  }
};
