from utils import Utils
import json

print ("##############################################")
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
print ("##############################################")
print ("                                              ")

configs = Utils.openJson('./hacks/lor-config.json')

dataFolder = './hacks/data/'
baseFolder = './hacks/__temp/'
baseExtractFolder = baseFolder + 'extract/'

Utils.resetFolder(dataFolder)

for locale in configs['locales']:
    print ('start processing data 🔥🔥🔥')
    print ('%s %s' % (locale['code'], locale['flag']))
    
    # Handle Images
    localeFolder = '%s%s/' % (dataFolder, locale['code'])
    Utils.resetFolder(localeFolder)
    
    optimizeinputFolder = '%s%s/img/cards/' % (baseExtractFolder, locale['code'])

    optimizeOutputFolder = '%scards/' % localeFolder
    Utils.resetFolder(optimizeOutputFolder)
    
    Utils.optimizeImages(optimizeinputFolder, optimizeOutputFolder)

    # Handle data
    coreJson = Utils.openJson('%s%s/data/globals-%s.json' % (baseExtractFolder, locale['code'], locale['code']))
    set1Json = Utils.openJson('%s%s/data/set1-%s.json' % (baseExtractFolder, locale['code'], locale['code']))
    set2Json = Utils.openJson('%s%s/data/set2-%s.json' % (baseExtractFolder, locale['code'], locale['code']))

    data = {}
    data['keywords'] = coreJson['keywords']
    data['regions'] = coreJson['regions']
    data['spellSpeeds'] = coreJson['spellSpeeds']
    data['rarities'] = coreJson['rarities']
    extras = locale['extras']
    data['types'] = extras['types']
    data['cards'] = []
    for item in set1Json:
        data['cards'].append(Utils.mapperCard(item, locale['code'], extras))

    for item in set2Json:
        data['cards'].append(Utils.mapperCard(item, locale['code'], extras))

    with open('%sdata.json' % localeFolder, 'w') as outfile:
        json.dump(data, outfile, ensure_ascii=False)

print ('🍻 Data created!')