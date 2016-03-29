﻿(function() {
    angular
        .module('shopAdmin.user')
        .factory('userService', [
            '$http',
            function ($http) {
                function getUsers(params) {
                    return $http.post('Admin/User/List', params);
                }

                return {
                    getUsers: getUsers
                };
            }
        ]);
})();