const AuthKey = ''; /* Jira Authorization key */
const Siteurl = ''; /* Jira Service Desk Url */
const SiteKey = ''; /* Jira Service Desk ID */
const TicketTitle = 'Test API'; /* Title for ticket to be created */
const TicketDescription = '*+Test API Ticket+*'; /* Description for ticket to be created */

var post = require("./post.js");
var schedule = require('node-schedule');
var date = new Date();

var j = schedule.scheduleJob('05 09 1,15 * *', function(){ /* running at 9:05 am on the 1st and 15th of each month*/
    post.PostRequest(AuthKey, Siteurl, SiteKey, TicketTitle, TicketDescription);
    console.log('Ticket created at', getDateTime());
});

function getDateTime() {
    var date = new Date();
    return date;
}