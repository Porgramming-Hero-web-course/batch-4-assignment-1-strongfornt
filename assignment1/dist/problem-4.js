"use strict";
{
    const calculateShapeArea = (area) => {
        if (area.shape === "circle") {
            return Math.PI * area.radius ** 2;
        }
        else if (area.shape === "rectangle") {
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
