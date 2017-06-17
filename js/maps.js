let map, infoWindow;
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 16
        });
        infoWindow = new google.maps.InfoWindow;
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            
            const userinfo = firebase.auth().currentUser;
            infoWindow.setPosition(pos);
            
            //  var contentString = '<input id="content">'+
            // '</input>';
            //  var infowindow = new google.maps.InfoWindow({
            //     content: contentString,
            //     maxWidth: 200
            //   });
  //          infoWindow.setContent(`<button class = "fizal">${userinfo   .email}</button>`);
            //infoWindow.setContent(`<button class = "fizal">${userinfo.email}</button>`);
            //infoWindow.open(map);
            map.setCenter(pos);
            var marker = new google.maps.Marker({
              position: pos,
              map: map,
              title: ''
            });
             
            marker.addListener('click', function() {
            console.log("clicked map");
             //infowindow.open(map, marker);
            });
            
            
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }