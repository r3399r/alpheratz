import { bindings } from 'src/bindings';
import { ConfigService } from 'src/logic/ConfigService';
import { PutConfigRequest } from 'src/model/api';
import { LambdaEvent } from 'src/model/Lambda';

const config = async (event: LambdaEvent) => {
  const service = bindings.get(ConfigService);

  switch (event.httpMethod) {
    case 'GET':
      return await service.getConfig();
    case 'PUT':
      if (!event.body) throw new Error('body should not be empty');

      return await service.setConfig(
        JSON.parse(event.body) as PutConfigRequest
      );
  }

  throw new Error('unexpected httpMethod');
};

export default config;
