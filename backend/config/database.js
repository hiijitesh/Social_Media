const mongoose = require("mongoose")

mongoose.set("strictQuery", true)
exports.connectDatabase = () => {
	mongoose
		.connect(process.env.MONGO_URI)
		.then((con) =>
			console.log(
				`Database Connected to the Social-Media Collection ✅✅✅`
			)
		)
		.catch((err) => console.log(err))
}
