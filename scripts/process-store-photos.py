#!/usr/bin/env python3
"""Convert curated HEIC originals to site JPEG slots with center crop."""

from __future__ import annotations

import subprocess
from pathlib import Path

from PIL import Image, ImageEnhance

ROOT = Path(__file__).resolve().parents[1]
ORIGINALS = ROOT / "photo-originals"
OUTPUT = ROOT / "public" / "images"
WORK = ROOT / "photo-originals" / ".work"

# source HEIC -> (output filename, target width, target height)
SLOTS: list[tuple[str, str, int, int]] = [
    ("IMG_0765.HEIC", "salon.jpeg", 1264, 848),
    ("IMG_0785.HEIC", "hero.jpeg", 1376, 768),
    ("IMG_0766.HEIC", "barra.jpeg", 1200, 896),
    ("IMG_0780.HEIC", "mesa-al-sol.jpeg", 1200, 896),
    ("IMG_2817.HEIC", "plantas.jpeg", 1200, 896),
    ("IMG_0784.HEIC", "barista-pour.jpeg", 896, 1200),
    ("IMG_2822.HEIC", "pastelitos-historia.jpeg", 1024, 1024),
    ("IMG_2819.HEIC", "cafe-con-leche.jpeg", 1264, 848),
    ("IMG_0768.heic", "pour-over.jpeg", 1200, 896),
]


def heic_to_rgb(path: Path) -> Image.Image:
    tmp = WORK / f"{path.stem}.jpg"
    WORK.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        ["sips", "-s", "format", "jpeg", str(path), "--out", str(tmp)],
        check=True,
        capture_output=True,
    )
    return Image.open(tmp).convert("RGB")


def center_crop(im: Image.Image, tw: int, th: int) -> Image.Image:
    w, h = im.size
    target_ratio = tw / th
    src_ratio = w / h
    if src_ratio > target_ratio:
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        box = (left, 0, left + new_w, h)
    else:
        new_h = int(w / target_ratio)
        top = (h - new_h) // 2
        box = (0, top, w, top + new_h)
    cropped = im.crop(box)
    return cropped.resize((tw, th), Image.Resampling.LANCZOS)


def warm_grade(im: Image.Image) -> Image.Image:
    im = ImageEnhance.Color(im).enhance(1.06)
    im = ImageEnhance.Contrast(im).enhance(1.04)
    im = ImageEnhance.Brightness(im).enhance(1.02)
    return im


def main() -> None:
    for source, out_name, tw, th in SLOTS:
        src_path = ORIGINALS / source
        if not src_path.exists():
            alt = ORIGINALS / source.replace(".HEIC", ".heic")
            src_path = alt
        if not src_path.exists():
            raise FileNotFoundError(source)

        im = heic_to_rgb(src_path)
        im = center_crop(im, tw, th)
        im = warm_grade(im)
        out_path = OUTPUT / out_name
        im.save(out_path, "JPEG", quality=82, optimize=True)
        print(f"Wrote {out_path.name} ({tw}x{th}) from {source}")


if __name__ == "__main__":
    main()
