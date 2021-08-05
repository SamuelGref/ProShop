import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            UseNewUrlParser: true,
            useCreatIndex:true

        })
        console.log(`MongoDb Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Eroor: ${error.message}`.red.underline.bold)
        process.exit(1)

    }
}

export default connectDB