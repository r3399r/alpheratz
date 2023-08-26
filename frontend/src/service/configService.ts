import configEndpoint from 'src/api/configEndpoint';

export const getConfig = async () => {
  const res = await configEndpoint.getConfig();

  return res.data;
};
