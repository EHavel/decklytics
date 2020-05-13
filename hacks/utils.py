import requests
from tqdm import tqdm
import zipfile
import json
import pathlib
from pexpect import *

class Utils:
    def resetFolder(folder):
        run("rm -rf %s" % folder)
        run("mkdir %s" % folder)

    def openJson(url):
        with open(url) as json_file:
            return json.load(json_file)

    def loadZip(url, file):
        print ('loading: %s' % url)

        resp = requests.get(url, stream=True)
        
        total_size = int(resp.headers.get('content-length', 0))
        block_size = 1024 #1 Kibibyte
        
        zfile = tqdm(total=total_size, unit='iB', unit_scale=True)
        with open(file, 'wb') as f:
            for data in resp.iter_content(block_size):
                zfile.update(len(data))
                f.write(data)
        zfile.close()

        if total_size != 0 and zfile.n != total_size:
            print("ERROR, something went wrong")
    
    def extractZip(pathZip):
        print ('extracting: %s' % pathZip)

        path = pathlib.Path(pathZip).parent.absolute()

        zf = zipfile.ZipFile(pathZip)
        for file in zf.infolist():
            print('extract', file.filename)
            zf.extract(file, path)

    def optimizeImages(outputPath, imagePath):
        run('magick mogrify -resize 34% -path %s -format webp %s*.png' % (outputPath, imagePath),
            events={TIMEOUT:printLoading}, timeout=5)

    def printLoading():
        print('OPA')

    def getBundleUrl(url, regionCode):
        return url.replace("$REGION", regionCode)
