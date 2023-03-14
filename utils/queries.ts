export const allPropertyQuery = () => {
  const query = `*[_type == "property"] | order(_createdAt desc){
    _id,
    apartment,
    image,
    location,
    price,
    propertyType,
  } 
  `;

  return query;
};
