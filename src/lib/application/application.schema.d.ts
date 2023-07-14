export interface ApplicationOptions {
  /**
   * Nest application name.
   */
  // NOTE: We could have a `number` here due to this issue: https://github.com/nestjs/nest-cli/issues/1519
  name: string | number;
  /**
   * Nest application destination directory.
   */
  directory?: string;
  /**
   * Application language.
   */
  language?: string;
}
