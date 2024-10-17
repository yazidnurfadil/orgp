// export const getAsset = (fileName: string) => {
//   console.log(`${process.env.NEXT_PUBLIC_PHOTOS_BASE_URL}/${fileName}`);
//   return `${process.env.NEXT_PUBLIC_PHOTOS_BASE_URL}/${fileName}`;
// };

export const getUserAvatar = (
  userDetail: {
    photo?: string;
    foto?: string;
  } | null
) => {
  if (userDetail?.photo && userDetail.photo !== "default.png") {
    return userDetail.photo;
  }

  if (userDetail?.foto && userDetail.foto !== "default.png") {
    return userDetail.foto;
  }

  return `/assets/titn-default-user.png`;
};
