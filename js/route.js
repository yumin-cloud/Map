
var center_lat = 37.35137458181075;
var center_lng = 127.94750669765871;
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(center_lat, center_lng), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
var point = new kakao.maps.LatLng(37.35137458181075, 127.94750669765871);
var circle, marker_positions;
var markers = [];
var circles = [];


function makeMcp(arg1, arg2, arg3) {
    console.log(arg3);
    //마커
    for (var i = 0; i < arg1.length; i++) {
        marker_positions = {
            title: arg1[i].title,
            latlng: new kakao.maps.LatLng(arg1[i].Ma, arg1[i].La)
        };
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: marker_positions.latlng, // 마커를 표시할 위치
            title: "원주맛집" // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다

        });
        //marker.marker = normal_img;
        markers.push(marker);
        console.log(arg1);
        marker.setMap(map);
    }

    //원
    for (var i = 0; i < arg2.length; i++) {
        var circle_center = {
            title: arg2[i].title,
            latlng: new kakao.maps.LatLng(arg2[i].Ma, arg2[i].La)
        };
        circle = new kakao.maps.Circle({
            center: circle_center.latlng,  // 원의 중심좌표 입니다
            radius: 8, // 미터 단위의 원의 반지름입니다
            strokeWeight: 10, // 선의 두께입니다
            strokeColor: '#de562c', // 선의 색깔입니다
            strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'none', // 선의 스타일 입니다
            fillColor: '#de562c', // 채우기 색깔입니다
            fillOpacity: 1  // 채우기 불투명도 입니다
        });
        circle.setMap(map);
        circles.push(circle);
        //console.log(circles);
    }

}

function setMarkers(map) {

    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }

}

function hideMarkers() {
    setMarkers(null);
}

function setCircles(map) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].setMap(map);
    }
}

function hideCircles() {
    setCircles(null);
}




$('.route-titles li').click(function () {
    hideMarkers();
    hideCircles();

    console.log(markers);
    var marker_data = [];
    var circle_data = [];
    var line_data = [];
    switch ($(this).attr('id')) {
        case "1":
            map.setCenter(new kakao.maps.LatLng(37.35137458181075, 127.94750669765871));
            marker_data = restaurant_marker_data_array;
            circle_data = restaurant_circle_data_array;

            break;
        case "2":
            map.setCenter(new kakao.maps.LatLng(37.35137458181075, 127.94750669765871));
            marker_data = cafe_marker_data_array;
            circle_data = cafe_circle_data_array;

            break;

    }
    makeMcp(marker_data, circle_data);
})
