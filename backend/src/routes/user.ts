import { bindings } from 'src/bindings';
import { UserService } from 'src/logic/UserService';
import { errorOutput, successOutput } from 'src/util/lambdaHelper';

const user = async () => {
  let service: UserService | null = null;
  try {
    service = bindings.get(UserService);

    const res = await service.getAllUsers();

    return successOutput(res);
  } catch (e) {
    console.log(e);

    return errorOutput(e);
  } finally {
    await service?.cleanup();
  }
};

export default user;
