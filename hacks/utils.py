import requests
import zipfile
import json
import pathlib
from pexpect import *
from time import sleep
import keyboard
import sys  
from progress.bar import IncrementalBar
from progress.spinner import PixelSpinner

class Utils:
    def resetFolder(folder):
        print('reseting folder', folder)
        run("rm -rf %s" % folder)
        run("mkdir %s" % folder)

    def deleteFolder(folder):
        print('deleting folder', folder)
        run("rm -rf %s" % folder)

    def openJson(url):
        print('opening json', url)
        with open(url) as json_file:
            return json.load(json_file)

    def loadZip(url, outputFile):
        print ('load file', url)

        resp = requests.get(url, stream=True)
        total_size = int(resp.headers.get('content-length', 0))
        block_size = 1024 #1 Kibibyte

        bar = IncrementalBar('loading', max=total_size, suffix='%(percent)d%%')
        with open(outputFile, 'wb') as f:
            for data in resp.iter_content(block_size):
                bar.next(len(data))
                f.write(data)
        bar.finish()
    
    def extractZip(pathZip, extractPath):
        print ('extract file', pathZip)

        zf = zipfile.ZipFile(pathZip)

        bar = IncrementalBar('extracting', max=len(zf.infolist()))
        for file in zf.infolist():
            bar.next()
            zf.extract(file, extractPath)
        bar.finish()

    def optimizeImages(inputFolder, outputFolder):
        print('optimize images', inputFolder)
        print('create:', outputFolder)

        f = 'magick mogrify -resize 34%% -path %s -format webp %s*.png' % (outputFolder, inputFolder)        
        
        spinner = PixelSpinner('optimizing ')
        def spinnerNext(d):
            spinner.next(),
        run(f, events={TIMEOUT:spinnerNext}, timeout=0.1)
        spinner.finish()

    def mapperCard(i, localeCode, extras):
        data = {}
        data['name'] = i['name']
        data['cardCode'] = i['cardCode']
        data['cardImg'] = '/data/%s/cards/%s.webp' % (localeCode, i['cardCode'])
        data['flavorText'] = i['flavorText']
        data['levelupDescription'] = i['levelupDescription']
        data['regionRef'] = i['regionRef']
        data['keywordRefs'] = i['keywordRefs']
        data['spellSpeedRef'] = i['spellSpeedRef']
        data['rarityRef'] = i['rarityRef']
        
        for type in extras['types']:
            if type['name'] == i['type']:
                data['typeRef'] = type['nameRef']
                break

        data['supertype'] = i['supertype']
        data['associatedCardRefs'] = i['associatedCardRefs']
        data['collectible'] = i['collectible']
        # data['associatedCards'] = i['associatedCards']
        # data['region'] = i['region']
        # data['attack'] = i['attack']
        # data['cost'] = i['cost']
        # data['health'] = i['health']
        # data['description'] = i['description']
        # data['descriptionRaw'] = i['descriptionRaw']
        # data['levelupDescriptionRaw'] = i['levelupDescriptionRaw']
        # data['artistName'] = i['artistName']
        # data['keywords'] = i['keywords']
        # data['spellSpeed'] = i['spellSpeed']
        # data['rarity'] = i['rarity']
        # data['subtype'] = i['subtype']
        # data['subtypes'] = i['subtypes']

        return data

