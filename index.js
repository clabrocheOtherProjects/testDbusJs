var DBus = require('dbus');

// Create a new service, object and interface
var service = DBus.registerService('session', 'nodejs.dbus.ExampleService');
var obj = service.createObject('/nodejs/dbus/ExampleService');

// Create interface

var iface1 = obj.createInterface('nodejs.dbus.ExampleService.Interface1');


iface1.addMethod('Hello', { out: DBus.Define(String) }, function (callback) {
    console.log('Hey')
    callback(null, 'Hello There!');
});

iface1.update();