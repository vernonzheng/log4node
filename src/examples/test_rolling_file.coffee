
conf = {
	"root": "",
	"level": "all",
	"appenders":{
		"rollingFileAppender":{
			"type":"RollingFileAppender",
			"properties": {
				"root": "/tmp/",
				"logFilePattern": "example-%s.log",
				"datePattern": "yyyyMMdd-HHmm",
				"interval": 120
			}
		}
	},
	"loggers": [
		{
			"name": "example",
			"appenderRefs": [
				"rollingFileAppender"
			]
		}
	]
}

log = require('../index.js')
log.initLogger(conf)
logger = log.getLogger("example")

count = 0
t = setInterval(()->
	logger.log(["field1", "fields2", "fields3"])
	if ++count is 500
		clearInterval(t)
,1000)


