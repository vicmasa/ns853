const ViewModel = require('./charts-view-model');

let page;
exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = ViewModel;
}

exports.chartViewLoaded = function(args) {
    console.log('chartViewLoaded()');

    const chartView = args.object;

    const options = {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,

            },
        },
        title: {
            text: "Contents of Highsoft's weekly fruit delivery",

        },
        subtitle: {
            text: '3D donut in Highcharts',

        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45,

            },
        },
        series: [{
                name: 'Delivered amount',
                data: [
                    [
                        'Bananas',
                        8
                    ],
                    [
                        'Kiwi',
                        3
                    ],
                    [
                        'Mixed nuts',
                        1
                    ],
                    [
                        'Oranges',
                        6
                    ],
                    [
                        'Apples',
                        8
                    ],
                    [
                        'Pears',
                        4
                    ],
                    [
                        'Clementines',
                        4
                    ],
                    [
                        'Reddish (bag)',
                        1
                    ],
                    [
                        'Grapes (bunch)',
                        1
                    ],

                ],

            },

        ],
    }

    chartView.setOptions(options);
}