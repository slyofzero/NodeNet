import AWS from "aws-sdk";
import { CreateKeyPairRequest, RunInstancesRequest } from "aws-sdk/clients/ec2";
import { ec2 } from "./config";

async function createKeyPair(KeyName: string) {
  const params: CreateKeyPairRequest = { KeyName };

  try {
    const data = await ec2.createKeyPair(params).promise();
    return data; // This will return the key pair data including the private key
  } catch (error) {
    const err = error as Error;
    console.log(err, err.stack);
    return null; // or throw an error, depending on how you want to handle failures
  }
}

async function createInstance() {
  const keypairName = "testSdk";
  const keypair = await createKeyPair(keypairName);

  const params: RunInstancesRequest = {
    ImageId: "ami-09298640a92b2d12c", // AMI ID
    InstanceType: "t2.micro", // Instance type
    KeyName: keypairName, // Key pair for SSH access
    MinCount: 1,
    MaxCount: 1,
    TagSpecifications: [
      {
        ResourceType: "instance",
        Tags: [
          {
            Key: "SDK instance",
            Value: "MyNewInstance",
          },
        ],
      },
    ],
  };

  try {
    const data = await ec2.runInstances(params).promise();
    const instance = data.Instances?.[0].InstanceId;

    console.log(instance);

    return { instance, keypair };
  } catch (error) {
    const err = error as Error;
    console.log(err, err.stack);
    return null; // or throw an error, depending on how you want to handle failures
  }
}
