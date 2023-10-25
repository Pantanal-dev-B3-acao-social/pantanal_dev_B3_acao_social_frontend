export function serializeObject(obj: any, propertiesToIgnore: any): any {
  const serializedObj = { ...obj }; // Faz uma cópia do objeto original
  // Remove as propriedades problemáticas do objeto copiado
  console.log("serializeObjectserializeObjectserializeObject");
  console.log(serializedObj);
  console.log(typeof serializedObj);
  console.log(propertiesToIgnore)
  Object.keys(serializedObj).forEach((property: string, index: number) => {
    console.log(serializedObj[property]);
    console.log(property);
    console.log(typeof serializedObj[property]);
    if (Array.isArray(serializedObj[property])) {
      const result: any = percorreList(serializedObj[property], propertiesToIgnore);
      if (result != null) {
        console.log("result: ", result)
        serializedObj[property] = serializedObj[property].filter((obj: any) => obj.id !== result);
      }
    } else if ((serializedObj[property] !== null && typeof serializedObj[property] === 'object')) {
      const result: any = percorreObj(serializedObj[property], propertiesToIgnore);
      if (result != null) {
        console.log("result: ", result)

        delete serializedObj[property];
      }
    }
  });
  return serializedObj;
}

function percorreObj(property: object, propertiesToIgnore: any): any {
  console.log(property);
  Object.keys(property).forEach((key: string, value: any) => {
    console.log("key: ", key);
    console.log("typeof property: ", typeof property);

    // console.log(property.key);
    // console.log(property[key]);
    if (key in propertiesToIgnore) {
      console.log("key: ", key);
      console.log("property: ", property);
      console.log('))))))))))))))))))))))))))))))');
      return property;
    } else {
      return serializeObject(property, propertiesToIgnore);
    }
  });
}


function percorreList(property: any, propertiesToIgnore: any): any {
  console.log(property);
  property.forEach((key: string, value: any) => {
    console.log(key);
    console.log(property[key]);
    if (key in propertiesToIgnore) {
      console.log(key);
      console.log(property);
      if (Array.isArray(property[property])) {
        return property
      }
    } else {
      console.log('))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))');
      console.log();
      return serializeObject(property, propertiesToIgnore);
    }
  });
}