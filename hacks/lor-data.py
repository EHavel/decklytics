from utils import Utils
import json

print ("   _____     ______     ______   ______       ")
print ("  /\  __-.  /\  __ \   /\__  _\ /\  __ \      ")
print ("  \ \ \/\ \ \ \  __ \  \/_/\ \/ \ \  __ \     ")
print ("   \ \____-  \ \_\ \_\    \ \_\  \ \_\ \_\    ")
print ("    \/____/   \/_/\/_/     \/_/   \/_/\/_/    ")
print ("   __         ______     ______               ")
print ("  /\ \       /\  __ \   /\  == \              ")
print ("  \ \ \____  \ \ \/\ \  \ \  __<              ")
print ("   \ \_____\  \ \_____\  \ \_\ \_\            ")
print ("    \/_____/   \/_____/   \/_/ /_/            ")
print ("                                              ")

configs = Utils.openJson('./hacks/lor-config.json')
strings = Utils.openJson('./hacks/strings.json')

dataFolder = './hacks/data/'
baseFolder = './hacks/__temp/'
baseExtractFolder = baseFolder + 'extract/'

Utils.resetFolder(dataFolder)

# Create folder locale
for locale in configs['locales']:
    print ('start processing data 🔥🔥🔥')
    print ('%s %s' % (locale['code'], locale['flag']))
    
    # Handle Images
    localeFolder = '%s%s/' % (dataFolder, locale['code'])
    Utils.resetFolder(localeFolder)
    
    optimizeSet1Folder = '%sset1-%s/%s/img/cards/' % (baseExtractFolder, locale['code'], locale['code'])
    optimizeSet2Folder = '%sset2-%s/%s/img/cards/' % (baseExtractFolder, locale['code'], locale['code'])

    optimizeOutputFolder = '%scards/' % localeFolder
    Utils.resetFolder(optimizeOutputFolder)
    
    print('Optimize images set 1')
    Utils.optimizeImages(optimizeSet1Folder, optimizeOutputFolder)
    print('Optimize images set 2')
    Utils.optimizeImages(optimizeSet2Folder, optimizeOutputFolder)

    # Handle data
    coreJson = Utils.openJson('%score-%s/%s/data/globals-%s.json' % (baseExtractFolder, locale['code'], locale['code'], locale['code']))
    set1Json = Utils.openJson('%sset1-%s/%s/data/set1-%s.json' % (baseExtractFolder, locale['code'], locale['code'], locale['code']))
    set2Json = Utils.openJson('%sset2-%s/%s/data/set2-%s.json' % (baseExtractFolder, locale['code'], locale['code'], locale['code']))

    dic = {}
    dic['cardGallery'] = strings['cardGallery'][locale['code']]
    dic['playNow'] = strings['playNow'][locale['code']]
    dic['filterByRegion'] = strings['filterByRegion'][locale['code']]
    dic['filterByRarity'] = strings['filterByRarity'][locale['code']]
    dic['filterByType'] = strings['filterByType'][locale['code']]
    dic['allRegions'] = strings['allRegions'][locale['code']]
    dic['levelUp'] = strings['levelUp'][locale['code']]
    dic['associatedCards'] = strings['associatedCards'][locale['code']]
    
    for dicRegion in coreJson['keywords']:
        dic[dicRegion['nameRef']] = dicRegion['name']
    for dicRegion in coreJson['regions']:
        dic[dicRegion['nameRef']] = dicRegion['name']
    for dicRegion in coreJson['spellSpeeds']:
        dic[dicRegion['nameRef']] = dicRegion['name']
    for dicRegion in coreJson['rarities']:
        dic[dicRegion['nameRef']] = dicRegion['name']

    extras = locale['extras']
    for dicRegion in extras['types']:
        dic[dicRegion['nameRef']] = dicRegion['name']

    data = {}
    data['dictionary'] = dic
    data['keywords'] = coreJson['keywords']

    # Handle Regions
    data['regions'] = []
    for item in coreJson['regions']:
        data['regions'].append(Utils.mapperRegion(item))
    data['regions'].append(Utils.createRegion('LL', strings['allRegions'][locale['code']], 'All'))

    data['spellSpeeds'] = coreJson['spellSpeeds']
    data['rarities'] = coreJson['rarities']
    data['types'] = extras['types']

    # Handle Cards
    data['cards'] = []
    for item in set1Json:
        data['cards'].append(Utils.mapperCard(item, locale['code'], extras))

    for item in set2Json:
        data['cards'].append(Utils.mapperCard(item, locale['code'], extras))

    with open('%sdata.json' % localeFolder, 'w') as outfile:
        json.dump(data, outfile, ensure_ascii=False)

print ('🍻  Data created!')