function query<T>(
  items: T[],
  query: {
  [Tprop in keyof T]?: (val: T[Tprop]) => boolean // <----Looks like for-in loop for objects right? Tprop will separate string and number, so it works!
  } // <--- replace this!
  // query: Record<keyof T, (val: T[keyof T]) => boolean> // <--- basic but incomplete answer! name can be either string | number and that's not true!
) {
  return items.filter(item => {
      // iterate through each of the item's properties
      for (const property of Object.keys(item)) {

          // get the query for this property name
          const propertyQuery = query[property]

          // see if this property value matches the query
          if (propertyQuery && propertyQuery(item[property])) {
              return true
          }
      }

      // nothing matched so return false
      return false
  })
}

const matches = query(
  [
      { name: "Ted", age: 12 },
      { name: "Angie", age: 31 }
  ],
  {
      name: name => name === "Angie",
      age: age => age > 30
  })