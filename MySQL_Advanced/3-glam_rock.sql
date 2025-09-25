-- List glam rock bands and calculate lifespan
SELECT band_name,
       -- Nëse banda ka vit split, përdoret ai; në të kundërt përdoret 2023
       IFNULL(split, 2023) - formed + 1 AS lifespan
FROM metal_bands
WHERE style LIKE "%Glam rock%"
ORDER BY lifespan DESC;