import { S3 } from 'aws-sdk';
import { inject, injectable } from 'inversify';
import { Config } from 'src/model/Config';

/**
 * Service class for Config
 */
@injectable()
export class ConfigService {
  @inject(S3)
  private readonly s3!: S3;

  public async getConfig(): Promise<Config> {
    const res = await this.s3
      .getObject({
        Bucket: 'yue-public-bucket',
        Key: `${process.env.PROJECT}-config.json`,
      })
      .promise();

    return JSON.parse(res.Body?.toString('utf-8') ?? '{}') as Config;
  }

  public async setConfig(data: Config) {
    await this.s3
      .putObject({
        Bucket: 'yue-public-bucket',
        Key: `${process.env.PROJECT}-config.json`,
        Body: JSON.stringify(data),
        ContentType: 'application/json',
      })
      .promise();
  }
}
