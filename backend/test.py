import json
import requests
import xmltodict
airport="OSL"
response = requests.get(f"https://asrv.avinor.no/XmlFeed/v1.0?TimeFrom=1&TimeTo=7&airport={airport}&direction=D&lastUpdate=2024-08-08T09:30:00Z")
response_dict = xmltodict.parse(response.text)
result = json.dumps(response_dict, indent=4) #turns into json
print(result)

jsonreader = json.loads(result)
flights = jsonreader['airport']['flights']['flight']
print(flights)