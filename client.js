#!/bin/env node
var DBus = require('dbus');

var bus = DBus.getBus('session');

bus.getInterface(
    'nodejs.dbus.ExampleService',
    '/nodejs/dbus/ExampleService',
    'nodejs.dbus.ExampleService.Interface1',
    function (err, iface) {
        iface.Hello();
    }
);
