const datastore = require('@google-cloud/datastore')({ namespace: 'lillie-clocoss2' });

const kind = 'files';

function key(id) {
  return datastore.key([kind, id]);
}

module.exports.list = async (id) => {
  let [data] = await datastore.createQuery(kind).select('name').order('name').run();
  data = data.map((val) => val.name);
  return data;
};

module.exports.get = async (id) => {
  const [data] = await ds.get(key(id));
  if (data && data.val) return data.val;
  return '';
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