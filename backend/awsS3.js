const AWS = require("aws-sdk");
const multer = require("multer");
const S3_BUCKET = process.env.S3_BUCKET;

AWS.config.update({
	region: "us-west-1",
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

const fileUpload = async (file) => {
	const { originalname, buffer } = await file;
	const path = require("path");
	const Key = new Date().getTime().toString() + path.extname(originalname);
	const params = {
		Bucket: S3_BUCKET,
		Key,
		Body: buffer,
		ACL: "public-read",
	};
	const res = await s3.upload(params).promise();
	return res.Location;
};

const storage = multer.memoryStorage({
	destination: (req, file, callback) => callback(null, ""),
});

const multerUpload = (key) => multer({ storage }).single(key);

module.exports = {
	s3,
	fileUpload,
	multerUpload,
};
