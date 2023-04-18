const ViewModel = require('./google-maps-view-model');

let page;
exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = ViewModel;
    ViewModel.set('latitude', 0);
    ViewModel.set('longitude', 0);
    ViewModel.set('loaded', true);
}
let map;
exports.onMapReady = function(args) {
    console.log('onMapReady()')
    map = args.object;
}
exports.tapMap = function() {
    console.log('tapMap()');
    console.log(map.lat);
    console.log(map.cameraPosition);
    console.log('---------');
}