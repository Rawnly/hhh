const fs = require('fs');
const got = require('got');
const Ora = require('ora');

const spinner = new Ora('Uploading');

const url = {
	up: "https://api.imgur.com/3/image"
};

module.exports = {
	upload: _upload,
}

function _upload(filename, options = { client_id: '67f0f72978a1369' }) {
	return new Promise(function(resolve, reject) {
		spinner.start();
		fs.readFile(filename, (err, data) => {
			const img = {
				title: options.title ? options.title : filename.split('.')[0],
				name: options.name ? options.name : filename.split('.')[0],
				description: options.description ? options.description : '',
				image: new Buffer(data, 'binary').toString('base64')
			}

			got(url.up, {
				method: 'POST',
				json: true,
				body: img,
				headers: {
					'Authorization': `Client-ID ${options.client_id}`
				}
			}).then(({body}) => {
				spinner.succeed();
				resolve(body.data)
			}).catch(e => {
				spinner.fail();
				reject(e);
			})
		});
	});
}
