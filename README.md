# IMGUR-UP
> Upload images anonymously to [IMGUR](https://imgur.com)

## Usage

	```bash
		$ npm i imgur-up --save

		# or

		$ yarn add imgur-up
	```
###  API
####  `upload(filename, [options])`
- `filename`
	- Type: `String()`
	- Descr: 'Path to file (ex. ./myImage.png)'

- `options`
	- Type: 'Object()'
	- Parameters:
		- title: The post title (Default: filename without extension)
		- name: The image name (Default: the title)
		- description: The image description (Default: empty)
		- client_id: IMGUR Api Client-ID (Default: `775904bf84b8658`)
