import axios from "axios";

export async function getLinkPreviewImage(url: string) {
  try {
    const response = await axios.get(
      `https://api.linkpreview.net/?key=64f5c69c2265883ea8a94a029633e458&q=${encodeURIComponent(
        url
      )}`
    );

    return response.data.image;
  } catch (error) {
    console.error(error);
  }
}
