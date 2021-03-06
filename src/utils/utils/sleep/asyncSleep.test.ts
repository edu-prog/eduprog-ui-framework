import { asyncSleep } from "./asyncSleep";

describe("async sleep", function () {
  it("returns a promise", function () {
    const retVal = asyncSleep(100);
    expect(typeof retVal.then).toEqual("function");
  });

  it("sleeps the correct duration", async function () {
    const startTime = new Date().getTime();
    const delayMs = 75;
    const expectedEndTime = startTime + delayMs;

    await asyncSleep(delayMs);

    const actualEndTime = new Date().getTime();
    const delta = actualEndTime - expectedEndTime;

    expect(delta <= 10).toBeTruthy();
  });
});
