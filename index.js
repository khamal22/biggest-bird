(function(window, _) {
    window.myLibraryName = window.myLibraryName || {
      numz: {},
      phyz: {

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