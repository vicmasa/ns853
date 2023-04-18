const ViewModel = require('./main-view-model');

let page;
exports.onNavigatingTo = function(args) {
    page = args.object;
    page.bindingContext = ViewModel;
}
exports.tapComponents = function(args) {
    const item = args.object;
    page.frame.navigate({
        moduleName: './components/' + item.path,
        animated: true
    });
}