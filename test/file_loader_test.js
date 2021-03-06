import chai from 'chai';
import path from 'path';
import fileLoader from '../src/file_loader';
import clientType from './graphql/types/client_type';
import productType from './graphql/types/product_type';
import vendorType from './graphql/types/vendor_type';
import personEntityType from './graphql/types/person_entity_type';
import personSearchType from './graphql/types/person_search_type';

const assert = chai.assert;

describe('fileLoader', () => {
  describe('with default options', () => {
    it('loads all files from specified folder', async () => {
      const types = [clientType, personEntityType, personSearchType, productType, vendorType];
      const loadedTypes = fileLoader(path.join(__dirname, 'graphql/types'));

      assert.deepEqual(loadedTypes, types);
    });
  });
});
