import { GetUserResponse } from 'src/model/backend/model/api';
import http from 'src/util/http';

const getUser = async () => await http.get<GetUserResponse>('user');

export default { getUser };
