export function getNestedValues(row: any, id: any) {
  let crrValue = row;
  const splitedId = id.split(".");
  splitedId.forEach((item: any) => (crrValue = crrValue?.[item]));
  return crrValue;
}
