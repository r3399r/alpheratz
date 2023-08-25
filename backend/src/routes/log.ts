import { bindings } from 'src/bindings';
import { LogService } from 'src/logic/LogService';
import { GetLogParams } from 'src/model/api';
import { errorOutput, successOutput } from 'src/util/lambdaHelper';

const log = async (params: GetLogParams | null) => {
  let service: LogService | null = null;
  try {
    service = bindings.get(LogService);

    const res = await service.getLogs(params);

    return successOutput(res);
  } catch (e) {
    console.log(e);

    return errorOutput(e);
  } finally {
    await service?.cleanup();
  }
};

export default log;
