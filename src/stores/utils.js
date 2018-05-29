export const entitiesFromFB = data => {
  Object.entries(data).forEach(([key, value]) => {
    value.uid = key;
    value.key = key;
  });
  return data;
};
