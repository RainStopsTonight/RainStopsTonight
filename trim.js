const trimLeft = str => str.replace(new RegExp('^([\\s]*)(.*)$'), '$2')

const trimRight = str => str.replace(new RegExp('^(.*?)([\\s]*)$'), '$1')
