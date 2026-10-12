/** Example only: import ARAL_PUBLIC_MEDIA_MAP.json in your frontend. */
export type MediaVariant = Readonly<{ volume: string; image: string }>;
export type PublicMediaMap = Readonly<
  Record<string, Readonly<{ variants: Readonly<Record<string, MediaVariant>> }>>
>;

/** Exact internal_id + SKU lookup. Never fallback to another package image. */
export function getVariantMedia(
  mediaMap: PublicMediaMap,
  productId: string,
  selectedSku: string,
): MediaVariant | undefined {
  return mediaMap[productId]?.variants[selectedSku];
}

/**
 * Each select option's value is the unchanged SKU; its visible text is volume.
 * Initial render and every user change update the image automatically.
 * Rebind when navigating to a different product; call the returned cleanup first.
 */
export function bindVolumeImage(
  mediaMap: PublicMediaMap,
  productId: string,
  select: HTMLSelectElement,
  image: HTMLImageElement,
): { setSelectedSku: (sku: string) => void; dispose: () => void } {
  const render = (): void => {
    const variant = getVariantMedia(mediaMap, productId, select.value);
    if (!variant) {
      image.removeAttribute("src");
      image.alt = "Изображение выбранной фасовки недоступно";
      image.hidden = true;
      return;
    }
    image.src = variant.image;
    image.alt = `Фасовка ${variant.volume}`;
    image.hidden = false;
  };
  select.addEventListener("change", render);
  render();
  return {
    setSelectedSku(sku: string): void {
      // Programmatic value assignment does not emit a DOM change event.
      select.value = sku;
      render();
    },
    dispose(): void {
      select.removeEventListener("change", render);
    },
  };
}

// Usage after your existing UI creates the select options:
// import mediaMap from "./ARAL_PUBLIC_MEDIA_MAP.json";
// const binding = bindVolumeImage(mediaMap, "ARAL-003", selectElement, imageElement);
// binding.setSelectedSku("20634"); // 4 L -> /media/web/ARAL-003_20634_4L.webp
// binding.setSelectedSku("20635"); // 5 L -> /media/web/ARAL-003_20635_5L.webp
// binding.dispose(); // On product page unmount/navigation.