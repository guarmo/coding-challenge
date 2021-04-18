const calculateCenter = async (coords) => {
  coords.split(",");
  const x = (coords[0] + coords[3]) / 2;
  const y = (coords[1] + coords[4]) / 2;

  console.log(x, y);
  //   return { x, y };
};

export default calculateCenter;
