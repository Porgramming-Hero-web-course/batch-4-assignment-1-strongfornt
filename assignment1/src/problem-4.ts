{
  //calculateShapeArea function that uses type guards to calculate the area based on the shape type.

  interface Circle {
    shape: "circle";
    radius: number;
  }

  interface Rectangle {
    shape: "rectangle";
    width: number;
    height: number;
  }

  const calculateShapeArea = (area: Circle | Rectangle): number => {
    if (area.shape === "circle") {
      return Math.PI * area.radius ** 2;
    } else if (area.shape === "rectangle") {
      return area.width * area.height;
    }

    throw new Error("Unknown shape");
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  
}
