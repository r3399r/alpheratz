import { bindings } from 'src/bindings';
import { LogService } from 'src/logic/LogService';
import { GetLogParams } from 'src/model/api';
import { LambdaEvent } from 'src/model/Lambda';

const log = async (event: LambdaEvent) => {
  const service = bindings.get(LogService);

  switch (event.httpMethod) {
    case 'GET':
      return await service.getLogs(
        event.queryStringParameters as GetLogParams | null
      );
  }

  throw new Error('unexpected httpMethod');
};

export default log;
