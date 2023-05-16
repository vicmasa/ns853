const ViewModel = require('./videoplayer-view-model');

let page;
exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = ViewModel;
}