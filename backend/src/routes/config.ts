import { bindings } from 'src/bindings';
import { ConfigService } from 'src/logic/ConfigService';
import { errorOutput, successOutput } from 'src/util/lambdaHelper';

const config = async () => {
  let service: ConfigService | null = null;
  try {
    service = bindings.get(ConfigService);

    const res = await service.getConfig();

    return successOutput(res);
  } catch (e) {
    console.log(e);

    return errorOutput(e);
  }
};

export default config;
