/* eslint-disable import/no-anonymous-default-export */
export default {
  providers: [
    {
      domain: process.env.CLERK_DOMAIN!,
      applicationID: "convex",
    },
  ],
};