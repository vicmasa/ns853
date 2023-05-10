const observableModule = require('@nativescript/core/data/observable');
const Observable = require('@nativescript/core/data/observable').Observable;
const ViewModel = new Observable({});
ViewModel.observer = function(item) {
    return observableModule.fromObject(item);
}
module.exports = ViewModel;