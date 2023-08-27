import { GetConfigResponse, PutConfigRequest } from 'src/model/backend/model/api';
import http from 'src/util/http';

const getConfig = async () => await http.get<GetConfigResponse>('config');

const putConfig = async (data: PutConfigRequest) =>
  await http.put<void, PutConfigRequest>('config', { data });

export default { getConfig, putConfig };
