(function (window, _) {
  window.BiggestBird = window.BiggestBird || {
    numz: {
      /**
       * 
       * @param {*} pointA a point on the screen
       * @param {*} pointB a point on the screen
       * @param {number} distanceX is the distance between pointB.x and point A.x 
       * @param {number} distanceY is the distance between pointB.y and point A.y
       * @param {number} radians a number value from the distance in the radians
       * @param {number} degrees calculates a numeric value from radians to degrees 
       * @param {number} degreesToRadians calculates degrees to radians
       * @param {number} radiansToDegrees calculates radians to degrees 
       * @returns {number} the degrees 
       * 
       */
      getAngleDegrees(pointA, pointB) {
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




      getDistance(pointA, pointB) {
        const
          distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        return distance;
      },




      updatePosition(body) {
        body.x += body.velocityX;
        body.y += body.velocityY;
        body.rotation += body.rotationalVelocity;

        /**
      * Updates the x and y properties of a body based on its
      * velocityX and velocityY, and, updates the rotation of
      * a body based on its rotationalVelocity.
      *
      * @param {Object} body: The body must be an Object 
      * with x, y, rotation, velocityX, velocityY, and 
      * rotationalVelocity properties.
      */

      },
      /**
       * Updates the diagonal velocity properties of a body,
       * taking into account the body's current velocity 
       * and applying any forces acting against the body
       * as acceleration on both the x and y axis.
       * 
       * NOTE: This method DOES NOT update the position of 
       * the body, it only updates its velocity.
       * 
       * @param {Object} body: The body must be an Object 
       * with velocityX, velocityY and rotation properties. 
       * @param {Number} forceOnX: The force acting against
       * the body on the x axis.
       * @param {Number} forceOnY: The force acting against
       * the body on the y axis.
       */
      updateVelocity(body, forceOnX, forceOnY) {
        const
          angle = body.rotation * Math.PI / 180,
          accelerationOnX = Math.cos(angle) * forceOnX,
          accelerationOnY = Math.sin(angle) * forceOnY;
        body.velocityX += accelerationOnX;
        body.velocityY += accelerationOnY;
      },






    }
    };
  }
  (window, window._));