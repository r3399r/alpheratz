import chatEndpoint from 'src/api/chatEndpoint';
import userEndpoint from 'src/api/userEndpoint';

export const getData = async () => {
  const [log, user] = await Promise.all([chatEndpoint.getLog(), userEndpoint.getUser()]);

  return {
    log: log.data,
    user: user.data,
  };
};
