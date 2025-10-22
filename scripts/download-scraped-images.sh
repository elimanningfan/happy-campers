#!/bin/bash

# Happy Campers Image Download Script
# Downloads all images from happycampersrvrentals.com

OUTPUT_DIR="public/images/scraped-images"
mkdir -p "$OUTPUT_DIR"

# Array of image URLs (deduplicated)
declare -a URLS=(
  # Logos
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/05/HC_Logo.png"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/05/WebsiteLogo_HC.png"

  # Main Content
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/05/2U1A0711-1-1-360x204.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/05/2U1A0711-1-1.jpg"

  # RV Photos
  "https://www.happycampersrvrentals.com/wp-content/uploads/2024/02/ethos-344x230.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2024/02/ethos-scaled.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2024/06/102A0483-344x230.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2024/06/102A0483-scaled.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2024/09/2024-Entegra-Ethos-20D-5-2-344x230.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2024/09/2024-Entegra-Ethos-20D-5-2-scaled.jpg"

  # Lifestyle Images
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/05/MrHappy_300x209.png"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/HCwebsite_RVgraphic_V3-360x426.png"

  # Activities
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/driving_3-360x212.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/rvfriends_6-360x212.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/skisnowboard_8-360x212.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/petfriendly_fall_2-360x212.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/bikerack_4-360x212.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/musicfestival_1-360x212.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/whattoexpect_10-360x212.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/rvlifestyle_6-360x212.jpg"

  # Destinations
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/Parks_HappyCampers.png"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/Vineyard_HappyCampers.png"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/Coast_HappyCampers.png"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/MusicFestivals_HappyCampers.png"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/SkiTrips_HappyCampers.png"

  # Promotional
  "https://www.happycampersrvrentals.com/wp-content/uploads/2021/03/Fire_G0C@MP.png"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/BecomeHappyCamper.jpg"

  # Blog Images
  "https://www.happycampersrvrentals.com/wp-content/uploads/2024/10/Happy-Campgrounds-logo-large-1-e1728672212306.png"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2024/10/golfer-at-tokatee-scaled.jpeg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2024/09/Entegra-Ethos-interor.jpeg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2024/08/untitled-13.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2024/08/pexels-markusspiske-105857-scaled.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2024/06/102A0482-scaled.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2024/07/pexels-vishnurnair-1105666-scaled.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2024/07/Shu.png"

  # About Page
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/Meet_Kristina.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2023/02/Perez_Gonzalez_Laura2.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/102A0409-840x560.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/102A0409.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/Beaver-Coach-Sales-Building-1-840x560.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/06/Beaver-Coach-Sales-Building-1-scaled.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/07/102A0351-840x560.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/07/102A0351.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/07/102A0331-840x560.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/07/102A0331.jpg"
  "https://www.happycampersrvrentals.com/wp-content/uploads/2020/07/ForestRiver_Brand3.png"
)

# Download each image
for url in "${URLS[@]}"; do
  filename=$(basename "$url")
  echo "Downloading: $filename"
  curl -s -o "$OUTPUT_DIR/$filename" "$url"

  if [ $? -eq 0 ]; then
    echo "✓ Downloaded: $filename"
  else
    echo "✗ Failed: $filename"
  fi
done

echo ""
echo "Download complete! Images saved to: $OUTPUT_DIR"
echo "Total images: ${#URLS[@]}"
