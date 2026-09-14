import mongoose from "mongoose";

const getGridFSBucket = () => {
    if (mongoose.connection.readyState !== 1) {
        throw new Error("MongoDB is not connected");
    }

    return new mongoose.mongo.GridFSBucket(
        mongoose.connection.db,
        {
            bucketName: "uploads",
        }
    );
};

export default getGridFSBucket;
