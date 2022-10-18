import { readProjectConfiguration, Tree } from '@nrwl/devkit';
import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';

import generator from './generator';
import { UtilLibGeneratorSchema } from './schema';

describe('util-lib generator', () => {
  let appTree: Tree;
  const options: UtilLibGeneratorSchema = {
    name: 'test',
    directory: 'api',
  };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'api-util-test');
    expect(config).toBeDefined();
    expect(config).toMatchObject({
      name: 'api-util-test',
      root: 'libs/api/util-test',
      tags: ['scope:api', 'type:util'],
    });
  });
});
