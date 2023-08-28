import { bindings } from 'src/bindings';
import { MessageService } from 'src/logic/MessageService';
import { PutMessageTypeRequest } from 'src/model/api';
import { LambdaEvent } from 'src/model/Lambda';

const message = async (event: LambdaEvent) => {
  const service = bindings.get(MessageService);

  switch (event.httpMethod) {
    case 'PUT':
      if (!event.pathParameters)
        throw new Error('pathParameters should not be empty');
      if (!event.body) throw new Error('body should not be empty');

      return await service.updateMessageType(
        event.pathParameters.id,
        JSON.parse(event.body) as PutMessageTypeRequest
      );
  }

  throw new Error('unexpected httpMethod');
};

export default message;
