import { bindings } from 'src/bindings';
import { UserService } from 'src/logic/UserService';
import { LambdaEvent } from 'src/model/Lambda';

const user = async (event: LambdaEvent) => {
  const service = bindings.get(UserService);

  switch (event.httpMethod) {
    case 'GET':
      return await service.getAllUsers();
  }

  throw new Error('unexpected httpMethod');
};

export default user;
