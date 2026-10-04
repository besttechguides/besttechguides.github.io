"""Writes img/hero-{480,720,960}.webp, img/hero-960.png (fallback) and img/og-image.png from the renders."""
from PIL import Image
import os
here = os.path.dirname(os.path.abspath(__file__)); img = os.path.join(here, "..", "img")
src = Image.open(os.path.join(here, "hero-2x.png")).convert("RGBA")
for w in (480, 720, 960):
    im = src.resize((w, w * 3 // 4), Image.LANCZOS)
    im.save(os.path.join(img, f"hero-{w}.webp"), "WEBP", quality=82, method=6)
src.resize((960, 720), Image.LANCZOS).quantize(colors=128, method=Image.FASTOCTREE).save(os.path.join(img, "hero-960.png"), optimize=True)
og = Image.open(os.path.join(here, "og-raw.png")).convert("RGB")
og.quantize(colors=128, method=Image.MEDIANCUT).save(os.path.join(img, "og-image.png"), optimize=True)
for f in sorted(os.listdir(img)): print(f, os.path.getsize(os.path.join(img, f)))
