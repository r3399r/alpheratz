import { GetLogParams, GetLogResponse } from 'src/model/backend/model/api';
import http from 'src/util/http';

const getLog = async (params: GetLogParams) => await http.get<GetLogResponse>('log', { params });

export default { getLog };
