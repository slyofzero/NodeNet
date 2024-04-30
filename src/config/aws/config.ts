import { CLOUD_AWS_ACCESS_KEY, CLOUD_AWS_ACCESS_KEY_ID } from "@/utils/env";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: CLOUD_AWS_ACCESS_KEY_ID,
  secretAccessKey: CLOUD_AWS_ACCESS_KEY,
  region: "ap-south-1", // e.g. 'us-west-2'
});

export const ec2 = new AWS.EC2();
