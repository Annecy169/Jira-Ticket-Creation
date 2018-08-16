var request = require("request");

module.exports = {
    PostRequest: function (AuthKey, Siteurl, SiteKey, TicketTitle, TicketDescription) {
        var options = { method: 'POST',
        url: Siteurl,
        headers: 
        { 'Cache-Control': 'no-cache',
            Authorization: AuthKey,
            'Content-Type': 'application/json' },
        body: 
        { fields: 
            { project: { key: SiteKey },
                summary: TicketTitle,
                description: TicketDescription,
                issuetype: { name: 'Task' } } },
        json: true };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        });
    }
}