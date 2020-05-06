#!/bin/bash

echo "########################"
echo "Generate LOR data"
echo "########################"

# regionsCode=(pt_br en_us ja_jp de_de es_es fr_fr it_it ko_kr)
# regionsName=(Português English 日本語 Deutsch Español Français Italiano 한국어)
regionsCode=(pt_br)
regionsName=(Português)

languagesJSON="["

basePath=_lor_data/
setsPath=${basePath}sets/
extractPath=${basePath}extract/
# projeto folder
dataPath=public/data/lor/

echo "reseting folders..."
rm -rf ${dataPath}
rm -rf ${basePath}
mkdir ${basePath}

for i in "${!regionsCode[@]}"
do
    echo
    echo "Start ${regionsCode[$i]} data 🔥🔥🔥"
        
    echo "Add ${regionsCode[$i]} in language.json..."
    if [ $i -eq 0 ]
    then
        languagesJSON+="{"
    else
        languagesJSON+=",{"
    fi
    languagesJSON+="\"code\":\"${regionsCode[$i]}\","
    languagesJSON+="\"name\":\"${regionsName[$i]}\""
    languagesJSON+="}"
    
    echo "loading ${regionsCode[$i]} sets..."
    mkdir ${setsPath}

    curl https://dd.b.pvp.net/latest/core-${regionsCode[$i]}.zip -o ${setsPath}core-${regionsCode[$i]}.zip
    curl https://dd.b.pvp.net/latest/set1-lite-${regionsCode[$i]}.zip -o ${setsPath}set1-lite-${regionsCode[$i]}.zip
    curl https://dd.b.pvp.net/latest/set2-lite-${regionsCode[$i]}.zip -o ${setsPath}set2-lite-${regionsCode[$i]}.zip

    echo "extract ${regionsCode[$i]} sets..."
    mkdir ${extractPath}

    unzip -o ${setsPath}core-${regionsCode[$i]}.zip -d ${extractPath}
    unzip -o ${setsPath}set1-lite-${regionsCode[$i]}.zip -d ${extractPath}
    unzip -o ${setsPath}set2-lite-${regionsCode[$i]}.zip -d ${extractPath}

    echo "replace ${regionsCode[$i]} url images..." 
    search=".png\""
    replace=".webp\""
    sed -i "" "s|${search}|${replace}|g" ${extractPath}${regionsCode[$i]}/data/globals-${regionsCode[$i]}.json

    search=http://.*regions/
    replace=/data/regions/
    sed -i "" "s|${search}|${replace}|g" ${extractPath}${regionsCode[$i]}/data/globals-${regionsCode[$i]}.json

    search=".png\""
    replace=".webp\""
    sed -i "" "s|${search}|${replace}|g" ${extractPath}${regionsCode[$i]}/data/set1-${regionsCode[$i]}.json

    search=http://.*cards/
    replace=/data/${regionsCode[$i]}/cards/
    sed -i "" "s|${search}|${replace}|g" ${extractPath}${regionsCode[$i]}/data/set1-${regionsCode[$i]}.json

    search=".png\""
    replace=".webp\""
    sed -i "" "s|${search}|${replace}|g" ${extractPath}${regionsCode[$i]}/data/set2-${regionsCode[$i]}.json

    search=http://.*cards/
    replace=/data/${regionsCode[$i]}/cards/
    sed -i "" "s|${search}|${replace}|g" ${extractPath}${regionsCode[$i]}/data/set2-${regionsCode[$i]}.json

    echo "moving ${regionsCode[$i]} datas..."
    mkdir ${dataPath}

    data_region_path=${dataPath}${regionsCode[$i]}/
    mkdir ${data_region_path}

    mv ${extractPath}${regionsCode[$i]}/data/* ${data_region_path}

    echo "convert ${regionsCode[$i]} image cards..."
    data_img_cards_path=${data_region_path}cards/
    mkdir ${data_img_cards_path}

    magick mogrify -resize 34% -path ${data_img_cards_path} -format webp ${extractPath}${regionsCode[$i]}/img/cards/*.png
    
    echo "convert ${regionsCode[$i]} image regions..."
    data_img_regions_path=${dataPath}regions/
    mkdir ${data_img_regions_path}

    magick mogrify -path ${data_img_regions_path} -format webp ${extractPath}${regionsCode[$i]}/img/regions/*.png
    
    echo "finish ${r} data!"
done

echo "create language json..."
languagesJSON+="]"
echo ${languagesJSON} > ${dataPath}language.json

echo "finish folter ${basePath}..."
rm -rf ${basePath}

echo
echo "Finish =)"
