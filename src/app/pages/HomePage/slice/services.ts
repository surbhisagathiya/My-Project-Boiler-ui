export const getLogin = loginDetails => {
  const { data } = loginDetails;
  console.log('service', loginDetails);
  return data;
};
