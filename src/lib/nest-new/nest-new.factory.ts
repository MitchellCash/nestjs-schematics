import {
  apply,
  empty,
  mergeWith,
  noop,
  Rule,
  schematic
} from '@angular-devkit/schematics';
import { NestNewOptions } from './nest-new.schema';
import { ApplicationOptions } from '../application/application.schema';
import { WorkspaceOptions } from '../workspace/workspace.schema';

export function main(options: NestNewOptions): Rule {
  const workspaceOptions: WorkspaceOptions = {
    name: options.name,
    author: options.author,
    description: options.description,
    directory: options.directory,
    strict: options.strict,
    version: options.version,
    language: options.language,
    packageManager: options.packageManager,
    dependencies: options.dependencies,
    devDependencies: options.devDependencies
  }

  const applicationOptions: ApplicationOptions = {
    name: options.name,
    directory: options.directory,
    language: options.language
  }

  return mergeWith(
    apply(empty(), [
      schematic('workspace', workspaceOptions),
      options.createApplication ? schematic('application', applicationOptions) : noop,
    ]),
  )
}
