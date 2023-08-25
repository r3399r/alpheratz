import { GetLogResponse } from 'src/model/backend/model/api';
import http from 'src/util/http';

const getLog = async () => await http.get<GetLogResponse>('log');

export default { getLog };
