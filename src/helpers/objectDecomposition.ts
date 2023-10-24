export function serializeObject(obj: any, propertiesToIgnore: any): any {
  const serializedObj = { ...obj }; // Faz uma cópia do objeto original
  // Remove as propriedades problemáticas do objeto copiado
  propertiesToIgnore.forEach((property: any) => {
    if (typeof property === 'function') {
      property.forEach((propertyInterna: any) => {
        if (propertyInterna in serializedObj) {
          console.log(property);
          delete serializedObj[property];
        }
      });
    }
  });
  return serializedObj;
}
