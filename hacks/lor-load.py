from utils import Utils
import json

print ("   __         ______     ______     _____     ")
print ("  /\ \       /\  __ \   /\  __ \   /\  __-.   ")
print ("  \ \ \____  \ \ \/\ \  \ \  __ \  \ \ \/\ \  ")
print ("   \ \_____\  \ \_____\  \ \_\ \_\  \ \____-  ")
print ("    \/_____/   \/_____/   \/_/\/_/   \/____/  ")
print ("   __         ______     ______               ")
print ("  /\ \       /\  __ \   /\  == \              ")
print ("  \ \ \____  \ \ \/\ \  \ \  __<              ")
print ("   \ \_____\  \ \_____\  \ \_\ \_\            ")
print ("    \/_____/   \/_____/   \/_/ /_/            ")
print ("                                              ")

configs = Utils.openJson('./hacks/lor-config.json')

baseFolder = './hacks/__temp/'
baseBundleFolder = baseFolder + 'bundle/'
baseExtractFolder = baseFolder + 'extract/'

Utils.resetFolder(baseFolder)
Utils.resetFolder(baseBundleFolder)
Utils.resetFolder(baseExtractFolder)

for locale in configs['locales']:
    print ('start processing data 🔥🔥🔥')
    print ('%s %s' % (locale['code'], locale['flag']))
    
    # Hadle zips
    for file in configs['bundles']:
        zipFile = file.replace("$LOCALE", locale['code'])
        zipPath = '%s%s' % (baseBundleFolder, zipFile)
        bundleUrl = '%s%s' % (configs['bundleUrl'], zipFile)
        
        Utils.loadZip(bundleUrl, zipPath)
        Utils.extractZip(zipPath, baseExtractFolder)

print ('🍥 Load finish!')