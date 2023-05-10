const ViewModel = require('./main-view-model');
let closeCallback;
let page;
exports.onShownModally = function(args) {
    page = args.object;
    if (args.context.platform == 'android') {
        // eslint-disable-next-line no-undef
        page._dialogFragment.getDialog().getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    }
    const item = args.context.params;
    closeCallback = args.closeCallback;
    page.bindingContext = ViewModel;
}
exports.hideModal = function(args) {
    closeCallback();
}
exports.stopPropagation = function(args) {
    console.log('stopPropagation');
    //no close modal:
    args.event.stopPropagation();
}
exports.chartViewLoaded = function(args) {
    console.log('chartViewLoaded()');

    const chartView = args.object;

    const options = {
        chart: {
            type: 'line',
        },
        title: {
            text: 'Monthly Average Temperature',
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)',
            },
        },
        series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            },
            {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
            },
        ]
    }
    chartView.setOptions(options);
}