//requiring cloud datastore with given name
const datastore = require('@google-cloud/datastore')({ namespace: 'lillie-clocoss2' });

const kind = 'fileCount';

//returning the datastore key
function key(id) {
  return datastore.key([kind, id]);
}

//returning name
module.exports.get = async (id) => {
  const [data] = await datastore.get(key(id));
  if (data && data.val) return `${data.val}`;
  return '0';
};

//overwriting the current value and updating counter.
module.exports.put = async (id, val) => {
  const entity = {
    key: key(id),
    data: { name: id, val },
  }
  await datastore.save(entity);
};

//adding values on top of the existing name, function replaces value with total when there is existing value.
module.exports.post = async (id, val) => {
    const [data] = await datastore.get(key(id));
    if (data && data.val) {
        val = parseInt(val) + parseInt(data.val);
    }
      const entity = {
        key: key(id),
        data: { name: id, val },
      }
      await datastore.save(entity);
  //returning the total value
      return `${val}`;
};

//completely removes the key
module.exports.delete = async(id) => {
  const [data] = await datastore.delete(key(id));
  // check if updated.
  if(data.indexUpdates > 0) return 'ok';
  return '0';
}
