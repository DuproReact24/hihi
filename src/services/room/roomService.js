export const roomService = {
  getAllRoom: async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/phong-thue`,
        {
          next: {
            revalidate: 0,
          },
          headers: {
            tokenCybersoft: process.env.NEXT_PUBLIC_TOKEN,
          },
        }
      );

      const newRes = await res.json();
      return newRes;
    } catch (error) {}
  },
};
