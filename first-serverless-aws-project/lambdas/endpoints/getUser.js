const Responses = require("../common/API_responses");

exports.handler = async (event) => {
  console.log("Event", event);

  if (!event.pathParameters || !event.pathParameters.ID) {
    // failed without an ID
    return Responses._400({ message: "missing the ID from the path" });
  }

  let ID = event.pathParameters.ID;

  if (data[ID]) {
    // return the data
    return Responses._200(data[ID]);
  }

  // failed as ID not in the data
  return Responses._400({ message: "no ID in data" });
};

const data = {
  1234: { name: "John Adams", age: 33, job: "manager" },
  2345: { name: "Ann Frank", age: 26, job: "nurse" },
  5039: { name: "Diana Carter", age: 56, job: "developer" },
};
