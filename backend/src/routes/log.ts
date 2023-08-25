import { bindings } from 'src/bindings';
import { LogService } from 'src/logic/LogService';
import { errorOutput, successOutput } from 'src/util/lambdaHelper';

const log = async () => {
  let service: LogService | null = null;
  try {
    service = bindings.get(LogService);

    const res = await service.getLogs();

    return successOutput(res);
  } catch (e) {
    console.log(e);

    return errorOutput(e);
  } finally {
    await service?.cleanup();
  }
};

export default log;
