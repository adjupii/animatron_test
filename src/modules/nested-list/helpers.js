export const createNestedList = (list) => {
  if (!list.length) {
    return {};
  }

  let nestedList = {},
      prev;

  for (let i = 0; i < list.length; i++) {
    let names = list[i].name.split('/');
    prev = nestedList;

    for (let i = 1; i < names.length; i++) {
      prev[names[i]] = prev[names[i]] || {};
      prev = prev[names[i]];
    }
  }

  return nestedList;
};