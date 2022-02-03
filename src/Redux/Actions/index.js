
export const emailAction = (email) => {
  return {
    type: "email",
    payload: {
      email,
    },
  };
};
