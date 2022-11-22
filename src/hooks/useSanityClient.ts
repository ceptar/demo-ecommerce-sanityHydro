import PicoSanity from 'picosanity';
import usePreviewMode from './usePreviewMode';

export default function useSanityClient() {
  const preview = usePreviewMode();

  return new PicoSanity({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
    ...(preview
      ? {
          useCdn: false,
          token: import.meta.env.PRIVATE_SANITY_API_TOKEN,
        }
      : {}),
  });
}
