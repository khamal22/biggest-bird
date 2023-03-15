(function(window, _) {
    window.BiggestBird = window.BiggestBird || {
      numz: {
        getAngleDegrees( pointA, pointB) {
          const 
          distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          radians = Math.atan2(distanceY, distanceX),
          degrees = radians * 180 / Math.PI;
          return degrees;

        },
          degreesToRadians(degrees) {
            return degrees * Math.PI / 180;
          },
          radiansToDegrees(radians) {
            return radians * 180 / Math.PI;
          },

      },
      phyz: {


        /**
         * 
         * @param {object} pointA a point on the screen
         * @param {object} pointB a point on the screen
         * @param {number} pointB.x x value of point b
         * @param {number} pointA.x x value of point a 
         * @param {number} pointB.y y value of point b
         * @param {number} pointA.y y value of point a
         * 
         * 
         * 
         * @returns {number} the distance 
         */




       getDistance(pointA, pointB){
          const
          distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          return distance;
       }

      },
    };
  }(window, window._));