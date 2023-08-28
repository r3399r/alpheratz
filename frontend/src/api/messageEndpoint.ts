import { PutMessageTypeRequest } from 'src/model/backend/model/api';
import http from 'src/util/http';

const putMessageIdType = async (id: string, data: PutMessageTypeRequest) =>
  await http.put<PutMessageTypeRequest>(`message/${id}/type`, { data });

export default { putMessageIdType };
