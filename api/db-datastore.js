const datastore = require('@google-cloud/datastore')({ namespace: 'lillie-clocoss2' });

const kind = 'files';

function key(id) {
  return datastore.key([kind, id]);
}

module.exports.get = async (id) => {
  const [data] = await datastore.get(key(id));
  if (data && data.val) return data.val;
  return '';
};

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
      return `${val}`;
};


module.exports.put = async (id, val) => {
  const entity = {
    key: key(id),
    data: { name: id, val },
  }
  await datastore.save(entity);
};

module.exports.delete = async(id) => {
  const [data] = await datastore.delete(key(id));
  // check if updated.
  if(data.indexUpdates > 0) return 'ok';
  return '0';
}
