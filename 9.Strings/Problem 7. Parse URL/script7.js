/*
 Write a script that parses an URL address given in the format: [protocol]://[server]/[resource]
 and extracts from it the [protocol], [server] and [resource] elements.
 Return the elements in a JSON object.
 Example:

 URL:
 http://telerikacademy.com/Courses/Courses/Details/239

 result:
 protocol: http
 server: telerikacademy.com
 resource: /Courses/Courses/Details/239
 */

var url = 'https://telerikacademy.com/Courses/Courses/Details/239';

function parseURL(url){

    var index = url.indexOf(':');
    var protocol = url.substring(0, index); //return the protocol, no matter the name length, for example 'https'
    url = url.replace(protocol + '://', '');
    index = url.indexOf('/');
    var server = url.substring(0, index);
    url = url.replace(server, '');
    var resource = url;

    function buildJSON(protocol, server, resources){
        return{
            protocol: protocol,
            server: server,
            resource: resources,
            toString: function printURL(){
                return '[protocol] = ' + this.protocol + "\n" +
                '[server] = ' + this.server + "\n" +
                '[resources] = ' + this.resource
            }
        }
    }

    var urlJSON = buildJSON(protocol, server, resource);

    return urlJSON.toString();
}

console.log(parseURL(url));

