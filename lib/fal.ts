const FAL_API_URL = "https://queue.fal.run/fal-ai/flux/schnell";

export interface FalImageResult {
  url: string;
  width: number;
  height: number;
}

export async function generateImage(
  prompt: string,
  options?: {
    imageSize?: "square_1_1" | "portrait_3_4" | "landscape_16_9" | "square_2_1";
    numImages?: number;
  }
): Promise<FalImageResult[]> {
  const { imageSize = "square_1_1", numImages = 1 } = options || {};

  const response = await fetch(FAL_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `key ${process.env.FAL_API_KEY}`,
    },
    body: JSON.stringify({
      prompt,
      image_size: imageSize,
      num_images: numImages,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Fal API error: ${response.status} - ${error}`);
  }

  const data = await response.json();

  return data.images.map((img: any) => ({
    url: img.url,
    width: img.width,
    height: img.height,
  }));
}
