import { buildDefaultMoonPayUrl } from '../buildDefaultMoonPayUrl';

export type Params = Parameters<typeof buildDefaultMoonPayUrl>[0] & {
  signatureEndpoint?: string;
};

export const buildMoonPayUrl = async ({ signatureEndpoint, ...otherParams }: Params) => {
  const defaultUrl = buildDefaultMoonPayUrl(otherParams);
  if (!signatureEndpoint) return defaultUrl;

  try {
    const result = await fetch(signatureEndpoint, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: defaultUrl }),
    });
    if (!result.ok) {
      throw new Error('Could not call endpoint to sign URL');
    }

    const { signedUrl } = await result.json();
    return signedUrl;
  } catch (e) {
    return defaultUrl;
  }
};
