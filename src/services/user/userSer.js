export const userSer = {
  login: async (user) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`,
        {
          headers: {
            "Content-Type": "application/json",
            tokenCybersoft: process.env.NEXT_PUBLIC_TOKEN,
          },
          method: "POST",
          body: JSON.stringify(user),
        }
      );
      const newRes = await res.json();
      return newRes;
    } catch (error) {
      console.log(error);
    }
  },
};
