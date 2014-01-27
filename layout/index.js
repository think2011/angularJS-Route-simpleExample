define(function(require, exports, module) {
    // 引入路由模块
    require('angular/angular-route.min');
    // 注入路由模块
	var app = angular.module('app', ['ngRoute']);

    // 模拟数据
    var messages = [
        {
            id: 0,
            sender: "452125301@qq.com",
            subject: "今天要努力学习",
            message: "看完angularJS，并且完成练习"
        },
        {
            id: 1,
            sender: "452125301@qq.com",
            subject: "看完angularJS了吗？",
            message: "如果没有看完，那就耐心的看完吧！"
        },
        {
            id: 2,
            sender: "452125301@qq.com",
            subject: "恭喜你完成了要求！",
            message: "经过磨练，你完成了任务，恭喜你，今晚请你吃肯德基！"
        }
    ];

    // 首页控制器
	app.controller('appCtrl', function ($scope) {
        $scope.messages = messages;

	});

    // 详情控制器
    app.controller('detailCtrl', function ($scope, $routeParams, $location) {
        // 如果没有找不到对应ID，提示错误，并返回
        var params = messages[$routeParams.id];
        if(!params) {
            alert('找不到此页面');
            $location.path('#/');
            return false;
        }
        $scope.message = params;
    });

    //配置路由
    function emailRouteConfig($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'appCtrl',
                templateUrl: 'modules/list.html'
            })
            .when('/views/:id', {
                controller: 'detailCtrl',
                templateUrl: 'modules/detail.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    }
    // 启动路由
    app.config(emailRouteConfig);

	angular.bootstrap(document, ['app']);
});