import React from "react";
import Stack from "./Stack";
import { getUsers } from "./Api";
import { unstable_createResource } from "react-cache";

const UserResource = unstable_createResource(async () => {
  const users = await getUsers();
  return users;
});

const UserStack = ({ id }) => {
  const users = UserResource.read(id);
  return <Stack isUser={true} data={users} />;
};

export default UserStack;
