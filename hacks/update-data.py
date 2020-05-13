from utils import Utils
from pexpect import *

print ("##############################################")
print ("   _   _ ____  ____    _  _____ _____         ")
print ("  | | | |  _ \|  _ \  / \|_   _| ____|        ")
print ("  | | | | |_) | | | |/ _ \ | | |  _|          ")
print ("  | |_| |  __/| |_| / ___ \| | | |___         ")
print ("   \___/|_|_  |____/_/___\_\_|_|_____|  _     ")
print ("  | |   / _ \|  _ \  |  _ \  / \|_   _|/ \    ")
print ("  | |  | | | | |_) | | | | |/ _ \ | | / _ \   ")
print ("  | |__| |_| |  _ <  | |_| / ___ \| |/ ___ \  ")
print ("  |_____\___/|_| \_\ |____/_/   \_\_/_/   \_\ ")
print ("")
print ("##############################################")
print ("")

configs = Utils.openJson('./hacks/lor-config-test.json')
data = {}
basePath = './hacks/__temp'

for region in configs['regions']:
    Utils.resetFolder(basePath)

    print ('start read %s data 🔥🔥🔥' % region['code'])
    for bundle in configs['bundles']:
        tempZip = '%s/temp.zip' % basePath
        bundleUrl = Utils.getBundleUrl(bundle, region['code'])
        
        Utils.loadZip(bundleUrl, tempZip)
        Utils.extractZip(tempZip)

print ('Finish! 🙂')

        
# data = {}
# data['people'] = []
# data['people'].append({
#     'name': 'Scott',
#     'website': 'stackabuse.com',
#     'from': 'Nebraska'
# })
# data['people'].append({
#     'name': 'Larry',
#     'website': 'google.com',
#     'from': 'Michigan'
# })
# data['people'].append({
#     'name': 'Tim',
#     'website': 'apple.com',
#     'from': 'Alabama'
# })

# with open('./hacks/data.json', 'w') as outfile:
#     json.dump(data, outfile)

# with open('./hacks/data.json') as json_file:
#     data = json.load(json_file)
#     print(data['people'])
    # for p in data['people']:
    #     print('Name: ' + p['name'])
    #     print('Website: ' + p['website'])
    #     print('From: ' + p['from'])
    #     print('')


# import requests 
# import os

# cwd = os.getcwd()  # Get the current working directory (cwd)
# files = os.listdir(cwd)  # Get all the files in that directory
# print(cwd)
# # print("Files in %r: %s" % (cwd, files))

# def init():
#     print ("##############################################")
#     print ("   _   _ ____  ____    _  _____ _____         ")
#     print ("  | | | |  _ \|  _ \  / \|_   _| ____|        ")
#     print ("  | | | | |_) | | | |/ _ \ | | |  _|          ")
#     print ("  | |_| |  __/| |_| / ___ \| | | |___         ")
#     print ("   \___/|_|_  |____/_/___\_\_|_|_____|  _     ")
#     print ("  | |   / _ \|  _ \  |  _ \  / \|_   _|/ \    ")
#     print ("  | |  | | | | |_) | | | | |/ _ \ | | / _ \   ")
#     print ("  | |__| |_| |  _ <  | |_| / ___ \| |/ ___ \  ")
#     print ("  |_____\___/|_| \_\ |____/_/   \_\_/_/   \_\ ")
#     print ("")
#     print ("##############################################")
#     print ("")

# def download_url(url, save_path, chunk_size=128):
#     r = requests.get(url, stream=True)
#     with open(save_path, 'wb') as fd:
#         print ("OPA %s" % (fd))
#         # for chunk in r.iter_content(chunk_size=chunk_size):
#             # fd.write(chunk)

# # Start functions
# init()
# print ("download_url...")
# download_url("https://dd.b.pvp.net/latest/core-pt_br.zip", cwd+ "/hacks/data/")

# # import zipfile
# # with zipfile.ZipFile(path_to_zip_file, 'r') as zip_ref:
# #     zip_ref.extractall(directory_to_extract_to)