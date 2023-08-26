import axios from 'axios';
import { injectable } from 'inversify';
import { Config } from 'src/model/Config';

/**
 * Service class for Config
 */
@injectable()
export class ConfigService {
  public async getConfig() {
    const res = await axios.get<Config>(
      `https://${process.env.PROJECT}-${process.env.ENVR}.s3.ap-southeast-1.amazonaws.com/public/config.json`
    );

    return res.data;
  }
}
