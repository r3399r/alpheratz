import { GetConfigResponse } from 'src/model/backend/model/api';
import http from 'src/util/http';

const getConfig = async () => await http.get<GetConfigResponse>('config');

export default { getConfig };
