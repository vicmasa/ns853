const ViewModel = require('./charts-view-model');
const modalchart = '~/modal/main-page';
let page;
exports.loaded = function(args) {
        page = args.object;
        page.bindingContext = ViewModel;
    }
    //MODAL LOGIC
exports.onTap = function(args) {
    const item = args.object.bindingContext;
    setModalchart();
}

function setModalchart() {
    const platform = 'android';
    const option = {
        context: {
            platform: platform
        },
        closeCallback: () => {

        },
        fullscreen: true
    };
    if (platform == 'ios') {
        option.ios = {
            // eslint-disable-next-line no-undef
            presentationStyle: UIModalPresentationStyle.OverFullScreen
        }
    }
    page.showModal(modalchart, option);
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