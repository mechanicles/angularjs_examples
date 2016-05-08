function getData($timeout, $q) {
  return function() {
    var defer = $q.defer();

    // simulated async function
    $timeout(function() {
      if(Math.round(Math.random())){
        defer.resolve('data received');
      } else {
        defer.reject('An error found. Please try again');
      }
    }, 2000);

    return defer.promise;
  };
}

angular.module('app', [])
  .factory('getData', getData)
  .run(function(getData) {
    var promise = getData()
     .then(function(string){
       console.log(string);
     }, function(error) {
       console.error(error);
     });
});
